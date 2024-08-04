import { RabbitService } from "./rabbitmq/rabbitmq"
import { dmdataService } from "./dmdata/dmdata"
import { sqlService } from "./sql/sql_service"
import { IncomingWebhook } from "@slack/webhook"
import { config } from "./config/config"
import { GoRush } from "./gorush/gorush"

import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { EewInformation } from "@dmdata/telegram-json-types"
import {
  NotificationPayload,
  NotificationPayload_EewRegionIntensity,
  NotificationPayload_Type,
} from "@eqproxy-io/notification-data"
import { convertJmaNotification } from "./notification/notification_service"
import { Timestamp } from "@bufbuild/protobuf"
import { Message } from "firebase-admin/lib/messaging/messaging-api"
import { messageGenerator } from "./dmdata/message_generator"
import { gzipSync } from "zlib"
import {
  NotificationChannel,
  generateBodyForAndroid,
} from "./dmdata/fcm_message_generator"
import { GoRushMessage } from "./gorush/gorush"
export const slackWebhook = new IncomingWebhook(config.SLACK_WEBHOOK_URL)

// export const rabbitService = new RabbitService()

export const goRush = new GoRush()
;(async () => {
  const app = new Hono()
  app.onError((err, c) => {
    return c.json({ error: err }, 500)
  })
  app.get("/", (c) => c.text("Hello Node.js!"))
  app.post("/push", async (c) => {
    const json = await c.req.json()
    console.log(json)
    const results = await goRush.send(json)
    return c.json(results)
  })

  serve(app)

  const url =
    "https://sample.dmdata.jp/conversion/json/schema/eew-information/vxse45_rjtd_20110311144810.json"
  const response = await fetch(url)
  const json = await response.json()
  const telegram = json as EewInformation.Latest.Main
  if (telegram.type !== "緊急地震速報（地震動予報）") {
    console.log(`${telegram.type} is not supported`)
    return
  }
  if (telegram.body.isCanceled) {
    console.log("Canceled")
    return
  }
  const message = messageGenerator.handleEew(telegram)
  if (!message) {
    return
  }
  const regionIntensities = telegram.body.intensity!.regions.map((region) => {
    const m: NotificationPayload_EewRegionIntensity =
      new NotificationPayload_EewRegionIntensity()
    m.code = region.code
    m.intensity = convertJmaNotification(region.forecastMaxInt.from)
    m.arrivalTime = region.arrivalTime
      ? Timestamp.fromDate(new Date(region.arrivalTime))
      : undefined
    return m
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
            telegram.body.earthquake?.hypocenter?.coordinate.longitude?.value
          ),
          magnitude: Number(telegram.body.earthquake.magnitude.value),
          name: telegram.body.earthquake.hypocenter.name,
        },
        maxIntensity: convertJmaNotification(
          telegram.body.intensity?.forecastMaxInt.from ?? "不明"
        ),
        regionIntensities: regionIntensities,
      },
    },
  })

  console.log(JSON.stringify(payload.toJson(), null, 2))
  const token =
    "cRTH0xoh_01qg-d6Qya4xO:APA91bETBc_dzMMOa_1fpBFe7liCJKWJ-_03jhcetC3CHEqd7d2fRMPushd992YTPFNIoiqruqBHshS1ZOIe0h_PIlqKzbS1NfJ89ws7S-pDnYXitCmNqKS7Ev-L2mTDwpnFMH1nGOxx"

  const fcmMessage: GoRushMessage = {
    type: "MulticastMessage",
    message: {
      tokens: [token],
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
  }

  console.log(JSON.stringify(fcmMessage))
  goRush.send([fcmMessage])
})()
