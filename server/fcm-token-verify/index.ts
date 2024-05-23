import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { object, string } from "valibot"
import { vValidator } from "@hono/valibot-validator"
import { verify } from "hono/jwt"
import * as admin from "firebase-admin"
import { HTTPException } from "hono/http-exception"
const app = new Hono()

export const firebaseApp = admin.initializeApp({})

const schema = object({
  token: string(),
})

app.get("/verify", vValidator("query", schema), async (c) => {
  // verify token
  var bearerToken = c.req.header("Authorization")?.replace("Bearer ", "")
  if (!bearerToken) {
    return c.json({ error: "Token is required" }, 401)
  }
  const decoded = await verify(bearerToken, process.env.JWT_SECRET!, "HS256")
  if (!decoded) {
    return c.json({ error: "Invalid token" }, 401)
  }
  const role = decoded.role
  if (role !== "admin") {
    return c.json({ error: "Permission denied" }, 403)
  }

  const { token } = c.req.valid("query")
  // verify token
  try {
    const result = await firebaseApp.messaging().send(
      {
        token: token,
      },
      true
    )
    return c.json(result)
  } catch (err: any) {
    return c.json(JSON.parse(JSON.stringify(err)), 400)
  }
})

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
})
