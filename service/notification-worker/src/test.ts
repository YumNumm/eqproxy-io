import * as admin from "firebase-admin"
import {
  Message,
  MulticastMessage,
  TokenMessage,
} from "firebase-admin/lib/messaging/messaging-api"
const firebaseApp = admin.initializeApp({})

;(async () => {
  const token =
    "cRTH0xoh_01qg-d6Qya4xO:APA91bETBc_dzMMOa_1fpBFe7liCJKWJ-_03jhcetC3CHEqd7d2fRMPushd992YTPFNIoiqruqBHshS1ZOIe0h_PIlqKzbS1NfJ89ws7S-pDnYXitCmNqKS7Ev-L2mTDwpnFMH1nGOxx"
  const messages: MulticastMessage[] = [
    {
      tokens: [],
      notification: {
        title: "テスト通知",
        body: "予想最大震度6強 予想最大長周期階級4\n三陸沖で地震　東北　関東　北陸　甲信　東海　北海道　伊豆諸島　近畿で強い揺れ\n第23報 M8.4 深さ 10km\n14:46:16発生",
      },
      data: {
        enableDebugMode: "true",
      },
      apns: {
        payload: {
          aps: {
            mutableContent: true,
            sound: "default",
            threadId: "20110311144640",
            contentAvailable: true,
            badge: 0,
            alert: {
              subtitle: "予想最大震度6強 予想最大長周期階級4",
              body: "三陸沖で地震　東北　関東　北陸　甲信　東海　北海道　伊豆諸島　近畿で強い揺れ\n第23報 M8.4 深さ 10km\n14:46:16発生",
            },
            "relevance-score": 1,
            "interruption-level": "time-sensitive",
          },
          payload:
            "H4sIAAAAAAAAE13SO0vEQBAHcNAjF1Oci5UExEq4RpiZ3c0hXHP6XfJd/AAK2mjjA4QrDpQDxQdaKNpYKmqjBvRQr7WT7CQ7Jl34zX8eC4laBIigEdGYxED83Izmw+2Jmam34erHxjAbrM+l6ezyQpq1VtqRTdOgp3pxM5okgvKDVC+ezj9Q9eIg/PzORg0HyPDlII+iVl2ugOr6aF6xWFQMucrmTznEcnTNA5Kb+uvXGK06cRDuSAs52PWgObFXggZwsO8ThuFAWtBB3wPw0IHMwCoQ8JYLGYqK4iDc8i0IDvoCnJChHaoCaW45FCC1+B+04cSRALrEsRzGcCLALae+hcAlBIq1ZwJ86bm08FD/Wm15xqXcwZdeyeOwDtbBdQmmuMODThhupKUOlrfcCvCWuxIQEgf3Ap0aFC0PHpC3PPrDEKuAhoe+CvBb3mULH5bJYUkNlqAKhmpbtOWhTz5hoA7c8iJrOTEuwRKqdv5rj7NR4w8q9zZ88AMAAA==",
        },
      },
      android: {
        collapseKey: "20110311144641",
        priority: "high",
        notification: {
          priority: "max",
          body: "予想最大震度6強 予想最大長周期階級4\n三陸沖で地震　東北　関東　北陸　甲信　東海　北海道　伊豆諸島　近畿で強い揺れ\n第23報 M8.4 深さ 10km\n14:46:16発生",
          channelId: "eew_warning",
          icon: "@mipmap/ic_launcher_foreground",
        },
      },
    },
    /*
    {
      token:
        "d5_mWkCBzkFRirAxmqnIRW:APA91bG6D8fRrutTMqf7mAnGLoggzJR1Sz0KRMGj_uB3nnPrCPGoBwNBF6IRuAA6xpdDaIbLEZrl1PmYWISVAD-jjdTpLxaNoVhmcZGtVuhV8poRTt9Q7qReiUtBRpxPIRGlUJpLWU1G",
      notification: {
        title: "地震情報 最大震度 6強",
        body: "13日23時08分頃、福島県沖で地震がありました。 (M7.1 深さ60km)\n最大震度 6強を宮城県などで観測しています\nこの地震により、日本の沿岸では若干の海面変動があるかもしれませんが、被害の心配はありません。\nこの地震について、緊急地震速報を発表しています。",
      },
      apns: {
        payload: {
          aps: {
            mutableContent: true,
            sound: "default",
            threadId: "20210213230800",
            contentAvailable: true,
            badge: 0,
            alert: { subtitle: "" },
            "relevance-score": 1,
            "interruption-level": "time-sensitive",
          },
          payload:
            "H4sIAAAAAAAAEwE4AMf/Cg4yMDIxMDIxMzIzMDgwMCImCiIIoQISDOemj+WztuecjOaylh3NzBZCJc3MDUMoPDUzM+NAEEGgJvqzOAAAAA==",
        },
      },
      android: {
        collapseKey: "20210213230800",
        priority: "high",
        notification: {
          priority: "high",
          body: "１３日２３時０８分頃、福島県沖で地震がありました。 (M7.1 深さ60km)\n最大震度 6強を宮城県などで観測しています\nこの地震により、日本の沿岸では若干の海面変動があるかもしれませんが、被害の心配はありません。\nこの地震について、緊急地震速報を発表しています。",
          channelId: "VXSE53",
          icon: "@mipmap/ic_launcher_foreground",
        },
        ttl: 0,
      },
    },*/
  ]
  messages.forEach((message) => {
    message.tokens = [token]
  })

  console.log(
    JSON.stringify([
      {
        type: "MulticastMessage",
        message: messages[0],
      },
    ])
  )
  return

  const result = await firebaseApp.messaging().sendEachForMulticast(messages[0])
  console.log(result)
})()
