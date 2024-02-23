import { createClient } from '@supabase/supabase-js'
import { config } from './config/config'
import { Database } from './schema'
import { websocket } from './websocket/websocket'
import { Logger } from '.'

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
        websocket.broadcastV1(JSON.stringify(payload))
      },
    )
    .subscribe((status, err) => {
      Logger.info('Supabase Status:', status)
      if (err) {
        Logger.error('Supabase Error:', err)
      }
    })
}
