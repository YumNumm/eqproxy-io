import { EewInformation, TelegramJSONMain } from '@dmdata/telegram-json-types'
import { EewInformation as EqEewInformation } from './eew-telegram'
import {
  EarthquakeInformation,
  EarthquakeInformation as EqEarthquakeInformation,
} from './earthquake-information'
import {
  TsunamiInformation as EqTsunamiInformation,
  TsunamiInformation,
} from './tsunami-information'
import * as dmdata from '@dmdata/telegram-json-types'
import { EarthquakeHypocenterUpdate } from './earthquake-hypocenter-update'
import { EarthquakeNankai } from './earthquake-nankai'
import { EarthquakeExplanation } from './earthquake-explanation'
import { parseNumber, parseNumberOrNull } from '../extension/parseIntOrNull'

export namespace EqmonitorTelegramSchema {
  export type TelegramV3 =
    | EarthquakeInformation.Main
    | EarthquakeExplanation.Main
    | EarthquakeHypocenterUpdate.Main
    | EarthquakeNankai.Main
    | EqEewInformation.Main
    | TsunamiInformation.Main

  export interface TelegramV3Base {
    id?: number
    hash?: string
    eventId: number
    type:
      | '緊急地震速報（地震動予報）' // vxse45
      | '津波警報・注意報・予報a' // vtse41
      | '津波情報a' // vtse51
      | '沖合の津波観測に関する情報' // vtse52
      | '各地の満潮時刻・津波到達予想時刻に関する情報' // Cancel
      | '津波観測に関する情報' // Cancel
      | '震度速報' // VXSE51
      | '震源に関する情報' // VXSE52
      | '震源・震度に関する情報' // VXSE53
      | '遠地地震に関する情報' // VXSE53
      | '地震の活動状況等に関する情報' // vxse56
      | '地震回数に関する情報' // vxse60
      | '顕著な地震の震源要素更新のお知らせ' // vxse61
      | '長周期地震動に関する観測情報' // vxse62
      | '地震・津波に関するお知らせ' // VZSE40
      | '南海トラフ地震臨時情報' // vyse50
      | '南海トラフ地震関連解説情報' // vyse51,52
    schemaType:
      | 'eew-information'
      | 'earthquake-information'
      | 'earthquake-explanation'
      | 'earthquake-counts'
      | 'earthquake-hypocenter-update'
      | 'earthquake-nankai'
      | 'tsunami-information'
    status: '通常' | '訓練' | '試験'
    infoType: '発表' | '訂正' | '遅延' | '取消'
    pressTime: string
    reportTime: string
    validTime?: string
    serialNo?: number
    headline?: string
    body: Object
  }

  export type JmaIntensity =
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5-'
    | '5+'
    | '6-'
    | '6+'
    | '7'

  export type JmaLgIntensity = '0' | '1' | '2' | '3' | '4'

  export interface CodeName {
    code: string
    name: string
  }

  export interface Comments {
    free?: string
    forecast?: {
      text: string
      codes: string[]
    }
    var?: {
      text: string
      codes: string[]
    }
  }

  export interface Earthquake {
    originTime: string
    arrivalTime: string
    hypocenter: {
      name: string
      code: string
      depth: number | undefined // 0: ごく浅い / 700: 700km以上 / undefined: 不明
      detailed?: {
        code: string
        name: string
      }
      coordinate:
        | {
            lat: number
            lon: number
          }
        | undefined
    }
    magnitude: {
      value: number | undefined
      condition: 'Ｍ不明' | 'Ｍ８を超える巨大地震' | undefined
    }
  }

  // dmdata.Components.Earthquakeの拡張関数を定義
  export function dmdataEqToEarthquake(
    eq: dmdata.Components.Earthquake,
  ): Earthquake {
    return {
      originTime: eq.originTime,
      arrivalTime: eq.arrivalTime,
      hypocenter: {
        code: eq.hypocenter.code,
        depth: parseNumberOrNull(eq.hypocenter.depth.value ?? undefined) ?? undefined,
        name: eq.hypocenter.name,
        detailed:
          eq.hypocenter.detailed == null ? undefined : eq.hypocenter.detailed,
        coordinate:
          eq.hypocenter.coordinate?.latitude != undefined
            ? {
                lat: parseNumber(eq.hypocenter.coordinate.latitude.value),
                lon: parseNumber(eq.hypocenter.coordinate.longitude.value),
              }
            : undefined,
      },
      magnitude: {
        value: parseNumberOrNull(eq.magnitude.value) ?? undefined,
        condition: eq.magnitude.condition,
      },
    }
  }

  export function fromDmdataToTelegramV3(
    telegram: TelegramJSONMain,
  ): EqmonitorTelegramSchema.TelegramV3[] {
    if (telegram._schema.type == 'eew-information') {
      return [
        EqEewInformation.fromEewInformation(
          telegram as
            | EewInformation.Latest.PublicCommon
            | EewInformation.Latest.Cancel,
        ),
      ]
    }
    if (telegram._schema.type == 'earthquake-information') {
      return [
        EqEarthquakeInformation.fromEarthquakeInformation(
          telegram as
            | dmdata.EarthquakeInformation.Latest.PublicVXSE51
            | dmdata.EarthquakeInformation.Latest.PublicVXSE52
            | dmdata.EarthquakeInformation.Latest.PublicVXSE53
            | dmdata.EarthquakeInformation.Latest.PublicVXSE62
            | dmdata.EarthquakeInformation.Latest.PublicVZSE40
            | dmdata.EarthquakeInformation.Latest.Cancel,
        ),
      ]
    }
    if (telegram._schema.type == 'tsunami-information') {
      return EqTsunamiInformation.fromTsunamiInformation(
        telegram as dmdata.TsunamiInformation.Latest.Main,
      )
    }
    if (telegram._schema.type == 'earthquake-hypocenter-update') {
      return [
        EarthquakeHypocenterUpdate.fromEarthquakeHypocenterUpdate(
          telegram as dmdata.EarthquakeHypocenterUpdate.Latest.Main,
        ),
      ]
    }
    if (telegram._schema.type == 'earthquake-nankai') {
      const data = telegram as dmdata.EarthquakeNankai.Latest.Main
      return [EarthquakeNankai.fromEarthquakeNankai(data)]
    }
    if (telegram._schema.type == 'earthquake-explanation') {
      return [
        EarthquakeExplanation.fromEarthquakeExplanation(
          telegram as dmdata.EarthquakeExplanation.Latest.Main,
        ),
      ]
    }

    throw new Error('Invalid schema type')
  }
}
