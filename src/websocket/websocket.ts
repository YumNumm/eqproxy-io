import { App } from 'uWebSockets.js'
import { Server, Socket } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { config } from '../config/config'
import { Logger, slackWebhook } from '..'
import { title } from 'process'

class WebSocketProvider {
  constructor() {
    this.io = new Server({
      maxHttpBufferSize: 1e4,
    })
  }

  io: Server

  public async broadcast(data: any) {
    this.io.emit('telegram', data)
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

    // socket connection limit per ip
    this.io.use((socket, next) => {
      const ip = socket.handshake.address
      const connectionLimitPerIp = 2
      const ipSockets = sockets.filter(s => s.handshake.address === ip)
      if (ipSockets.length >= connectionLimitPerIp) {
        return next(new Error('Connection limit per ip exceeded.'))
      }
      return next()
    })

    this.io.on('connection', socket => {
      console.log('socket connected')
      sockets.push(socket)
      socket.on('message', data => {
        console.log('socket message', data)
        socket.disconnect()
      })
      socket.on('disconnect', (reason: any) => {
        console.log('socket disconnected')
        sockets.filter(s => s.id !== socket.id)
      })

      this.io.on('error', err => {
        console.log('socket error', err)
        socket.disconnect()
      })
    })
    this.io.listen(4000, {
      allowEIO3: true,
      allowRequest: (req, callback) => {
        const isValid = ['localhost:3000', 'monitor.eqmonitor.app'].includes(
          req.headers.origin ?? '',
        )
        callback(null, isValid)
      },
    })
  }
}

export const websocket = new WebSocketProvider()
