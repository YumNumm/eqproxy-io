import { RabbitService } from "./rabbitmq/rabbitmq"
import { dmdataService } from "./dmdata/dmdata"
import { sqlService } from "./sql/sql_service"

export const rabbitService = new RabbitService()
;(async () => {
  await sqlService.start()
  console.log("SQL service started")
  await rabbitService.start()
  console.log("Notification producer started")
  dmdataService.start()
  console.log("DMData service started")
})()
