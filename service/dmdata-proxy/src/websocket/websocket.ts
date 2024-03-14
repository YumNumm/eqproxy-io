import  { WebSocketServer } from "ws"
import { config } from "../config/config"
import { Logger } from "..";

export const wss = new WebSocketServer({
  port: config.WEBSOCKET_PORT,
})


wss.on('connection', (ws) => {
  var isAlive = true
  var interval = setInterval(() => {
    if (ws.readyState === ws.OPEN) {
      if (!isAlive) {
        ws.terminate()
        clearInterval(interval)
        return
      }
      isAlive = false
      ws.ping()
    }
  }, 5000)
  Logger.info(`WebSocket connected: ${ws.protocol}`)
  ws.on('error', (err) => Logger.error(`WebSocket error: ${err}`))
  ws.on('pong', () => {
    isAlive = true
  })
});

