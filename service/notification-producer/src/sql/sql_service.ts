import { Client } from "pg"
import { config } from "../config/config"
import { fcmEarthquake, jma_intensity } from "./fcm/earthquake.queries"
import { fcmEew } from "./fcm/eew.queries"

export class SqlService {
  constructor() {
    this.client = new Client({
      ...config.postgres,
    })
  }

  private client: Client
  async start() {
    await this.client.connect()
  }

  async fetchEarthquake(
    params: {
      region_id: number
      min_jma_intensity: JmaIntensity
    }[]
  ) {
    // min_jma_intensityについて、enumのindexが小さいものをすべて取得する
    const regions: {
      region_id: number | void | null
      min_jma_intensity: void | jma_intensity | null
    }[] = []
    for (const param of params) {
      const intensities = getLowerOrEqualJmaIntensities(param.min_jma_intensity)
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
        items: regions,
      },
      this.client
    )
    return result
  }

  async fetchEew(
    params: {
      region_id: number
      min_jma_intensity: JmaIntensity
    }[]
  ) {
    const regions: {
      region_id: number | void | null
      min_jma_intensity: void | jma_intensity | null
    }[] = []
    for (const param of params) {
      const intensities = getLowerOrEqualJmaIntensities(param.min_jma_intensity)
      for (const intensity of intensities) {
        regions.push({
          region_id: param.region_id,
          min_jma_intensity: intensity,
        })
      }
    }
    console.log(regions)
    const result = await fcmEew.run(
      {
        items: regions,
      },
      this.client
    )
    return result
  }
}

export const sqlService = new SqlService()

export enum JmaIntensity {
  "Int0" = "0",
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

function getLowerOrEqualJmaIntensities(
  intensity: JmaIntensity
): JmaIntensity[] {
  const intensities = Object.values(JmaIntensity)
  const index = intensities.indexOf(intensity)
  return intensities.slice(0, index + 1)
}
