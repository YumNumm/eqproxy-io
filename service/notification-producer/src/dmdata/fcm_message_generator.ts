import {
  EarthquakeInformation,
  EarthquakeNankai,
  EewInformation,
} from "@dmdata/telegram-json-types"
import { Message } from "firebase-admin/lib/messaging/messaging-api"
import { messageGenerator, Message as GenMessage } from "./message_generator"
import { GoRush, GoRushMessage } from "../gorush/gorush"

class FcmMessageGenerator {
  constructor() {}

  handleVxse5x(
    message: GenMessage,
    telegram:
      | EarthquakeInformation.Latest.PublicVXSE51
      | EarthquakeInformation.Latest.PublicVXSE52
      | EarthquakeInformation.Latest.PublicVXSE53
  ): GoRushMessage[] {
    const messages: GoRushMessage[] = []
    const data: MessageData = {
      // page: `/earthquake-history-details//${telegram.eventId}`,
    }
    for (const topic of message.topics) {
      messages.push({
        type: "TopicMessage",
        message: {
          topic: topic,
          notification: {
            title: message.title.toHalfWidth(),
            body: message.body.toHalfWidth(),
          },
          data: data,
          apns: {
            payload: {
              aps: {
                mutableContent: true,
                sound: "default",
                threadId: telegram.eventId,
                contentAvailable: true,
                badge: 0,
                alert: {
                  subtitle: message.subtitle.toHalfWidth(),
                },
                "relevance-score": 1,
                "interruption-level": "time-sensitive",
              },
            },
          },
          android: {
            collapseKey: telegram.eventId,

            notification: {
              channelId:
                telegram.infoKind === "震度速報"
                  ? NotificationChannel.VXSE51
                  : telegram.infoKind === "震源速報"
                    ? NotificationChannel.VXSE52
                    : NotificationChannel.VXSE53,
              icon: "@mipmap/ic_launcher_foreground",
              imageUrl: undefined,
              body: generateBodyForAndroid(message),
            },
          },
        },
      })
    }
    return messages
  }

  handleVxse62(
    telegram: EarthquakeInformation.Latest.PublicVXSE62
  ): GoRushMessage[] {
    const message = messageGenerator.handleVxse62(telegram)
    const messages: GoRushMessage[] = []
    const data: MessageData = {
      // page: `/earthquake-history-details//${telegram.eventId}`,
    }
    for (const topic of message.topics) {
      messages.push({
        type: "TopicMessage",
        message: {
          topic: topic,
          notification: {
            title: message.title.toHalfWidth(),
            body: message.body.toHalfWidth(),
          },
          data: data,
          apns: {
            payload: {
              aps: {
                mutableContent: true,
                sound: "default",
                threadId: telegram.eventId,
                contentAvailable: true,
                badge: 0,
                alert: {
                  subtitle: message.subtitle.toHalfWidth(),
                },
                "relevance-score": 1,
                "interruption-level": "time-sensitive",
              },
            },
          },
          android: {
            collapseKey: telegram.eventId,

            notification: {
              channelId: NotificationChannel.VXSE62,
              icon: "@mipmap/ic_launcher_foreground",
              imageUrl: undefined,
              body: generateBodyForAndroid(message),
            },
          },
        },
      })
    }
    return messages
  }

  handleVzse40(
    telegram: EarthquakeInformation.Latest.PublicVZSE40
  ): GoRushMessage[] {
    const message = messageGenerator.handleVzse40(telegram)
    const messages: GoRushMessage[] = []
    const data: MessageData = {
      // TODO(YumNumm): 通知のリンク先を変更する
      // page: `/earthquake-history-details/${telegram.eventId}`,
    }
    for (const topic of message.topics) {
      messages.push({
        type: "TopicMessage",
        message: {
          topic: topic,
          notification: {
            title: message.title.toHalfWidth(),
            body: message.body.toHalfWidth(),
          },
          data: data,
          apns: {
            payload: {
              aps: {
                mutableContent: true,
                sound: "default",
                threadId: telegram.eventId,
                contentAvailable: true,
                badge: 0,
                alert: {
                  subtitle: message.subtitle.toHalfWidth(),
                },
                "relevance-score": 1,
                "interruption-level": "time-sensitive",
              },
            },
          },
          android: {
            collapseKey: telegram.eventId,

            notification: {
              channelId: NotificationChannel.VZSE40,
              icon: "@mipmap/ic_launcher_foreground",
              imageUrl: undefined,
              body: generateBodyForAndroid(message),
            },
          },
        },
      })
    }
    return messages
  }

  handleEewForecast(
    message:
      | (GenMessage & {
          isOnePointEew?: boolean | undefined
          isWarning?: boolean | undefined
        })
      | null,
    telegram: EewInformation.Latest.PublicCommon | EewInformation.Latest.Cancel
  ): GoRushMessage[] | null {
    if (message === null) {
      return null
    }
    const messages: GoRushMessage[] = []
    const data: MessageData = {
      // page: `/earthquake-history-details//${telegram.eventId}`,
    }
    for (const topic of message.topics) {
      messages.push({
        type: "TopicMessage",
        message: {
          topic: topic,
          notification: {
            title: message.title.toHalfWidth(),
            body: message.body.toHalfWidth(),
          },
          data: data,
          apns: {
            payload: {
              aps: {
                mutableContent: true,
                sound: "default",
                threadId: telegram.eventId,
                contentAvailable: true,
                badge: 0,
                alert: {
                  subtitle: message.subtitle.toHalfWidth(),
                },
                "relevance-score": 1,
                "interruption-level": "time-sensitive",
              },
            },
          },
          android: {
            collapseKey: telegram.eventId,

            notification: {
              priority: message?.isWarning ? "max" : "high",
              body: generateBodyForAndroid(message),
              channelId: message?.isOnePointEew
                ? NotificationChannel.EEW_LOW_ACCURACY
                : message?.isWarning
                  ? NotificationChannel.EEW_WARNING
                  : NotificationChannel.EEW_FORECAST,
              icon: "@mipmap/ic_launcher_foreground",
              imageUrl: undefined,
            },
          },
        },
      })
    }
    return messages
  }
}

type MessageData = {
  page?: string
}

export function generateBodyForAndroid(message: GenMessage): string {
  if (message.subtitle === "") {
    return message.body
  }
  return message.subtitle + "\n" + message.body
}

export enum NotificationChannel {
  VXSE51 = "VXSE51",
  VXSE52 = "VXSE52",
  VXSE53 = "VXSE53",
  VXSE62 = "VXSE62",
  VZSE40 = "VZSE40",
  EEW_FORECAST = "eew_forecast",
  EEW_LOW_ACCURACY = "eew_low_accuracy",
  EEW_WARNING = "eew_warning",
  VYSE50 = "VYSE50",
  VYSE51 = "VYSE51",
}

export const fcmMessageGenerator = new FcmMessageGenerator()
