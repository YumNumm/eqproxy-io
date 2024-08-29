import * as admin from "firebase-admin"
import { createLogger, transports, format } from "winston"
import LokiTransport from "winston-loki"

export const logger = createLogger({
  handleExceptions: true,
  handleRejections: true,
  defaultMeta: { service: "notification-worker" },
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
    new LokiTransport({
      host: "http://mac-mini:3100",
      json: true,
      labels: { service: "notification-worker", host: "srv2-osaka" },
    }),
  ],
})

export const firebaseApp = admin.initializeApp({})
