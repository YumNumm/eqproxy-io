import Connection, { RPCClient } from "rabbitmq-client"
import { config } from "../config/config"
import { Message } from "firebase-admin/lib/messaging/messaging-api"

export class RabbitService {
  constructor() {}

  pub: RPCClient | null = null
  queue = "firebase_cloud_messaging"

  async send(messages: Message[]) {
    if (!this.pub) {
      throw new Error("RabbitMQ connection not established")
    }
    const result = await this.pub.send(
      {
        routingKey: this.queue,
      },
      messages
    )
    console.log("Published message", result)
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
