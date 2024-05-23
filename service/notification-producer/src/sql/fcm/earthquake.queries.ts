/** Types generated for queries found in "src/sql/fcm/earthquake.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type jma_intensity = '!5-' | '0' | '1' | '2' | '3' | '4' | '5+' | '5-' | '6+' | '6-' | '7';

/** 'FcmEarthquake' parameters type */
export interface IFcmEarthquakeParams {
  items: readonly ({
    region_id: number | null | void,
    min_jma_intensity: jma_intensity | null | void
  })[];
}

/** 'FcmEarthquake' return type */
export interface IFcmEarthquakeResult {
  created_at: Date;
  fcm_token: string;
  id: string;
  notification_volume: string | null;
  updated_at: Date;
}

/** 'FcmEarthquake' query type */
export interface IFcmEarthquakeQuery {
  params: IFcmEarthquakeParams;
  result: IFcmEarthquakeResult;
}

const fcmEarthquakeIR: any = {"usedParamSet":{"items":true},"params":[{"name":"items","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"region_id","required":false},{"name":"min_jma_intensity","required":false}]},"locs":[{"a":330,"b":335}]}],"statement":"select\n   u.fcm_token, notification_settings.*\nFROM\n  public.devices AS u\nINNER JOIN\n  public.devices_notification_settings AS notification_settings\n    ON u.id = notification_settings.id\nWHERE\n  u.id IN (\n    SELECT id\n    FROM\n      public.devices_earthquake_settings\n    WHERE\n      (region_id, min_jma_intensity) IN (\n        :items\n      )\n    )\n  AND fcm_token IS NOT NULL"};

/**
 * Query generated from SQL:
 * ```
 * select
 *    u.fcm_token, notification_settings.*
 * FROM
 *   public.devices AS u
 * INNER JOIN
 *   public.devices_notification_settings AS notification_settings
 *     ON u.id = notification_settings.id
 * WHERE
 *   u.id IN (
 *     SELECT id
 *     FROM
 *       public.devices_earthquake_settings
 *     WHERE
 *       (region_id, min_jma_intensity) IN (
 *         :items
 *       )
 *     )
 *   AND fcm_token IS NOT NULL
 * ```
 */
export const fcmEarthquake = new PreparedQuery<IFcmEarthquakeParams,IFcmEarthquakeResult>(fcmEarthquakeIR);


