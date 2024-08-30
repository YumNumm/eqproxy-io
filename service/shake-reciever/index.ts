import { config } from "./src/config/config"
import * as v from "valibot"
import { KyoshinEventTelegramSchema } from "./src/models/kyoshin_event"
import { createLogger, transports, format, debug } from "winston"
import { NotificationService } from "./src/service/notification_service"
import { GoRush } from "./src/gorush/gorush"

export const debugTokens = [
  `dpTSSkXGKEi7nGg-RFjbeC:APA91bHSa0kUMf55uR5KH_Ac8tc-R5wcA09w08AizItXsZdyjQx4CwmCtV8HORqp3XmYBZrBWjqsBYjR6ksQaXZd5sCdZgunlHaJ-DaAGOdSEiyWeNI_4Zw1alN9qHhu6iycziTEGK93`,
]

export const logger = createLogger({
  handleExceptions: true,
  handleRejections: true,
  defaultMeta: { service: "shake-reciever" },
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: "debug",
    }),
  ],
})
const notificationService = new NotificationService()
const goRush = new GoRush()
;(async () => {
  const wsUrl = config.WEBSOCKET_URL
  logger.info(`Connecting to ${wsUrl}`)
  const ws = new WebSocket(wsUrl)

  ws.onopen = () => {
    logger.info("WebSocket connection opened")
    goRush.send([
      {
        type: "MulticastMessage",
        message: {
          tokens: debugTokens,
          notification: {
            title: "Shake Detection Service has started!",
          },
        },
      },
    ])
  }

  ws.onmessage = (event) => {
    logger.info("WebSocket message received:", event.data)

    const data = v.parse(
      v.array(KyoshinEventTelegramSchema),
      JSON.parse(event.data)
    )
    if (data.length === 0) {
      logger.debug("Event is empty")
      notificationService.onEventAllCleared()
      return
    }
    for (const telegram of data) {
      const messages = notificationService.handleShakeDetection(telegram)
      if (messages) {
        goRush.send(messages)
      }
    }
  }

  ws.onclose = () => {
    logger.warn("WebSocket connection closed")

    process.exit(1)
  }
})()
