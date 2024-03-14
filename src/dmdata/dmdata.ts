import { WebSocketService } from '@dmdata/sdk-js'
import { Logger, dmdata, slackWebhook } from '..'
import { exit } from 'process'
import { dmDataTelegramHandler } from './handler'
import * as zlib from 'zlib'
import { config } from '../config/config'
import {
  EewInformation,
  EarthquakeInformation,
} from '@dmdata/telegram-json-types'

export let webSocketService: WebSocketService

export async function startDmDataWs() {
  Logger.info('Starting WebSocketService')
  try {
    webSocketService = await dmdata.socket.start({
      classifications: ['eew.forecast', 'telegram.earthquake'],
      appName: config.SERVERNAME,
      formatMode: 'json',
      test: 'no',
    })
  } catch (e: any) {
    // axios error
    if (e.response) {
      Logger.error(e.response.data)
    }
    Logger.error(e)
    throw e
  }
  Logger.info('WebSocketService started')

  // data時の処理
  webSocketService.on('start', async connInfo => {
    Logger.info(connInfo)
    await slackWebhook.send({
      username: process.env.SERVERNAME,
      icon_url:
        'https://avatars.slack-edge.com/2023-05-07/5217296640694_7b1502a5d1890db65d37_48.png',
      attachments: [
        {
          color: '#0000FF',
          fields: [
            {
              title: 'DM-D.S.S WebSocketService',
              value: 'WebSocketが接続されました。',
            },
            {
              title: 'socketId',
              value: connInfo.socketId!.toString(),
            },
          ],
        },
      ],
      text: 'DM-D.S.S WebSocketService started',
    })
  })
  webSocketService.on('close', async () => {
    await slackWebhook.send({
      username: process.env.SERVERNAME,
      icon_url:
        'https://avatars.slack-edge.com/2023-05-07/5217296640694_7b1502a5d1890db65d37_48.png',
      attachments: [
        {
          color: '#ff0000',
          pretext: '<!channel>',
          fields: [
            {
              title: 'DM-D.S.S WebSocketService',
              value: 'WebSocketが切断されました。終了します。',
            },
          ],
        },
      ],
      text: 'DM-D.S.S WebSocketService closed',
    })
    exit(1)
  })
  webSocketService.on('error', async err => {
    await slackWebhook.send({
      username: process.env.SERVERNAME,
      icon_url:
        'https://avatars.slack-edge.com/2023-05-07/5217296640694_7b1502a5d1890db65d37_48.png',
      attachments: [
        {
          color: '#ff0000',
          fields: [
            {
              title: 'DM-D.S.S WebSocketService',
              value: 'WebSocket接続中にエラーが発生しました。終了します。',
            },
            {
              title: 'Error',
              value: err.toString(),
            },
          ],
        },
      ],
    })
    exit(1)
  })
  webSocketService.on('data', async data => {
    Logger.info('Received data from WS')
    Logger.info(data)

    if (data.classification == 'eew.forecast') {
      if (
        data.compression == 'gzip' &&
        data.format == 'json' &&
        data.encoding == 'base64'
      ) {
        const telegram = JSON.parse(
          zlib.gunzipSync(Buffer.from(data.body, 'base64')).toString('utf-8'),
        ) as EewInformation.Latest.Main
        await dmDataTelegramHandler.eewInformation(telegram)
      }
    }
    if (data.classification == 'telegram.earthquake') {
      if (
        data.compression == 'gzip' &&
        data.format == 'json' &&
        data.encoding == 'base64'
      ) {
        const telegram = JSON.parse(
          zlib.gunzipSync(Buffer.from(data.body, 'base64')).toString('utf-8'),
        ) as EarthquakeInformation.Latest.Main
        await dmDataTelegramHandler.earthquakeInforamtion(telegram)
      }
    }
  })
}
