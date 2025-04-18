import * as admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import { config } from "../config/config";
import fs from "node:fs";
import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";
import path from "node:path";
import os from "node:os";

// Workerスレッド内の処理
if (!isMainThread) {
  const { messages, isDryRun } = workerData as {
    messages: admin.messaging.Message[];
    isDryRun: boolean;
  };

  (async () => {
    try {
      // Workerの初期化
      if (!admin.apps.length) {
        await admin.initializeApp({
          credential: applicationDefault(),
        });
      }

      // メッセージ送信処理
      const start = performance.now();
      const result = await admin.messaging().sendEach(messages, isDryRun);
      const end = performance.now();

      const success = result.responses.filter((r) => r.success).length;
      const failure = result.responses.filter((r) => !r.success).length;
      console.log(
        `[FCM Worker] send time: ${messages.length} messages, ${
          end - start
        }ms, ${success} success, ${failure} failure`
      );

      // 結果を親スレッドに返す
      parentPort?.postMessage({ type: "result", data: result });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      parentPort?.postMessage({ type: "error", data: errorMessage });
    }
  })();

  // Workerの準備完了メッセージを待ち受ける
  parentPort?.on("message", (message: { type: string }) => {
    if (message.type === "ready") {
      // 準備完了を通知
      parentPort?.postMessage({ type: "ready" });
    }
  });
}

// WorkerPoolクラスの実装
class WorkerPool {
  private workers: Worker[] = [];
  private queue: ((worker: Worker) => void)[] = [];
  private isInitialized = false;
  private maxWorkers: number;

  constructor(workerScript: string, maxWorkers: number = os.cpus().length) {
    this.maxWorkers = maxWorkers;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    console.log(
      `[FCM] Initializing worker pool with ${this.maxWorkers} workers`
    );

    // 指定された数のワーカーを作成
    for (let i = 0; i < this.maxWorkers; i++) {
      const worker = new Worker(__filename);

      // ワーカーが準備完了を通知してきたらプールに追加
      worker.on("message", (message: { type: string }) => {
        if (message.type === "ready") {
          this.addWorker(worker);
        }
      });

      // 準備完了を要求
      worker.postMessage({ type: "ready" });
    }

    // すべてのワーカーが初期化されるのを待つ
    await new Promise<void>((resolve) => {
      const checkInterval = setInterval(() => {
        if (this.workers.length >= this.maxWorkers) {
          clearInterval(checkInterval);
          this.isInitialized = true;
          console.log(
            `[FCM] Worker pool initialized with ${this.workers.length} workers`
          );
          resolve();
        }
      }, 100);
    });
  }

  // 利用可能なワーカーを取得
  private getWorker(): Promise<Worker> {
    return new Promise((resolve) => {
      const worker = this.workers.pop();
      if (worker) {
        resolve(worker);
      } else {
        // 利用可能なワーカーがない場合はキューに追加
        this.queue.push(resolve as (worker: Worker) => void);
      }
    });
  }

  // ワーカーをプールに戻す
  private addWorker(worker: Worker): void {
    const callback = this.queue.shift();
    if (callback) {
      // キューにタスクが待っている場合は直接渡す
      callback(worker);
    } else {
      // そうでなければプールに戻す
      this.workers.push(worker);
    }
  }

  // タスクを実行
  async run<T, R>(data: T): Promise<R> {
    const worker = await this.getWorker();

    return new Promise<R>((resolve, reject) => {
      const onMessage = (message: { type: string; data: R | string }) => {
        if (message.type === "result") {
          cleanup();
          this.addWorker(worker);
          resolve(message.data as R);
        } else if (message.type === "error") {
          cleanup();
          this.addWorker(worker);
          reject(new Error(message.data as string));
        }
      };

      const onError = (err: Error) => {
        cleanup();
        this.addWorker(worker);
        reject(err);
      };

      const onExit = (code: number) => {
        if (code !== 0) {
          cleanup();
          this.addWorker(worker);
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      };

      // クリーンアップ関数
      const cleanup = () => {
        worker.removeListener("message", onMessage);
        worker.removeListener("error", onError);
        worker.removeListener("exit", onExit);
      };

      // イベントリスナーを設定
      worker.on("message", onMessage);
      worker.on("error", onError);
      worker.on("exit", onExit);

      // タスクデータを送信
      worker.postMessage(data);
    });
  }

  // プールをクリーンアップ
  async terminate(): Promise<void> {
    console.log(
      `[FCM] Terminating worker pool with ${this.workers.length} workers`
    );
    await Promise.all(this.workers.map((worker) => worker.terminate()));
    this.workers = [];
    this.queue = [];
    this.isInitialized = false;
  }
}

class FcmService {
  private workerPool: WorkerPool | null = null;

  async init() {
    if (isMainThread) {
      // メインスレッドのみFCMとWorkerPoolを初期化
      await admin.initializeApp({
        credential: applicationDefault(),
      });

      // Worker Poolを初期化
      const cpuCount = os.cpus().length;
      const workerCount = Math.max(1, cpuCount - 1); // 1CPUは少なくとも残しておく
      this.workerPool = new WorkerPool(__filename, workerCount);
      await this.workerPool.initialize();
    }
  }

  async send(messages: admin.messaging.Message[]) {
    console.log(`[FCM] sending ${messages.length} messages`);
    // chunk 500
    const start = performance.now();
    const chunked = chunk(messages, 500);

    // Worker Poolを使用して並列処理
    if (!this.workerPool) {
      throw new Error("Worker Pool has not been initialized");
    }

    const workerPool = this.workerPool;
    const results = await Promise.all(
      chunked.map((chunkMessages) =>
        workerPool.run<
          { messages: admin.messaging.Message[]; isDryRun: boolean },
          admin.messaging.BatchResponse
        >({
          messages: chunkMessages,
          isDryRun: config.FCM_DRY_RUN,
        })
      )
    );

    const end = performance.now();
    console.log(
      `[FCM] send time: ${messages.length} messages, ${end - start}ms`
    );

    const success = results.reduce((acc, result) => {
      return acc + result.responses.filter((r) => r.success).length;
    }, 0);
    const failure = results.reduce((acc, result) => {
      return acc + result.responses.filter((r) => !r.success).length;
    }, 0);
    console.log(`[FCM] success: ${success}, failure: ${failure}`);

    // ファイルに書き出し
    fs.writeFileSync(
      `/log/fcm_result_${Date.now()}.json`,
      JSON.stringify(results, null, 2)
    );
    return results;
  }

  // バックアップとして直接実行する方法も残しておく
  async _sendChunk(messages: admin.messaging.Message[]) {
    const isDryRun = config.FCM_DRY_RUN;

    const start = performance.now();
    const result = await admin.messaging().sendEach(messages, isDryRun);
    const end = performance.now();
    const success = result.responses.filter((r) => r.success).length;
    const failure = result.responses.filter((r) => !r.success).length;
    console.log(
      `[FCM] send time: ${messages.length} messages, ${
        end - start
      }ms, ${success} success, ${failure} failure`
    );
    return result;
  }

  // サービス終了時に呼び出す
  async shutdown() {
    if (this.workerPool) {
      await this.workerPool.terminate();
      this.workerPool = null;
    }
  }
}

export const fcmService = new FcmService();

export const chunk = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  );
};
