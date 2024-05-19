import { Connection } from "rabbitmq-client"
import { config } from "./config/config"
import { Message } from "firebase-admin/lib/messaging/messaging-api"
import { RabbitService } from "./rabbitmq/rabbitmq"
import { dmdataService } from "./dmdata/dmdata"

export const rabbitService = new RabbitService()
;async () => {
  console.log("Starting notification producer")
  await rabbitService.start()
  console.log("Notification producer started")
  dmdataService.start()
  console.log("DMData service started")
}
