import * as admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import { config } from "../config/config";

class FcmService {
  async init() {
    await admin.initializeApp({
      credential: applicationDefault(),
    });
  }

  async send(messages: admin.messaging.Message[]) {
    // chunk 500
    const start = performance.now();
    const chunked = chunk(messages, 500);
    const results = await Promise.all(
      chunked.map((chunk) => this._sendChunk(chunk))
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
    return results;
  }

  async _sendChunk(messages: admin.messaging.Message[]) {
    const isDryRun = config.FCM_DRY_RUN;

    const start = performance.now();
    const result = await admin.messaging().sendEach(messages, isDryRun);
    const end = performance.now();
    const success = result.responses.filter((r) => r.success).length;
    const failure = result.responses.filter((r) => !r.success).length;
    console.log(
      `[FCM] send time: ${messages.length} messages, ${end - start}ms, ${success} success, ${failure} failure`
    );
    return result;
  }
}

export const fcmService = new FcmService();

export const chunk = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  );
};
