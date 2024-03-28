import { exit } from "process"
import { config } from "./src/config/config"

const server = Bun.serve({
  fetch(req, server) {
    const url = new URL(req.url)
    if (url.pathname === '/ws') {
      if (server.upgrade(req)) {
        return
      }
    }
    return new Response('', { status: 500 })
  },
  websocket: {
    message(ws, message) {
      console.log('message', message)
    },
    open(ws) {
      ws.subscribe('telegram')
    },
    close(ws, code, reason) {
      console.log('close', code, reason)
      ws.unsubscribe('telegram')
    },
    drain(ws) {},
    backpressureLimit: 1024, // 1KB
    maxPayloadLength: 1024, // 1KB
    closeOnBackpressureLimit: true, // リミットに達したら切断する
    idleTimeout: 60, // 60秒
    perMessageDeflate: true, // 圧縮する
  }, // handlers
})

console.log(`Server running at ${server.url}`)

const dmdataSocket = new WebSocket(config.DMDATA_PROXY_URL)
dmdataSocket.onopen = () => {
  console.log('Connected to DMDATA PROXY')
}
dmdataSocket.onclose = () => {
  console.log('Disconnected from DMDATA PROXY')
  exit(1)
}
dmdataSocket.onmessage = (event) => {
  const data = event.data
  console.log(data)
  server.publish('telegram', data.toString())
}