import {
  EarthquakeInformation,
  EewInformation,
} from "@dmdata/telegram-json-types"
import { JmaIntensity, SqlService, sqlService } from "../sql/sql_service"
import { Message } from "firebase-admin/lib/messaging/messaging-api"
import {
  NotificationPayload,
  NotificationPayload_EewRegionIntensity,
  NotificationPayload_Type,
  JmaIntensity as NotificationPayload_JmaIntensity,
} from "@eqproxy-io/notification-data"
import {
  messageGenerator,
  Message as GenMessage,
} from "../dmdata/message_generator"
import {
  NotificationChannel,
  generateBodyForAndroid,
} from "../dmdata/fcm_message_generator"
import { Timestamp } from "@bufbuild/protobuf"
import { gzipSync } from "zlib"

export class NotifcationService {
  constructor() {}
  private sqlService: SqlService = sqlService

  async handleEewForecast(
    message: GenMessage & {
      isOnePointEew?: boolean | undefined
      isWarning?: boolean | undefined
    },
    telegram: EewInformation.Latest.PublicCommon | EewInformation.Latest.Cancel
  ): Promise<Message[] | null> {
    if (telegram.type !== "緊急地震速報（地震動予報）") {
      console.log(`type is not 緊急地震速報（地震動予報）: ${telegram.type}`)
      return null
    }
    if (telegram.infoType === "発表") {
      const regions: {
        region_id: number
        min_jma_intensity: JmaIntensity
      }[] =
        telegram.body.intensity?.regions
          .map((region) => {
            if (
              region.forecastMaxInt.from === "0" ||
              region.forecastMaxInt.from === "不明"
            ) {
              return null
            }
            return {
              region_id: Number(region.code),
              min_jma_intensity: convertJma(region.forecastMaxInt.from),
            }
          })
          .flatMap((f) => (f ? [f] : [])) ?? []
      regions.push({
        min_jma_intensity: JmaIntensity.Int0,
        region_id: 0,
      })

      const payload = new NotificationPayload({
        eventId: telegram.eventId,
        information: {
          case: "eewInformation",
          value: {
            hypoInformation: {
              code: Number(telegram.body.earthquake.hypocenter.code),
              depth: Number(telegram.body.earthquake.hypocenter.depth.value),
              latitude: Number(
                telegram.body.earthquake?.hypocenter?.coordinate.latitude?.value
              ),
              longitude: Number(
                telegram.body.earthquake?.hypocenter?.coordinate.longitude
                  ?.value
              ),
              magnitude: Number(telegram.body.earthquake.magnitude.value),
              name: telegram.body.earthquake.hypocenter.name,
            },
            maxIntensity: convertJmaNotification(
              telegram.body.intensity?.forecastMaxInt.from ?? "不明"
            ),
            regionIntensities: telegram.body.intensity?.regions.map(
              (region) => {
                const m: NotificationPayload_EewRegionIntensity =
                  new NotificationPayload_EewRegionIntensity()
                m.code = region.code
                m.intensity = convertJmaNotification(region.forecastMaxInt.from)
                m.arrivalTime = region.arrivalTime
                  ? Timestamp.fromDate(new Date(region.arrivalTime))
                  : undefined
                return m
              }
            ),
          },
        },
      })

      const targetUsers = await this.sqlService.fetchEew(regions)
      return targetUsers.map((user) => {
        return {
          token: user.fcm_token,
          notification: {
            title: message.title.toHalfWidth(),
            body: message.body.toHalfWidth(),
          },
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
              payload: gzipSync(payload.toBinary()).toString("base64"),
            },
          },
          android: {
            collapseKey: telegram.eventId,
            priority: "high",
            notification: {
              priority: message?.isWarning ? "max" : "high",
              body: generateBodyForAndroid(message),
              visibility: "public",
              channelId: message?.isOnePointEew
                ? NotificationChannel.EEW_LOW_ACCURACY
                : message?.isWarning
                  ? NotificationChannel.EEW_WARNING
                  : NotificationChannel.EEW_FORECAST,
              icon: "@mipmap/ic_launcher_foreground",
              imageUrl: undefined,
            },
            ttl: 0,
          },
        }
      })
    }
    return null
  }

  async handleVxse5x(
    message: GenMessage,
    telegram:
      | EarthquakeInformation.Latest.PublicVXSE51
      | EarthquakeInformation.Latest.PublicVXSE52
      | EarthquakeInformation.Latest.PublicVXSE53
  ): Promise<Message[] | undefined> {
    if (message.regions == undefined) {
      return
    }
    const regions: {
      region_id: number
      min_jma_intensity: JmaIntensity
    }[] = message.regions
      .filter((r) => r.maxInt != undefined)
      .map((region) => {
        return {
          min_jma_intensity: convertJma(region.maxInt!),
          region_id: Number(region.code),
        }
      })

    if (message.maxIntensity !== undefined) {
      regions.push({
        min_jma_intensity: convertJma(message.maxIntensity),
        region_id: 0,
      })
    }
    const payload = new NotificationPayload({
      eventId: telegram.eventId,
      type: NotificationPayload_Type.EARTHQUAKE,
      information: {
        case: "earthquakeInformation",
        value: {
          hypoInformation:
            telegram.type === "震度速報"
              ? undefined
              : {
                  code: Number(telegram.body.earthquake.hypocenter.code),
                  depth: Number(
                    telegram.body.earthquake.hypocenter.depth.value
                  ),
                  latitude: Number(
                    telegram.body.earthquake?.hypocenter.coordinate.latitude
                      ?.value
                  ),
                  longitude: Number(
                    telegram.body.earthquake?.hypocenter.coordinate.longitude
                      ?.value
                  ),
                  magnitude: Number(telegram.body.earthquake.magnitude.value),
                  name: telegram.body.earthquake.hypocenter.name,
                },
          maxIntensity:
            message.maxIntensity !== undefined
              ? convertJmaNotification(message.maxIntensity)
              : undefined,
          regionIntensities: message.regions
            .filter((t) => t.maxInt != undefined)
            .map((region) => {
              const m: NotificationPayload_EewRegionIntensity =
                new NotificationPayload_EewRegionIntensity()
              m.code = region.code
              m.intensity = convertJmaNotification(region.maxInt!)
              return m
            }),
        },
      },
    })

    const targetDevices = await this.sqlService.fetchEarthquake(regions)

    return targetDevices.map((device) => {
      return {
        token: device.fcm_token,
        notification: {
          title: message.title.toHalfWidth(),
          body: message.body.toHalfWidth(),
        },
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
            payload: gzipSync(payload.toBinary()).toString("base64"),
          },
        },
        android: {
          collapseKey: telegram.eventId,
          priority: "high",
          notification: {
            priority: "high",
            visibility: "public",
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
      }
    })
  }
}

export const notificationService = new NotifcationService()

function convertJma(
  f: "1" | "2" | "3" | "4" | "5-" | "5+" | "6-" | "6+" | "7"
): JmaIntensity {
  switch (f) {
    case "1":
      return JmaIntensity.Int1
    case "2":
      return JmaIntensity.Int2
    case "3":
      return JmaIntensity.Int3
    case "4":
      return JmaIntensity.Int4
    case "5-":
      return JmaIntensity.Int5Minus
    case "5+":
      return JmaIntensity.Int5Plus
    case "6-":
      return JmaIntensity.Int6Minus
    case "6+":
      return JmaIntensity.Int6Plus
    case "7":
      return JmaIntensity.Int7
  }
}

export function convertJmaNotification(
  f: "0" | "1" | "2" | "3" | "4" | "5-" | "5+" | "6-" | "6+" | "7" | "不明"
): NotificationPayload_JmaIntensity {
  switch (f) {
    case "0":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_0
    case "1":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_1
    case "2":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_2
    case "3":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_3
    case "4":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_4
    case "5-":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_5_MINUS
    case "5+":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_5_PLUS
    case "6-":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_6_MINUS
    case "6+":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_6_PLUS
    case "7":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_7
    case "不明":
      return NotificationPayload_JmaIntensity.JMA_INTENSITY_UNSPECIFIED
  }
}
