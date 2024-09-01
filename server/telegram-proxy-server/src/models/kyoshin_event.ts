import * as v from "valibot"

const intensity = v.picklist([
  "Unknown",
  "Int0",
  "Int1",
  "Int2",
  "Int3",
  "Int4",
  "Int5Lower",
  "Int5Upper",
  "Int6Lower",
  "Int6Upper",
  "Int7",
  "Error",
])

const location = v.object({
  Latitude: v.number(),
  Longitude: v.number(),
})

export const KyoshinEventTelegramSchema = v.object({
  id: v.pipe(v.string(), v.uuid()),
  level: v.picklist(["Weaker", "Weak", "Medium", "Strong", "Stronger"]),
  createdAt: v.string(),
  pointCount: v.pipe(v.number(), v.integer()),
  maxIntensity: intensity,
  regions: v.array(
    v.object({
      name: v.string(),
      maxIntensity: intensity,
      points: v.array(
        v.object({
          location: location,
          intensity: intensity,
          code: v.string(),
          name: v.string(),
        })
      ),
    })
  ),
  topLeft: location,
  bottomRight: location,
})

export type KyoshinEventTelegram = v.InferOutput<
  typeof KyoshinEventTelegramSchema
>
