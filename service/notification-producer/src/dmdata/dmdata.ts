import * as zlib from "node:zlib";
import type { APITypes } from "@dmdata/api-types";
import type {
  EarthquakeInformation,
  EarthquakeNankai,
  EewInformation,
  TelegramJSONMain,
} from "@dmdata/telegram-json-types";
import { Message } from "firebase-admin/lib/messaging/messaging-api";
import { WebSocket } from "ws";
import { config } from "../config/config";
import { notificationService } from "../notification/notification_service";
import { fcmMessageGenerator } from "./fcm_message_generator";
import { messageGenerator } from "./message_generator";
import type { Message as GenMessage } from "./message_generator";
import { fcmService } from "../fcm/fcm_service";
import type { messaging } from "firebase-admin";

class DmdataService {
  async start() {
    const url = new URL(config.DMDATA_PROXY_URL);
    const ws = new WebSocket(url);
    ws.onopen = () => {
      console.log(`Connected to DMDATA Proxy: ${url}`);
    };
    ws.onclose = () => {
      console.log(`Disconnected from DMDATA Proxy: ${url}`);
      process.exit(1);
    };

    ws.onmessage = async (event) => {
      const data = json2object<APITypes.WebSocketV2.Event.Data>(
        event.data.toString()
      );
      if (data === null) {
        console.error("Failed to parse DMDATA data");
        return;
      }
      if (
        data.compression === "gzip" &&
        data.format === "json" &&
        data.encoding === "base64"
      ) {
        // Base64デコード
        const buffer = Buffer.from(data.body, "base64");
        // Gzip解凍
        const unzipped = zlib.gunzipSync(new Uint8Array(buffer));
        // UTF-8文字列に変換
        const telegram = JSON.parse(
          unzipped.toString("utf-8")
        ) as TelegramJSONMain;
        // 通常報以外をスキップ
        if (telegram.status !== "通常") return;
        if (data.classification === "eew.forecast") {
          const body = telegram as EewInformation.Latest.Main;

          if (body.type !== "緊急地震速報（地震動予報）") {
            console.log(`${body.type} is not supported`);
            return;
          }
          const messageBody = messageGenerator.handleEew(body);
          if (messageBody === null) {
            return;
          }
          const message = fcmMessageGenerator.handleEewForecast(
            messageBody,
            body
          );
          if (message) {
            fcmService.send(message);
          }

          // SQL Service
          const messages = await notificationService.handleEewForecast(
            messageBody,
            body
          );
          console.log(messages);
          if (messages) {
            fcmService.send(messages);
            return;
          }
        } else if (data.classification === "telegram.earthquake") {
          const body = telegram as
            | EarthquakeInformation.Latest.Main
            | EarthquakeNankai.Latest.Main;
          let message: messaging.Message[];
          if (body.infoType !== "発表") {
            return;
          }
          let genMessage: GenMessage | undefined = undefined;
          switch (body.type) {
            case "震度速報":
            case "震源に関する情報":
            case "震源・震度に関する情報": {
              switch (body.type) {
                case "震度速報": {
                  genMessage = messageGenerator.handleVxse51(body);
                  break;
                }
                case "震源に関する情報": {
                  genMessage = messageGenerator.handleVxse52(body);
                  break;
                }
                case "震源・震度に関する情報": {
                  genMessage = messageGenerator.handleVxse53(body);
                  break;
                }
                default: {
                  const neverReached: never = body;
                  genMessage = neverReached;
                  break;
                }
              }
              message = fcmMessageGenerator.handleVxse5x(genMessage, body);
              break;
            }
            case "地震・津波に関するお知らせ": {
              message = fcmMessageGenerator.handleVzse40(body);
              break;
            }
            case "長周期地震動に関する観測情報": {
              message = fcmMessageGenerator.handleVxse62(body);
              break;
            }
            case "南海トラフ地震臨時情報": {
              message = [];
              genMessage = messageGenerator.handleNankai(body);
              break;
            }
            case "南海トラフ地震関連解説情報": {
              message = [];
              break;
            }
            default: {
              const neverReached: never = body;
              message = neverReached;
            }
          }
          if (message.length !== 0) {
            fcmService.send(message);
          }

          if (
            body.type === "震度速報" ||
            body.type === "震源に関する情報" ||
            body.type === "震源・震度に関する情報"
          ) {
            if (genMessage === undefined) {
              return;
            }
            const messages = await notificationService.handleVxse5x(
              genMessage,
              body
            );
            if (messages) {
              fcmService.send(messages);
            }
            return;
          }
          if (
            body.type === "南海トラフ地震臨時情報" ||
            body.type === "南海トラフ地震関連解説情報"
          ) {
            if (genMessage === undefined) {
              return;
            }
            const messages = await notificationService.handleNankai(
              genMessage,
              body
            );
            if (messages) {
              fcmService.send(messages);
            }
            return;
          }
          if (
            body.type === "長周期地震動に関する観測情報" ||
            body.type === "地震・津波に関するお知らせ"
          ) {
          }
          // SQL Service
        }
      }
    };
  }
}

function json2object<T>(data: string | ArrayBuffer) {
  if (data instanceof ArrayBuffer) {
    try {
      return JSON.parse(new TextDecoder().decode(data)) as T;
    } catch {
      return null;
    }
  }
  try {
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
}

export const dmdataService = new DmdataService();
