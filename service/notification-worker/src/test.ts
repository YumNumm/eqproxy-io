import * as admin from "firebase-admin"
const firebaseApp = admin.initializeApp({})

;(async () => {
  const result = await firebaseApp.messaging().send({
    token:
      "d5_mWkCBzkFRirAxmqnIRW:APA91bG6D8fRrutTMqf7mAnGLoggzJR1Sz0KRMGj_uB3nnPrCPGoBwNBF6IRuAA6xpdDaIbLEZrl1PmYWISVAD-jjdTpLxaNoVhmcZGtVuhV8poRTt9Q7qReiUtBRpxPIRGlUJpLWU1G",
    notification: {
      title:
        "[⚠テスト] 🚨緊急地震速報(警報) 三陸沖で地震　東北　関東　北陸　甲信　東海　北海道　伊豆諸島　近畿で強い揺れ",
      body: "三陸沖で地震　東北　関東　北陸　甲信　東海　北海道　伊豆諸島　近畿で強い揺れ\n第23報 M8.4 深さ 10km\n14:46:16発生",
    },
    apns: {
      payload: {
        aps: {
          mutableContent: true,
          sound: "default",
          threadId: "20110311144640",
          contentAvailable: true,
          badge: 0,
          alert: { subtitle: "予想最大震度6強 予想最大長周期階級4" },
          "relevance-score": 1,
          "interruption-level": "time-sensitive",
        },
        payload:
          "H4sIAAAAAAAAE13SO0vEQBAHcNAjF1Oci5UExEq4RpiZ3c0hXHP6XfJd/AAK2mjjA4QrDpQDxQdaKNpYKmqjBvRQr7WT7CQ7Jl34zX8eC4laBIigEdGYxED83Izmw+2Jmam34erHxjAbrM+l6ezyQpq1VtqRTdOgp3pxM5okgvKDVC+ezj9Q9eIg/PzORg0HyPDlII+iVl2ugOr6aF6xWFQMucrmTznEcnTNA5Kb+uvXGK06cRDuSAs52PWgObFXggZwsO8ThuFAWtBB3wPw0IHMwCoQ8JYLGYqK4iDc8i0IDvoCnJChHaoCaW45FCC1+B+04cSRALrEsRzGcCLALae+hcAlBIq1ZwJ86bm08FD/Wm15xqXcwZdeyeOwDtbBdQmmuMODThhupKUOlrfcCvCWuxIQEgf3Ap0aFC0PHpC3PPrDEKuAhoe+CvBb3mULH5bJYUkNlqAKhmpbtOWhTz5hoA7c8iJrOTEuwRKqdv5rj7NR4w8q9zZ88AMAAA==",
      },
    },
    android: {
      collapseKey: "20110311144640",
      priority: "high",
      notification: {
        priority: "max",
        body: "予想最大震度6強 予想最大長周期階級4\n三陸沖で地震　東北　関東　北陸　甲信　東海　北海道　伊豆諸島　近畿で強い揺れ\n第23報 M8.4 深さ 10km\n14:46:16発生",
        visibility: "public",
        channelId: "eew_warning",
        icon: "@mipmap/ic_launcher_foreground",
      },
      ttl: 0,
    },
  })
  console.log(result)
})()
