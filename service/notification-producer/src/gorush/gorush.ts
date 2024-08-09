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
    const url = config.GO_RUSH_URL ?? "http://srv2-osaka:8088"
    const body = JSON.stringify({
      notifications: messages.map((message) => {
        if (message.type === "MulticastMessage") {
          return {
            ...message.message,
            title: message.message.notification?.title,
            body: message.message.notification?.body,
            android:
              message.message.android !== undefined
                ? {
                    ...message.message.android,
                    notification: message.message.android.notification
                      ? {
                          ...message.message.android.notification,
                          color: "#0000FF",
                        }
                      : undefined,
                  }
                : undefined,
            platform: 2,
          }
        } else if (message.type === "TopicMessage") {
          return {
            ...message.message,
            title: message.message.notification?.title,
            body: message.message.notification?.body,
            android:
              message.message.android !== undefined
                ? {
                    ...message.message.android,
                    notification: message.message.android.notification
                      ? {
                          ...message.message.android.notification,
                          color: "#0000FF",
                        }
                      : undefined,
                  }
                : undefined,
            platform: 2,
          }
        }
      }),
    }).replaceAll("channelId", "channel_id")
    console.log(body)
    const response = await fetch(url + "/api/push", {
      method: "POST",
      body: body,
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
