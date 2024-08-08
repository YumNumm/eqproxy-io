/** Types generated for queries found in "src/sql/fcm/all_users.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'AllUsers' parameters type */
export type IAllUsersParams = void;

/** 'AllUsers' return type */
export interface IAllUsersResult {
  fcm_token: string;
}

/** 'AllUsers' query type */
export interface IAllUsersQuery {
  params: IAllUsersParams;
  result: IAllUsersResult;
}

const allUsersIR: any = {"usedParamSet":{},"params":[],"statement":"select\n  u.fcm_token\nFROM\n  public.devices AS u"};

/**
 * Query generated from SQL:
 * ```
 * select
 *   u.fcm_token
 * FROM
 *   public.devices AS u
 * ```
 */
export const allUsers = new PreparedQuery<IAllUsersParams,IAllUsersResult>(allUsersIR);


