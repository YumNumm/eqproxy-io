type Config = {
  WEBSOCKET_URL: string
  GO_RUSH_URL: string
}

function getConfig(): Config {
  const result = {
    WEBSOCKET_URL: process.env.WEBSOCKET_URL!,
    GO_RUSH_URL: process.env.GO_RUSH_URL!,
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
  return result
}

export const config = getConfig()
