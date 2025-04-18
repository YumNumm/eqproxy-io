import { Client } from "pg";
import { config } from "../config/config";
import { allUsers } from "./fcm/all_users.queries";
import { fcmEarthquake, type jma_intensity } from "./fcm/earthquake.queries";
import { fcmEew } from "./fcm/eew.queries";

export class SqlService {
  constructor() {
    this.client = new Client({
      connectionString: config.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  private client: Client;
  async start() {
    await this.client.connect();
  }

  async fetchEarthquake(
    params: {
      region_id: number;
      min_jma_intensity: JmaIntensity;
    }[]
  ) {
    // min_jma_intensityについて、enumのindexが小さいものをすべて取得する
    const regions: {
      region_id: number | null;
      min_jma_intensity: jma_intensity | null;
    }[] = [];
    for (const param of params) {
      const intensities = getLowerOrEqualJmaIntensities(
        param.min_jma_intensity
      );
      for (const intensity of intensities) {
        regions.push({
          region_id: param.region_id,
          min_jma_intensity: intensity,
        });
      }
    }
    const result = await fcmEarthquake.run(
      {
        items: regions,
      },
      this.client
    );
    return result;
  }

  async fetchAllUsers() {
    const fn: () => void = () => {};
    const result = await allUsers.run(fn(), this.client);
    return result;
  }

  async getUserByToken(token: string) {
    const result = await this.client.query(
      "SELECT * FROM public.devices WHERE fcm_token = $1",
      [token]
    );
    return result.rows[0];
  }

  async fetchEew(
    params: {
      region_id: number;
      min_jma_intensity: JmaIntensity;
    }[]
  ) {
    const regions: {
      region_id: number | null;
      min_jma_intensity: jma_intensity | null;
    }[] = [];
    for (const param of params) {
      const intensities = getLowerOrEqualJmaIntensities(
        param.min_jma_intensity
      );
      for (const intensity of intensities) {
        regions.push({
          region_id: param.region_id,
          min_jma_intensity: intensity,
        });
      }
    }
    const result = await fcmEew.run(
      {
        items: regions,
      },
      this.client
    );
    return result;
  }
}

export const sqlService = new SqlService();

export enum JmaIntensity {
  Int0 = "0",
  Int1 = "1",
  Int2 = "2",
  Int3 = "3",
  Int4 = "4",
  Int5Minus = "5-",
  Int5Plus = "5+",
  Int6Minus = "6-",
  Int6Plus = "6+",
  Int7 = "7",
}

function getLowerOrEqualJmaIntensities(
  intensity: JmaIntensity
): JmaIntensity[] {
  const intensities = Object.values(JmaIntensity);
  const index = intensities.indexOf(intensity);
  return intensities.slice(0, index + 1);
}
