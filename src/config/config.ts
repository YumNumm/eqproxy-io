interface Config {
  DMDATA_API_KEY: string
  SLACK_WEBHOOK_URL: string
  SERVERNAME: string
  AUTHORIZATION_KEY_JWT: string
}

export const config: Config = {
  DMDATA_API_KEY: process.env.DMDATA_API_KEY!,
  SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL!,
  SERVERNAME: process.env.SERVERNAME!,
  AUTHORIZATION_KEY_JWT: process.env.AUTHORIZATION!,
}
