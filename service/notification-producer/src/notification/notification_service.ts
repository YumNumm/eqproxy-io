import type {
  EarthquakeInformation,
  EarthquakeNankai,
  EewInformation,
} from "@dmdata/telegram-json-types";
import type { messaging } from "firebase-admin";
import {
  NotificationChannel,
  generateBodyForAndroid,
} from "../dmdata/fcm_message_generator";
import type { Message as GenMessage } from "../dmdata/message_generator";
import { JmaIntensity, type SqlService, sqlService } from "../sql/sql_service";

export class NotifcationService {
  private sqlService: SqlService = sqlService;

  async handleEewForecast(
    message: GenMessage & {
      isOnePointEew?: boolean | undefined;
      isWarning?: boolean | undefined;
    },
    telegram: EewInformation.Latest.PublicCommon | EewInformation.Latest.Cancel
  ): Promise<messaging.Message[] | null> {
    console.log(`type: ${telegram.type}, ${Date()}`);
    if (telegram.type !== "緊急地震速報（地震動予報）") {
      console.log(`type is not 緊急地震速報（地震動予報）: ${telegram.type}`);
      return null;
    }
    if (telegram.infoType === "発表") {
      const regions: {
        region_id: number;
        min_jma_intensity: JmaIntensity;
      }[] =
        telegram.body.intensity?.regions
          .map((region) => {
            const intensity = getMaxForecastIntensity(region.forecastMaxInt);
            if (intensity === null) {
              return null;
            }
            return {
              region_id: Number(region.code),
              min_jma_intensity: intensity,
            };
          })
          .flatMap((f) => (f ? [f] : [])) ?? [];
      const maxIntensity = getMaxForecastIntensity(
        telegram.body.intensity?.forecastMaxInt
      );
      if (maxIntensity !== null) {
        regions.push({
          min_jma_intensity: maxIntensity,
          region_id: 0,
        });
      } else {
        regions.push({
          min_jma_intensity: JmaIntensity.Int0,
          region_id: 0,
        });
      }

      const start = performance.now();
      const targetDevices = await this.sqlService.fetchEew(regions);
      const end = performance.now();
      console.log(`fetchEew time: ${end - start}ms`);

      return targetDevices.map((user) => {
        return {
          token: user.fcm_token,

          notification: {
            title: message.title.toHalfWidth(),
            body: message.body.toHalfWidth(),
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
        } satisfies messaging.Message;
      });
    }
    return null;
  }

  async handleVxse5x(
    message: GenMessage,
    telegram:
      | EarthquakeInformation.Latest.PublicVXSE51
      | EarthquakeInformation.Latest.PublicVXSE52
      | EarthquakeInformation.Latest.PublicVXSE53
  ): Promise<messaging.Message[] | undefined> {
    if (message.regions === undefined) {
      console.log("regions is undefined");
      return;
    }
    const regions: {
      region_id: number;
      min_jma_intensity: JmaIntensity;
    }[] = message.regions
      .filter(
        (r) =>
          r.maxInt !== undefined && r.maxInt !== null && r.maxInt !== undefined
      )
      .map((region) => {
        return {
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          min_jma_intensity: convertJma(region.maxInt!),
          region_id: Number(region.code),
        };
      });

    if (message.maxIntensity !== undefined) {
      // すべての地震情報を受信するユーザ向けにregion_id: 0 を追加
      regions.push({
        min_jma_intensity: convertJma(message.maxIntensity),
        region_id: 0,
      });
    }
    const start = performance.now();
    const targetDevices = await this.sqlService.fetchEarthquake(regions);
    const end = performance.now();
    console.log(`fetchEarthquake time: ${end - start}ms`);

    return targetDevices.map((user) => {
      const data: FcmDataPayload = {
        // 画面遷移
        // route: `/earthquake-history-details/${telegram.eventId}`,
      };
      return {
        token: user.fcm_token,
        notification: {
          title: message.title.toHalfWidth(),
          body: message.body.toHalfWidth(),
        },
        data: data,
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
      } satisfies messaging.Message;
    });
  }

  async handleNankai(
    message: GenMessage,
    telegram: EarthquakeNankai.Latest.Main
  ): Promise<messaging.Message[] | undefined> {
    const targetDevices = await this.sqlService.fetchAllUsers();

    return targetDevices.map((device) => {
      return {
        token: device.fcm_token,
        notification: {
          title: message.title.toHalfWidth(),
          body: message.body.toHalfWidth(),
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
              threadId: telegram.eventId,
              contentAvailable: true,
              badge: 0,
              alert: {
                subtitle: message.subtitle.toHalfWidth(),
              },
              "relevance-score": 1,
            },
          },
        },
        android: {
          collapseKey: telegram.eventId,

          notification: {
            channelId:
              telegram.type === "南海トラフ地震臨時情報"
                ? NotificationChannel.VYSE50
                : NotificationChannel.VYSE51,
            icon: "@mipmap/ic_launcher_foreground",
            imageUrl: undefined,
            body: generateBodyForAndroid(message),
          },
        },
      } satisfies messaging.Message;
    });
  }
}

export const notificationService = new NotifcationService();

function convertJma(
  f: "1" | "2" | "3" | "4" | "5-" | "5+" | "6-" | "6+" | "7"
): JmaIntensity {
  switch (f) {
    case "1":
      return JmaIntensity.Int1;
    case "2":
      return JmaIntensity.Int2;
    case "3":
      return JmaIntensity.Int3;
    case "4":
      return JmaIntensity.Int4;
    case "5-":
      return JmaIntensity.Int5Minus;
    case "5+":
      return JmaIntensity.Int5Plus;
    case "6-":
      return JmaIntensity.Int6Minus;
    case "6+":
      return JmaIntensity.Int6Plus;
    case "7":
      return JmaIntensity.Int7;
  }
}

export function getMaxForecastIntensity(
  intensity: EewInformation.Latest.IntensityForecastMaxInt | undefined
): JmaIntensity | null {
  if (intensity === undefined) {
    return null;
  }
  if (intensity.to === "over") {
    if (intensity.from === "不明" || intensity.from === "0") {
      return null;
    }
    return convertJma(intensity.from);
  }
  if (intensity.from === "不明" || intensity.from === "0") {
    return null;
  }
  return convertJma(intensity.from);
}

type FcmDataPayload = {
  url?: string;
  route?: string;
};
