import { WebSocketServer } from "ws"
import { createServer } from "http"
import { config } from "../config/config"
import { Logger } from ".."

let wsConnectionCount = 0
let totalWsConnections = 0

const httpServer = createServer((req, response) => {
  response.writeHead(200)
  if (req.url === "/metrics") {
    response.write(`# HELP ws_connections_total 現在のWebSocketの接続数\n`)
    response.write(`# TYPE ws_connections_total gauge\n`)
    response.write(`ws_connections_total ${wsConnectionCount}\n`)
    response.write(`# HELP ws_connections_total 累計のWebSocketの接続数\n`)
    response.write(`# TYPE ws_connections_total counter\n`)
    response.write(`total_ws_connections_total ${totalWsConnections}\n`)
    response.setHeader("Content-Type", "text/plain")
  }
  response.end()
})

export const wss = new WebSocketServer({
  server: httpServer,
})

wss.on("connection", (ws) => {
	wsConnectionCount++
	totalWsConnections++
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
  ws.on("error", (err) => Logger.error(`WebSocket error: ${err}`))
  ws.on("close", () => {
		Logger.info(`WebSocket closed: ${ws.protocol}`)
		wsConnectionCount--
    clearInterval(interval)
  })
  ws.on("pong", () => {
    isAlive = true
  })
})

export function startHttpServer() {
  httpServer.listen(config.WEBSOCKET_PORT, () => {
    Logger.info(`WebSocket server started on port ${config.WEBSOCKET_PORT}`)
  })
}
