import { Client } from "pg"
import { config } from "../config/config"
import { fcmEarthquake, jma_intensity } from "./fcm/earthquake.queries"

export class SqlService {
  constructor() {
    this.client = new Client({
      ...config.postgres,
    })
  }

  private client: Client
  async start() {
    const client = new Client({})
    await client.connect()
  }

  async fetchEarthquake(
    params: {
      region_id: number
      min_jma_intensity: JmaIntensity
    }[]
  ) {
    // min_jma_intensityについて、enumのindexが小さいものをすべて取得する
    const regions = []
    for (const param of params) {
      const intensities = getUpperOrEqualJmaIntensity(param.min_jma_intensity)
      for (const intensity of intensities) {
        regions.push({
          region_id: param.region_id,
          min_jma_intensity: intensity,
        })
      }
    }
    console.log(regions)
    const result = await fcmEarthquake.run(
      {
        items: params,
      },
      this.client
    )
    return result
  }
}

enum JmaIntensity {
  "Int1" = "1",
  "Int2" = "2",
  "Int3" = "3",
  "Int4" = "4",
  "Int5Minus" = "5-",
  "Int5Plus" = "5+",
  "Int6Minus" = "6-",
  "Int6Plus" = "6+",
  "Int7" = "7",
}

function getUpperOrEqualJmaIntensity(intensity: JmaIntensity): JmaIntensity[] {
  const intensities = Object.values(JmaIntensity)
  return intensities.slice(intensities.indexOf(intensity))
}