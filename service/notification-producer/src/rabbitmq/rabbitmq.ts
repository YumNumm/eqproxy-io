import Connection, { RPCClient } from "rabbitmq-client"
import { config } from "../config/config"
import { Message } from "firebase-admin/lib/messaging/messaging-api"

export class RabbitService {
  constructor() {}

  pub: RPCClient | null = null
  queue = "firebase_cloud_messaging"

  async send(messages: Message[]) {
    const start = Date.now()
    if (!this.pub) {
      throw new Error("RabbitMQ connection not established")
    }
    if (messages.length === 0) {
      console.log("No messages to send")
      return
    }
    // 500件ずつ送信
    const chunked = chunk(messages, 500)
    const results = await Promise.all(
      chunked.map((chunk) =>
        this.pub!.send(
          {
            routingKey: this.queue,
          },
          chunk
        )
      )
    )
    const end = Date.now()
    const totalInMs = end - start
    for (const result of results) {
      console.log(
        JSON.stringify({
          ...result,
          totalTime: totalInMs,
          startTime: start,
          endTime: end,
        })
      )
    }
  }

  async start() {
    const host = config.RABBITMQ_HOST
    const port = config.RABBITMQ_PORT
    const user = config.RABBITMQ_USER
    const password = config.RABBITMQ_PASSWORD
    const rabbit = new Connection(`amqp://${user}:${password}@${host}:${port}`)

    rabbit.on("error", (err) => {
      console.error(err)
    })

    rabbit.on("connection", () => {
      console.log("Connected to RabbitMQ")
    })

    this.pub = rabbit.createRPCClient({
      confirm: true,
      maxAttempts: 2,
    })

    process.on("SIGINT", () => {
      console.log("Shutting down")
      this.pub?.close()
      rabbit.close()
    })
    process.on("SIGTERM", () => {
      console.log("Shutting down")
      this.pub?.close()
      rabbit.close()
    })
  }
}

const chunk = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  )
}
