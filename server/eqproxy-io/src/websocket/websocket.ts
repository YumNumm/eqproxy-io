import { Server, Socket } from 'socket.io'
import { App, TemplatedApp } from 'uWebSockets.js'
import { Logger } from '..'
import { EqmonitorTelegramSchemaSample } from '../sample/sample'
import { ClientToServerEvents, ServerToClientEvents } from './model'
import { instrument } from '@socket.io/admin-ui'
import { exit } from 'process'
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

class WebSocketProvider {
  constructor() {
    this.io = new Server<ClientToServerEvents, ServerToClientEvents>({
      maxHttpBufferSize: 1e4,
      cors: {
        origin: [
          'https://status.ws.api.eqmonitor.app',
          'https://status.api.eqmonitor.app',
          'https://eqmonitor-web.pages.dev',
          'https://web.eqmonitor.app',
          'https://widgetbook.eqmonitor.app',
        ],
      },
    })

    instrument(this.io, {
      auth: {
        type: 'basic',
        username: 'yumnumm',
        password:
          '$2a$12$/9W1feY3e8owseqQH9tHFu/JR6M9b4d2/2KQUe3KovUBzbjMOUyiK',
      },
      mode: 'production',
      serverId: `${require('os').hostname()}#${process.pid}`,
      readonly: true,
    })

    this.app = App({})
    this.app.get('/health', (res, req) => {
      res.writeStatus('200 OK')
      res.end('OK')
    })
    this.app.get('*', (res, req) => {
      res.writeStatus('404 Not Found')
      res.end('Not Found')
    })
    this.io.attachApp(this.app)
  }

  io: Server
  app: TemplatedApp

  public async broadcast(data: { [key: string]: any }) {
    Logger.debug('socket broadcast', data)

    this.io.emit('data', data)
  }

  public async start() {
    this.io.on('connection', socket => {
      Logger.debug('socket connected')
      socket.on('message', data => {
        Logger.debug('socket message: ' + data)
        if (data.toString().includes('sample')) {
          EqmonitorTelegramSchemaSample.sample(socket)
          return
        }
        socket.disconnect()
      })
      socket.on('disconnect', (reason: any) => {
        Logger.debug('socket disconnected', reason)
        socket.removeAllListeners()
      })
      socket.on('error', err => {
        Logger.error('socket error', err)
        socket.removeAllListeners()
        socket.disconnect()
      })
      socket.on('ping', callback => {
        callback()
      })
    })

    const app = App({})
    this.io.attachApp(app)
    app.listen(4000, token => {
      if (!token) {
        Logger.warn('failed to listen to port 4000')
        exit(1)
      }
      Logger.info(`Listening to port 4000`)
    })

    const ioMetrics = require('socket.io-prometheus')
    const promRegister = require('prom-client').register
    ioMetrics(this.io)
    const hono = new Hono()
    hono.get('/metrics', async c => {
      return c.text(await (promRegister.metrics() as Promise<any>))
    })
    serve({
      fetch: hono.fetch,
      port: 4002,
    })
  }
}

export const websocket = new WebSocketProvider()
