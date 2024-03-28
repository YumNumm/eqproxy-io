import { createClient } from '@supabase/supabase-js'
import { config } from './src/config/config'



export const supabase = createClient(
  config.SUPABASE_URL,
  config.SUPABASE_SERVICE_KEY,
)

let wsConnectionCount: number = 0

const httpServer = Bun.serve({
  fetch(req, server) {
    const url = new URL(req.url)
    console.log(`Request: ${url.pathname}`)
    if (url.pathname === '/health') {
      return new Response('OK', { status: 200 })
    }
    if (url.pathname === "/metrics") {
      return Response.json({
        wsConnectionCount
       })
    }
    if (url.pathname === "/ws") {
      // upgrade the request to a WebSocket
      if (server.upgrade(req)) {
        return; // do not return a Response
      }
      return new Response("Upgrade failed :(", { status: 500 });
    }
    return new Response("Not found", { status: 404 });
  },
  websocket: {
    message(_, __) {}, // a message is received
    open(ws) {
      ws.subscribe('supabase')
      wsConnectionCount++;
    }, // a socket is opened
    close(ws, code, message) {
      wsConnectionCount--;
      console.log(`Socket closed: ${code} ${message}`)
    }, // a socket is closed
    drain(ws) { }, // the socket is ready to receive more data
    sendPings: true, // send pings to the client
  },
});

console.log(`Server running at ${httpServer.url}`)


export async function startListeningSupabase() {
  const channel = supabase.channel('schema-db-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
      },
      async payload => {
        console.log('Change received!', payload)
        httpServer.publish("supabase", JSON.stringify(payload));
      },
    )
    .subscribe((status, err) => {
      console.log('Supabase Status:', status)
      if (err) {
        console.error('Supabase Error:', err)
      }
    })
  console.log('Listening to supabase changes')
  return channel
}

startListeningSupabase()