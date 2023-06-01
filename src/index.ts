import { DMDATA } from '@dmdata/sdk-js'
import { getLogger } from 'log4js'
import { exit } from 'process'
import { IncomingWebhook } from '@slack/webhook'
import { config } from './config/config'
import { websocket } from './websocket/websocket'
import { startDmDataWs } from './dmdata/dmdata'
export const isProd = process.env.NODE_ENV == 'production'
export const Logger = getLogger()
Logger.level = isProd ? 'info' : 'debug'

export const slackWebhook = new IncomingWebhook(config.SLACK_WEBHOOK_URL)

process.on('uncaughtException', async err => {
  Logger.error(err)
  await slackWebhook.send({
    username: process.env.SERVERNAME,
    icon_url:
      'https://avatars.slack-edge.com/2023-05-07/5217296640694_7b1502a5d1890db65d37_48.png',
    attachments: [
      {
        pretext: '<!channel>',
        color: '#ff0000',

        fields: [
          {
            title: 'uncaughtException',
            value: 'uncaughtExceptionが発生しました。終了しました。',
          },
          {
            title: 'Error',
            value: err!.toString(),
          },
          {
            title: 'Stack',
            // 2行まで
            value: err!.stack!.split('\n').slice(0, 2).join('\n') + '\n...',
          },
          {
            title: 'Time',
            value: new Date().toISOString(),
          },
        ],
      },
    ],
  })
  exit(1)
})

export const dmdata = new DMDATA({
  credentials: {
    getAuthorization: async () => {
      return (
        'Basic ' + Buffer.from(config.DMDATA_API_KEY + ':').toString('base64')
      )
    },
  },
})

websocket.start()
startDmDataWs();
