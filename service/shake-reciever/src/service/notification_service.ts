import { debugTokens, logger } from "../.."
import type { GoRush, GoRushMessage } from "../gorush/gorush"
import type { KyoshinEventTelegram } from "../models/kyoshin_event"

export class NotificationService {
  constructor() {}

  private cache: {
    [key: string]: KyoshinEventTelegram
  } = {}

  handleShakeDetection(
    data: KyoshinEventTelegram
  ): GoRushMessage[] | undefined {
    const cachedEvent = this.cache[data.id]
    if (cachedEvent) {
      if (
        convertIntensityToInt(cachedEvent.maxIntensity) >=
        convertIntensityToInt(data.maxIntensity)
      ) {
        logger.debug(
          `最大震度が同じor下がったためスキップします: ${cachedEvent.maxIntensity} -> ${data.maxIntensity}`
        )
        return
      }
    }
    this.cache[data.id] = data

    const maxIntensityRegion = data.regions.filter(
      (region) => region.maxIntensity === data.maxIntensity
    )
    const maxIntensityRegionName =
      maxIntensityRegion.length === 1
        ? maxIntensityRegion[0].name
        : `${maxIntensityRegion[0].name} など`
    const maxIntensityTitle = convertIntensityTostring(data.maxIntensity)

    const request: GoRushMessage[] = [
      {
        type: "MulticastMessage",
        message: {
          tokens: debugTokens,
          notification: {
            title: `揺れを検知しました`,
            body:
              `震度${maxIntensityTitle}相当を${maxIntensityRegionName}で検出しました\n` +
              `観測点数: ${data.pointCount}\n` +
              `検出時刻: ${data.createdAt.slice(0, 16)}頃\n` +
              `eventId: ${data.id}\n`,
          },
          apns: {
            headers: {
              "apns-priority": "10",
              "apns-expiration": "0",
              "apns-push-type": "alert",
            },
            payload: {
              aps: {
                mutableContent: true,
                sound: "default",
                threadId: data.id,
                contentAvailable: true,
                badge: 0,
                "relevance-score": 1,
                "interruption-level": "time-sensitive",
              },
            },
          },
          android: {
            collapseKey: data.id,

            notification: {
              priority: "high",
              icon: "@mipmap/ic_launcher_foreground",
              imageUrl: undefined,
            },
          },
        },
      },
    ]

    return request
  }

  onEventAllCleared(): void {
    this.cache = {}
  }
}

function convertIntensityToInt(
  intensity: KyoshinEventTelegram["maxIntensity"]
): number {
  switch (intensity) {
    case "Int0":
      return 0
    case "Int1":
      return 10
    case "Int2":
      return 20
    case "Int3":
      return 30
    case "Int4":
      return 40
    case "Int5Lower":
      return 50
    case "Int5Upper":
      return 50
    case "Int6Lower":
      return 60
    case "Int6Upper":
      return 60
    case "Int7":
      return 70
    case "Error":
      return -1
    case "Unknown":
      return -1
    default: {
      const exhaustive: never = intensity
      return exhaustive
    }
  }
}

function convertIntensityTostring(
  intensity: KyoshinEventTelegram["maxIntensity"]
): string {
  switch (intensity) {
    case "Int0":
      return "0"
    case "Int1":
      return "1"
    case "Int2":
      return "2"
    case "Int3":
      return "3"
    case "Int4":
      return "4"
    case "Int5Lower":
      return "5弱"
    case "Int5Upper":
      return "5強"
    case "Int6Lower":
      return "6弱"
    case "Int6Upper":
      return "6強"
    case "Int7":
      return "7"
    case "Error":
      return "エラー"
    case "Unknown":
      return "不明"
    default: {
      const exhaustive: never = intensity
      return exhaustive
    }
  }
}
