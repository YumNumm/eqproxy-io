/** Types generated for queries found in "src/sql/fcm/eew.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

export type jma_intensity = '!5-' | '0' | '1' | '2' | '3' | '4' | '5+' | '5-' | '6+' | '6-' | '7';

/** 'FcmEew' parameters type */
export interface IFcmEewParams {
  items: readonly ({
    region_id: number | null | void,
    min_jma_intensity: jma_intensity | null | void
  })[];
}

/** 'FcmEew' return type */
export interface IFcmEewResult {
  fcm_token: string;
}

/** 'FcmEew' query type */
export interface IFcmEewQuery {
  params: IFcmEewParams;
  result: IFcmEewResult;
}

const fcmEewIR: any = {"usedParamSet":{"items":true},"params":[{"name":"items","required":false,"transform":{"type":"pick_array_spread","keys":[{"name":"region_id","required":false},{"name":"min_jma_intensity","required":false}]},"locs":[{"a":184,"b":189}]}],"statement":"select\n   u.fcm_token\nFROM\n  public.devices AS u\nWHERE\n  u.id IN (\n    SELECT id\n    FROM\n      public.devices_eew_settings\n    WHERE\n      (region_id, min_jma_intensity) IN (\n        :items\n      )\n    )\n  AND fcm_token IS NOT NULL"};

/**
 * Query generated from SQL:
 * ```
 * select
 *    u.fcm_token
 * FROM
 *   public.devices AS u
 * WHERE
 *   u.id IN (
 *     SELECT id
 *     FROM
 *       public.devices_eew_settings
 *     WHERE
 *       (region_id, min_jma_intensity) IN (
 *         :items
 *       )
 *     )
 *   AND fcm_token IS NOT NULL
 * ```
 */
export const fcmEew = new PreparedQuery<IFcmEewParams,IFcmEewResult>(fcmEewIR);


