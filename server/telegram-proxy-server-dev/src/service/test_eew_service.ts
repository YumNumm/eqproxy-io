import { EewInformation } from "@dmdata/telegram-json-types"
import { ServerWebSocket } from "bun"
import { readdir } from "node:fs/promises"
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js"
import { dmdataEewToV1 } from "./dmdata"
class TestEewService {
  constructor() {}

  // stream
  async handleTest(
    ws: ServerWebSocket<unknown>,
    message: string
  ): Promise<void> {
    // `assets`ディレクトリの中のディレクトリを探す
    const acceptablePaths = [
      "eew/20170701a",
      "eew/20171213a",
      "eew/20171213b",
      "eew/20220721085038",
      "eew/tech566",
    ]
    if (!acceptablePaths.includes(message)) {
      ws.send(
        JSON.stringify({
          type: "error",
          message: "Not found",
        })
      )
      return
    }
    const files = await readdir(`./assets/${message}`)
    // 全件読み出し
    const data: EewInformation.Latest.PublicCommon[] = []
    for (const path of files) {
      console.log(`Reading ${path}`)
      const content = await Bun.file(`./assets/${message}/${path}`).text()
      data.push(
        JSON.parse(
          JSON.stringify({
            ...JSON.parse(content),
            type: "緊急地震速報（地震動予報）",
            title: "緊急地震速報（地震動予報）",
          })
        )
      )
    }
    const oldestTelegram = data.sort(
      (a, b) =>
        new Date(a.pressDateTime).getTime() -
        new Date(b.pressDateTime).getTime()
    ).shift()

    if (oldestTelegram === undefined) {
      ws.send(
        JSON.stringify({
          type: "error",
          message: "No data",
        })
      )
      return
    }
    const firstPressTime = new Date(oldestTelegram.pressDateTime)

    const promises = data.map((data) => {
      const next = new Date(data.pressDateTime)
      const diff = next.getTime() - firstPressTime.getTime()
      console.log(`Waiting ${diff}ms`)
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          const eewV1 = dmdataEewToV1(data)
          if (eewV1 !== null) {
            // supabase準拠のPayloadを配信
            const broadcastData: RealtimePostgresChangesPayload<{
              [key: string]: any
            }> = {
              commit_timestamp: new Date().toISOString(),
              eventType: "INSERT",
              new: eewV1,
              old: {},
              schema: "public",
              table: "eew",
              errors: [],
            }
            ws.send(JSON.stringify(broadcastData))
          }
          resolve()
        }, diff)
      })
    })
    await Promise.allSettled(promises)
  }
}

export const testEewService = new TestEewService()
