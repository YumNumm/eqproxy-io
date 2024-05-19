import { Client } from "pg"
import { fcmEarthquake } from "./sql/fcm/earthquake.queries"

export const client = new Client({
  // TODO
})

async function main() {
  await client.connect()
  // timer
  const start = Date.now()
  const result = await fcmEarthquake.run(
    {
      items: [
        {
          region_id: 1,
          min_jma_intensity: "1",
        },
        {
          region_id: 1,
          min_jma_intensity: "2",
        },
      ],
    },
    client
  )
  console.log(result)
  console.log(`Result length: ${result.length}`)
  console.log(`Query time: ${Date.now() - start}ms`)
  await client.end()
}

main()
