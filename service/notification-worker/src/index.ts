import { Connection } from "rabbitmq-client"
import { config } from "./config/config"
import * as admin from "firebase-admin"
import { Message } from "firebase-admin/lib/messaging/messaging-api"

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
      prefetchCount: 2,
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
      console.log("Received messages:", JSON.stringify(messages, null, 2))
      const response = await firebaseApp.messaging().sendEach(messages)
      console.log(
        "Successfully sent message:",
        JSON.stringify(response, null, 2)
      )
      await reply(response)
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
