import { exit } from "process"
import { config } from "./src/config/config"

const server = Bun.serve({
  fetch(req, server) {
    if (req.headers.get("Authorization") !== `Bearer ${config.JWT}`) {
      return new Response('', { status: 401 })
    }
    const url = new URL(req.url)
    if (url.pathname === '/ws') {
      // upgrade the request to a WebSocket
      if (server.upgrade(req)) {
        return // do not return a Response
      }
    }
    return new Response('', { status: 500 })
  },
  websocket: {
    message(ws, message) {},
    open(ws) {
      ws.subscribe('v1')
    },
    close(ws, code, reason) {},
    drain(ws) {},
    backpressureLimit: 1024, // 1KB
    maxPayloadLength: 1024, // 1KB
    closeOnBackpressureLimit: true, // リミットに達したら切断する
    idleTimeout: 60, // 60秒
    perMessageDeflate: true, // 圧縮する
  }, // handlers
})

console.log(`Server running at ${server.url}`)


// DMDATA PROXYへ接続
const dmdataSocket = new WebSocket(config.DMDATA_PROXY_URL, {

})
dmdataSocket.onopen = () => {
  console.log('Connected to DMDATA PROXY')
}
dmdataSocket.onclose = () => {
  console.log('Disconnected from DMDATA PROXY')
  exit(1)
}
dmdataSocket.onmessage = (event) => {
  // string
  const data = event.data
  console.log(data)
  server.publish('v1', data.toString())
}
