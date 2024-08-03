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
import { goRush } from "."
;(async () => {
  try {
  } catch (e) {
    console.error(e)
  }
})()
