import { App } from 'uWebSockets.js'
import { Server, Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { config } from '../config/config'
import { Logger, slackWebhook } from '..'
import { title } from 'process'
import { EqmonitorTelegramSchemaSample } from '../sample/sample'
import { ClientToServerEvents, ServerToClientEvents } from './model'

class WebSocketProvider {
  constructor() {
    this.io = new Server<ClientToServerEvents, ServerToClientEvents>({
      maxHttpBufferSize: 1e4,
    })
  }

  io: Server

  public async broadcast(data: any) {
    Logger.debug('socket broadcast', data)
    this.io.emit('data', data)
  }

  public async start() {
    const sockets: Socket[] = []
    // socket connection total limit
    this.io.use((socket, next) => {
      const connectionLimit = 10000
      // when 80% of the connection limit is reached, emit a warning
      if (sockets.length >= connectionLimit * 0.8) {
        Logger.warn('Warning: 80% of the connection limit is reached.')
        slackWebhook.send({
          username: config.SERVERNAME,
          text: `Warning: 80% of the connection limit is reached.`,
        })
      }
      if (sockets.length >= connectionLimit) {
        return next(new Error('Connection limit exceeded.'))
      }
      return next()
    })
    /*
    // socket connection limit per ip
    this.io.use((socket, next) => {
      const ip = socket.handshake.address
      const connectionLimitPerIp = 2
      const ipSockets = sockets.filter(s => s.handshake.address === ip)
      if (ipSockets.length >= connectionLimitPerIp) {
        return next(new Error('Connection limit per ip exceeded.'))
      }
      return next()
    })*/

    this.io.on('connection', socket => {
      Logger.debug('socket connected')
      Logger.info('Socket count:', sockets.length)
      sockets.push(socket)
      socket.on('message', data => {
        Logger.debug('socket message: ' + data)
        if (data.toString().includes('sample')) {
          if (data.toString() == 'sample/vxse53') {
            socket.emit('data', EqmonitorTelegramSchemaSample.vxse53Sample())
          }
          if (data.toString() == 'sample/vxse45') {
            socket.emit('data', EqmonitorTelegramSchemaSample.vxse45Sample())
          }
        }
      })
      socket.on('disconnect', (reason: any) => {
        Logger.debug('socket disconnected')
        socket.removeAllListeners()
        sockets.filter(s => s.id != socket.id)
      })
      this.io.on('error', err => {
        Logger.debug('socket error', err)
        socket.disconnect()
      })
    })
    this.io.listen(4000, {
      allowEIO3: true,
      pingTimeout: 3000,
      pingInterval: 10000,
    })
  }
}

export const websocket = new WebSocketProvider()
