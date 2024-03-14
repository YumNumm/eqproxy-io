import { parseNumberOrNull } from '../extension/parseIntOrNull'
import { EqmonitorTelegramSchema } from './telegram_v3'
import * as dmdata from '@dmdata/telegram-json-types'

export namespace TsunamiInformation {
  export type Comment = {
    free?: string
    warning?: {
      text: string
      codes: string[]
    }
  }

  export interface CancelBody {
    text: string
  }

  export interface PublicBodyVTSE41Tsunami {
    forecasts: TsunamiForecast[]
  }

  export interface PublicBodyVTSE51Tsunami {
    forecasts: TsunamiForecast[]
    observations: TsunamiObservation[] | undefined
  }

  export interface PublicBodyVTSE52Tsunami {
    observations: TsunamiObservation[] | undefined
    estimations: TsunamiEstimation[]
  }

  /// VTSE41/51で出現 津波の予測情報
  export interface TsunamiForecast {
    code: string
    name: string
    /// 津波警報などの種別
    // * 種別コードを用いる *
    kind: string
    lastKind: string
    /// 対象津波予報区に対しての津波の到達予想時刻
    firstHeight: TsunamiForecastFirstHeight | undefined
    maxHeight: TsunamiForecastMaxHeight | undefined
    stations: TsunamiForecastStation[] | undefined
  }

  export interface TsunamiForecastFirstHeight {
    arrivalTime: string | undefined
    condition:
      | '津波到達中と推測'
      | '第１波の到達を確認'
      | 'ただちに津波来襲と予測'
      | undefined
  }

  export interface TsunamiForecastMaxHeight {
    // 定量表現
    value: number | undefined
    isOver: boolean | undefined
    // 定性表現
    condition: '高い' | '巨大' | undefined
  }

  export interface TsunamiForecastStation {
    code: string
    name: string
    highTideTime: string
    firstHeightTime: string | undefined
    condition:
      | '津波到達中と推測'
      | '第１波の到達を確認'
      | 'ただちに津波来襲と予測'
      | undefined
  }

  export interface TsunamiObservation {
    code: string | null
    name: string | null
    stations: TsunamiObservationStation[]
  }

  export interface TsunamiObservationStation {
    code: string
    name: string
    firstHeightArrivalTime: string | undefined // undefined: 識別不能
    firstHeightInitial: '押し' | '引き' | undefined
    maxHeightTime: string | undefined
    maxHeightValue: number | undefined
    maxHeightIsOver: boolean | undefined
    // 上昇中かどうか
    maxHeightIsRising: boolean | undefined
    condition: '微弱' | '観測中' | '重要' | undefined
  }

  export interface TsunamiEstimation {
    code: string
    name: string
    firstHeightTime: string | undefined
    // 早いところでは既に津波到達と推定
    firstHeightcondition: '早いところでは既に津波到達と推定' | undefined
    maxHeightTime: string | undefined
    maxHeightValue: number | undefined
    maxHeightIsOver: boolean | undefined
    maxHeightCondition: '高い' | '巨大' | undefined
    // 津波警報以上でまだ津波の観測値が小さい場合に出現する
    // *津波観測中*
    isObserving: boolean | undefined
  }

  export interface PublicBodyVTSE41 {
    tsunami: PublicBodyVTSE41Tsunami
    earthquakes: EqmonitorTelegramSchema.Earthquake[]
    text?: string
    comments?: Comment
  }

  export interface PublicBodyVTSE51 {
    tsunami: PublicBodyVTSE51Tsunami
    earthquakes: EqmonitorTelegramSchema.Earthquake[]
    text?: string
    comments?: Comment
  }

  export interface PublicBodyVTSE52 {
    tsunami: PublicBodyVTSE52Tsunami
    earthquakes: EqmonitorTelegramSchema.Earthquake[]
    text?: string
    comments?: Comment
  }

  export interface PublicVTSE41 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: '津波警報・注意報・予報a'
    infoType: '発表' | '訂正'
    validDateTime?: string
    eventId: number
    serialNo: undefined
    body: PublicBodyVTSE41
  }

  export interface PublicVTSE51 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: '津波情報a'
    infoType: '発表' | '訂正'
    eventId: number
    serialNo: number
    body: PublicBodyVTSE51
  }

  export interface PublicVTSE52 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: '沖合の津波観測に関する情報'
    infoType: '発表' | '訂正'
    eventId: number
    serialNo: number
    body: PublicBodyVTSE52
  }

  export interface Cancel extends EqmonitorTelegramSchema.TelegramV3Base {
    type:
      | '津波警報・注意報・予報a'
      | '津波情報a'
      | '各地の満潮時刻・津波到達予想時刻に関する情報'
      | '津波観測に関する情報'
    infoType: '取消'
    eventId: number
    body: CancelBody
  }

  export type Main = (PublicVTSE41 | PublicVTSE51 | PublicVTSE52) | Cancel

  function fromVtse41(
    telegram: dmdata.TsunamiInformation.Latest.PublicVTSE41,
  ): Main[] {
    const tsunami: PublicBodyVTSE41Tsunami = {
      forecasts: telegram.body.tsunami.forecasts.map(e => {
        const data: TsunamiForecast = {
          code: e.code,
          firstHeight:
            e.firstHeight == null
              ? undefined
              : {
                  arrivalTime: e.firstHeight.arrivalTime,
                  condition: e.firstHeight.condition,
                },
          maxHeight:
            e.maxHeight == null
              ? undefined
              : {
                  value:
                    parseNumberOrNull(e.maxHeight.height.value) ?? undefined,
                  condition: e.maxHeight.height.condition,
                  isOver: e.maxHeight.height.over,
                },
          kind: e.kind.code,
          lastKind: e.kind.lastKind.code,
          name: e.name,
          stations: undefined,
        }
        return data
      }),
    }
    const body: PublicBodyVTSE41 = {
      tsunami: tsunami,
      comments: telegram.body.comments,
      text: telegram.body.text,
      earthquakes: telegram.body.earthquakes.map(e => {
        return EqmonitorTelegramSchema.dmdataEqToEarthquake(e)
      }),
    }

    const eventIds = telegram.eventId.split(' ').map(s => parseInt(s))
    const results: Main[] = []
    for (const eventId of eventIds) {
      const result: PublicVTSE41 = {
        eventId: eventId,
        infoType: telegram.infoType,
        pressTime: telegram.pressDateTime,
        schemaType: 'tsunami-information',
        serialNo: telegram.serialNo ?? undefined,
        status: telegram.status,
        type: telegram.type,
        headline: telegram.headline ?? undefined,
        reportTime: telegram.reportDateTime,
        validTime: telegram.validDateTime,
        body: body,
      }
      results.push(result)
    }
    return results
  }

  function fromVtse51(
    telegram: dmdata.TsunamiInformation.Latest.PublicVTSE51,
  ): Main[] {
    const tsunami: PublicBodyVTSE51Tsunami = {
      forecasts: telegram.body.tsunami.forecasts.map(e => {
        const data: TsunamiForecast = {
          code: e.code,
          firstHeight:
            e.firstHeight == null
              ? undefined
              : {
                  arrivalTime: e.firstHeight.arrivalTime,
                  condition: e.firstHeight.condition,
                },
          maxHeight:
            e.maxHeight == null
              ? undefined
              : {
                  value:
                    parseNumberOrNull(e.maxHeight?.height.value) ?? undefined,
                  condition: e.maxHeight.height.condition,
                  isOver: e.maxHeight.height.over,
                },
          kind: e.kind.code,
          lastKind: e.kind.lastKind.code,
          name: e.name,
          stations: e.stations?.map(s => {
            return {
              code: s.code,
              name: s.name,
              highTideTime: s.highTideDateTime,
              firstHeightTime: s.firstHeight.arrivalTime,
              condition: s.firstHeight.condition,
            }
          }),
        }
        return data
      }),
      observations:
        telegram.body.tsunami.observations == null
          ? undefined
          : telegram.body.tsunami.observations.map(e => {
              const data: TsunamiObservation = {
                code: e.code,
                name: e.name,
                stations: e.stations.map(s => {
                  const data: TsunamiObservationStation = {
                    code: s.code,
                    firstHeightArrivalTime: s.firstHeight.arrivalTime,
                    firstHeightInitial: s.firstHeight.initial,
                    maxHeightTime: s.maxHeight.dateTime,
                    maxHeightValue:
                      parseNumberOrNull(s.maxHeight?.height?.value) ??
                      undefined,
                    maxHeightIsOver: s.maxHeight.height?.over,
                    maxHeightIsRising:
                      s.maxHeight.height?.condition == '上昇中',
                    condition: s.maxHeight.condition,
                    name: s.name,
                  }
                  return data
                }),
              }
              return data
            }),
    }
    const body: PublicBodyVTSE51 = {
      tsunami: tsunami,
      comments: telegram.body.comments,
      text: telegram.body.text,
      earthquakes: telegram.body.earthquakes.map(e => {
        return EqmonitorTelegramSchema.dmdataEqToEarthquake(e)
      }),
    }

    const eventIds = telegram.eventId.split(' ').map(s => parseInt(s))
    const results: Main[] = []
    for (const eventId of eventIds) {
      const result: PublicVTSE51 = {
        eventId: eventId,
        infoType: telegram.infoType,
        pressTime: telegram.pressDateTime,
        schemaType: 'tsunami-information',
        serialNo: parseNumberOrNull(telegram.serialNo) ?? 0,
        status: telegram.status,
        type: telegram.type,
        headline: telegram.headline ?? undefined,
        reportTime: telegram.reportDateTime,
        validTime: telegram.validDateTime,
        body: body,
      }
      results.push(result)
    }
    return results
  }

  function fromVtse52(
    telegram: dmdata.TsunamiInformation.Latest.PublicVTSE52,
  ): Main[] {
    const tsunami: PublicBodyVTSE52Tsunami = {
      observations:
        telegram.body.tsunami.observations == null
          ? undefined
          : telegram.body.tsunami.observations.map(e => {
              const data: TsunamiObservation = {
                code: e.code,
                name: e.name,
                stations: e.stations.map(s => {
                  const data: TsunamiObservationStation = {
                    code: s.code,
                    firstHeightArrivalTime: s.firstHeight.arrivalTime,
                    firstHeightInitial: s.firstHeight.initial,
                    maxHeightTime: s.maxHeight.dateTime,
                    maxHeightValue:
                      parseNumberOrNull(s.maxHeight.height?.value) ?? undefined,
                    maxHeightIsOver: s.maxHeight.height?.over,
                    maxHeightIsRising:
                      s.maxHeight.height?.condition == '上昇中',
                    condition: s.maxHeight.condition,
                    name: s.name,
                  }
                  return data
                }),
              }
              return data
            }),
      estimations: telegram.body.tsunami.estimations.map(e => {
        const data: TsunamiEstimation = {
          code: e.code,
          firstHeightcondition: e.firstHeight.condition,
          firstHeightTime: e.firstHeight.arrivalTime,
          isObserving:
            e.firstHeight.condition == '早いところでは既に津波到達と推定',
          maxHeightCondition: e.maxHeight.height?.condition,
          maxHeightIsOver: e.maxHeight.height?.over,
          maxHeightTime: e.maxHeight.dateTime,
          maxHeightValue:
            parseNumberOrNull(e.maxHeight.height?.value) ?? undefined,
          name: e.name,
        }
        return data
      }),
    }
    const body: PublicBodyVTSE52 = {
      tsunami: tsunami,
      comments: telegram.body.comments,
      text: telegram.body.text,
      earthquakes: telegram.body.earthquakes.map(e => {
        return EqmonitorTelegramSchema.dmdataEqToEarthquake(e)
      }),
    }

    const eventIds = telegram.eventId.split(' ').map(s => parseInt(s))
    const results: Main[] = []
    for (const eventId of eventIds) {
      const result: PublicVTSE52 = {
        eventId: eventId,
        infoType: telegram.infoType,
        pressTime: telegram.pressDateTime,
        schemaType: 'tsunami-information',
        serialNo: parseNumberOrNull(telegram.serialNo) ?? 0,
        status: telegram.status,
        type: telegram.type,
        headline: telegram.headline ?? undefined,
        reportTime: telegram.reportDateTime,
        validTime: telegram.validDateTime,

        body: body,
      }
      results.push(result)
    }
    return results
  }

  function fromCancel(
    telegram: dmdata.TsunamiInformation.Latest.Cancel,
  ): Main[] {
    const eventIds = telegram.eventId.split(' ').map(s => parseInt(s))
    const results: Main[] = []
    const body: CancelBody = {
      text: telegram.body.text,
    }
    for (const eventId of eventIds) {
      const result: Cancel = {
        eventId: eventId,
        pressTime: telegram.pressDateTime,
        schemaType: 'tsunami-information',
        serialNo: parseNumberOrNull(telegram.serialNo) ?? 0,
        status: telegram.status,
        headline: telegram.headline ?? undefined,
        reportTime: telegram.reportDateTime,
        validTime: telegram.validDateTime,
        infoType: telegram.infoType,
        type: telegram.type,
        body: body,
      }
      results.push(result)
    }
    return results
  }

  export function fromTsunamiInformation(
    telegram:
      | dmdata.TsunamiInformation.Latest.PublicVTSE41
      | dmdata.TsunamiInformation.Latest.PublicVTSE51
      | dmdata.TsunamiInformation.Latest.PublicVTSE52
      | dmdata.TsunamiInformation.Latest.Cancel,
  ): Main[] {
    const results: Main[] = []
    const eventIds: number[] = telegram.eventId.split(' ').map(s => parseInt(s))
    for (const eventId of eventIds) {
      if (telegram.infoType == '取消') {
        results.push(...fromCancel(telegram))
      } else {
        switch (telegram.type) {
          case '津波警報・注意報・予報a':
            results.push(...fromVtse41(telegram))
            break
          case '津波情報a':
            results.push(...fromVtse51(telegram))
            break
          case '沖合の津波観測に関する情報':
            results.push(...fromVtse52(telegram))
            break
        }
      }
    }
    return results
  }
}
