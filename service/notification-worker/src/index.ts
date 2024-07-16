import { Connection } from "rabbitmq-client"
import { config } from "./config/config"
import * as admin from "firebase-admin"
import { Message } from "firebase-admin/lib/messaging/messaging-api"
import { recordLogEvent } from "newrelic"

export const firebaseApp = admin.initializeApp({})

const queue = "firebase_cloud_messaging"

const host = config.RABBITMQ_HOST
const port = config.RABBITMQ_PORT
const user = config.RABBITMQ_USER
const password = config.RABBITMQ_PASSWORD
const url = `amqp://${user}:${password}@${host}:${port}`
console.log(`Connecting to RabbitMQ at ${url}`)
const rabbit = new Connection({ url: url })

rabbit.on("error", (err) => {
  console.error(err)
  process.exit(1)
})

rabbit.on("connection", () => {
  console.log("Connected to RabbitMQ")
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
        console.log("No messages to send")
        await reply({
          status: "No messages to send",
        })
        return
      }
      console.dir(messages, { depth: null })
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
      console.dir(results, { depth: null })
    } catch (err) {
      console.error(err)
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
