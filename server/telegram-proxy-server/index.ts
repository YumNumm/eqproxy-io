import { exit } from "process"
import { config } from "./src/config/config"
import { startListeningSupabaseProxy } from "./src/service/supabase"
import { startListeningDmdataProxy } from "./src/service/dmdata"

let connectionCount = 0
let totalConnectionCount = 0

const httpServer = Bun.serve({
  fetch(request, server) {
    const { searchParams, pathname } = new URL(request.url)
    const auth = searchParams.get("key") ?? request.headers.get("Authorization")

    if (pathname === "/health") {
      return new Response("OK", { status: 200 })
    }
    if (auth === "Bearer " + config.JWT) {
      if (pathname === "/metrics") {
        return new Response(
          "# HELP ws_connections_total 現在のWebSocketの接続数\n" +
            "# TYPE ws_connections_total gauge\n" +
            `ws_connections_total ${connectionCount}\n` +
            "# HELP ws_connections_total 累計のWebSocketの接続数\n" +
            "# TYPE ws_connections_total counter\n" +
            `total_ws_connections_total ${totalConnectionCount}\n`,
          {
            headers: {
              "Content-Type": "text/plain",
            },
          }
        )
      }
    }
    if (pathname === "/ws") {
      if (server.upgrade(request)) {
        return
      }
      return new Response("Upgrade failed", { status: 500 })
    }
    return new Response(undefined, { status: 404 })
  },
  websocket: {
    message(ws, __) {
      ws.close(1000, "Not implemented")
    },
    open(ws) {
      connectionCount++
      totalConnectionCount++
      ws.subscribe("public")
      // ping timer every 15 seconds
      setInterval(() => {
        ws.ping(
          JSON.stringify({
            type: "ping",
            timestamp: new Date().toISOString(),
          })
        )
      }, 1000 * 15)
    },
    close(ws, code, message) {
      connectionCount--
    },
    perMessageDeflate: true,
    sendPings: true,
    backpressureLimit: 1024 * 1024, // 1MB
    closeOnBackpressureLimit: true,
    idleTimeout: 20, // seconds
    maxPayloadLength: 1024, // 1KB
  },
})

export function broadcast(data: string) {
  console.log(`Broadcasting: ${JSON.stringify(data, null, 2)}`)
  httpServer.publish("public", data)
}

console.log(`Server running at ${httpServer.url}`)

startListeningSupabaseProxy()
startListeningDmdataProxy()
