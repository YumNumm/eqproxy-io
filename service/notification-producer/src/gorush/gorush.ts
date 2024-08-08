import {
  Message,
  MulticastMessage,
  TopicMessage,
} from "firebase-admin/lib/messaging/messaging-api"
import { config } from "../config/config"

export class GoRush {
  constructor() {}

  async send(messages: GoRushMessage[]): Promise<any[]> {
    if (messages.length === 0) {
      console.log("No messages to send")
      return []
    }
    const chunked = chunk(messages, 400)
    const results = await Promise.all(
      chunked.map((chunk) => {
        return this._sendChunk(chunk)
      })
    )
    return results
  }

  async _sendChunk(messages: GoRushMessage[]): Promise<any> {
    const url = config.GO_RUSH_URL ?? "http://gorush:8088"
    const response = await fetch(url + "/api/push", {
      method: "POST",
      body: JSON.stringify(
        camelToSnake(
          JSON.parse(
            JSON.stringify({
              notifications: messages.map((message) => {
                if (message.type === "MulticastMessage") {
                  return {
                    ...message.message,
                    title: message.message.notification?.title,
                    body: message.message.notification?.body,
                    platform: 2,
                  }
                } else if (message.type === "TopicMessage") {
                  return {
                    ...message.message,
                    title: message.message.notification?.title,
                    body: message.message.notification?.body,
                    platform: 2,
                  }
                }
              }),
            })
          )
        )
      ),
    })
    const json = await response.json()
    if (!response.ok) {
      console.error("Failed to send message")
      console.error(JSON.stringify(json, null, 2))
      return
    }
    console.log(JSON.stringify(json, null, 2))
    return json
  }
}

export const chunk = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  )
}

export type GoRushMessage =
  | {
      type: "MulticastMessage"
      message: MulticastMessage
    }
  | {
      type: "TopicMessage"
      message: TopicMessage
    }

// ObjectもしくはObject[] を受け取り、snake_caseに変換したObjectもしくはObject[]を返す
const camelToSnake = (json: any): any => {
  if (!json) {
    throw new Error("json is null")
  }

  if (typeof json === "string") {
    return json.replace(/([A-Z])/g, "_$1").toLowerCase()
  }

  if (typeof json !== "object") {
    throw new Error("json is not object")
  }

  if (Array.isArray(json)) {
    return json.map((v) => camelToSnake(v))
  }

  const output = {}
  Object.keys(json).forEach((k) => {
    const value = json[k]
    const newKey = camelToSnake(k)
    output[newKey] = camelToSnake(value)
  })

  return output
}
