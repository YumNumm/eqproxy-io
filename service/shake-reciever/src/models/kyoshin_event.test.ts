import { test } from "bun:test"
import { KyoshinEventTelegramSchema } from "./kyoshin_event"
import * as v from "valibot"

const json = [
  {
    id: "e717ec65-37ce-490a-8b17-c4cce4aa9822",
    level: "Weaker",
    createdAt: "2024-08-29T23:57:18.9003265",
    pointCount: 1,
    maxIntensity: "Int0",
    regions: [
      {
        maxIntensity: "Int0",
        name: "岡山県",
        points: [
          {
            location: {
              Latitude: 34.4483,
              Longitude: 133.787,
            },
            intensity: "Int0",
            code: "OKY014",
            name: "下津井",
          },
        ],
      },
    ],
    topLeft: {
      Latitude: 34.4483,
      Longitude: 133.787,
    },
    bottomRight: {
      Latitude: 34.4483,
      Longitude: 133.787,
    },
  },
]

test("KyoshinEventTelegramSchema", () => {
  for (const item of json) {
    const result = v.parse(KyoshinEventTelegramSchema, item)
  }
})
