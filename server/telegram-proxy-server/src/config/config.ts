type Config = {
  PORT: number
  SUPABASE_PROXY_URL: string
  DMDATA_PROXY_URL: string
  SHAKE_DETECT_PROXY_URL: string
  JWT: string
}

export const config: Config = {
  PORT: Number(Bun.env.PORT!),
  SUPABASE_PROXY_URL: Bun.env.SUPABASE_PROXY_URL!,
  DMDATA_PROXY_URL: Bun.env.DMDATA_PROXY_URL!,
  JWT: Bun.env.JWT!,
  SHAKE_DETECT_PROXY_URL:
    Bun.env.SHAKE_DETECT_PROXY_URL !== undefined
      ? Bun.env.SHAKE_DETECT_PROXY_URL!
      : (() => {
          throw new Error("SHAKE_DETECT_PROXY_URL is not set")
        })(),
}
