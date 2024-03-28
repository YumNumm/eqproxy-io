type Config = {
  PORT: number,
  SUPABASE_PROXY_URL: number,
  DMDATA_PROXY_URL: number,
  JWT: string,
}

export const config: Config = {
  PORT: Number(Bun.env.PORT!),
  SUPABASE_PROXY_URL: Number(Bun.env.SUPABASE_PROXY_URL!),
  DMDATA_PROXY_URL: Number(Bun.env.DMDATA_PROXY_URL!),
  JWT: Bun.env.JWT!,
}