import { APITypes } from "@dmdata/api-types"
import { config } from "../config/config"
import * as zlib from "zlib"
import {
  EarthquakeInformation,
  EewInformation,
  TelegramJSONMain,
} from "@dmdata/telegram-json-types"
import { rabbitService } from ".."
import { fcmMessageGenerator } from "./fcm_message_generator"
import { Message } from "firebase-admin/lib/messaging/messaging-api"

class DmdataService {
  url = new URL(config.DMDATA_PROXY_URL)
  ws = new WebSocket(this.url)

  async start() {
    this.ws.onopen = () => {
      console.log(`Connected to DMDATA Proxy: ${this.url}`)
    }
    this.ws.onclose = () => {
      console.log(`Disconnected from DMDATA Proxy: ${this.url}`)
      process.exit(1)
    }

    this.ws.onmessage = (event) => {
      const data = json2object<APITypes.WebSocketV2.Event.Data>(
        event.data.toString()
      )
      if (data === null) {
        console.error("Failed to parse DMDATA data")
        return
      }
      if (
        data.compression == "gzip" &&
        data.format == "json" &&
        data.encoding == "base64"
      ) {
        const telegram = JSON.parse(
          zlib.gunzipSync(Buffer.from(data.body, "base64")).toString("utf-8")
        ) as TelegramJSONMain
        // 通常報以外をスキップ
        if (telegram.status != "通常") return
        if (data.classification == "eew.forecast") {
          const body = telegram as EewInformation.Latest.Main
          if (
            body.type === "リアルタイム震度" ||
            body.type === "緊急地震速報配信テスト"
          ) {
            return
          }
          const message = fcmMessageGenerator.handleEewForecast(body)
          if (message) {
            rabbitService.send(message)
          }
        } else if (data.classification == "telegram.earthquake") {
          const body = telegram as EarthquakeInformation.Latest.Main
          var message: Message[]
          if (body.infoType !== "発表") {
            return
          }
          switch (body.type) {
            case "震度速報":
            case "震源に関する情報":
            case "震源・震度に関する情報": {
              message = fcmMessageGenerator.handleVxse5x(body)
              break
            }
            case "地震・津波に関するお知らせ": {
              message = fcmMessageGenerator.handleVzse40(body)
              break
            }
            case "長周期地震動に関する観測情報": {
              message = fcmMessageGenerator.handleVxse62(body)
              break
            }
          }
          if (message) {
            rabbitService.send(message)
          }
        }
      }
    }
  }
}

function json2object<T>(data: string | ArrayBuffer) {
  if (data instanceof ArrayBuffer) {
    data = new TextDecoder().decode(data)
  }
  try {
    return JSON.parse(data) as T
  } catch {
    return null
  }
}

export const dmdataService = new DmdataService()
