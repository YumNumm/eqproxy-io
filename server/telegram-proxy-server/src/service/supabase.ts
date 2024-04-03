import { exit } from "process"
import { config } from "../config/config"
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js"
import { broadcast } from "../.."
import { Database } from "@eqproxy-io/eqapi-types-v1"

export async function startListeningSupabaseProxy() {
  const url = new URL(config.SUPABASE_PROXY_URL)
  const ws = new WebSocket(url)
  ws.onopen = () => {
    console.log(`Connected to Supabase Proxy: ${url}`)
  }
  ws.onclose = () => {
    console.log(`Disconnected from Supabase Proxy: ${url}`)
    exit(1)
  }
  ws.onmessage = (event) => {
    const json = JSON.parse(
      event.data.toString()
    ) as RealtimePostgresChangesPayload<{
      [key: string]: any
    }>
    console.log(`Message from Supabase Proxy: ${JSON.stringify(json, null, 2)}`)
    if (json.table !== "eew") {
      broadcast(json)
    }
  }
  ws.onerror = (event) => {
    console.error(`Error from Supabase Proxy: ${event}`)
  }
}

export function eewSamplePayload(): RealtimePostgresChangesPayload<
  Database["public"]["Tables"]["eew"]["Row"]
> {
  return {
    commit_timestamp: new Date().toISOString(),
    errors: [],
    eventType: "INSERT",
    schema: "public",
    table: "eew",
    old: {},

    new: {
      id: -1,
      arrival_time: new Date().toISOString(),
      origin_time: new Date().toISOString(),
      depth: 12,
      event_id: 20240404125959,
      forecast_max_intensity: "5+",
      forecast_max_intensity_is_over: false,
      forecast_max_lpgm_intensity: "3",
      forecast_max_lpgm_intensity_is_over: true,
      headline: "XX県で地震発生 YY地方では強い揺れに警戒",
      hypo_name: "XX県沖",
      info_type: "通常",
      is_canceled: false,
      is_last_info: false,
      is_plum: true,
      is_warning: true,
      latitude: 38.0,
      longitude: 140.0,
      magnitude: 6.8,
      regions: [],
      report_time: new Date().toISOString(),
      schema_type: "eew-information",
      serial_no: 14,
      status: "通常",
      type: "eew",
      accuracy: null,
    },
  }
}

export function eewCancelSamplePayload(): RealtimePostgresChangesPayload<
  Database["public"]["Tables"]["eew"]["Insert"]
> {
  return {
    commit_timestamp: new Date().toISOString(),
    errors: [],
    eventType: "INSERT",
    schema: "public",
    table: "eew",
    old: {},

    new: {
      id: -1,
      arrival_time: new Date().toISOString(),
      origin_time: new Date().toISOString(),
      event_id: 20240404125959,
      serial_no: 15,
      headline: "先ほどの緊急地震速報はキャンセルされました",
      is_canceled: true,
      is_last_info: true,
      status: "通常",
      type: "eew",
      accuracy: null,
      is_plum: false,
      is_warning: false,
      depth: null,
      info_type: "",
      schema_type: "eew-information",
      report_time: new Date().toISOString(),
    },
  }
}
