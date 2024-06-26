type Config = {
  RABBITMQ_HOST: string
  RABBITMQ_PORT: number
  RABBITMQ_USER: string
  RABBITMQ_PASSWORD: string
}

function getConfig(): Config {
  return {
    RABBITMQ_HOST: process.env.RABBITMQ_HOST!,
    RABBITMQ_PORT: parseInt(process.env.RABBITMQ_PORT!),
    RABBITMQ_USER: process.env.RABBITMQ_USER!,
    RABBITMQ_PASSWORD: process.env.RABBITMQ_PASSWORD!,
  }
}

export const config = getConfig()
