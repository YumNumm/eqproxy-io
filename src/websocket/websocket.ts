import { Server, Socket } from 'socket.io'
import { App, TemplatedApp } from 'uWebSockets.js'
import { Logger } from '..'
import { EqmonitorTelegramSchemaSample } from '../sample/sample'
import { ClientToServerEvents, ServerToClientEvents } from './model'
import { createServer, Server as HTTPServer } from 'http'
import { instrument } from '@socket.io/admin-ui'
import { exit } from 'process'
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

class WebSocketProvider {
  constructor() {
    this.httpServer = createServer()

    this.io = new Server<ClientToServerEvents, ServerToClientEvents>(
      this.httpServer,
      {
        maxHttpBufferSize: 1e4,
        cors: {
          origin: '*',
          /*          origin: [
            'https://status.ws.api.eqmonitor.app',
            'https://status.api.eqmonitor.app',
          ],*/
        },
      },
    )

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
    this.io.attachApp(this.app)
  }

  io: Server
  httpServer: HTTPServer
  app: TemplatedApp

  public async broadcast(data: any) {
    Logger.debug('socket broadcast', data)

    this.io.emit('data', data)
  }

  public async broadcastV1(data: any) {
    Logger.debug('v1 socket broadcast', data)

    this.io.of('/v1').emit('data', data)
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
    this.io.of('/v1').on('connection', socket => {
      socket.on('message', data => {
        socket.disconnect()
      })
      socket.on('disconnect', (reason: any) => {
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

    this.httpServer.listen(4001)

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
