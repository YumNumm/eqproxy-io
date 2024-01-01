import {
  EarthquakeInformation,
  EewInformation,
} from '@dmdata/telegram-json-types'
import { Logger } from '../..'
import { EqmonitorTelegramSchema } from '../../model/telegram_v3'
import { websocket } from '../../websocket/websocket'
class DmDataTelegramHandler {
  constructor() {}

  async eewInformation(telegram: EewInformation.Latest.Main): Promise<void> {
    switch (telegram.type) {
      case 'リアルタイム震度':
        return
      case '緊急地震速報配信テスト':
        Logger.info('緊急地震速報配信テストを受信しました。')
        break
      case '緊急地震速報（地震動予報）':
        //TODO(YumNumm): API POST
        const data = EqmonitorTelegramSchema.fromDmdataToTelegramV3(telegram)
        let broadcast = data[0]
        const eventId = (broadcast.eventId as number).toString().slice(2)
        broadcast.eventId = Number(`2023${eventId}`)
        // 取消報の場合  serialNo をincrement
        if (broadcast.infoType === '取消') {
          broadcast.serialNo = (broadcast.serialNo ?? 0) + 1
        }
        await websocket.broadcast(broadcast)
        break
      default:
        break
    }
  }

  async earthquakeInforamtion(
    telegram: EarthquakeInformation.Latest.Main,
  ): Promise<void> {
    Logger.info('地震情報を受信しました')
    const data = EqmonitorTelegramSchema.fromDmdataToTelegramV3(telegram)
    for await (const d of data) {
      let broadcast = d
      const eventId = (broadcast.eventId as number).toString().slice(2)
      broadcast.eventId = Number(`2023${eventId}`)
      broadcast.eventId = Number(eventId)
      await websocket.broadcast(broadcast)
    }
  }
}

export const dmDataTelegramHandler = new DmDataTelegramHandler()
