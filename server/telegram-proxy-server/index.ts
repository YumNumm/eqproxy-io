const server = Bun.serve({
  fetch(req, server) {
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
    message(ws, message) {
      ws.send(message)
    },
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

