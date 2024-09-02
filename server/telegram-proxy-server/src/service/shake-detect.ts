import { config } from "../config/config"
import * as v from "valibot"
import { KyoshinEventTelegramSchema } from "../models/kyoshin_event"
import { broadcast } from "../.."
import { RealtimePostgresInsertPayload } from "@supabase/supabase-js"

export async function startListeningShakeDetectProxy() {
  const url = new URL(config.SHAKE_DETECT_PROXY_URL)
  const ws = new WebSocket(url)
  ws.onopen = () => {
    console.log(`Connected to Shake Detect Proxy: ${url}`)
  }
  ws.onclose = () => {
    console.error(`Disconnected from Shake Detect Proxy: ${url}`)
  }
  ws.onmessage = (message) => {
    const json = JSON.parse(message.data.toString())

    const data = v.parse(v.array(KyoshinEventTelegramSchema), json)

    const converted: v.InferOutput<typeof KyoshinEventWebSocketSchema> =
      data.map((t) => {
        return {
          id: t.id,
          created_at: t.createdAt,
          point_count: t.pointCount,
          max_intensity: convertIntensity(t.maxIntensity),
          regions: t.regions.map((r) => {
            return {
              name: r.name,
              maxIntensity: convertIntensity(r.maxIntensity),
              points: r.points.map((p) => {
                return {
                  intensity: convertIntensity(p.intensity),
                  code: p.code,
                }
              }),
            }
          }),
          top_left: {
            latitude: t.topLeft.Latitude,
            longitude: t.topLeft.Longitude,
          },
          bottom_right: {
            latitude: t.bottomRight.Latitude,
            longitude: t.bottomRight.Longitude,
          },
        }
      })

    const broadcastData: RealtimePostgresInsertPayload<{
      [key: string]: any
    }> = {
      commit_timestamp: new Date().toISOString(),
      eventType: "INSERT",
      new: converted,
      old: {},
      schema: "public",
      table: "shake_detection_events",
      errors: [],
    }

    broadcast(broadcastData)
  }
}

const intensity = v.picklist([
  "Unknown",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5-",
  "5+",
  "6-",
  "6+",
  "7",
  "Error",
])

function convertIntensity(
  input: v.InferInput<typeof KyoshinEventTelegramSchema>["maxIntensity"]
): v.InferOutput<typeof intensity> {
  switch (input) {
    case "Unknown":
      return "Unknown"
    case "Int0":
      return "0"
    case "Int1":
      return "1"
    case "Int2":
      return "2"
    case "Int3":
      return "3"
    case "Int4":
      return "4"
    case "Int5Lower":
      return "5-"
    case "Int5Upper":
      return "5+"
    case "Int6Lower":
      return "6-"
    case "Int6Upper":
      return "6+"
    case "Int7":
      return "7"
    case "Error":
      return "Error"
    case undefined:
      throw new Error("Intensity is undefined")
  }
}

const location = v.object({
  latitude: v.number(),
  longitude: v.number(),
})

const KyoshinEventWebSocketSchema = v.array(
  v.object({
    id: v.string(),
    created_at: v.string(),
    point_count: v.number(),
    max_intensity: intensity,
    regions: v.array(
      v.object({
        name: v.string(),
        maxIntensity: intensity,
        points: v.array(
          v.object({
            intensity: intensity,
            code: v.string(),
          })
        ),
      })
    ),
    top_left: location,
    bottom_right: location,
  })
)
