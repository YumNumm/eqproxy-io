import { config } from "../config/config"
import * as v from "valibot"
import { KyoshinEventTelegramSchema } from "../models/kyoshin_event"
import { broadcast } from "../.."
import {
  RealtimePostgresDeletePayload,
  RealtimePostgresInsertPayload,
} from "@supabase/supabase-js"
import { Database } from "@eqproxy-io/eqapi-types-v1"

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

    const converted: Database["public"]["Tables"]["shake_detection_events"]["Row"][] =
      data.map((t) => {
        const r: Database["public"]["Tables"]["shake_detection_events"]["Row"] & {
          regions: v.InferOutput<typeof region>
          top_left: v.InferOutput<typeof location>
          bottom_right: v.InferOutput<typeof location>
        } = {
          event_id: t.id,
          id: -1,
          inserted_at: new Date().toISOString(),
          serial_no: -1,
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
        return r
      })

    if (converted.length === 0) {
      const broadcastData: RealtimePostgresDeletePayload<{
        [key: string]: any
      }> = {
        commit_timestamp: new Date().toISOString(),
        eventType: "DELETE",
        errors: [],
        new: {},
        old: {},
        schema: "public",
        table: "shake_detection_events",
      }

      broadcast(broadcastData)
      return
    }

    const broadcastData: RealtimePostgresInsertPayload<{
      [key: string]: any
    }> = {
      commit_timestamp: new Date().toISOString(),
      eventType: "INSERT",
      new: {
        events: converted,
      },
      old: {},
      schema: "public",
      table: "shake_detection_events",
      errors: [],
    }

    broadcast(broadcastData)
  }
}

function convertIntensity(
  input: v.InferInput<typeof KyoshinEventTelegramSchema>["maxIntensity"]
): Database["public"]["Enums"]["jma_intensity"] {
  switch (input) {
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
    case "Unknown": {
      throw new Error("Intensity is unknown")
    }
    default: {
      const _: never = input
      return _
    }
  }
}

const location = v.object({
  latitude: v.number(),
  longitude: v.number(),
})

const intensity = v.picklist([
  "0",
  "1",
  "2",
  "3",
  "4",
  "!5-",
  "5-",
  "5+",
  "6-",
  "6+",
  "7",
])

const region = v.array(
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
)
