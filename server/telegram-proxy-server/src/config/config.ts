type Config = {
  JWT: string,
  DMDATA_PROXY_URL: string,
}

export const config: Config = {
  JWT: Bun.env.JWT!,
  DMDATA_PROXY_URL: Bun.env.DMDATA_PROXY_URL!,
}