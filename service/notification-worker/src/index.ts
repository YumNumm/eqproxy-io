import { Connection } from "rabbitmq-client"
import { config } from "./config/config"
import * as admin from "firebase-admin"
import { Message } from "firebase-admin/lib/messaging/messaging-api"
import { createLogger, transports, format } from "winston"
import LokiTransport from "winston-loki"
import { performance } from "perf_hooks"

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

const queue = "firebase_cloud_messaging"

const host = config.RABBITMQ_HOST
const port = config.RABBITMQ_PORT
const user = config.RABBITMQ_USER
const password = config.RABBITMQ_PASSWORD
const url = `amqp://${user}:${password}@${host}:${port}`
logger.info(`Connecting to RabbitMQ at ${url}`)
const rabbit = new Connection({ url: url })

rabbit.on("error", (err) => {
  console.error(err)
  process.exit(1)
})

rabbit.on("connection", () => {
  logger.info("Connected to RabbitMQ")
})

const sub = rabbit.createConsumer(
  {
    queue,
    noAck: false,
    queueOptions: {
      durable: true,
    },
    qos: {
      prefetchCount: 8,
    },
  },
  async (msg, reply) => {
    try {
      const messages: Message[] = msg.body
      if (messages.length === 0) {
        logger.info("No messages to send")
        await reply({
          status: "No messages to send",
        })
        return
      }
      const start = performance.now()
      for (const message of messages) {
        console.log(JSON.stringify(message))
        logger.info("Sending message", {
          ...message,
          status: "sending",
        })
      }
      logger.info("Sending messages", {
        count: messages.length,
      })
      const response = await firebaseApp.messaging().sendEach(messages)
      await reply(response)
      if (messages.length !== response.responses.length) {
        console.error("Some messages were not sent")
        console.dir({ messages, response }, { depth: null })
        return
      }
      const results = response.responses.map((res, i) => {
        return {
          message: messages[i],
          result: res,
        }
      })
      for (const result of results) {
        logger.info("Sent message", {
          ...result,
          time: performance.now() - start,
          status: "sent",
        })
      }
    } catch (err) {
      logger.error("Error sending messages", err)

      await reply(err, {})
    }
  }
)

sub.on("error", (err) => {
  console.log("consumer error (user-events)", err)
  process.exit(1)
})

async function onShutdown() {
  await sub.close()
  await rabbit.close()
}
process.on("SIGINT", onShutdown)
process.on("SIGTERM", onShutdown)
