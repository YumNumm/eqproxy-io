type Config = {
  DMDATA_PROXY_URL: string,
  PORT: number,
}

export const config: Config = {
  DMDATA_PROXY_URL: Bun.env.DMDATA_PROXY_URL!,
  PORT: Number( Bun.env.PORT!),
}