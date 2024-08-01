import { RabbitService } from "./rabbitmq/rabbitmq"
import { dmdataService } from "./dmdata/dmdata"
import { sqlService } from "./sql/sql_service"
import { IncomingWebhook } from "@slack/webhook"
import { config } from "./config/config"
export const slackWebhook = new IncomingWebhook(config.SLACK_WEBHOOK_URL)

export const rabbitService = new RabbitService()
;(async () => {
  await sqlService.start()
  console.log("SQL service started")
  await rabbitService.start()
  console.log("Notification producer started")
  dmdataService.start()
  console.log("DMData service started")

  await slackWebhook.send({
    username: process.env.SERVERNAME,
    icon_url:
      "https://avatars.slack-edge.com/2023-05-07/5217296640694_7b1502a5d1890db65d37_48.png",
    attachments: [
      {
        pretext: "<!channel>",
        color: "#00ff00",
        fields: [
          {
            title: "Notification Producer",
            value: "Notification Producerが起動しました。",
          },
          {
            title: "Time",
            value: new Date().toISOString(),
          },
        ],
      },
    ],
  })
  
})()
