type Config = {
  RABBITMQ_HOST: string
  RABBITMQ_PORT: number
  RABBITMQ_USER: string
  RABBITMQ_PASSWORD: string
  DMDATA_PROXY_URL: string
  SLACK_WEBHOOK_URL: string
  GO_RUSH_URL: string
  postgres: {
    host: string
    port: number
    user: string
    password: string
    database: string
  }
}

function getConfig(): Config {
  return {
    RABBITMQ_HOST: process.env.RABBITMQ_HOST!,
    RABBITMQ_PORT: parseInt(process.env.RABBITMQ_PORT!),
    RABBITMQ_USER: process.env.RABBITMQ_USER!,
    RABBITMQ_PASSWORD: process.env.RABBITMQ_PASSWORD!,
    DMDATA_PROXY_URL: process.env.DMDATA_PROXY_URL!,
    SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL!,
    GO_RUSH_URL: process.env.GO_RUSH_URL!,
    postgres: {
      host: process.env.POSTGRES_HOST!,
      port: parseInt(process.env.POSTGRES_PORT!),
      user: process.env.POSTGRES_USER!,
      password: process.env.POSTGRES_PASSWORD!,
      database: process.env.POSTGRES_DB!,
    },
  }
}

export const config = getConfig()
