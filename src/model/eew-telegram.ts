import { EqmonitorTelegramSchema } from './telegram_v3'
import * as dmdata from '@dmdata/telegram-json-types'

export namespace EewInformation {
  export type ForecastMaxInt = {
    from: EqmonitorTelegramSchema.JmaIntensity | '不明'
    to: EqmonitorTelegramSchema.JmaIntensity | '不明' | 'over'
  }

  export type ForecastMaxLgInt = {
    from: EqmonitorTelegramSchema.JmaLgIntensity | '不明'
    to: EqmonitorTelegramSchema.JmaLgIntensity | '不明' | 'over'
  }

  export type Main = EewInformation | EewInformationCancel

  export interface EewInformation
    extends EqmonitorTelegramSchema.TelegramV3Base {
    id?: number
    hash?: string
    eventId: number
    type: '緊急地震速報（地震動予報）'

    schemaType: 'eew-information'
    status: '通常' | '訓練' | '試験'
    infoType: '発表' | '訂正'
    pressTime: string
    reportTime: string
    serialNo: number
    headline?: string
    body: {
      magnitude?: number
      hypocenter: {
        coordinate: {
          lat: number
          lon: number
        }
        code: string
        name: string
      }
      depth?: number
      forecastMaxInt?: ForecastMaxInt
      forecastMaxLgInt?: ForecastMaxLgInt
      regions: Region[]
      originTime?: string
      arrivalTime: string
      accuracy: Accuracy
      isPlum: boolean
      isLastInfo: boolean
      isCanceled: boolean
      isWarning: boolean
    }
  }
  export interface Region {
    code: string
    name: string
    isPlum: boolean
    isWarning: boolean
    forecastMaxInt: ForecastMaxInt
    forecastMaxLgInt?: ForecastMaxLgInt
    arrivalTime?: string // 予想到達時刻 / undefinedの場合は`既に主要動到達と推測` / PLUM法の場合、その階級震度を予測した時刻
  }

  export interface Accuracy {
    epicenters: [
      '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8',
      '0' | '1' | '2' | '3' | '4' | '9',
    ]
    depth: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    magnitudeCalculation: '0' | '2' | '3' | '4' | '5' | '6' | '8'
    numberOfMagnitudeCalculation: '0' | '1' | '2' | '3' | '4' | '5'
  }

  export interface EewInformationCancel
    extends EqmonitorTelegramSchema.TelegramV3Base {
    id?: number
    hash?: string
    eventId: number
    type: '緊急地震速報（地震動予報）'
    schemaType: 'eew-information'
    status: '通常' | '訓練' | '試験'
    infoType: '取消'
    pressTime: string
    reportTime: string
    serialNo: number
    headline?: string
    body: {
      isLastInfo: boolean
      isCanceled: boolean
      text: string
    }
  }

  export function fromEewInformation(
    telegram:
      | dmdata.EewInformation.Latest.PublicCommon
      | dmdata.EewInformation.Latest.Cancel,
  ): Main {
    if (telegram.type !== '緊急地震速報（地震動予報）') {
      throw new Error('type is not 緊急地震速報（地震動予報）')
    }
    if (telegram.infoType == '取消') {
      const data: EewInformationCancel = {
        eventId: Number(telegram.eventId),
        type: telegram.type,
        schemaType: telegram._schema.type,
        status: telegram.status,
        infoType: telegram.infoType,
        pressTime: telegram.pressDateTime,
        reportTime: telegram.reportDateTime,
        serialNo: Number(telegram.serialNo),
        headline: telegram.headline ?? undefined,
        body: {
          isCanceled: telegram.body.isCanceled,
          isLastInfo: telegram.body.isLastInfo,
          text: telegram.body.text,
        },
      }
      return data
    } else {
      const data: EewInformation = {
        eventId: Number(telegram.eventId),
        type: telegram.type,
        schemaType: telegram._schema.type,
        status: telegram.status,
        infoType: telegram.infoType,
        pressTime: telegram.pressDateTime,
        reportTime: telegram.reportDateTime,
        serialNo: Number(telegram.serialNo),
        headline: telegram.headline ?? undefined,
        body: {
          arrivalTime: telegram.body.earthquake.arrivalTime,
          originTime: telegram.body.earthquake.originTime,
          depth: Number(telegram.body.earthquake.hypocenter.depth?.value),
          isPlum: telegram.body.earthquake.condition == '仮定震源要素',
          forecastMaxInt: {
            from: telegram.body.intensity?.forecastMaxInt.from ?? '不明',
            to: telegram.body.intensity?.forecastMaxInt.to ?? '不明',
          },
          forecastMaxLgInt: {
            from: telegram.body.intensity?.forecastMaxLgInt?.from ?? '不明',
            to: telegram.body.intensity?.forecastMaxLgInt?.to ?? '不明',
          },
          hypocenter: {
            coordinate: {
              lat: Number(
                telegram.body.earthquake.hypocenter?.coordinate.latitude.value,
              ),
              lon: Number(
                telegram.body.earthquake.hypocenter?.coordinate.longitude.value,
              ),
            },
            code: telegram.body.earthquake.hypocenter?.code,
            name: telegram.body.earthquake.hypocenter?.name,
          },
          regions:
            telegram.body.intensity?.regions.map((region): Region => {
              return {
                code: region.code,
                forecastMaxInt: region.forecastMaxInt,
                isPlum: region.isPlum,
                isWarning: region.isWarning,
                name: region.name,
                forecastMaxLgInt: region.forecastMaxLgInt,
                arrivalTime: region.arrivalTime,
              }
            }) ?? [],
          isLastInfo: telegram.body.isLastInfo,
          isCanceled: telegram.body.isCanceled,
          isWarning: telegram.body.isWarning,
          magnitude: Number(telegram.body.earthquake.magnitude?.value),
          accuracy: {
            depth: telegram.body.earthquake.hypocenter.accuracy.depth,
            epicenters: telegram.body.earthquake.hypocenter.accuracy.epicenters,
            magnitudeCalculation:
              telegram.body.earthquake.hypocenter.accuracy.magnitudeCalculation,
            numberOfMagnitudeCalculation:
              telegram.body.earthquake.hypocenter.accuracy
                .numberOfMagnitudeCalculation,
          },
        },
      }
      return data
    }
  }
}
