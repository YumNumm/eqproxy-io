import { SupabaseClient, createClient } from "@supabase/supabase-js"
import { Database } from "../supabase"
import { config } from "../config/config"
import {
  KyoshinEventTelegram,
  KyoshinEventTelegramSchema,
} from "../models/kyoshin_event"
import { logger } from "../.."
import * as v from "valibot"

class SupabaseService {
  private supabase: SupabaseClient<Database>

  constructor() {
    this.supabase = createClient<Database>(
      config.SUPABASE_URL,
      config.SUPABASE_SERVICE_KEY
    )
  }

  private cache: {
    [key: string]: KyoshinEventTelegram
  } = {}

  async handleShakeDetection(data: KyoshinEventTelegram): Promise<void> {
    const cachedEvent = this.cache[data.id]
    if (cachedEvent) {
      // region以下が同じだったらスキップ
      if (
        cachedEvent.regions.length === data.regions.length &&
        cachedEvent.regions.every((region, index) => {
          return (
            region.name === data.regions[index].name &&
            region.maxIntensity === data.regions[index].maxIntensity &&
            region.points.length === data.regions[index].points.length
          )
        })
      ) {
        logger.debug(
          `Regionが同じためスキップします: ${cachedEvent.regions.length} -> ${data.regions.length}`
        )
        return
      }
    }

    this.cache[data.id] = data

    const converted: v.InferOutput<typeof KyoshinEventWebSocketSchema> = {
      id: data.id,
      created_at: data.createdAt,
      point_count: data.pointCount,
      bottom_right: {
        latitude: data.bottomRight.Latitude,
        longitude: data.bottomRight.Longitude,
      },
      top_left: {
        latitude: data.topLeft.Latitude,
        longitude: data.topLeft.Longitude,
      },
      max_intensity: convertIntensity(data.maxIntensity),
      regions: data.regions.map((region) => {
        return {
          name: region.name,
          maxIntensity: convertIntensity(region.maxIntensity),
          points: region.points.map((point) => {
            return {
              code: point.code,
              intensity: convertIntensity(point.intensity),
            }
          }),
        }
      }),
    }

    await this.supabase.from("shake_detection_events").insert({
      event_id: data.id,
      // 2024-09-01T22:44:03.9001261" -> 2024-09-01T22:44:03.900"
      created_at: data.createdAt.slice(0, 23),
      point_count: data.pointCount,
      max_intensity: convertDbJmaIntensity(data.maxIntensity),
      regions: converted.regions,
      bottom_right: converted.bottom_right,
      top_left: converted.top_left,
      serial_no: 0,
    })
  }

  onEventAllCleared(): void {
    this.cache = {}
  }
}

function convertDbJmaIntensity(
  input: KyoshinEventTelegram["maxIntensity"]
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
      throw new Error(`Invalid intensity: ${input}`)
    }
    default: {
      const exhaustive: never = input
      return exhaustive
    }
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

const KyoshinEventWebSocketSchema = v.object({
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

export const supabaseService = new SupabaseService()
