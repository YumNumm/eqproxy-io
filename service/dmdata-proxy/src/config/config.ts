interface Config {
  DMDATA_API_KEY: string
  SLACK_WEBHOOK_URL: string
  SERVERNAME: string
  WEBSOCKET_PORT: number
}

export const config: Config = {
  DMDATA_API_KEY: process.env.DMDATA_API_KEY!,
  SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL!,
  SERVERNAME: process.env.SERVERNAME!,
  WEBSOCKET_PORT: Number(process.env.WEBSOCKET_PORT!),
}
