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
const rabbit = new Connection(`amqp://${user}:${password}@${host}:${port}`)

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
    const messages: Message[] = msg.body
    console.log("Received messages:", messages)
    const response = await firebaseApp.messaging().sendEach(messages, true)
    console.log("Successfully sent message:", response)
    await reply(response)
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
