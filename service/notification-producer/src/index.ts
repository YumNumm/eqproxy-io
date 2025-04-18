import { resolver, validator as vValidator } from "hono-openapi/valibot";
import { IncomingWebhook } from "@slack/webhook";
import { config } from "./config/config";
import { dmdataService } from "./dmdata/dmdata";
import { sqlService } from "./sql/sql_service";

import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { describeRoute, openAPISpecs } from "hono-openapi";
import { fcmService } from "./fcm/fcm_service";
import * as v from "valibot";
import { notificationService } from "./notification/notification_service";

export const slackWebhook = new IncomingWebhook(config.SLACK_WEBHOOK_URL);

(async () => {
  await fcmService.init();
  console.log("FCM service started");
  console.warn(`Firebase Cloud Messaging dry run: ${config.FCM_DRY_RUN}`);

  await sqlService.start();
  console.log("SQL service started");
  dmdataService.start();
  console.log("DMData service started");

  const app = new Hono();
  app.onError((err, c) => {
    return c.json({ error: err }, 500);
  });

  app.post(
    "/test",
    describeRoute({
      description: "すべてのユーザにテスト通知を送信(DryRun)",
    }),
    async (c) => {
      return c.json({ message: "Not implemented" });
    }
  );

  app.post(
    "/send",
    vValidator(
      "json",
      v.object({
        token: v.pipe(v.string(), v.minLength(1)),
      })
    ),
    async (c) => {
      const { token } = c.req.valid("json");
      const user = await sqlService.getUserByToken(token);
      if (user === null) {
        return c.json({ error: "User not found" }, 404);
      }
      const messages = await fcmService.send([
        {
          token,
          notification: {
            title: "Test",
            body: "Test",
          },
          data: {
            url: "https://example.com",
          },
        },
      ]);
      return c.json({
        user: user,
        messages,
      });
    }
  );

  serve(app);

  await slackSend({
    title: "Notification Producer",
    value: "Notification Producerが起動しました。",
    isError: false,
  });
})();

export async function slackSend({
  title,
  value,
  isError = false,
}: {
  title: string;
  value: string;
  isError: boolean;
}) {
  await slackWebhook.send({
    username: process.env.SERVERNAME,
    icon_url:
      "https://avatars.slack-edge.com/2023-05-07/5217296640694_7b1502a5d1890db65d37_48.png",
    attachments: [
      {
        pretext: "<!channel>",
        color: isError ? "#ff0000" : "#00ff00",
        fields: [
          {
            title: title,
            value: value,
          },
          {
            title: "Time",
            value: new Date().toISOString(),
          },
        ],
      },
    ],
  });
}
