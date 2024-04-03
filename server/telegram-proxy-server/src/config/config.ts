type Config = {
  PORT: number;
  SUPABASE_PROXY_URL: string;
  DMDATA_PROXY_URL: string;
  JWT: string;
};

export const config: Config = {
  PORT: Number(Bun.env.PORT!),
  SUPABASE_PROXY_URL: Bun.env.SUPABASE_PROXY_URL!,
  DMDATA_PROXY_URL: Bun.env.DMDATA_PROXY_URL!,
  JWT: Bun.env.JWT!,
};
