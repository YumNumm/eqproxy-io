type Config = {
  RABBITMQ_HOST: string;
  RABBITMQ_PORT: number;
  RABBITMQ_USER: string;
  RABBITMQ_PASSWORD: string;
  DMDATA_PROXY_URL: string;
  SLACK_WEBHOOK_URL: string;
  GO_RUSH_URL: string;
  postgres: string;
};

/**
 * 環境変数の値を取得し、未定義または空の場合はエラーをスローする
 */
function getEnvOrThrow(key: string): string {
  const value = process.env[key];
  if (value === undefined || value === "") {
    throw new Error(`環境変数 ${key} が設定されていないか空です`);
  }
  return value;
}

function getConfig(): Config {
  return {
    RABBITMQ_HOST: getEnvOrThrow("RABBITMQ_HOST"),
    RABBITMQ_PORT: Number.parseInt(getEnvOrThrow("RABBITMQ_PORT")),
    RABBITMQ_USER: getEnvOrThrow("RABBITMQ_USER"),
    RABBITMQ_PASSWORD: getEnvOrThrow("RABBITMQ_PASSWORD"),
    DMDATA_PROXY_URL: getEnvOrThrow("DMDATA_PROXY_URL"),
    SLACK_WEBHOOK_URL: getEnvOrThrow("SLACK_WEBHOOK_URL"),
    GO_RUSH_URL: getEnvOrThrow("GO_RUSH_URL"),
    postgres: getEnvOrThrow("POSTGRES_URL"),
  };
}

export const config = getConfig();
