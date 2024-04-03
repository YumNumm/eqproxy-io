type Config = {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_KEY: string;
  PORT: number;
};

export const config: Config = {
  SUPABASE_URL: Bun.env.SUPABASE_URL!,
  SUPABASE_SERVICE_KEY: Bun.env.SUPABASE_SERVICE_KEY!,
  PORT: Number(Bun.env.PORT!),
};
