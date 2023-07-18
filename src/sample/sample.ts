import { DMDATA } from '@dmdata/sdk-js'
import { EqmonitorTelegramSchema } from '../model/telegram_v3'
import { TelegramJSONMain } from '@dmdata/telegram-json-types'
import fs from 'fs'
import { Socket } from 'socket.io'
import { EewInformation as ei } from '../model/eew-telegram'

export namespace EqmonitorTelegramSchemaSample {
  export function vxse45Sample(): EqmonitorTelegramSchema.TelegramV3[] {
    throw new Error('Not implemented')
  }

  // stream
  export async function sample(socket: Socket) {
    // ディレクトリのファイル一覧を取得 sample_
    const files = await fs.promises.readdir('./sample/20171213b/json')
    // すべて読み込む
    const promises = files
      .filter(file => file.endsWith('.json'))
      .map(async file => {
        const data = await fs.promises.readFile(
          `./sample/20171213b/json/${file}`,
        )
        return data.toString()
      })
    const results = await Promise.all(promises)
    // パース
    const parsed = results.map(result => {
      return JSON.parse(result) as TelegramJSONMain
    })
    // 変換
    const converted = parsed
      .map(data => {
        data.type = '緊急地震速報（地震動予報）'
        return EqmonitorTelegramSchema.fromDmdataToTelegramV3(data)
      })
      .flat()
      .map(data => data as ei.EewInformation)
    const start = new Date(converted[0].pressTime)
    const originTime = new Date(
      new Date().getTime() -
        new Date(converted[0].pressTime).getTime() +
        new Date(
          converted[0].body.originTime ?? converted[0].body.arrivalTime,
        ).getTime(),
    )
    const futures = converted.map(data => {
      // 次のファイルの開始時間を取得
      const next = new Date(data.pressTime)
      // 開始時間からの経過時間を取得
      const diff = next.getTime() - start.getTime()

      // 現在時刻と発生時刻の差分を取得
      // 待機する
      return new Promise(resolve => {
        setTimeout(() => {
          // 送信
          data.status = '訓練'
          data.body.originTime = originTime.toISOString()
          data.headline = "XX地域では、強い揺れに警戒してください"
          socket.emit('data', data)
          resolve(data)
        }, diff)
      })
    })
    await Promise.all(futures)
  }
}
