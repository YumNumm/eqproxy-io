type Config = {
  WEBSOCKET_URL: string
  GO_RUSH_URL: string
  SUPABASE_URL: string
  SUPABASE_SERVICE_KEY: string
}

function getConfig(): Config {
  const result = {
    WEBSOCKET_URL: process.env.WEBSOCKET_URL!,
    GO_RUSH_URL: process.env.GO_RUSH_URL!,
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY!,
  }
  if (
    typeof result.WEBSOCKET_URL !== "string" ||
    result.WEBSOCKET_URL.length === 0
  ) {
    throw new Error("WEBSOCKET_URL is not a string")
  }

  if (
    typeof result.GO_RUSH_URL !== "string" ||
    result.GO_RUSH_URL.length === 0
  ) {
    throw new Error("GO_RUSH_URL is not a string")
  }

  if (
    typeof result.SUPABASE_URL !== "string" ||
    result.SUPABASE_URL.length === 0
  ) {
    throw new Error("SUPABASE_URL is not a string")
  }

  if (
    typeof result.SUPABASE_SERVICE_KEY !== "string" ||
    result.SUPABASE_SERVICE_KEY.length === 0
  ) {
    throw new Error("SUPABASE_SERVICE_KEY is not a string")
  }

  return result
}

export const config = getConfig()
