import { DMDATA } from '@dmdata/sdk-js'
import { getLogger } from 'log4js'
import { exit } from 'process'
import { IncomingWebhook } from '@slack/webhook'
import { config } from './config/config'
import { websocket } from './websocket/websocket'
import { startDmDataWs } from './dmdata/dmdata'
require('newrelic')

export const isProd = process.env.NODE_ENV == 'production'
export const Logger = getLogger()
import fs from 'fs'
Logger.level = 'debug'

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

async function main() {
  const files = await fs.promises.readdir('./sample/20171213b/json')
  const promises = files
    .filter(file => file.endsWith('.json'))
    .map(async file => {
      const data = await fs.promises.readFile(`./sample/20171213b/json/${file}`)
      return data.toString()
    })
  const results = await Promise.all(promises)
  try {
    await websocket.start()
    await startDmDataWs()
  } catch (e: any) {
    Logger.error(e)
    exit(1)
  }
}

main()
