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
      var payload: EewInformation.Latest.PublicCommon = JSON.parse(
        JSON.stringify({
          ...JSON.parse(content),
          type: "緊急地震速報（地震動予報）",
          title: "緊急地震速報（地震動予報）",
        })
      )
      data.push(payload)
    }
    // 最もpressDateTimeが古いものを取得
    console.log(data)
    const oldestTelegram = data
      .filter((data) => data.pressDateTime !== null)
      .sort(
        (a, b) =>
          new Date(a.pressDateTime).getTime() -
          new Date(b.pressDateTime).getTime()
      )
    console.log(oldestTelegram)

    if (oldestTelegram === undefined) {
      ws.send(
        JSON.stringify({
          type: "error",
          message: "No data",
        })
      )
      return
    }
    const firstPressTime = new Date(oldestTelegram[0].pressDateTime)

    const promises = data.map((data) => {
      const next = new Date(data.pressDateTime)
      const delay = next.getTime() - firstPressTime.getTime()
      console.log(`Waiting ${delay}ms`)
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          var eewV1 = dmdataEewToV1(data)
          // 現在時刻と本来の発表時刻の差分
          const diff =
            new Date().getTime() - new Date(data.pressDateTime).getTime()
          console.log(eewV1)
          if (eewV1 !== null) {
            eewV1.arrival_time =
              eewV1.arrival_time !== null
                ? // 足す
                  new Date(
                    new Date(eewV1.arrival_time).getTime() + diff
                  ).toISOString()
                : null
            eewV1.report_time =
              // 足す
              new Date(
                new Date(eewV1.report_time).getTime() + diff
              ).toISOString()
            eewV1.origin_time =
              eewV1.origin_time !== null
                ? // 足す
                  new Date(
                    new Date(eewV1.origin_time).getTime() + diff
                  ).toISOString()
                : null
            eewV1.status = "訓練"
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
            const str = JSON.stringify(broadcastData, null, 2)
            console.log(str)
            ws.send(str)
          } else {
            console.log("eewV1 is null")
          }
          resolve()
        }, delay)
      })
    })
    await Promise.allSettled(promises)
  }
}

export const testEewService = new TestEewService()
