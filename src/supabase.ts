import { createClient } from '@supabase/supabase-js'
import { config } from './config/config'
import { Database } from './schema'
import { webSocketService } from './dmdata/dmdata'
import { websocket } from './websocket/websocket'

export const supabase = createClient<Database>(
  config.SUPABASE_URL,
  config.SUPABASE_SERVICE_KEY,
)

export async function startListeningSupabase() {
  const channel = supabase
    .channel('schema-db-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
      },
      async payload => {
        console.log('Change received!', payload)
        websocket.broadcastV1(payload)
      },
    )
    .subscribe()
}
