import { messageGenerator } from "./dmdata/message_generator"
import {
  NotificationChannel,
  generateBodyForAndroid,
} from "./dmdata/fcm_message_generator"
import { GoRush, GoRushMessage } from "./gorush/gorush"
;(async () => {
  const json = {
    _originalId:
      "38757fefbfa412453fd87ce8dff3e6a85aa54726d0f4227903e6a8a79f35d9c727427890eb27b178bc544c423eb06619",
    _schema: {
      type: "eew-information",
      version: "1.0.0",
    },
    type: "緊急地震速報（地震動予報）",
    title: "緊急地震速報（地震動予報）",
    status: "通常",
    infoType: "発表",
    editorialOffice: "気象庁本庁",
    publishingOffice: ["気象庁"],
    pressDateTime: "2024-08-04T08:46:56Z",
    reportDateTime: "2024-08-04T17:46:56+09:00",
    targetDateTime: "2024-08-04T17:46:56+09:00",
    eventId: "20240804174614",
    serialNo: "4",
    infoKind: "緊急地震速報",
    infoKindVersion: "1.2_0",
    headline: null,
    body: {
      isLastInfo: true,
      isCanceled: false,
      isWarning: false,
      earthquake: {
        originTime: "2024-08-04T17:46:05+09:00",
        arrivalTime: "2024-08-04T17:46:14+09:00",
        hypocenter: {
          code: "853",
          name: "宮古島近海",
          coordinate: {
            latitude: {
              text: "24.4˚N",
              value: "24.4000",
            },
            longitude: {
              text: "125.0˚E",
              value: "125.0000",
            },
            height: {
              type: "高さ",
              unit: "m",
              value: "-40000",
            },
            geodeticSystem: "日本測地系",
          },
          depth: {
            type: "深さ",
            unit: "km",
            value: "40",
          },
          reduce: {
            code: "9473",
            name: "宮古島近海",
          },
          landOrSea: "海域",
          accuracy: {
            epicenters: ["4", "9"],
            depth: "4",
            magnitudeCalculation: "2",
            numberOfMagnitudeCalculation: "0",
          },
        },
        magnitude: {
          type: "マグニチュード",
          value: "3.6",
          unit: "Mj",
        },
      },
      intensity: {
        forecastMaxInt: {
          from: "2",
          to: "2",
        },
        forecastMaxLgInt: {
          from: "0",
          to: "0",
        },
        appendix: {
          maxIntChange: "0",
          maxLgIntChange: "0",
          maxIntChangeReason: "0",
        },
        regions: [],
      },
    },
  }

  const message = messageGenerator.handleEew(json as any)!
  const token =
    "cRTH0xoh_01qg-d6Qya4xO:APA91bETBc_dzMMOa_1fpBFe7liCJKWJ-_03jhcetC3CHEqd7d2fRMPushd992YTPFNIoiqruqBHshS1ZOIe0h_PIlqKzbS1NfJ89ws7S-pDnYXitCmNqKS7Ev-L2mTDwpnFMH1nGOxx"

  const payload: GoRushMessage = {
    type: "MulticastMessage",
    message: {
      tokens: [token],

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
            threadId: "",
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
        notification: {
          priority: message?.isWarning ? "max" : "high",
          body: generateBodyForAndroid(message),
          channelId: message?.isOnePointEew
            ? NotificationChannel.EEW_LOW_ACCURACY
            : message?.isWarning
              ? NotificationChannel.EEW_WARNING
              : NotificationChannel.EEW_FORECAST,
          icon: "ic_stat_name",
          imageUrl: undefined,
        },
      },
    },
  }
  console.log(JSON.stringify(payload, null, 2))
  const goRush = new GoRush()
  goRush.send([payload])
})()
