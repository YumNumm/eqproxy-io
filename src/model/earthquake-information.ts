import { type } from 'os'
import { EqmonitorTelegramSchema } from './telegram_v3'
import * as dmdata from '@dmdata/telegram-json-types'

export namespace EarthquakeInformation {
  export type Main = VXSE51 | VXSE52 | VXSE53 | VXSE62 | VZSE40
  export interface VXSE51 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: '震度速報'
    schemaType: 'earthquake-information'
    infoType: '発表' | '訂正'
    body: Omit<EarthquakeInformationBody, 'earthquake'>
  }

  export interface VXSE52 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: '震源に関する情報'
    schemaType: 'earthquake-information'
    infoType: '発表' | '訂正'
    serialNo: undefined
    body: Omit<EarthquakeInformationBody, 'intensity'>
  }

  export interface VXSE53 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: '震源・震度に関する情報' | '遠地地震に関する情報'
    schemaType: 'earthquake-information'
    infoType: '発表' | '訂正'
    serialNo: number
    body: EarthquakeInformationBody
  }

  export interface VXSE62 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: '長周期地震動に関する観測情報'
    schemaType: 'earthquake-information'
    infoType: '発表' | '訂正'
    serialNo: number
    body: EarthquakeInformationBody
  }

  export interface VZSE40 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: '地震・津波に関するお知らせ'
    schemaType: 'earthquake-information'
    infoType: '発表' | '訂正'
    eventId: number
    infoKind: '地震・津波に関するお知らせ'
    body: {
      text: string
    }
  }

  export interface EarthquakeInformationBody {
    earthquake: EqmonitorTelegramSchema.Earthquake
    intensity: Intensity | undefined
    text: string | undefined
    comment: Omit<EqmonitorTelegramSchema.Comments, 'var'>
  }

  export interface Intensity {
    maxInt: EqmonitorTelegramSchema.JmaIntensity
    maxLgInt: EqmonitorTelegramSchema.JmaLgIntensity | undefined
    lgCategory: '1' | '2' | '3' | '4' | undefined
    prefectures: RegionIntensity[]
    regions: RegionIntensity[]
    cities: RegionIntensity[] | undefined
    stations: RegionIntensity[] | undefined
  }

  export interface RegionIntensity {
    maxInt: EqmonitorTelegramSchema.JmaIntensity | undefined | '!5-'
    maxLgInt: EqmonitorTelegramSchema.JmaLgIntensity | undefined
    code: string
    name: string
  }

  export function fromEarthquakeInformation(
    telegram:
      | dmdata.EarthquakeInformation.Latest.PublicVXSE51
      | dmdata.EarthquakeInformation.Latest.PublicVXSE52
      | dmdata.EarthquakeInformation.Latest.PublicVXSE53
      | dmdata.EarthquakeInformation.Latest.PublicVXSE62
      | dmdata.EarthquakeInformation.Latest.PublicVZSE40
      | dmdata.EarthquakeInformation.Latest.Cancel,
  ): EqmonitorTelegramSchema.TelegramV3 {
    if (telegram.infoType === '取消') {
      // TODO(YumNumm)
      throw Error()
    }
    switch (telegram.type) {
      case '震度速報':
        const vxse51: VXSE51 = {
          eventId: Number(telegram.eventId),
          infoType: telegram.infoType,
          schemaType: telegram._schema.type,
          pressTime: telegram.pressDateTime,
          status: telegram.status,
          type: '震度速報',
          headline: telegram.headline ?? undefined,
          reportTime: telegram.reportDateTime,
          validTime: telegram.validDateTime,
          serialNo: undefined,
          body: {
            intensity: {
              maxInt: telegram.body.intensity.maxInt,
              prefectures: telegram.body.intensity.prefectures.map(
                prefecture => {
                  const e: RegionIntensity = {
                    code: prefecture.code,
                    maxInt: prefecture.maxInt,
                    maxLgInt: undefined,
                    name: prefecture.name,
                  }
                  return e
                },
              ),
              regions: telegram.body.intensity.regions.map(region => {
                const e: RegionIntensity = {
                  code: region.code,
                  maxInt: region.maxInt,
                  maxLgInt: undefined,
                  name: region.name,
                }
                return e
              }),
              cities: undefined,
              lgCategory: undefined,
              maxLgInt: undefined,
              stations: undefined,
            },
            comment: telegram.body.comments,
            text: telegram.body.text,
          },
        }
        return vxse51
      case '震源に関する情報':
        const vxse52: VXSE52 = {
          eventId: Number(telegram.eventId),
          infoType: telegram.infoType,
          schemaType: telegram._schema.type,
          pressTime: telegram.pressDateTime,
          status: telegram.status,
          type: '震源に関する情報',
          headline: telegram.headline ?? undefined,
          reportTime: telegram.reportDateTime,
          validTime: telegram.validDateTime,
          serialNo: undefined,
          body: {
            earthquake: {
              arrivalTime: telegram.body.earthquake.arrivalTime,
              originTime: telegram.body.earthquake.originTime,
              hypocenter: {
                name: telegram.body.earthquake.hypocenter.name,
                code: telegram.body.earthquake.hypocenter.code,
                depth: Number(
                  telegram.body.earthquake.hypocenter.depth.value ?? undefined,
                ),
                coordinate:
                  telegram.body.earthquake.hypocenter.coordinate?.latitude != undefined
                    ? {
                        lat: Number(
                          telegram.body.earthquake.hypocenter.coordinate
                            .latitude?.value,
                        ),
                        lon: Number(
                          telegram.body.earthquake.hypocenter.coordinate
                            .longitude.value,
                        ),
                      }
                    : undefined,
                detailed: telegram.body.earthquake.hypocenter.detailed,
              },
              magnitude: {
                condition: telegram.body.earthquake.magnitude.condition,
                value: Number(
                  telegram.body.earthquake.magnitude.value ?? undefined,
                ),
              },
            },
            comment: telegram.body.comments,
            text: telegram.body.text,
          },
        }
        return vxse52
      case '震源・震度に関する情報':
      case '長周期地震動に関する観測情報': {
        let intensityData: Intensity | undefined
        if (telegram.type == '長周期地震動に関する観測情報') {
          if (telegram.body.intensity !== undefined) {
            intensityData = {
              maxInt: telegram.body.intensity.maxInt,
              prefectures: telegram.body.intensity.prefectures.map(
                prefecture => {
                  const e: RegionIntensity = {
                    code: prefecture.code,
                    maxInt: prefecture.maxInt,
                    maxLgInt: undefined,
                    name: prefecture.name,
                  }
                  return e
                },
              ),
              regions: telegram.body.intensity.regions.map(region => {
                const e: RegionIntensity = {
                  code: region.code,
                  maxInt: region.maxInt,
                  maxLgInt: region.maxLgInt,
                  name: region.name,
                }
                return e
              }),
              stations: telegram.body.intensity.stations?.map(e => {
                const data: RegionIntensity = {
                  code: e.code,
                  maxInt: e.int,
                  maxLgInt: e.lgInt,
                  name: e.name,
                }
                return data
              }),
              cities: undefined,
              lgCategory: telegram.body.intensity.lgCategory,
              maxLgInt: telegram.body.intensity.maxLgInt,
            }
          }
          const vxse62: VXSE62 = {
            eventId: Number(telegram.eventId),
            infoType: telegram.infoType,
            schemaType: telegram._schema.type,
            pressTime: telegram.pressDateTime,
            status: telegram.status,
            type: telegram.type,
            headline: telegram.headline ?? undefined,
            reportTime: telegram.reportDateTime,
            validTime: telegram.validDateTime,
            serialNo: Number(telegram.serialNo),
            body: {
              earthquake: {
                arrivalTime: telegram.body.earthquake.arrivalTime,
                originTime: telegram.body.earthquake.originTime,
                hypocenter: {
                  name: telegram.body.earthquake.hypocenter.name,
                  code: telegram.body.earthquake.hypocenter.code,
                  depth: Number(
                    telegram.body.earthquake.hypocenter.depth.value ??
                      undefined,
                  ),
                  coordinate:
                    telegram.body.earthquake.hypocenter.coordinate?.latitude != undefined
                      ? {
                          lat: Number(
                            telegram.body.earthquake.hypocenter.coordinate
                              .latitude.value,
                          ),
                          lon: Number(
                            telegram.body.earthquake.hypocenter.coordinate
                              .longitude.value,
                          ),
                        }
                      : undefined,
                  detailed: telegram.body.earthquake.hypocenter.detailed,
                },
                magnitude: {
                  condition: telegram.body.earthquake.magnitude.condition,
                  value: Number(
                    telegram.body.earthquake.magnitude.value ?? undefined,
                  ),
                },
              },
              intensity: intensityData,
              comment: telegram.body.comments,
              text: telegram.body.text,
            },
          }
          return vxse62
        } else {
          if (telegram.body.intensity !== undefined) {
            intensityData = {
              maxInt: telegram.body.intensity.maxInt,
              prefectures: telegram.body.intensity.prefectures.map(
                prefecture => {
                  const e: RegionIntensity = {
                    code: prefecture.code,
                    maxInt: prefecture.maxInt,
                    maxLgInt: undefined,
                    name: prefecture.name,
                  }
                  return e
                },
              ),
              regions: telegram.body.intensity.regions.map(region => {
                const e: RegionIntensity = {
                  code: region.code,
                  maxInt: region.maxInt,
                  maxLgInt: undefined,
                  name: region.name,
                }
                return e
              }),
              stations: telegram.body.intensity.stations?.map(e => {
                const data: RegionIntensity = {
                  code: e.code,
                  maxInt: e.int,
                  maxLgInt: undefined,
                  name: e.name,
                }
                return data
              }),
              cities: telegram.body.intensity.cities?.map(e => {
                const data: RegionIntensity = {
                  code: e.code,
                  maxInt: e.maxInt,
                  maxLgInt: undefined,
                  name: e.name,
                }
                return data
              }),
              lgCategory: undefined,
              maxLgInt: undefined,
            }
          }
          const vxse53: VXSE53 = {
            eventId: Number(telegram.eventId),
            infoType: telegram.infoType,
            schemaType: telegram._schema.type,
            pressTime: telegram.pressDateTime,
            status: telegram.status,
            type: telegram.type,
            headline: telegram.headline ?? undefined,
            reportTime: telegram.reportDateTime,
            validTime: telegram.validDateTime,
            serialNo: Number(telegram.serialNo),
            body: {
              earthquake: {
                arrivalTime: telegram.body.earthquake.arrivalTime,
                originTime: telegram.body.earthquake.originTime,
                hypocenter: {
                  name: telegram.body.earthquake.hypocenter.name,
                  code: telegram.body.earthquake.hypocenter.code,
                  depth: Number(
                    telegram.body.earthquake.hypocenter.depth.value ??
                      undefined,
                  ),
                  coordinate:
                    telegram.body.earthquake.hypocenter.coordinate?.latitude != undefined
                      ? {
                          lat: Number(
                            telegram.body.earthquake.hypocenter.coordinate
                              .latitude.value,
                          ),
                          lon: Number(
                            telegram.body.earthquake.hypocenter.coordinate
                              .longitude.value,
                          ),
                        }
                      : undefined,
                  detailed: telegram.body.earthquake.hypocenter.detailed,
                },
                magnitude: {
                  condition: telegram.body.earthquake.magnitude.condition,
                  value: Number(
                    telegram.body.earthquake.magnitude.value ?? undefined,
                  ),
                },
              },
              intensity: intensityData,
              comment: telegram.body.comments,
              text: telegram.body.text,
            },
          }
          return vxse53
        }
      }
      case '地震・津波に関するお知らせ': {
        const vzse40: VZSE40 = {
          eventId: Number(telegram.eventId),
          infoType: telegram.infoType,
          schemaType: telegram._schema.type,
          infoKind: telegram.infoKind,
          pressTime: telegram.pressDateTime,
          status: telegram.status,
          type: '地震・津波に関するお知らせ',
          headline: telegram.headline ?? undefined,
          reportTime: telegram.reportDateTime,
          validTime: telegram.validDateTime,
          serialNo: undefined,
          body: {
            text: telegram.body.text,
          },
        }
        return vzse40
      }
    }
  }
}
