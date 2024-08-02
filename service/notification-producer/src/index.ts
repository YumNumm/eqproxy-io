import { RabbitService } from "./rabbitmq/rabbitmq"
import { dmdataService } from "./dmdata/dmdata"
import { sqlService } from "./sql/sql_service"
import { IncomingWebhook } from "@slack/webhook"
import { config } from "./config/config"
import { GoRush } from "./gorush/gorush"

import { serve } from "@hono/node-server"
import { Hono } from "hono"

export const slackWebhook = new IncomingWebhook(config.SLACK_WEBHOOK_URL)

// export const rabbitService = new RabbitService()

export const goRush = new GoRush()
;(async () => {
  await sqlService.start()
  console.log("SQL service started")
  dmdataService.start()
  console.log("DMData service started")

  const app = new Hono()
  app.onError((err, c) => {
    return c.json({ error: err }, 500)
  })
  app.get("/", (c) => c.text("Hello Node.js!"))
  app.post("/push", async (c) => {
    const json = await c.req.json()
    console.log(json)
    const results = await goRush.send(json)
    return c.json(results)
  })

  serve(app)

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
