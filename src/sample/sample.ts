import { DMDATA } from '@dmdata/sdk-js'
import { EqmonitorTelegramSchema } from '../model/telegram_v3'
import { TelegramJSONMain } from '@dmdata/telegram-json-types'

export namespace EqmonitorTelegramSchemaSample {
  export function vxse45Sample(): EqmonitorTelegramSchema.TelegramV3[] {
    const payload: TelegramJSONMain = {
      _originalId: 'TELEGRAM_ID',
      _schema: {
        type: 'eew-information',
        version: '1.0.0',
      },
      type: '緊急地震速報（地震動予報）',
      title: '緊急地震速報（地震動予報）',
      status: '通常',
      infoType: '発表',
      editorialOffice: '気象庁本庁',
      publishingOffice: ['気象庁'],
      pressDateTime: '2011-03-11T05:48:10Z',
      reportDateTime: '2011-03-11T14:48:10+09:00',
      targetDateTime: '2011-03-11T14:48:10+09:00',
      eventId: '20110311144640',
      serialNo: '23',
      infoKind: '緊急地震速報',
      infoKindVersion: '1.2_0',
      headline:
        '三陸沖で地震　東北　関東　北陸　甲信　東海　北海道　伊豆諸島　近畿で強い揺れ',
      body: {
        isLastInfo: false,
        isCanceled: false,
        isWarning: true,
        zones: [
          {
            code: '9920',
            name: '東北',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9931',
            name: '関東',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9934',
            name: '北陸',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9935',
            name: '甲信',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9910',
            name: '北海道',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9936',
            name: '東海',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '9932',
            name: '伊豆諸島',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '9941',
            name: '近畿',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
        ],
        prefectures: [
          {
            code: '9040',
            name: '宮城',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9030',
            name: '岩手',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9070',
            name: '福島',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9060',
            name: '山形',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9050',
            name: '秋田',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9080',
            name: '茨城',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9020',
            name: '青森',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9090',
            name: '栃木',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9150',
            name: '新潟',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9120',
            name: '千葉',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9100',
            name: '群馬',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9110',
            name: '埼玉',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9131',
            name: '東京',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9200',
            name: '長野',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9140',
            name: '神奈川',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9012',
            name: '北海道道南',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9170',
            name: '石川',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '9190',
            name: '山梨',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '9220',
            name: '静岡',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '9132',
            name: '伊豆諸島',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '9011',
            name: '北海道道央',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '9270',
            name: '大阪',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
        ],
        regions: [
          {
            code: '222',
            name: '宮城県中部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '220',
            name: '宮城県北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '221',
            name: '宮城県南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '211',
            name: '岩手県沿岸南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '213',
            name: '岩手県内陸南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '210',
            name: '岩手県沿岸北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '251',
            name: '福島県浜通り',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '240',
            name: '山形県庄内',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '242',
            name: '山形県村山',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '250',
            name: '福島県中通り',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '212',
            name: '岩手県内陸北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '243',
            name: '山形県置賜',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '252',
            name: '福島県会津',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '233',
            name: '秋田県内陸南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '300',
            name: '茨城県北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '231',
            name: '秋田県沿岸南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '202',
            name: '青森県三八上北',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '301',
            name: '茨城県南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '203',
            name: '青森県下北',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '241',
            name: '山形県最上',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '310',
            name: '栃木県北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '311',
            name: '栃木県南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '372',
            name: '新潟県下越',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '230',
            name: '秋田県沿岸北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '232',
            name: '秋田県内陸北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '340',
            name: '千葉県北東部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '341',
            name: '千葉県北西部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '201',
            name: '青森県津軽南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '200',
            name: '青森県津軽北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '320',
            name: '群馬県北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '330',
            name: '埼玉県北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '331',
            name: '埼玉県南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '321',
            name: '群馬県南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '350',
            name: '東京都２３区',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '342',
            name: '千葉県南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '371',
            name: '新潟県中越',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '375',
            name: '新潟県佐渡',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '420',
            name: '長野県北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '421',
            name: '長野県中部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '360',
            name: '神奈川県東部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '370',
            name: '新潟県上越',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '351',
            name: '東京都多摩東部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '106',
            name: '渡島地方東部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '107',
            name: '渡島地方西部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '151',
            name: '日高地方中部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '146',
            name: '胆振地方中東部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '390',
            name: '石川県能登',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '31',
                name: '緊急地震速報（警報）',
              },
            },
          },
          {
            code: '352',
            name: '東京都多摩西部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '411',
            name: '山梨県中・西部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '440',
            name: '静岡県伊豆',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '441',
            name: '静岡県東部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '110',
            name: '檜山地方',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '355',
            name: '伊豆大島',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '145',
            name: '胆振地方西部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '102',
            name: '石狩地方南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '356',
            name: '新島',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '100',
            name: '石狩地方北部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
          {
            code: '521',
            name: '大阪府南部',
            kind: {
              code: '31',
              name: '緊急地震速報（警報）',
              lastKind: {
                code: '00',
                name: 'なし',
              },
            },
          },
        ],
        earthquake: {
          originTime: '2011-03-11T14:46:16+09:00',
          arrivalTime: '2011-03-11T14:46:40+09:00',
          hypocenter: {
            code: '288',
            name: '三陸沖',
            coordinate: {
              latitude: {
                text: '38.1˚N',
                value: '38.1000',
              },
              longitude: {
                text: '142.9˚E',
                value: '142.9000',
              },
              height: {
                type: '高さ',
                unit: 'm',
                value: '-10000',
              },
              geodeticSystem: '日本測地系',
            },
            depth: {
              type: '深さ',
              unit: 'km',
              value: '10',
            },
            reduce: {
              code: '9738',
              name: '三陸沖',
            },
            landOrSea: '海域',
            accuracy: {
              epicenters: ['4', '4'],
              depth: '4',
              magnitudeCalculation: '5',
              numberOfMagnitudeCalculation: '5',
            },
          },
          magnitude: {
            type: 'マグニチュード',
            value: '8.4',
            unit: 'Mj',
          },
        },
        intensity: {
          forecastMaxInt: {
            from: '6+',
            to: '6+',
          },
          forecastMaxLgInt: {
            from: '4',
            to: '4',
          },
          appendix: {
            maxIntChange: '0',
            maxLgIntChange: '0',
            maxIntChangeReason: '0',
          },
          regions: [
            {
              code: '220',
              name: '宮城県北部',
              forecastMaxInt: {
                from: '6+',
                to: '6+',
              },
              forecastMaxLgInt: {
                from: '4',
                to: '4',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '11',
              },
              condition: '既に主要動到達と推測',
            },
            {
              code: '222',
              name: '宮城県中部',
              forecastMaxInt: {
                from: '6+',
                to: '6+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '11',
              },
              condition: '既に主要動到達と推測',
            },
            {
              code: '221',
              name: '宮城県南部',
              forecastMaxInt: {
                from: '6+',
                to: '6+',
              },
              forecastMaxLgInt: {
                from: '4',
                to: '4',
              },
              isPlum: true,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '19',
              },
              arrivalTime: '2011-03-11T14:47:22+09:00',
            },
            {
              code: '211',
              name: '岩手県沿岸南部',
              forecastMaxInt: {
                from: '6+',
                to: '6+',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: true,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '19',
              },
              arrivalTime: '2011-03-11T14:47:25+09:00',
            },
            {
              code: '213',
              name: '岩手県内陸南部',
              forecastMaxInt: {
                from: '6-',
                to: '6-',
              },
              forecastMaxLgInt: {
                from: '4',
                to: '4',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '11',
              },
              condition: '既に主要動到達と推測',
            },
            {
              code: '210',
              name: '岩手県沿岸北部',
              forecastMaxInt: {
                from: '6-',
                to: '6-',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: true,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '19',
              },
              arrivalTime: '2011-03-11T14:47:22+09:00',
            },
            {
              code: '251',
              name: '福島県浜通り',
              forecastMaxInt: {
                from: '6-',
                to: '6-',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '11',
              },
              condition: '既に主要動到達と推測',
            },
            {
              code: '242',
              name: '山形県村山',
              forecastMaxInt: {
                from: '6-',
                to: '6-',
              },
              forecastMaxLgInt: {
                from: '4',
                to: '4',
              },
              isPlum: true,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '19',
              },
              arrivalTime: '2011-03-11T14:48:10+09:00',
            },
            {
              code: '250',
              name: '福島県中通り',
              forecastMaxInt: {
                from: '6-',
                to: '6-',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: true,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '19',
              },
              arrivalTime: '2011-03-11T14:48:05+09:00',
            },
            {
              code: '212',
              name: '岩手県内陸北部',
              forecastMaxInt: {
                from: '6+',
                to: '6+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: true,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '19',
              },
              arrivalTime: '2011-03-11T14:47:37+09:00',
            },
            {
              code: '243',
              name: '山形県置賜',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:21+09:00',
            },
            {
              code: '252',
              name: '福島県会津',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:22+09:00',
            },
            {
              code: '233',
              name: '秋田県内陸南部',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:23+09:00',
            },
            {
              code: '300',
              name: '茨城県北部',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:24+09:00',
            },
            {
              code: '240',
              name: '山形県庄内',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '4',
                to: '4',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:27+09:00',
            },
            {
              code: '231',
              name: '秋田県沿岸南部',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:30+09:00',
            },
            {
              code: '202',
              name: '青森県三八上北',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:34+09:00',
            },
            {
              code: '301',
              name: '茨城県南部',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '4',
                to: '4',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:34+09:00',
            },
            {
              code: '203',
              name: '青森県下北',
              forecastMaxInt: {
                from: '5+',
                to: '5+',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:49+09:00',
            },
            {
              code: '241',
              name: '山形県最上',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:15+09:00',
            },
            {
              code: '310',
              name: '栃木県北部',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:30+09:00',
            },
            {
              code: '311',
              name: '栃木県南部',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:34+09:00',
            },
            {
              code: '372',
              name: '新潟県下越',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '4',
                to: '4',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:34+09:00',
            },
            {
              code: '230',
              name: '秋田県沿岸北部',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:37+09:00',
            },
            {
              code: '232',
              name: '秋田県内陸北部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:37+09:00',
            },
            {
              code: '340',
              name: '千葉県北東部',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '4',
                to: '4',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:38+09:00',
            },
            {
              code: '341',
              name: '千葉県北西部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:43+09:00',
            },
            {
              code: '201',
              name: '青森県津軽南部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:44+09:00',
            },
            {
              code: '200',
              name: '青森県津軽北部',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:46+09:00',
            },
            {
              code: '320',
              name: '群馬県北部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:46+09:00',
            },
            {
              code: '330',
              name: '埼玉県北部',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:47+09:00',
            },
            {
              code: '331',
              name: '埼玉県南部',
              forecastMaxInt: {
                from: '5-',
                to: '5-',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:48+09:00',
            },
            {
              code: '321',
              name: '群馬県南部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:49+09:00',
            },
            {
              code: '350',
              name: '東京都２３区',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:51+09:00',
            },
            {
              code: '342',
              name: '千葉県南部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:52+09:00',
            },
            {
              code: '371',
              name: '新潟県中越',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:52+09:00',
            },
            {
              code: '375',
              name: '新潟県佐渡',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '1',
                to: '1',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:56+09:00',
            },
            {
              code: '420',
              name: '長野県北部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:56+09:00',
            },
            {
              code: '360',
              name: '神奈川県東部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:57+09:00',
            },
            {
              code: '370',
              name: '新潟県上越',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:57+09:00',
            },
            {
              code: '352',
              name: '東京都多摩西部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '1',
                to: '1',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:48:59+09:00',
            },
            {
              code: '351',
              name: '東京都多摩東部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:00+09:00',
            },
            {
              code: '106',
              name: '渡島地方東部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:05+09:00',
            },
            {
              code: '107',
              name: '渡島地方西部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:05+09:00',
            },
            {
              code: '151',
              name: '日高地方中部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:13+09:00',
            },
            {
              code: '110',
              name: '檜山地方',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:14+09:00',
            },
            {
              code: '411',
              name: '山梨県中・西部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:14+09:00',
            },
            {
              code: '146',
              name: '胆振地方中東部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:23+09:00',
            },
            {
              code: '145',
              name: '胆振地方西部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:25+09:00',
            },
            {
              code: '102',
              name: '石狩地方南部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:26+09:00',
            },
            {
              code: '356',
              name: '新島',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:26+09:00',
            },
            {
              code: '390',
              name: '石川県能登',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:26+09:00',
            },
            {
              code: '421',
              name: '長野県中部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:14+09:00',
            },
            {
              code: '355',
              name: '伊豆大島',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:16+09:00',
            },
            {
              code: '440',
              name: '静岡県伊豆',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:16+09:00',
            },
            {
              code: '441',
              name: '静岡県東部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:18+09:00',
            },
            {
              code: '100',
              name: '石狩地方北部',
              forecastMaxInt: {
                from: '4',
                to: '4',
              },
              forecastMaxLgInt: {
                from: '2',
                to: '2',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:49:36+09:00',
            },
            {
              code: '521',
              name: '大阪府南部',
              forecastMaxInt: {
                from: '3',
                to: '3',
              },
              forecastMaxLgInt: {
                from: '3',
                to: '3',
              },
              isPlum: false,
              isWarning: true,
              kind: {
                name: '緊急地震速報（警報）',
                code: '10',
              },
              arrivalTime: '2011-03-11T14:50:35+09:00',
            },
          ],
        },
        comments: {
          warning: {
            text: '強い揺れに警戒してください。',
            codes: ['0201'],
          },
        },
      },
    }
    return EqmonitorTelegramSchema.fromDmdataToTelegramV3(payload)
  }
  export function vxse53Sample(): EqmonitorTelegramSchema.TelegramV3[] {
    const payload: TelegramJSONMain = {
      _originalId: 'TELEGRAM_ID',
      _schema: {
        type: 'earthquake-information',
        version: '1.0.0',
      },
      type: '震源・震度に関する情報',
      title: '震源・震度情報',
      status: '通常',
      infoType: '発表',
      editorialOffice: '気象庁本庁',
      publishingOffice: ['気象庁'],
      pressDateTime: '2021-02-13T14:13:02Z',
      reportDateTime: '2021-02-13T23:13:00+09:00',
      targetDateTime: '2021-02-13T23:13:00+09:00',
      eventId: '20210213230800',
      serialNo: '1',
      infoKind: '地震情報',
      infoKindVersion: '1.0_1',
      headline: '１３日２３時０８分ころ、地震がありました。',
      body: {
        earthquake: {
          originTime: '2021-02-13T23:07:00+09:00',
          arrivalTime: '2021-02-13T23:08:00+09:00',
          hypocenter: {
            name: '福島県沖',
            code: '289',
            coordinate: {
              latitude: {
                text: '37.7˚N',
                value: '37.7000',
              },
              longitude: {
                text: '141.8˚E',
                value: '141.8000',
              },
              height: {
                type: '高さ',
                value: '-60000',
                unit: 'm',
              },
              geodeticSystem: '日本測地系',
            },
            depth: {
              type: '深さ',
              value: '60',
              unit: 'km',
            },
          },
          magnitude: {
            type: 'マグニチュード',
            unit: 'Mj',
            value: '7.1',
          },
        },
        intensity: {
          maxInt: '6+',
          prefectures: [
            {
              code: '04',
              name: '宮城県',
              maxInt: '6+',
            },
            {
              code: '07',
              name: '福島県',
              maxInt: '6+',
            },
            {
              code: '09',
              name: '栃木県',
              maxInt: '5+',
            },
            {
              code: '03',
              name: '岩手県',
              maxInt: '5-',
            },
            {
              code: '06',
              name: '山形県',
              maxInt: '5-',
            },
            {
              code: '08',
              name: '茨城県',
              maxInt: '5-',
            },
            {
              code: '11',
              name: '埼玉県',
              maxInt: '5-',
            },
            {
              code: '02',
              name: '青森県',
              maxInt: '4',
            },
            {
              code: '05',
              name: '秋田県',
              maxInt: '4',
            },
            {
              code: '10',
              name: '群馬県',
              maxInt: '4',
            },
            {
              code: '12',
              name: '千葉県',
              maxInt: '4',
            },
            {
              code: '13',
              name: '東京都',
              maxInt: '4',
            },
            {
              code: '14',
              name: '神奈川県',
              maxInt: '4',
            },
            {
              code: '15',
              name: '新潟県',
              maxInt: '4',
            },
            {
              code: '19',
              name: '山梨県',
              maxInt: '4',
            },
            {
              code: '22',
              name: '静岡県',
              maxInt: '4',
            },
            {
              code: '01',
              name: '北海道',
              maxInt: '3',
            },
            {
              code: '17',
              name: '石川県',
              maxInt: '3',
            },
            {
              code: '20',
              name: '長野県',
              maxInt: '3',
            },
            {
              code: '23',
              name: '愛知県',
              maxInt: '3',
            },
            {
              code: '16',
              name: '富山県',
              maxInt: '2',
            },
            {
              code: '18',
              name: '福井県',
              maxInt: '2',
            },
            {
              code: '21',
              name: '岐阜県',
              maxInt: '2',
            },
            {
              code: '24',
              name: '三重県',
              maxInt: '2',
            },
            {
              code: '25',
              name: '滋賀県',
              maxInt: '2',
            },
            {
              code: '26',
              name: '京都府',
              maxInt: '2',
            },
            {
              code: '27',
              name: '大阪府',
              maxInt: '2',
            },
            {
              code: '28',
              name: '兵庫県',
              maxInt: '2',
            },
            {
              code: '29',
              name: '奈良県',
              maxInt: '2',
            },
            {
              code: '30',
              name: '和歌山県',
              maxInt: '1',
            },
            {
              code: '31',
              name: '鳥取県',
              maxInt: '1',
            },
            {
              code: '32',
              name: '島根県',
              maxInt: '1',
            },
            {
              code: '33',
              name: '岡山県',
              maxInt: '1',
            },
            {
              code: '34',
              name: '広島県',
              maxInt: '1',
            },
          ],
          regions: [
            {
              code: '221',
              name: '宮城県南部',
              maxInt: '6+',
            },
            {
              code: '250',
              name: '福島県中通り',
              maxInt: '6+',
            },
            {
              code: '251',
              name: '福島県浜通り',
              maxInt: '6+',
            },
            {
              code: '220',
              name: '宮城県北部',
              maxInt: '6-',
            },
            {
              code: '222',
              name: '宮城県中部',
              maxInt: '6-',
            },
            {
              code: '252',
              name: '福島県会津',
              maxInt: '5+',
            },
            {
              code: '310',
              name: '栃木県北部',
              maxInt: '5+',
            },
            {
              code: '311',
              name: '栃木県南部',
              maxInt: '5+',
            },
            {
              code: '212',
              name: '岩手県内陸北部',
              maxInt: '5-',
            },
            {
              code: '213',
              name: '岩手県内陸南部',
              maxInt: '5-',
            },
            {
              code: '242',
              name: '山形県村山',
              maxInt: '5-',
            },
            {
              code: '243',
              name: '山形県置賜',
              maxInt: '5-',
            },
            {
              code: '300',
              name: '茨城県北部',
              maxInt: '5-',
            },
            {
              code: '301',
              name: '茨城県南部',
              maxInt: '5-',
            },
            {
              code: '330',
              name: '埼玉県北部',
              maxInt: '5-',
            },
            {
              code: '202',
              name: '青森県三八上北',
              maxInt: '4',
            },
            {
              code: '210',
              name: '岩手県沿岸北部',
              maxInt: '4',
            },
            {
              code: '211',
              name: '岩手県沿岸南部',
              maxInt: '4',
            },
            {
              code: '230',
              name: '秋田県沿岸北部',
              maxInt: '4',
            },
            {
              code: '231',
              name: '秋田県沿岸南部',
              maxInt: '4',
            },
            {
              code: '233',
              name: '秋田県内陸南部',
              maxInt: '4',
            },
            {
              code: '240',
              name: '山形県庄内',
              maxInt: '4',
            },
            {
              code: '241',
              name: '山形県最上',
              maxInt: '4',
            },
            {
              code: '320',
              name: '群馬県北部',
              maxInt: '4',
            },
            {
              code: '321',
              name: '群馬県南部',
              maxInt: '4',
            },
            {
              code: '331',
              name: '埼玉県南部',
              maxInt: '4',
            },
            {
              code: '340',
              name: '千葉県北東部',
              maxInt: '4',
            },
            {
              code: '341',
              name: '千葉県北西部',
              maxInt: '4',
            },
            {
              code: '342',
              name: '千葉県南部',
              maxInt: '4',
            },
            {
              code: '350',
              name: '東京都２３区',
              maxInt: '4',
            },
            {
              code: '351',
              name: '東京都多摩東部',
              maxInt: '4',
            },
            {
              code: '360',
              name: '神奈川県東部',
              maxInt: '4',
            },
            {
              code: '361',
              name: '神奈川県西部',
              maxInt: '4',
            },
            {
              code: '370',
              name: '新潟県上越',
              maxInt: '4',
            },
            {
              code: '371',
              name: '新潟県中越',
              maxInt: '4',
            },
            {
              code: '372',
              name: '新潟県下越',
              maxInt: '4',
            },
            {
              code: '411',
              name: '山梨県中・西部',
              maxInt: '4',
            },
            {
              code: '412',
              name: '山梨県東部・富士五湖',
              maxInt: '4',
            },
            {
              code: '441',
              name: '静岡県東部',
              maxInt: '4',
            },
            {
              code: '100',
              name: '石狩地方北部',
              maxInt: '3',
            },
            {
              code: '106',
              name: '渡島地方東部',
              maxInt: '3',
            },
            {
              code: '107',
              name: '渡島地方西部',
              maxInt: '3',
            },
            {
              code: '122',
              name: '空知地方南部',
              maxInt: '3',
            },
            {
              code: '146',
              name: '胆振地方中東部',
              maxInt: '3',
            },
            {
              code: '151',
              name: '日高地方中部',
              maxInt: '3',
            },
            {
              code: '156',
              name: '十勝地方中部',
              maxInt: '3',
            },
            {
              code: '157',
              name: '十勝地方南部',
              maxInt: '3',
            },
            {
              code: '161',
              name: '釧路地方中南部',
              maxInt: '3',
            },
            {
              code: '200',
              name: '青森県津軽北部',
              maxInt: '3',
            },
            {
              code: '201',
              name: '青森県津軽南部',
              maxInt: '3',
            },
            {
              code: '203',
              name: '青森県下北',
              maxInt: '3',
            },
            {
              code: '232',
              name: '秋田県内陸北部',
              maxInt: '3',
            },
            {
              code: '332',
              name: '埼玉県秩父',
              maxInt: '3',
            },
            {
              code: '352',
              name: '東京都多摩西部',
              maxInt: '3',
            },
            {
              code: '375',
              name: '新潟県佐渡',
              maxInt: '3',
            },
            {
              code: '390',
              name: '石川県能登',
              maxInt: '3',
            },
            {
              code: '420',
              name: '長野県北部',
              maxInt: '3',
            },
            {
              code: '421',
              name: '長野県中部',
              maxInt: '3',
            },
            {
              code: '422',
              name: '長野県南部',
              maxInt: '3',
            },
            {
              code: '440',
              name: '静岡県伊豆',
              maxInt: '3',
            },
            {
              code: '442',
              name: '静岡県中部',
              maxInt: '3',
            },
            {
              code: '443',
              name: '静岡県西部',
              maxInt: '3',
            },
            {
              code: '451',
              name: '愛知県西部',
              maxInt: '3',
            },
            {
              code: '101',
              name: '石狩地方中部',
              maxInt: '2',
            },
            {
              code: '102',
              name: '石狩地方南部',
              maxInt: '2',
            },
            {
              code: '105',
              name: '渡島地方北部',
              maxInt: '2',
            },
            {
              code: '110',
              name: '檜山地方',
              maxInt: '2',
            },
            {
              code: '115',
              name: '後志地方北部',
              maxInt: '2',
            },
            {
              code: '116',
              name: '後志地方東部',
              maxInt: '2',
            },
            {
              code: '120',
              name: '空知地方北部',
              maxInt: '2',
            },
            {
              code: '121',
              name: '空知地方中部',
              maxInt: '2',
            },
            {
              code: '126',
              name: '上川地方中部',
              maxInt: '2',
            },
            {
              code: '127',
              name: '上川地方南部',
              maxInt: '2',
            },
            {
              code: '131',
              name: '留萌地方南部',
              maxInt: '2',
            },
            {
              code: '135',
              name: '宗谷地方北部',
              maxInt: '2',
            },
            {
              code: '140',
              name: '網走地方',
              maxInt: '2',
            },
            {
              code: '141',
              name: '北見地方',
              maxInt: '2',
            },
            {
              code: '142',
              name: '紋別地方',
              maxInt: '2',
            },
            {
              code: '145',
              name: '胆振地方西部',
              maxInt: '2',
            },
            {
              code: '150',
              name: '日高地方西部',
              maxInt: '2',
            },
            {
              code: '152',
              name: '日高地方東部',
              maxInt: '2',
            },
            {
              code: '155',
              name: '十勝地方北部',
              maxInt: '2',
            },
            {
              code: '160',
              name: '釧路地方北部',
              maxInt: '2',
            },
            {
              code: '165',
              name: '根室地方北部',
              maxInt: '2',
            },
            {
              code: '166',
              name: '根室地方中部',
              maxInt: '2',
            },
            {
              code: '167',
              name: '根室地方南部',
              maxInt: '2',
            },
            {
              code: '354',
              name: '神津島',
              maxInt: '2',
            },
            {
              code: '355',
              name: '伊豆大島',
              maxInt: '2',
            },
            {
              code: '356',
              name: '新島',
              maxInt: '2',
            },
            {
              code: '357',
              name: '三宅島',
              maxInt: '2',
            },
            {
              code: '358',
              name: '八丈島',
              maxInt: '2',
            },
            {
              code: '380',
              name: '富山県東部',
              maxInt: '2',
            },
            {
              code: '381',
              name: '富山県西部',
              maxInt: '2',
            },
            {
              code: '401',
              name: '福井県嶺南',
              maxInt: '2',
            },
            {
              code: '431',
              name: '岐阜県美濃東部',
              maxInt: '2',
            },
            {
              code: '432',
              name: '岐阜県美濃中西部',
              maxInt: '2',
            },
            {
              code: '450',
              name: '愛知県東部',
              maxInt: '2',
            },
            {
              code: '460',
              name: '三重県北部',
              maxInt: '2',
            },
            {
              code: '461',
              name: '三重県中部',
              maxInt: '2',
            },
            {
              code: '500',
              name: '滋賀県北部',
              maxInt: '2',
            },
            {
              code: '501',
              name: '滋賀県南部',
              maxInt: '2',
            },
            {
              code: '511',
              name: '京都府南部',
              maxInt: '2',
            },
            {
              code: '520',
              name: '大阪府北部',
              maxInt: '2',
            },
            {
              code: '530',
              name: '兵庫県北部',
              maxInt: '2',
            },
            {
              code: '540',
              name: '奈良県',
              maxInt: '2',
            },
            {
              code: '117',
              name: '後志地方西部',
              maxInt: '1',
            },
            {
              code: '130',
              name: '留萌地方中北部',
              maxInt: '1',
            },
            {
              code: '391',
              name: '石川県加賀',
              maxInt: '1',
            },
            {
              code: '400',
              name: '福井県嶺北',
              maxInt: '1',
            },
            {
              code: '430',
              name: '岐阜県飛騨',
              maxInt: '1',
            },
            {
              code: '462',
              name: '三重県南部',
              maxInt: '1',
            },
            {
              code: '521',
              name: '大阪府南部',
              maxInt: '1',
            },
            {
              code: '531',
              name: '兵庫県南東部',
              maxInt: '1',
            },
            {
              code: '550',
              name: '和歌山県北部',
              maxInt: '1',
            },
            {
              code: '560',
              name: '鳥取県東部',
              maxInt: '1',
            },
            {
              code: '562',
              name: '鳥取県中部',
              maxInt: '1',
            },
            {
              code: '563',
              name: '鳥取県西部',
              maxInt: '1',
            },
            {
              code: '571',
              name: '島根県西部',
              maxInt: '1',
            },
            {
              code: '580',
              name: '岡山県北部',
              maxInt: '1',
            },
            {
              code: '592',
              name: '広島県南西部',
              maxInt: '1',
            },
          ],
          cities: [
            {
              code: '0430100',
              name: '蔵王町',
              maxInt: '6+',
            },
            {
              code: '0720900',
              name: '相馬市',
              maxInt: '6+',
            },
            {
              code: '0730300',
              name: '国見町',
              maxInt: '6+',
            },
            {
              code: '0756100',
              name: '新地町',
              maxInt: '6+',
            },
            {
              code: '0420200',
              name: '石巻市',
              maxInt: '6-',
            },
            {
              code: '0421100',
              name: '岩沼市',
              maxInt: '6-',
            },
            {
              code: '0421200',
              name: '登米市',
              maxInt: '6-',
            },
            {
              code: '0432400',
              name: '宮城川崎町',
              maxInt: '6-',
            },
            {
              code: '0436100',
              name: '亘理町',
              maxInt: '6-',
            },
            {
              code: '0436200',
              name: '山元町',
              maxInt: '6-',
            },
            {
              code: '0720100',
              name: '福島市',
              maxInt: '6-',
            },
            {
              code: '0720300',
              name: '郡山市',
              maxInt: '6-',
            },
            {
              code: '0720700',
              name: '須賀川市',
              maxInt: '6-',
            },
            {
              code: '0721200',
              name: '南相馬市',
              maxInt: '6-',
            },
            {
              code: '0721300',
              name: '福島伊達市',
              maxInt: '6-',
            },
            {
              code: '0721400',
              name: '本宮市',
              maxInt: '6-',
            },
            {
              code: '0730100',
              name: '桑折町',
              maxInt: '6-',
            },
            {
              code: '0730800',
              name: '川俣町',
              maxInt: '6-',
            },
            {
              code: '0734400',
              name: '天栄村',
              maxInt: '6-',
            },
            {
              code: '0754100',
              name: '福島広野町',
              maxInt: '6-',
            },
            {
              code: '0754200',
              name: '楢葉町',
              maxInt: '6-',
            },
            {
              code: '0754400',
              name: '川内村',
              maxInt: '6-',
            },
            {
              code: '0754500',
              name: '大熊町',
              maxInt: '6-',
            },
            {
              code: '0754600',
              name: '双葉町',
              maxInt: '6-',
            },
            {
              code: '0754700',
              name: '浪江町',
              maxInt: '6-',
            },
            {
              code: '0410100',
              name: '仙台青葉区',
              maxInt: '5+',
            },
            {
              code: '0410200',
              name: '仙台宮城野区',
              maxInt: '5+',
            },
            {
              code: '0410300',
              name: '仙台若林区',
              maxInt: '5+',
            },
            {
              code: '0420300',
              name: '塩竈市',
              maxInt: '5+',
            },
            {
              code: '0420600',
              name: '白石市',
              maxInt: '5+',
            },
            {
              code: '0420700',
              name: '名取市',
              maxInt: '5+',
            },
            {
              code: '0420800',
              name: '角田市',
              maxInt: '5+',
            },
            {
              code: '0421300',
              name: '栗原市',
              maxInt: '5+',
            },
            {
              code: '0421400',
              name: '東松島市',
              maxInt: '5+',
            },
            {
              code: '0421500',
              name: '大崎市',
              maxInt: '5+',
            },
            {
              code: '0432100',
              name: '大河原町',
              maxInt: '5+',
            },
            {
              code: '0432200',
              name: '村田町',
              maxInt: '5+',
            },
            {
              code: '0432300',
              name: '柴田町',
              maxInt: '5+',
            },
            {
              code: '0434100',
              name: '丸森町',
              maxInt: '5+',
            },
            {
              code: '0440100',
              name: '松島町',
              maxInt: '5+',
            },
            {
              code: '0440400',
              name: '七ヶ浜町',
              maxInt: '5+',
            },
            {
              code: '0440600',
              name: '利府町',
              maxInt: '5+',
            },
            {
              code: '0442200',
              name: '大郷町',
              maxInt: '5+',
            },
            {
              code: '0442400',
              name: '大衡村',
              maxInt: '5+',
            },
            {
              code: '0450100',
              name: '涌谷町',
              maxInt: '5+',
            },
            {
              code: '0450500',
              name: '宮城美里町',
              maxInt: '5+',
            },
            {
              code: '0720400',
              name: 'いわき市',
              maxInt: '5+',
            },
            {
              code: '0720500',
              name: '白河市',
              maxInt: '5+',
            },
            {
              code: '0721000',
              name: '二本松市',
              maxInt: '5+',
            },
            {
              code: '0721100',
              name: '田村市',
              maxInt: '5+',
            },
            {
              code: '0732200',
              name: '大玉村',
              maxInt: '5+',
            },
            {
              code: '0734200',
              name: '鏡石町',
              maxInt: '5+',
            },
            {
              code: '0740800',
              name: '猪苗代町',
              maxInt: '5+',
            },
            {
              code: '0746400',
              name: '泉崎村',
              maxInt: '5+',
            },
            {
              code: '0746500',
              name: '中島村',
              maxInt: '5+',
            },
            {
              code: '0746600',
              name: '矢吹町',
              maxInt: '5+',
            },
            {
              code: '0750200',
              name: '玉川村',
              maxInt: '5+',
            },
            {
              code: '0750400',
              name: '浅川町',
              maxInt: '5+',
            },
            {
              code: '0752200',
              name: '小野町',
              maxInt: '5+',
            },
            {
              code: '0754300',
              name: '富岡町',
              maxInt: '5+',
            },
            {
              code: '0754800',
              name: '葛尾村',
              maxInt: '5+',
            },
            {
              code: '0756400',
              name: '飯舘村',
              maxInt: '5+',
            },
            {
              code: '0938600',
              name: '高根沢町',
              maxInt: '5+',
            },
            {
              code: '0940700',
              name: '那須町',
              maxInt: '5+',
            },
            {
              code: '0320900',
              name: '一関市',
              maxInt: '5-',
            },
            {
              code: '0332200',
              name: '矢巾町',
              maxInt: '5-',
            },
            {
              code: '0410400',
              name: '仙台太白区',
              maxInt: '5-',
            },
            {
              code: '0410500',
              name: '仙台泉区',
              maxInt: '5-',
            },
            {
              code: '0420900',
              name: '多賀城市',
              maxInt: '5-',
            },
            {
              code: '0421600',
              name: '富谷市',
              maxInt: '5-',
            },
            {
              code: '0442100',
              name: '大和町',
              maxInt: '5-',
            },
            {
              code: '0444400',
              name: '色麻町',
              maxInt: '5-',
            },
            {
              code: '0444500',
              name: '宮城加美町',
              maxInt: '5-',
            },
            {
              code: '0620200',
              name: '米沢市',
              maxInt: '5-',
            },
            {
              code: '0620700',
              name: '上山市',
              maxInt: '5-',
            },
            {
              code: '0630200',
              name: '中山町',
              maxInt: '5-',
            },
            {
              code: '0640200',
              name: '白鷹町',
              maxInt: '5-',
            },
            {
              code: '0742200',
              name: '湯川村',
              maxInt: '5-',
            },
            {
              code: '0744700',
              name: '会津美里町',
              maxInt: '5-',
            },
            {
              code: '0746100',
              name: '西郷村',
              maxInt: '5-',
            },
            {
              code: '0748100',
              name: '棚倉町',
              maxInt: '5-',
            },
            {
              code: '0748200',
              name: '矢祭町',
              maxInt: '5-',
            },
            {
              code: '0750100',
              name: '石川町',
              maxInt: '5-',
            },
            {
              code: '0750300',
              name: '平田村',
              maxInt: '5-',
            },
            {
              code: '0750500',
              name: '古殿町',
              maxInt: '5-',
            },
            {
              code: '0752100',
              name: '三春町',
              maxInt: '5-',
            },
            {
              code: '0820200',
              name: '日立市',
              maxInt: '5-',
            },
            {
              code: '0820300',
              name: '土浦市',
              maxInt: '5-',
            },
            {
              code: '0821200',
              name: '常陸太田市',
              maxInt: '5-',
            },
            {
              code: '0821600',
              name: '笠間市',
              maxInt: '5-',
            },
            {
              code: '0822500',
              name: '常陸大宮市',
              maxInt: '5-',
            },
            {
              code: '0822600',
              name: '那珂市',
              maxInt: '5-',
            },
            {
              code: '0822700',
              name: '筑西市',
              maxInt: '5-',
            },
            {
              code: '0823400',
              name: '鉾田市',
              maxInt: '5-',
            },
            {
              code: '0831000',
              name: '城里町',
              maxInt: '5-',
            },
            {
              code: '0834100',
              name: '東海村',
              maxInt: '5-',
            },
            {
              code: '0921000',
              name: '大田原市',
              maxInt: '5-',
            },
            {
              code: '0921500',
              name: '那須烏山市',
              maxInt: '5-',
            },
            {
              code: '0941100',
              name: '栃木那珂川町',
              maxInt: '5-',
            },
            {
              code: '1121000',
              name: '加須市',
              maxInt: '5-',
            },
            {
              code: '0220300',
              name: '八戸市',
              maxInt: '4',
            },
            {
              code: '0220600',
              name: '十和田市',
              maxInt: '4',
            },
            {
              code: '0240200',
              name: '七戸町',
              maxInt: '4',
            },
            {
              code: '0240500',
              name: '六戸町',
              maxInt: '4',
            },
            {
              code: '0240800',
              name: '東北町',
              maxInt: '4',
            },
            {
              code: '0241200',
              name: 'おいらせ町',
              maxInt: '4',
            },
            {
              code: '0244200',
              name: '五戸町',
              maxInt: '4',
            },
            {
              code: '0244500',
              name: '青森南部町',
              maxInt: '4',
            },
            {
              code: '0244600',
              name: '階上町',
              maxInt: '4',
            },
            {
              code: '0320100',
              name: '盛岡市',
              maxInt: '4',
            },
            {
              code: '0320200',
              name: '宮古市',
              maxInt: '4',
            },
            {
              code: '0320300',
              name: '大船渡市',
              maxInt: '4',
            },
            {
              code: '0320500',
              name: '花巻市',
              maxInt: '4',
            },
            {
              code: '0320600',
              name: '北上市',
              maxInt: '4',
            },
            {
              code: '0320700',
              name: '久慈市',
              maxInt: '4',
            },
            {
              code: '0320800',
              name: '遠野市',
              maxInt: '4',
            },
            {
              code: '0321000',
              name: '陸前高田市',
              maxInt: '4',
            },
            {
              code: '0321100',
              name: '釜石市',
              maxInt: '4',
            },
            {
              code: '0321400',
              name: '八幡平市',
              maxInt: '4',
            },
            {
              code: '0321500',
              name: '奥州市',
              maxInt: '4',
            },
            {
              code: '0321600',
              name: '滝沢市',
              maxInt: '4',
            },
            {
              code: '0330300',
              name: '岩手町',
              maxInt: '4',
            },
            {
              code: '0332100',
              name: '紫波町',
              maxInt: '4',
            },
            {
              code: '0338100',
              name: '金ケ崎町',
              maxInt: '4',
            },
            {
              code: '0340200',
              name: '平泉町',
              maxInt: '4',
            },
            {
              code: '0344100',
              name: '住田町',
              maxInt: '4',
            },
            {
              code: '0348200',
              name: '山田町',
              maxInt: '4',
            },
            {
              code: '0348500',
              name: '普代村',
              maxInt: '4',
            },
            {
              code: '0350300',
              name: '野田村',
              maxInt: '4',
            },
            {
              code: '0420500',
              name: '気仙沼市',
              maxInt: '4',
            },
            {
              code: '0430200',
              name: '七ヶ宿町',
              maxInt: '4',
            },
            {
              code: '0458100',
              name: '女川町',
              maxInt: '4',
            },
            {
              code: '0460600',
              name: '南三陸町',
              maxInt: '4',
            },
            {
              code: '0520100',
              name: '秋田市',
              maxInt: '4',
            },
            {
              code: '0520300',
              name: '横手市',
              maxInt: '4',
            },
            {
              code: '0520700',
              name: '湯沢市',
              maxInt: '4',
            },
            {
              code: '0521000',
              name: '由利本荘市',
              maxInt: '4',
            },
            {
              code: '0521200',
              name: '大仙市',
              maxInt: '4',
            },
            {
              code: '0521400',
              name: 'にかほ市',
              maxInt: '4',
            },
            {
              code: '0521500',
              name: '仙北市',
              maxInt: '4',
            },
            {
              code: '0536600',
              name: '井川町',
              maxInt: '4',
            },
            {
              code: '0543400',
              name: '秋田美郷町',
              maxInt: '4',
            },
            {
              code: '0546300',
              name: '羽後町',
              maxInt: '4',
            },
            {
              code: '0620100',
              name: '山形市',
              maxInt: '4',
            },
            {
              code: '0620300',
              name: '鶴岡市',
              maxInt: '4',
            },
            {
              code: '0620400',
              name: '酒田市',
              maxInt: '4',
            },
            {
              code: '0620500',
              name: '新庄市',
              maxInt: '4',
            },
            {
              code: '0620600',
              name: '寒河江市',
              maxInt: '4',
            },
            {
              code: '0620800',
              name: '村山市',
              maxInt: '4',
            },
            {
              code: '0620900',
              name: '長井市',
              maxInt: '4',
            },
            {
              code: '0621000',
              name: '天童市',
              maxInt: '4',
            },
            {
              code: '0621100',
              name: '東根市',
              maxInt: '4',
            },
            {
              code: '0621200',
              name: '尾花沢市',
              maxInt: '4',
            },
            {
              code: '0621300',
              name: '南陽市',
              maxInt: '4',
            },
            {
              code: '0630100',
              name: '山辺町',
              maxInt: '4',
            },
            {
              code: '0632100',
              name: '河北町',
              maxInt: '4',
            },
            {
              code: '0632200',
              name: '西川町',
              maxInt: '4',
            },
            {
              code: '0632300',
              name: '山形朝日町',
              maxInt: '4',
            },
            {
              code: '0632400',
              name: '大江町',
              maxInt: '4',
            },
            {
              code: '0634100',
              name: '大石田町',
              maxInt: '4',
            },
            {
              code: '0636200',
              name: '最上町',
              maxInt: '4',
            },
            {
              code: '0636300',
              name: '舟形町',
              maxInt: '4',
            },
            {
              code: '0636400',
              name: '真室川町',
              maxInt: '4',
            },
            {
              code: '0636500',
              name: '大蔵村',
              maxInt: '4',
            },
            {
              code: '0636600',
              name: '鮭川村',
              maxInt: '4',
            },
            {
              code: '0636700',
              name: '戸沢村',
              maxInt: '4',
            },
            {
              code: '0638100',
              name: '高畠町',
              maxInt: '4',
            },
            {
              code: '0638200',
              name: '山形川西町',
              maxInt: '4',
            },
            {
              code: '0640100',
              name: '山形小国町',
              maxInt: '4',
            },
            {
              code: '0640300',
              name: '飯豊町',
              maxInt: '4',
            },
            {
              code: '0642600',
              name: '三川町',
              maxInt: '4',
            },
            {
              code: '0642800',
              name: '庄内町',
              maxInt: '4',
            },
            {
              code: '0646100',
              name: '遊佐町',
              maxInt: '4',
            },
            {
              code: '0720200',
              name: '会津若松市',
              maxInt: '4',
            },
            {
              code: '0720800',
              name: '喜多方市',
              maxInt: '4',
            },
            {
              code: '0736200',
              name: '下郷町',
              maxInt: '4',
            },
            {
              code: '0736800',
              name: '南会津町',
              maxInt: '4',
            },
            {
              code: '0740500',
              name: '西会津町',
              maxInt: '4',
            },
            {
              code: '0740700',
              name: '磐梯町',
              maxInt: '4',
            },
            {
              code: '0742100',
              name: '会津坂下町',
              maxInt: '4',
            },
            {
              code: '0742300',
              name: '柳津町',
              maxInt: '4',
            },
            {
              code: '0748300',
              name: '塙町',
              maxInt: '4',
            },
            {
              code: '0748400',
              name: '鮫川村',
              maxInt: '4',
            },
            {
              code: '0820100',
              name: '水戸市',
              maxInt: '4',
            },
            {
              code: '0820400',
              name: '茨城古河市',
              maxInt: '4',
            },
            {
              code: '0820500',
              name: '石岡市',
              maxInt: '4',
            },
            {
              code: '0820700',
              name: '結城市',
              maxInt: '4',
            },
            {
              code: '0820800',
              name: '龍ケ崎市',
              maxInt: '4',
            },
            {
              code: '0821000',
              name: '下妻市',
              maxInt: '4',
            },
            {
              code: '0821100',
              name: '常総市',
              maxInt: '4',
            },
            {
              code: '0821400',
              name: '高萩市',
              maxInt: '4',
            },
            {
              code: '0821500',
              name: '北茨城市',
              maxInt: '4',
            },
            {
              code: '0821700',
              name: '取手市',
              maxInt: '4',
            },
            {
              code: '0821900',
              name: '牛久市',
              maxInt: '4',
            },
            {
              code: '0822000',
              name: 'つくば市',
              maxInt: '4',
            },
            {
              code: '0822100',
              name: 'ひたちなか市',
              maxInt: '4',
            },
            {
              code: '0822200',
              name: '茨城鹿嶋市',
              maxInt: '4',
            },
            {
              code: '0822300',
              name: '潮来市',
              maxInt: '4',
            },
            {
              code: '0822400',
              name: '守谷市',
              maxInt: '4',
            },
            {
              code: '0822800',
              name: '坂東市',
              maxInt: '4',
            },
            {
              code: '0822900',
              name: '稲敷市',
              maxInt: '4',
            },
            {
              code: '0823000',
              name: 'かすみがうら市',
              maxInt: '4',
            },
            {
              code: '0823100',
              name: '桜川市',
              maxInt: '4',
            },
            {
              code: '0823200',
              name: '神栖市',
              maxInt: '4',
            },
            {
              code: '0823300',
              name: '行方市',
              maxInt: '4',
            },
            {
              code: '0823500',
              name: 'つくばみらい市',
              maxInt: '4',
            },
            {
              code: '0823600',
              name: '小美玉市',
              maxInt: '4',
            },
            {
              code: '0830200',
              name: '茨城町',
              maxInt: '4',
            },
            {
              code: '0836400',
              name: '大子町',
              maxInt: '4',
            },
            {
              code: '0844200',
              name: '美浦村',
              maxInt: '4',
            },
            {
              code: '0844300',
              name: '阿見町',
              maxInt: '4',
            },
            {
              code: '0844700',
              name: '河内町',
              maxInt: '4',
            },
            {
              code: '0852100',
              name: '八千代町',
              maxInt: '4',
            },
            {
              code: '0854200',
              name: '五霞町',
              maxInt: '4',
            },
            {
              code: '0854600',
              name: '境町',
              maxInt: '4',
            },
            {
              code: '0856400',
              name: '利根町',
              maxInt: '4',
            },
            {
              code: '0920100',
              name: '宇都宮市',
              maxInt: '4',
            },
            {
              code: '0920200',
              name: '足利市',
              maxInt: '4',
            },
            {
              code: '0920300',
              name: '栃木市',
              maxInt: '4',
            },
            {
              code: '0920400',
              name: '佐野市',
              maxInt: '4',
            },
            {
              code: '0920500',
              name: '鹿沼市',
              maxInt: '4',
            },
            {
              code: '0920600',
              name: '日光市',
              maxInt: '4',
            },
            {
              code: '0920800',
              name: '小山市',
              maxInt: '4',
            },
            {
              code: '0920900',
              name: '真岡市',
              maxInt: '4',
            },
            {
              code: '0921100',
              name: '矢板市',
              maxInt: '4',
            },
            {
              code: '0921300',
              name: '那須塩原市',
              maxInt: '4',
            },
            {
              code: '0921400',
              name: '栃木さくら市',
              maxInt: '4',
            },
            {
              code: '0921600',
              name: '下野市',
              maxInt: '4',
            },
            {
              code: '0934200',
              name: '益子町',
              maxInt: '4',
            },
            {
              code: '0934300',
              name: '茂木町',
              maxInt: '4',
            },
            {
              code: '0934400',
              name: '市貝町',
              maxInt: '4',
            },
            {
              code: '0934500',
              name: '芳賀町',
              maxInt: '4',
            },
            {
              code: '0936100',
              name: '壬生町',
              maxInt: '4',
            },
            {
              code: '0936400',
              name: '野木町',
              maxInt: '4',
            },
            {
              code: '0938400',
              name: '塩谷町',
              maxInt: '4',
            },
            {
              code: '1020100',
              name: '前橋市',
              maxInt: '4',
            },
            {
              code: '1020200',
              name: '高崎市',
              maxInt: '4',
            },
            {
              code: '1020300',
              name: '桐生市',
              maxInt: '4',
            },
            {
              code: '1020400',
              name: '伊勢崎市',
              maxInt: '4',
            },
            {
              code: '1020500',
              name: '太田市',
              maxInt: '4',
            },
            {
              code: '1020600',
              name: '沼田市',
              maxInt: '4',
            },
            {
              code: '1020700',
              name: '館林市',
              maxInt: '4',
            },
            {
              code: '1021100',
              name: '安中市',
              maxInt: '4',
            },
            {
              code: '1052100',
              name: '板倉町',
              maxInt: '4',
            },
            {
              code: '1052200',
              name: '群馬明和町',
              maxInt: '4',
            },
            {
              code: '1052300',
              name: '千代田町',
              maxInt: '4',
            },
            {
              code: '1052400',
              name: '大泉町',
              maxInt: '4',
            },
            {
              code: '1052500',
              name: '邑楽町',
              maxInt: '4',
            },
            {
              code: '1110100',
              name: 'さいたま西区',
              maxInt: '4',
            },
            {
              code: '1110200',
              name: 'さいたま北区',
              maxInt: '4',
            },
            {
              code: '1110300',
              name: 'さいたま大宮区',
              maxInt: '4',
            },
            {
              code: '1110400',
              name: 'さいたま見沼区',
              maxInt: '4',
            },
            {
              code: '1110500',
              name: 'さいたま中央区',
              maxInt: '4',
            },
            {
              code: '1110800',
              name: 'さいたま南区',
              maxInt: '4',
            },
            {
              code: '1110900',
              name: 'さいたま緑区',
              maxInt: '4',
            },
            {
              code: '1111000',
              name: 'さいたま岩槻区',
              maxInt: '4',
            },
            {
              code: '1120200',
              name: '熊谷市',
              maxInt: '4',
            },
            {
              code: '1120300',
              name: '川口市',
              maxInt: '4',
            },
            {
              code: '1120600',
              name: '行田市',
              maxInt: '4',
            },
            {
              code: '1121100',
              name: '本庄市',
              maxInt: '4',
            },
            {
              code: '1121200',
              name: '東松山市',
              maxInt: '4',
            },
            {
              code: '1121400',
              name: '春日部市',
              maxInt: '4',
            },
            {
              code: '1121600',
              name: '羽生市',
              maxInt: '4',
            },
            {
              code: '1121700',
              name: '鴻巣市',
              maxInt: '4',
            },
            {
              code: '1121800',
              name: '深谷市',
              maxInt: '4',
            },
            {
              code: '1121900',
              name: '上尾市',
              maxInt: '4',
            },
            {
              code: '1122100',
              name: '草加市',
              maxInt: '4',
            },
            {
              code: '1122400',
              name: '戸田市',
              maxInt: '4',
            },
            {
              code: '1123100',
              name: '桶川市',
              maxInt: '4',
            },
            {
              code: '1123200',
              name: '久喜市',
              maxInt: '4',
            },
            {
              code: '1123300',
              name: '北本市',
              maxInt: '4',
            },
            {
              code: '1123400',
              name: '八潮市',
              maxInt: '4',
            },
            {
              code: '1123500',
              name: '富士見市',
              maxInt: '4',
            },
            {
              code: '1123700',
              name: '三郷市',
              maxInt: '4',
            },
            {
              code: '1123900',
              name: '坂戸市',
              maxInt: '4',
            },
            {
              code: '1124000',
              name: '幸手市',
              maxInt: '4',
            },
            {
              code: '1124100',
              name: '鶴ヶ島市',
              maxInt: '4',
            },
            {
              code: '1124300',
              name: '吉川市',
              maxInt: '4',
            },
            {
              code: '1124600',
              name: '白岡市',
              maxInt: '4',
            },
            {
              code: '1132600',
              name: '毛呂山町',
              maxInt: '4',
            },
            {
              code: '1134100',
              name: '滑川町',
              maxInt: '4',
            },
            {
              code: '1134600',
              name: '川島町',
              maxInt: '4',
            },
            {
              code: '1134700',
              name: '吉見町',
              maxInt: '4',
            },
            {
              code: '1144200',
              name: '宮代町',
              maxInt: '4',
            },
            {
              code: '1146400',
              name: '杉戸町',
              maxInt: '4',
            },
            {
              code: '1146500',
              name: '松伏町',
              maxInt: '4',
            },
            {
              code: '1210100',
              name: '千葉中央区',
              maxInt: '4',
            },
            {
              code: '1210200',
              name: '千葉花見川区',
              maxInt: '4',
            },
            {
              code: '1210300',
              name: '千葉稲毛区',
              maxInt: '4',
            },
            {
              code: '1210400',
              name: '千葉若葉区',
              maxInt: '4',
            },
            {
              code: '1210600',
              name: '千葉美浜区',
              maxInt: '4',
            },
            {
              code: '1220400',
              name: '船橋市',
              maxInt: '4',
            },
            {
              code: '1220700',
              name: '松戸市',
              maxInt: '4',
            },
            {
              code: '1220800',
              name: '野田市',
              maxInt: '4',
            },
            {
              code: '1221100',
              name: '成田市',
              maxInt: '4',
            },
            {
              code: '1221200',
              name: '千葉佐倉市',
              maxInt: '4',
            },
            {
              code: '1221300',
              name: '東金市',
              maxInt: '4',
            },
            {
              code: '1221500',
              name: '旭市',
              maxInt: '4',
            },
            {
              code: '1221600',
              name: '習志野市',
              maxInt: '4',
            },
            {
              code: '1221700',
              name: '柏市',
              maxInt: '4',
            },
            {
              code: '1222000',
              name: '流山市',
              maxInt: '4',
            },
            {
              code: '1222100',
              name: '八千代市',
              maxInt: '4',
            },
            {
              code: '1222400',
              name: '鎌ケ谷市',
              maxInt: '4',
            },
            {
              code: '1222700',
              name: '浦安市',
              maxInt: '4',
            },
            {
              code: '1222800',
              name: '四街道市',
              maxInt: '4',
            },
            {
              code: '1223000',
              name: '八街市',
              maxInt: '4',
            },
            {
              code: '1223100',
              name: '印西市',
              maxInt: '4',
            },
            {
              code: '1223200',
              name: '白井市',
              maxInt: '4',
            },
            {
              code: '1223300',
              name: '富里市',
              maxInt: '4',
            },
            {
              code: '1223600',
              name: '香取市',
              maxInt: '4',
            },
            {
              code: '1223700',
              name: '山武市',
              maxInt: '4',
            },
            {
              code: '1232900',
              name: '栄町',
              maxInt: '4',
            },
            {
              code: '1234200',
              name: '神崎町',
              maxInt: '4',
            },
            {
              code: '1234700',
              name: '多古町',
              maxInt: '4',
            },
            {
              code: '1246300',
              name: '鋸南町',
              maxInt: '4',
            },
            {
              code: '1310100',
              name: '東京千代田区',
              maxInt: '4',
            },
            {
              code: '1310200',
              name: '東京中央区',
              maxInt: '4',
            },
            {
              code: '1310700',
              name: '東京墨田区',
              maxInt: '4',
            },
            {
              code: '1310800',
              name: '東京江東区',
              maxInt: '4',
            },
            {
              code: '1311200',
              name: '東京世田谷区',
              maxInt: '4',
            },
            {
              code: '1311300',
              name: '東京渋谷区',
              maxInt: '4',
            },
            {
              code: '1311400',
              name: '東京中野区',
              maxInt: '4',
            },
            {
              code: '1311500',
              name: '東京杉並区',
              maxInt: '4',
            },
            {
              code: '1311700',
              name: '東京北区',
              maxInt: '4',
            },
            {
              code: '1311800',
              name: '東京荒川区',
              maxInt: '4',
            },
            {
              code: '1311900',
              name: '東京板橋区',
              maxInt: '4',
            },
            {
              code: '1312100',
              name: '東京足立区',
              maxInt: '4',
            },
            {
              code: '1312200',
              name: '東京葛飾区',
              maxInt: '4',
            },
            {
              code: '1312300',
              name: '東京江戸川区',
              maxInt: '4',
            },
            {
              code: '1320800',
              name: '調布市',
              maxInt: '4',
            },
            {
              code: '1320900',
              name: '町田市',
              maxInt: '4',
            },
            {
              code: '1322400',
              name: '多摩市',
              maxInt: '4',
            },
            {
              code: '1410100',
              name: '横浜鶴見区',
              maxInt: '4',
            },
            {
              code: '1410200',
              name: '横浜神奈川区',
              maxInt: '4',
            },
            {
              code: '1410300',
              name: '横浜西区',
              maxInt: '4',
            },
            {
              code: '1410400',
              name: '横浜中区',
              maxInt: '4',
            },
            {
              code: '1410600',
              name: '横浜保土ケ谷区',
              maxInt: '4',
            },
            {
              code: '1410900',
              name: '横浜港北区',
              maxInt: '4',
            },
            {
              code: '1411000',
              name: '横浜戸塚区',
              maxInt: '4',
            },
            {
              code: '1411300',
              name: '横浜緑区',
              maxInt: '4',
            },
            {
              code: '1411400',
              name: '横浜瀬谷区',
              maxInt: '4',
            },
            {
              code: '1413100',
              name: '川崎川崎区',
              maxInt: '4',
            },
            {
              code: '1413600',
              name: '川崎宮前区',
              maxInt: '4',
            },
            {
              code: '1415100',
              name: '相模原緑区',
              maxInt: '4',
            },
            {
              code: '1420300',
              name: '平塚市',
              maxInt: '4',
            },
            {
              code: '1420500',
              name: '藤沢市',
              maxInt: '4',
            },
            {
              code: '1420600',
              name: '小田原市',
              maxInt: '4',
            },
            {
              code: '1421200',
              name: '厚木市',
              maxInt: '4',
            },
            {
              code: '1421800',
              name: '綾瀬市',
              maxInt: '4',
            },
            {
              code: '1432100',
              name: '寒川町',
              maxInt: '4',
            },
            {
              code: '1434200',
              name: '二宮町',
              maxInt: '4',
            },
            {
              code: '1436100',
              name: '中井町',
              maxInt: '4',
            },
            {
              code: '1436200',
              name: '神奈川大井町',
              maxInt: '4',
            },
            {
              code: '1438400',
              name: '湯河原町',
              maxInt: '4',
            },
            {
              code: '1510200',
              name: '新潟東区',
              maxInt: '4',
            },
            {
              code: '1510300',
              name: '新潟中央区',
              maxInt: '4',
            },
            {
              code: '1510400',
              name: '新潟江南区',
              maxInt: '4',
            },
            {
              code: '1510500',
              name: '新潟秋葉区',
              maxInt: '4',
            },
            {
              code: '1510600',
              name: '新潟南区',
              maxInt: '4',
            },
            {
              code: '1510700',
              name: '新潟西区',
              maxInt: '4',
            },
            {
              code: '1520200',
              name: '長岡市',
              maxInt: '4',
            },
            {
              code: '1520400',
              name: '三条市',
              maxInt: '4',
            },
            {
              code: '1520900',
              name: '加茂市',
              maxInt: '4',
            },
            {
              code: '1521100',
              name: '見附市',
              maxInt: '4',
            },
            {
              code: '1521200',
              name: '村上市',
              maxInt: '4',
            },
            {
              code: '1521800',
              name: '五泉市',
              maxInt: '4',
            },
            {
              code: '1522200',
              name: '上越市',
              maxInt: '4',
            },
            {
              code: '1522300',
              name: '阿賀野市',
              maxInt: '4',
            },
            {
              code: '1522600',
              name: '南魚沼市',
              maxInt: '4',
            },
            {
              code: '1538500',
              name: '阿賀町',
              maxInt: '4',
            },
            {
              code: '1550400',
              name: '刈羽村',
              maxInt: '4',
            },
            {
              code: '1920100',
              name: '甲府市',
              maxInt: '4',
            },
            {
              code: '1920800',
              name: '南アルプス市',
              maxInt: '4',
            },
            {
              code: '1921100',
              name: '笛吹市',
              maxInt: '4',
            },
            {
              code: '1921300',
              name: '甲州市',
              maxInt: '4',
            },
            {
              code: '1936800',
              name: '富士川町',
              maxInt: '4',
            },
            {
              code: '1942400',
              name: '忍野村',
              maxInt: '4',
            },
            {
              code: '2221000',
              name: '富士市',
              maxInt: '4',
            },
            {
              code: '2221500',
              name: '御殿場市',
              maxInt: '4',
            },
            {
              code: '0120200',
              name: '函館市',
              maxInt: '3',
            },
            {
              code: '0120600',
              name: '釧路市',
              maxInt: '3',
            },
            {
              code: '0120700',
              name: '帯広市',
              maxInt: '3',
            },
            {
              code: '0123600',
              name: '渡島北斗市',
              maxInt: '3',
            },
            {
              code: '0130400',
              name: '新篠津村',
              maxInt: '3',
            },
            {
              code: '0133300',
              name: '知内町',
              maxInt: '3',
            },
            {
              code: '0133400',
              name: '木古内町',
              maxInt: '3',
            },
            {
              code: '0142300',
              name: '南幌町',
              maxInt: '3',
            },
            {
              code: '0142800',
              name: '長沼町',
              maxInt: '3',
            },
            {
              code: '0158600',
              name: 'むかわ町',
              maxInt: '3',
            },
            {
              code: '0160400',
              name: '新冠町',
              maxInt: '3',
            },
            {
              code: '0163100',
              name: '音更町',
              maxInt: '3',
            },
            {
              code: '0163900',
              name: '更別村',
              maxInt: '3',
            },
            {
              code: '0164100',
              name: '十勝大樹町',
              maxInt: '3',
            },
            {
              code: '0164900',
              name: '浦幌町',
              maxInt: '3',
            },
            {
              code: '0220100',
              name: '青森市',
              maxInt: '3',
            },
            {
              code: '0220200',
              name: '弘前市',
              maxInt: '3',
            },
            {
              code: '0220400',
              name: '黒石市',
              maxInt: '3',
            },
            {
              code: '0220500',
              name: '五所川原市',
              maxInt: '3',
            },
            {
              code: '0220700',
              name: '三沢市',
              maxInt: '3',
            },
            {
              code: '0220800',
              name: 'むつ市',
              maxInt: '3',
            },
            {
              code: '0220900',
              name: 'つがる市',
              maxInt: '3',
            },
            {
              code: '0221000',
              name: '平川市',
              maxInt: '3',
            },
            {
              code: '0230100',
              name: '平内町',
              maxInt: '3',
            },
            {
              code: '0230400',
              name: '蓬田村',
              maxInt: '3',
            },
            {
              code: '0230700',
              name: '外ヶ浜町',
              maxInt: '3',
            },
            {
              code: '0234300',
              name: '西目屋村',
              maxInt: '3',
            },
            {
              code: '0236100',
              name: '藤崎町',
              maxInt: '3',
            },
            {
              code: '0236700',
              name: '田舎館村',
              maxInt: '3',
            },
            {
              code: '0238100',
              name: '板柳町',
              maxInt: '3',
            },
            {
              code: '0238400',
              name: '鶴田町',
              maxInt: '3',
            },
            {
              code: '0240100',
              name: '野辺地町',
              maxInt: '3',
            },
            {
              code: '0240600',
              name: '横浜町',
              maxInt: '3',
            },
            {
              code: '0241100',
              name: '六ヶ所村',
              maxInt: '3',
            },
            {
              code: '0242300',
              name: '大間町',
              maxInt: '3',
            },
            {
              code: '0242400',
              name: '東通村',
              maxInt: '3',
            },
            {
              code: '0244100',
              name: '三戸町',
              maxInt: '3',
            },
            {
              code: '0244300',
              name: '田子町',
              maxInt: '3',
            },
            {
              code: '0245000',
              name: '新郷村',
              maxInt: '3',
            },
            {
              code: '0321300',
              name: '二戸市',
              maxInt: '3',
            },
            {
              code: '0330100',
              name: '雫石町',
              maxInt: '3',
            },
            {
              code: '0330200',
              name: '葛巻町',
              maxInt: '3',
            },
            {
              code: '0336600',
              name: '西和賀町',
              maxInt: '3',
            },
            {
              code: '0346100',
              name: '大槌町',
              maxInt: '3',
            },
            {
              code: '0348300',
              name: '岩泉町',
              maxInt: '3',
            },
            {
              code: '0348400',
              name: '田野畑村',
              maxInt: '3',
            },
            {
              code: '0350100',
              name: '軽米町',
              maxInt: '3',
            },
            {
              code: '0350600',
              name: '九戸村',
              maxInt: '3',
            },
            {
              code: '0350700',
              name: '岩手洋野町',
              maxInt: '3',
            },
            {
              code: '0352400',
              name: '一戸町',
              maxInt: '3',
            },
            {
              code: '0520200',
              name: '能代市',
              maxInt: '3',
            },
            {
              code: '0520400',
              name: '大館市',
              maxInt: '3',
            },
            {
              code: '0520600',
              name: '男鹿市',
              maxInt: '3',
            },
            {
              code: '0520900',
              name: '鹿角市',
              maxInt: '3',
            },
            {
              code: '0521100',
              name: '潟上市',
              maxInt: '3',
            },
            {
              code: '0521300',
              name: '北秋田市',
              maxInt: '3',
            },
            {
              code: '0532700',
              name: '上小阿仁村',
              maxInt: '3',
            },
            {
              code: '0534600',
              name: '藤里町',
              maxInt: '3',
            },
            {
              code: '0534800',
              name: '三種町',
              maxInt: '3',
            },
            {
              code: '0536100',
              name: '五城目町',
              maxInt: '3',
            },
            {
              code: '0536300',
              name: '八郎潟町',
              maxInt: '3',
            },
            {
              code: '0546400',
              name: '東成瀬村',
              maxInt: '3',
            },
            {
              code: '0636100',
              name: '山形金山町',
              maxInt: '3',
            },
            {
              code: '0736700',
              name: '只見町',
              maxInt: '3',
            },
            {
              code: '0740200',
              name: '北塩原村',
              maxInt: '3',
            },
            {
              code: '0744400',
              name: '三島町',
              maxInt: '3',
            },
            {
              code: '0744500',
              name: '福島金山町',
              maxInt: '3',
            },
            {
              code: '0744600',
              name: '福島昭和村',
              maxInt: '3',
            },
            {
              code: '0830900',
              name: '大洗町',
              maxInt: '3',
            },
            {
              code: '0930100',
              name: '上三川町',
              maxInt: '3',
            },
            {
              code: '1020800',
              name: '渋川市',
              maxInt: '3',
            },
            {
              code: '1020900',
              name: '藤岡市',
              maxInt: '3',
            },
            {
              code: '1021000',
              name: '富岡市',
              maxInt: '3',
            },
            {
              code: '1021200',
              name: 'みどり市',
              maxInt: '3',
            },
            {
              code: '1034400',
              name: '榛東村',
              maxInt: '3',
            },
            {
              code: '1034500',
              name: '吉岡町',
              maxInt: '3',
            },
            {
              code: '1036700',
              name: '神流町',
              maxInt: '3',
            },
            {
              code: '1038400',
              name: '甘楽町',
              maxInt: '3',
            },
            {
              code: '1042100',
              name: '中之条町',
              maxInt: '3',
            },
            {
              code: '1042600',
              name: '草津町',
              maxInt: '3',
            },
            {
              code: '1042800',
              name: '群馬高山村',
              maxInt: '3',
            },
            {
              code: '1042900',
              name: '東吾妻町',
              maxInt: '3',
            },
            {
              code: '1044800',
              name: '群馬昭和村',
              maxInt: '3',
            },
            {
              code: '1046400',
              name: '玉村町',
              maxInt: '3',
            },
            {
              code: '1110600',
              name: 'さいたま桜区',
              maxInt: '3',
            },
            {
              code: '1110700',
              name: 'さいたま浦和区',
              maxInt: '3',
            },
            {
              code: '1120100',
              name: '川越市',
              maxInt: '3',
            },
            {
              code: '1120700',
              name: '秩父市',
              maxInt: '3',
            },
            {
              code: '1120800',
              name: '所沢市',
              maxInt: '3',
            },
            {
              code: '1120900',
              name: '飯能市',
              maxInt: '3',
            },
            {
              code: '1121500',
              name: '狭山市',
              maxInt: '3',
            },
            {
              code: '1122200',
              name: '越谷市',
              maxInt: '3',
            },
            {
              code: '1122300',
              name: '蕨市',
              maxInt: '3',
            },
            {
              code: '1122500',
              name: '入間市',
              maxInt: '3',
            },
            {
              code: '1122700',
              name: '朝霞市',
              maxInt: '3',
            },
            {
              code: '1122800',
              name: '志木市',
              maxInt: '3',
            },
            {
              code: '1122900',
              name: '和光市',
              maxInt: '3',
            },
            {
              code: '1123000',
              name: '新座市',
              maxInt: '3',
            },
            {
              code: '1123800',
              name: '蓮田市',
              maxInt: '3',
            },
            {
              code: '1124200',
              name: '日高市',
              maxInt: '3',
            },
            {
              code: '1124500',
              name: 'ふじみ野市',
              maxInt: '3',
            },
            {
              code: '1130100',
              name: '伊奈町',
              maxInt: '3',
            },
            {
              code: '1132400',
              name: '埼玉三芳町',
              maxInt: '3',
            },
            {
              code: '1132700',
              name: '越生町',
              maxInt: '3',
            },
            {
              code: '1134200',
              name: '嵐山町',
              maxInt: '3',
            },
            {
              code: '1134300',
              name: '小川町',
              maxInt: '3',
            },
            {
              code: '1134800',
              name: '鳩山町',
              maxInt: '3',
            },
            {
              code: '1134900',
              name: 'ときがわ町',
              maxInt: '3',
            },
            {
              code: '1136100',
              name: '横瀬町',
              maxInt: '3',
            },
            {
              code: '1136200',
              name: '皆野町',
              maxInt: '3',
            },
            {
              code: '1136300',
              name: '長瀞町',
              maxInt: '3',
            },
            {
              code: '1136500',
              name: '小鹿野町',
              maxInt: '3',
            },
            {
              code: '1136900',
              name: '東秩父村',
              maxInt: '3',
            },
            {
              code: '1138100',
              name: '埼玉美里町',
              maxInt: '3',
            },
            {
              code: '1138300',
              name: '埼玉神川町',
              maxInt: '3',
            },
            {
              code: '1138500',
              name: '上里町',
              maxInt: '3',
            },
            {
              code: '1210500',
              name: '千葉緑区',
              maxInt: '3',
            },
            {
              code: '1220200',
              name: '銚子市',
              maxInt: '3',
            },
            {
              code: '1220300',
              name: '市川市',
              maxInt: '3',
            },
            {
              code: '1220500',
              name: '館山市',
              maxInt: '3',
            },
            {
              code: '1220600',
              name: '木更津市',
              maxInt: '3',
            },
            {
              code: '1221000',
              name: '茂原市',
              maxInt: '3',
            },
            {
              code: '1221900',
              name: '市原市',
              maxInt: '3',
            },
            {
              code: '1222200',
              name: '我孫子市',
              maxInt: '3',
            },
            {
              code: '1222300',
              name: '鴨川市',
              maxInt: '3',
            },
            {
              code: '1222500',
              name: '君津市',
              maxInt: '3',
            },
            {
              code: '1222600',
              name: '富津市',
              maxInt: '3',
            },
            {
              code: '1222900',
              name: '袖ケ浦市',
              maxInt: '3',
            },
            {
              code: '1223400',
              name: '南房総市',
              maxInt: '3',
            },
            {
              code: '1223500',
              name: '匝瑳市',
              maxInt: '3',
            },
            {
              code: '1223800',
              name: 'いすみ市',
              maxInt: '3',
            },
            {
              code: '1223900',
              name: '大網白里市',
              maxInt: '3',
            },
            {
              code: '1232200',
              name: '酒々井町',
              maxInt: '3',
            },
            {
              code: '1234900',
              name: '東庄町',
              maxInt: '3',
            },
            {
              code: '1240300',
              name: '九十九里町',
              maxInt: '3',
            },
            {
              code: '1240900',
              name: '芝山町',
              maxInt: '3',
            },
            {
              code: '1241000',
              name: '横芝光町',
              maxInt: '3',
            },
            {
              code: '1242100',
              name: '一宮町',
              maxInt: '3',
            },
            {
              code: '1242200',
              name: '睦沢町',
              maxInt: '3',
            },
            {
              code: '1242300',
              name: '長生村',
              maxInt: '3',
            },
            {
              code: '1242400',
              name: '白子町',
              maxInt: '3',
            },
            {
              code: '1242600',
              name: '長柄町',
              maxInt: '3',
            },
            {
              code: '1242700',
              name: '長南町',
              maxInt: '3',
            },
            {
              code: '1244100',
              name: '大多喜町',
              maxInt: '3',
            },
            {
              code: '1310300',
              name: '東京港区',
              maxInt: '3',
            },
            {
              code: '1310400',
              name: '東京新宿区',
              maxInt: '3',
            },
            {
              code: '1310500',
              name: '東京文京区',
              maxInt: '3',
            },
            {
              code: '1310600',
              name: '東京台東区',
              maxInt: '3',
            },
            {
              code: '1310900',
              name: '東京品川区',
              maxInt: '3',
            },
            {
              code: '1311000',
              name: '東京目黒区',
              maxInt: '3',
            },
            {
              code: '1311100',
              name: '東京大田区',
              maxInt: '3',
            },
            {
              code: '1311600',
              name: '東京豊島区',
              maxInt: '3',
            },
            {
              code: '1312000',
              name: '東京練馬区',
              maxInt: '3',
            },
            {
              code: '1320100',
              name: '八王子市',
              maxInt: '3',
            },
            {
              code: '1320200',
              name: '立川市',
              maxInt: '3',
            },
            {
              code: '1320300',
              name: '武蔵野市',
              maxInt: '3',
            },
            {
              code: '1320400',
              name: '三鷹市',
              maxInt: '3',
            },
            {
              code: '1320500',
              name: '青梅市',
              maxInt: '3',
            },
            {
              code: '1320600',
              name: '東京府中市',
              maxInt: '3',
            },
            {
              code: '1320700',
              name: '昭島市',
              maxInt: '3',
            },
            {
              code: '1321000',
              name: '小金井市',
              maxInt: '3',
            },
            {
              code: '1321100',
              name: '小平市',
              maxInt: '3',
            },
            {
              code: '1321200',
              name: '日野市',
              maxInt: '3',
            },
            {
              code: '1321300',
              name: '東村山市',
              maxInt: '3',
            },
            {
              code: '1321400',
              name: '国分寺市',
              maxInt: '3',
            },
            {
              code: '1321500',
              name: '国立市',
              maxInt: '3',
            },
            {
              code: '1321900',
              name: '狛江市',
              maxInt: '3',
            },
            {
              code: '1322000',
              name: '東大和市',
              maxInt: '3',
            },
            {
              code: '1322100',
              name: '清瀬市',
              maxInt: '3',
            },
            {
              code: '1322200',
              name: '東久留米市',
              maxInt: '3',
            },
            {
              code: '1322300',
              name: '武蔵村山市',
              maxInt: '3',
            },
            {
              code: '1322500',
              name: '稲城市',
              maxInt: '3',
            },
            {
              code: '1322700',
              name: '羽村市',
              maxInt: '3',
            },
            {
              code: '1322800',
              name: 'あきる野市',
              maxInt: '3',
            },
            {
              code: '1322900',
              name: '西東京市',
              maxInt: '3',
            },
            {
              code: '1330300',
              name: '瑞穂町',
              maxInt: '3',
            },
            {
              code: '1410500',
              name: '横浜南区',
              maxInt: '3',
            },
            {
              code: '1410700',
              name: '横浜磯子区',
              maxInt: '3',
            },
            {
              code: '1410800',
              name: '横浜金沢区',
              maxInt: '3',
            },
            {
              code: '1411100',
              name: '横浜港南区',
              maxInt: '3',
            },
            {
              code: '1411200',
              name: '横浜旭区',
              maxInt: '3',
            },
            {
              code: '1411500',
              name: '横浜栄区',
              maxInt: '3',
            },
            {
              code: '1411600',
              name: '横浜泉区',
              maxInt: '3',
            },
            {
              code: '1411700',
              name: '横浜青葉区',
              maxInt: '3',
            },
            {
              code: '1411800',
              name: '横浜都筑区',
              maxInt: '3',
            },
            {
              code: '1413200',
              name: '川崎幸区',
              maxInt: '3',
            },
            {
              code: '1413300',
              name: '川崎中原区',
              maxInt: '3',
            },
            {
              code: '1413400',
              name: '川崎高津区',
              maxInt: '3',
            },
            {
              code: '1413500',
              name: '川崎多摩区',
              maxInt: '3',
            },
            {
              code: '1413700',
              name: '川崎麻生区',
              maxInt: '3',
            },
            {
              code: '1415200',
              name: '相模原中央区',
              maxInt: '3',
            },
            {
              code: '1415300',
              name: '相模原南区',
              maxInt: '3',
            },
            {
              code: '1420100',
              name: '横須賀市',
              maxInt: '3',
            },
            {
              code: '1420400',
              name: '鎌倉市',
              maxInt: '3',
            },
            {
              code: '1420700',
              name: '茅ヶ崎市',
              maxInt: '3',
            },
            {
              code: '1420800',
              name: '逗子市',
              maxInt: '3',
            },
            {
              code: '1421000',
              name: '三浦市',
              maxInt: '3',
            },
            {
              code: '1421100',
              name: '秦野市',
              maxInt: '3',
            },
            {
              code: '1421300',
              name: '大和市',
              maxInt: '3',
            },
            {
              code: '1421400',
              name: '伊勢原市',
              maxInt: '3',
            },
            {
              code: '1421500',
              name: '海老名市',
              maxInt: '3',
            },
            {
              code: '1421600',
              name: '座間市',
              maxInt: '3',
            },
            {
              code: '1421700',
              name: '南足柄市',
              maxInt: '3',
            },
            {
              code: '1434100',
              name: '大磯町',
              maxInt: '3',
            },
            {
              code: '1436300',
              name: '松田町',
              maxInt: '3',
            },
            {
              code: '1436400',
              name: '山北町',
              maxInt: '3',
            },
            {
              code: '1436600',
              name: '開成町',
              maxInt: '3',
            },
            {
              code: '1438200',
              name: '箱根町',
              maxInt: '3',
            },
            {
              code: '1438300',
              name: '真鶴町',
              maxInt: '3',
            },
            {
              code: '1440100',
              name: '愛川町',
              maxInt: '3',
            },
            {
              code: '1440200',
              name: '清川村',
              maxInt: '3',
            },
            {
              code: '1510800',
              name: '新潟西蒲区',
              maxInt: '3',
            },
            {
              code: '1520500',
              name: '柏崎市',
              maxInt: '3',
            },
            {
              code: '1520600',
              name: '新発田市',
              maxInt: '3',
            },
            {
              code: '1520800',
              name: '小千谷市',
              maxInt: '3',
            },
            {
              code: '1521000',
              name: '十日町市',
              maxInt: '3',
            },
            {
              code: '1521300',
              name: '燕市',
              maxInt: '3',
            },
            {
              code: '1522400',
              name: '佐渡市',
              maxInt: '3',
            },
            {
              code: '1522500',
              name: '魚沼市',
              maxInt: '3',
            },
            {
              code: '1522700',
              name: '胎内市',
              maxInt: '3',
            },
            {
              code: '1530700',
              name: '聖籠町',
              maxInt: '3',
            },
            {
              code: '1534200',
              name: '弥彦村',
              maxInt: '3',
            },
            {
              code: '1536100',
              name: '田上町',
              maxInt: '3',
            },
            {
              code: '1540500',
              name: '出雲崎町',
              maxInt: '3',
            },
            {
              code: '1548200',
              name: '津南町',
              maxInt: '3',
            },
            {
              code: '1558100',
              name: '関川村',
              maxInt: '3',
            },
            {
              code: '1720500',
              name: '珠洲市',
              maxInt: '3',
            },
            {
              code: '1920200',
              name: '富士吉田市',
              maxInt: '3',
            },
            {
              code: '1920500',
              name: '山梨市',
              maxInt: '3',
            },
            {
              code: '1920600',
              name: '大月市',
              maxInt: '3',
            },
            {
              code: '1920700',
              name: '韮崎市',
              maxInt: '3',
            },
            {
              code: '1920900',
              name: '山梨北杜市',
              maxInt: '3',
            },
            {
              code: '1921000',
              name: '甲斐市',
              maxInt: '3',
            },
            {
              code: '1921200',
              name: '上野原市',
              maxInt: '3',
            },
            {
              code: '1921400',
              name: '中央市',
              maxInt: '3',
            },
            {
              code: '1934600',
              name: '市川三郷町',
              maxInt: '3',
            },
            {
              code: '1936500',
              name: '身延町',
              maxInt: '3',
            },
            {
              code: '1938400',
              name: '昭和町',
              maxInt: '3',
            },
            {
              code: '1942300',
              name: '西桂町',
              maxInt: '3',
            },
            {
              code: '1942500',
              name: '山中湖村',
              maxInt: '3',
            },
            {
              code: '1942900',
              name: '鳴沢村',
              maxInt: '3',
            },
            {
              code: '1943000',
              name: '富士河口湖町',
              maxInt: '3',
            },
            {
              code: '2020300',
              name: '上田市',
              maxInt: '3',
            },
            {
              code: '2020500',
              name: '飯田市',
              maxInt: '3',
            },
            {
              code: '2020600',
              name: '諏訪市',
              maxInt: '3',
            },
            {
              code: '2020800',
              name: '小諸市',
              maxInt: '3',
            },
            {
              code: '2021400',
              name: '茅野市',
              maxInt: '3',
            },
            {
              code: '2021700',
              name: '佐久市',
              maxInt: '3',
            },
            {
              code: '2030400',
              name: '長野川上村',
              maxInt: '3',
            },
            {
              code: '2030500',
              name: '長野南牧村',
              maxInt: '3',
            },
            {
              code: '2030900',
              name: '佐久穂町',
              maxInt: '3',
            },
            {
              code: '2032100',
              name: '軽井沢町',
              maxInt: '3',
            },
            {
              code: '2032300',
              name: '御代田町',
              maxInt: '3',
            },
            {
              code: '2036200',
              name: '富士見町',
              maxInt: '3',
            },
            {
              code: '2036300',
              name: '原村',
              maxInt: '3',
            },
            {
              code: '2038400',
              name: '飯島町',
              maxInt: '3',
            },
            {
              code: '2043200',
              name: '木曽町',
              maxInt: '3',
            },
            {
              code: '2060200',
              name: '栄村',
              maxInt: '3',
            },
            {
              code: '2210300',
              name: '静岡清水区',
              maxInt: '3',
            },
            {
              code: '2220300',
              name: '沼津市',
              maxInt: '3',
            },
            {
              code: '2220600',
              name: '三島市',
              maxInt: '3',
            },
            {
              code: '2220700',
              name: '富士宮市',
              maxInt: '3',
            },
            {
              code: '2222200',
              name: '伊豆市',
              maxInt: '3',
            },
            {
              code: '2222400',
              name: '菊川市',
              maxInt: '3',
            },
            {
              code: '2222500',
              name: '伊豆の国市',
              maxInt: '3',
            },
            {
              code: '2230100',
              name: '東伊豆町',
              maxInt: '3',
            },
            {
              code: '2230200',
              name: '河津町',
              maxInt: '3',
            },
            {
              code: '2230500',
              name: '松崎町',
              maxInt: '3',
            },
            {
              code: '2230600',
              name: '西伊豆町',
              maxInt: '3',
            },
            {
              code: '2232500',
              name: '函南町',
              maxInt: '3',
            },
            {
              code: '2234100',
              name: '静岡清水町',
              maxInt: '3',
            },
            {
              code: '2234200',
              name: '長泉町',
              maxInt: '3',
            },
            {
              code: '2234400',
              name: '小山町',
              maxInt: '3',
            },
            {
              code: '2311100',
              name: '名古屋港区',
              maxInt: '3',
            },
            {
              code: '2342700',
              name: '飛島村',
              maxInt: '3',
            },
            {
              code: '0110200',
              name: '札幌北区',
              maxInt: '2',
            },
            {
              code: '0110300',
              name: '札幌東区',
              maxInt: '2',
            },
            {
              code: '0110400',
              name: '札幌白石区',
              maxInt: '2',
            },
            {
              code: '0110800',
              name: '札幌厚別区',
              maxInt: '2',
            },
            {
              code: '0110900',
              name: '札幌手稲区',
              maxInt: '2',
            },
            {
              code: '0111000',
              name: '札幌清田区',
              maxInt: '2',
            },
            {
              code: '0120500',
              name: '室蘭市',
              maxInt: '2',
            },
            {
              code: '0120800',
              name: '北見市',
              maxInt: '2',
            },
            {
              code: '0121000',
              name: '岩見沢市',
              maxInt: '2',
            },
            {
              code: '0121300',
              name: '苫小牧市',
              maxInt: '2',
            },
            {
              code: '0121500',
              name: '美唄市',
              maxInt: '2',
            },
            {
              code: '0121600',
              name: '芦別市',
              maxInt: '2',
            },
            {
              code: '0121700',
              name: '江別市',
              maxInt: '2',
            },
            {
              code: '0122200',
              name: '三笠市',
              maxInt: '2',
            },
            {
              code: '0122300',
              name: '根室市',
              maxInt: '2',
            },
            {
              code: '0122400',
              name: '千歳市',
              maxInt: '2',
            },
            {
              code: '0122500',
              name: '滝川市',
              maxInt: '2',
            },
            {
              code: '0122900',
              name: '富良野市',
              maxInt: '2',
            },
            {
              code: '0123100',
              name: '恵庭市',
              maxInt: '2',
            },
            {
              code: '0123300',
              name: '胆振伊達市',
              maxInt: '2',
            },
            {
              code: '0123400',
              name: '北広島市',
              maxInt: '2',
            },
            {
              code: '0123500',
              name: '石狩市',
              maxInt: '2',
            },
            {
              code: '0130300',
              name: '当別町',
              maxInt: '2',
            },
            {
              code: '0133200',
              name: '福島町',
              maxInt: '2',
            },
            {
              code: '0133700',
              name: '七飯町',
              maxInt: '2',
            },
            {
              code: '0134300',
              name: '鹿部町',
              maxInt: '2',
            },
            {
              code: '0134500',
              name: '渡島森町',
              maxInt: '2',
            },
            {
              code: '0134600',
              name: '八雲町',
              maxInt: '2',
            },
            {
              code: '0134700',
              name: '長万部町',
              maxInt: '2',
            },
            {
              code: '0136100',
              name: '檜山江差町',
              maxInt: '2',
            },
            {
              code: '0136300',
              name: '厚沢部町',
              maxInt: '2',
            },
            {
              code: '0136400',
              name: '乙部町',
              maxInt: '2',
            },
            {
              code: '0137100',
              name: 'せたな町',
              maxInt: '2',
            },
            {
              code: '0139500',
              name: 'ニセコ町',
              maxInt: '2',
            },
            {
              code: '0139600',
              name: '真狩村',
              maxInt: '2',
            },
            {
              code: '0139700',
              name: '留寿都村',
              maxInt: '2',
            },
            {
              code: '0140000',
              name: '倶知安町',
              maxInt: '2',
            },
            {
              code: '0140900',
              name: '赤井川村',
              maxInt: '2',
            },
            {
              code: '0142700',
              name: '由仁町',
              maxInt: '2',
            },
            {
              code: '0142900',
              name: '栗山町',
              maxInt: '2',
            },
            {
              code: '0143000',
              name: '月形町',
              maxInt: '2',
            },
            {
              code: '0143200',
              name: '新十津川町',
              maxInt: '2',
            },
            {
              code: '0143300',
              name: '妹背牛町',
              maxInt: '2',
            },
            {
              code: '0143400',
              name: '秩父別町',
              maxInt: '2',
            },
            {
              code: '0143700',
              name: '北竜町',
              maxInt: '2',
            },
            {
              code: '0143800',
              name: '沼田町',
              maxInt: '2',
            },
            {
              code: '0145400',
              name: '当麻町',
              maxInt: '2',
            },
            {
              code: '0145900',
              name: '美瑛町',
              maxInt: '2',
            },
            {
              code: '0146000',
              name: '上富良野町',
              maxInt: '2',
            },
            {
              code: '0146100',
              name: '中富良野町',
              maxInt: '2',
            },
            {
              code: '0146300',
              name: '占冠村',
              maxInt: '2',
            },
            {
              code: '0148100',
              name: '増毛町',
              maxInt: '2',
            },
            {
              code: '0151100',
              name: '猿払村',
              maxInt: '2',
            },
            {
              code: '0154300',
              name: '美幌町',
              maxInt: '2',
            },
            {
              code: '0154600',
              name: '清里町',
              maxInt: '2',
            },
            {
              code: '0154700',
              name: '小清水町',
              maxInt: '2',
            },
            {
              code: '0154900',
              name: '訓子府町',
              maxInt: '2',
            },
            {
              code: '0155900',
              name: '湧別町',
              maxInt: '2',
            },
            {
              code: '0156400',
              name: '大空町',
              maxInt: '2',
            },
            {
              code: '0157500',
              name: '壮瞥町',
              maxInt: '2',
            },
            {
              code: '0157800',
              name: '白老町',
              maxInt: '2',
            },
            {
              code: '0158100',
              name: '厚真町',
              maxInt: '2',
            },
            {
              code: '0158400',
              name: '洞爺湖町',
              maxInt: '2',
            },
            {
              code: '0158500',
              name: '安平町',
              maxInt: '2',
            },
            {
              code: '0160100',
              name: '日高地方日高町',
              maxInt: '2',
            },
            {
              code: '0160200',
              name: '平取町',
              maxInt: '2',
            },
            {
              code: '0160700',
              name: '浦河町',
              maxInt: '2',
            },
            {
              code: '0160800',
              name: '様似町',
              maxInt: '2',
            },
            {
              code: '0160900',
              name: 'えりも町',
              maxInt: '2',
            },
            {
              code: '0161000',
              name: '新ひだか町',
              maxInt: '2',
            },
            {
              code: '0163200',
              name: '士幌町',
              maxInt: '2',
            },
            {
              code: '0163300',
              name: '上士幌町',
              maxInt: '2',
            },
            {
              code: '0163400',
              name: '鹿追町',
              maxInt: '2',
            },
            {
              code: '0163500',
              name: '新得町',
              maxInt: '2',
            },
            {
              code: '0163600',
              name: '十勝清水町',
              maxInt: '2',
            },
            {
              code: '0163800',
              name: '中札内村',
              maxInt: '2',
            },
            {
              code: '0164200',
              name: '広尾町',
              maxInt: '2',
            },
            {
              code: '0164300',
              name: '幕別町',
              maxInt: '2',
            },
            {
              code: '0164400',
              name: '十勝池田町',
              maxInt: '2',
            },
            {
              code: '0164500',
              name: '豊頃町',
              maxInt: '2',
            },
            {
              code: '0164600',
              name: '本別町',
              maxInt: '2',
            },
            {
              code: '0164700',
              name: '足寄町',
              maxInt: '2',
            },
            {
              code: '0166100',
              name: '釧路町',
              maxInt: '2',
            },
            {
              code: '0166200',
              name: '厚岸町',
              maxInt: '2',
            },
            {
              code: '0166400',
              name: '標茶町',
              maxInt: '2',
            },
            {
              code: '0166500',
              name: '弟子屈町',
              maxInt: '2',
            },
            {
              code: '0166700',
              name: '鶴居村',
              maxInt: '2',
            },
            {
              code: '0166800',
              name: '白糠町',
              maxInt: '2',
            },
            {
              code: '0169100',
              name: '別海町',
              maxInt: '2',
            },
            {
              code: '0169200',
              name: '中標津町',
              maxInt: '2',
            },
            {
              code: '0169300',
              name: '標津町',
              maxInt: '2',
            },
            {
              code: '0169400',
              name: '羅臼町',
              maxInt: '2',
            },
            {
              code: '0230300',
              name: '今別町',
              maxInt: '2',
            },
            {
              code: '0232100',
              name: '鰺ヶ沢町',
              maxInt: '2',
            },
            {
              code: '0232300',
              name: '深浦町',
              maxInt: '2',
            },
            {
              code: '0236200',
              name: '大鰐町',
              maxInt: '2',
            },
            {
              code: '0238700',
              name: '中泊町',
              maxInt: '2',
            },
            {
              code: '0242500',
              name: '風間浦村',
              maxInt: '2',
            },
            {
              code: '0242600',
              name: '佐井村',
              maxInt: '2',
            },
            {
              code: '0530300',
              name: '小坂町',
              maxInt: '2',
            },
            {
              code: '0534900',
              name: '八峰町',
              maxInt: '2',
            },
            {
              code: '0536800',
              name: '大潟村',
              maxInt: '2',
            },
            {
              code: '0736400',
              name: '檜枝岐村',
              maxInt: '2',
            },
            {
              code: '1036600',
              name: '群馬上野村',
              maxInt: '2',
            },
            {
              code: '1038200',
              name: '下仁田町',
              maxInt: '2',
            },
            {
              code: '1038300',
              name: '群馬南牧村',
              maxInt: '2',
            },
            {
              code: '1042400',
              name: '長野原町',
              maxInt: '2',
            },
            {
              code: '1042500',
              name: '嬬恋村',
              maxInt: '2',
            },
            {
              code: '1044300',
              name: '片品村',
              maxInt: '2',
            },
            {
              code: '1044400',
              name: '川場村',
              maxInt: '2',
            },
            {
              code: '1044900',
              name: 'みなかみ町',
              maxInt: '2',
            },
            {
              code: '1140800',
              name: '寄居町',
              maxInt: '2',
            },
            {
              code: '1221800',
              name: '勝浦市',
              maxInt: '2',
            },
            {
              code: '1244300',
              name: '御宿町',
              maxInt: '2',
            },
            {
              code: '1321800',
              name: '福生市',
              maxInt: '2',
            },
            {
              code: '1330500',
              name: '日の出町',
              maxInt: '2',
            },
            {
              code: '1330700',
              name: '檜原村',
              maxInt: '2',
            },
            {
              code: '1330800',
              name: '奥多摩町',
              maxInt: '2',
            },
            {
              code: '1336100',
              name: '伊豆大島町',
              maxInt: '2',
            },
            {
              code: '1336200',
              name: '東京利島村',
              maxInt: '2',
            },
            {
              code: '1336300',
              name: '新島村',
              maxInt: '2',
            },
            {
              code: '1336400',
              name: '神津島村',
              maxInt: '2',
            },
            {
              code: '1338100',
              name: '三宅村',
              maxInt: '2',
            },
            {
              code: '1338200',
              name: '御蔵島村',
              maxInt: '2',
            },
            {
              code: '1340100',
              name: '八丈町',
              maxInt: '2',
            },
            {
              code: '1340200',
              name: '青ヶ島村',
              maxInt: '2',
            },
            {
              code: '1430100',
              name: '葉山町',
              maxInt: '2',
            },
            {
              code: '1521600',
              name: '糸魚川市',
              maxInt: '2',
            },
            {
              code: '1521700',
              name: '妙高市',
              maxInt: '2',
            },
            {
              code: '1546100',
              name: '湯沢町',
              maxInt: '2',
            },
            {
              code: '1558600',
              name: '粟島浦村',
              maxInt: '2',
            },
            {
              code: '1620100',
              name: '富山市',
              maxInt: '2',
            },
            {
              code: '1620500',
              name: '氷見市',
              maxInt: '2',
            },
            {
              code: '1620600',
              name: '滑川市',
              maxInt: '2',
            },
            {
              code: '1621100',
              name: '射水市',
              maxInt: '2',
            },
            {
              code: '1632100',
              name: '舟橋村',
              maxInt: '2',
            },
            {
              code: '1632200',
              name: '上市町',
              maxInt: '2',
            },
            {
              code: '1720200',
              name: '七尾市',
              maxInt: '2',
            },
            {
              code: '1720400',
              name: '輪島市',
              maxInt: '2',
            },
            {
              code: '1720700',
              name: '羽咋市',
              maxInt: '2',
            },
            {
              code: '1740700',
              name: '中能登町',
              maxInt: '2',
            },
            {
              code: '1746300',
              name: '能登町',
              maxInt: '2',
            },
            {
              code: '1820200',
              name: '敦賀市',
              maxInt: '2',
            },
            {
              code: '1850100',
              name: '福井若狭町',
              maxInt: '2',
            },
            {
              code: '1920400',
              name: '都留市',
              maxInt: '2',
            },
            {
              code: '1936400',
              name: '早川町',
              maxInt: '2',
            },
            {
              code: '1936600',
              name: '山梨南部町',
              maxInt: '2',
            },
            {
              code: '1942200',
              name: '道志村',
              maxInt: '2',
            },
            {
              code: '1944300',
              name: '丹波山村',
              maxInt: '2',
            },
            {
              code: '2020100',
              name: '長野市',
              maxInt: '2',
            },
            {
              code: '2020200',
              name: '松本市',
              maxInt: '2',
            },
            {
              code: '2020400',
              name: '岡谷市',
              maxInt: '2',
            },
            {
              code: '2020700',
              name: '須坂市',
              maxInt: '2',
            },
            {
              code: '2020900',
              name: '伊那市',
              maxInt: '2',
            },
            {
              code: '2021000',
              name: '駒ヶ根市',
              maxInt: '2',
            },
            {
              code: '2021100',
              name: '中野市',
              maxInt: '2',
            },
            {
              code: '2021200',
              name: '大町市',
              maxInt: '2',
            },
            {
              code: '2021300',
              name: '飯山市',
              maxInt: '2',
            },
            {
              code: '2021500',
              name: '塩尻市',
              maxInt: '2',
            },
            {
              code: '2021800',
              name: '千曲市',
              maxInt: '2',
            },
            {
              code: '2021900',
              name: '東御市',
              maxInt: '2',
            },
            {
              code: '2022000',
              name: '安曇野市',
              maxInt: '2',
            },
            {
              code: '2030300',
              name: '小海町',
              maxInt: '2',
            },
            {
              code: '2030600',
              name: '南相木村',
              maxInt: '2',
            },
            {
              code: '2030700',
              name: '北相木村',
              maxInt: '2',
            },
            {
              code: '2032400',
              name: '立科町',
              maxInt: '2',
            },
            {
              code: '2036100',
              name: '下諏訪町',
              maxInt: '2',
            },
            {
              code: '2038200',
              name: '辰野町',
              maxInt: '2',
            },
            {
              code: '2038300',
              name: '箕輪町',
              maxInt: '2',
            },
            {
              code: '2038500',
              name: '南箕輪村',
              maxInt: '2',
            },
            {
              code: '2038600',
              name: '中川村',
              maxInt: '2',
            },
            {
              code: '2038800',
              name: '宮田村',
              maxInt: '2',
            },
            {
              code: '2040200',
              name: '松川町',
              maxInt: '2',
            },
            {
              code: '2040300',
              name: '長野高森町',
              maxInt: '2',
            },
            {
              code: '2040400',
              name: '阿南町',
              maxInt: '2',
            },
            {
              code: '2040700',
              name: '阿智村',
              maxInt: '2',
            },
            {
              code: '2040900',
              name: '平谷村',
              maxInt: '2',
            },
            {
              code: '2041000',
              name: '根羽村',
              maxInt: '2',
            },
            {
              code: '2041100',
              name: '下條村',
              maxInt: '2',
            },
            {
              code: '2041300',
              name: '天龍村',
              maxInt: '2',
            },
            {
              code: '2041400',
              name: '泰阜村',
              maxInt: '2',
            },
            {
              code: '2041500',
              name: '喬木村',
              maxInt: '2',
            },
            {
              code: '2041600',
              name: '豊丘村',
              maxInt: '2',
            },
            {
              code: '2041700',
              name: '大鹿村',
              maxInt: '2',
            },
            {
              code: '2042300',
              name: '南木曽町',
              maxInt: '2',
            },
            {
              code: '2042500',
              name: '木祖村',
              maxInt: '2',
            },
            {
              code: '2042900',
              name: '王滝村',
              maxInt: '2',
            },
            {
              code: '2043000',
              name: '大桑村',
              maxInt: '2',
            },
            {
              code: '2044600',
              name: '麻績村',
              maxInt: '2',
            },
            {
              code: '2045000',
              name: '山形村',
              maxInt: '2',
            },
            {
              code: '2045200',
              name: '筑北村',
              maxInt: '2',
            },
            {
              code: '2052100',
              name: '坂城町',
              maxInt: '2',
            },
            {
              code: '2056200',
              name: '木島平村',
              maxInt: '2',
            },
            {
              code: '2056300',
              name: '野沢温泉村',
              maxInt: '2',
            },
            {
              code: '2058300',
              name: '信濃町',
              maxInt: '2',
            },
            {
              code: '2058800',
              name: '小川村',
              maxInt: '2',
            },
            {
              code: '2059000',
              name: '飯綱町',
              maxInt: '2',
            },
            {
              code: '2120100',
              name: '岐阜市',
              maxInt: '2',
            },
            {
              code: '2120200',
              name: '大垣市',
              maxInt: '2',
            },
            {
              code: '2120600',
              name: '中津川市',
              maxInt: '2',
            },
            {
              code: '2120800',
              name: '瑞浪市',
              maxInt: '2',
            },
            {
              code: '2120900',
              name: '羽島市',
              maxInt: '2',
            },
            {
              code: '2121000',
              name: '恵那市',
              maxInt: '2',
            },
            {
              code: '2121200',
              name: '土岐市',
              maxInt: '2',
            },
            {
              code: '2121600',
              name: '瑞穂市',
              maxInt: '2',
            },
            {
              code: '2122100',
              name: '海津市',
              maxInt: '2',
            },
            {
              code: '2130200',
              name: '岐南町',
              maxInt: '2',
            },
            {
              code: '2130300',
              name: '笠松町',
              maxInt: '2',
            },
            {
              code: '2138200',
              name: '輪之内町',
              maxInt: '2',
            },
            {
              code: '2138300',
              name: '安八町',
              maxInt: '2',
            },
            {
              code: '2140300',
              name: '大野町',
              maxInt: '2',
            },
            {
              code: '2210100',
              name: '静岡葵区',
              maxInt: '2',
            },
            {
              code: '2210200',
              name: '静岡駿河区',
              maxInt: '2',
            },
            {
              code: '2213100',
              name: '浜松中区',
              maxInt: '2',
            },
            {
              code: '2213200',
              name: '浜松東区',
              maxInt: '2',
            },
            {
              code: '2213300',
              name: '浜松西区',
              maxInt: '2',
            },
            {
              code: '2213400',
              name: '浜松南区',
              maxInt: '2',
            },
            {
              code: '2213500',
              name: '浜松北区',
              maxInt: '2',
            },
            {
              code: '2213600',
              name: '浜松浜北区',
              maxInt: '2',
            },
            {
              code: '2213700',
              name: '浜松天竜区',
              maxInt: '2',
            },
            {
              code: '2220500',
              name: '熱海市',
              maxInt: '2',
            },
            {
              code: '2220800',
              name: '伊東市',
              maxInt: '2',
            },
            {
              code: '2220900',
              name: '島田市',
              maxInt: '2',
            },
            {
              code: '2221100',
              name: '磐田市',
              maxInt: '2',
            },
            {
              code: '2221200',
              name: '焼津市',
              maxInt: '2',
            },
            {
              code: '2221300',
              name: '掛川市',
              maxInt: '2',
            },
            {
              code: '2221400',
              name: '藤枝市',
              maxInt: '2',
            },
            {
              code: '2221600',
              name: '袋井市',
              maxInt: '2',
            },
            {
              code: '2221900',
              name: '下田市',
              maxInt: '2',
            },
            {
              code: '2222000',
              name: '裾野市',
              maxInt: '2',
            },
            {
              code: '2222100',
              name: '湖西市',
              maxInt: '2',
            },
            {
              code: '2222300',
              name: '御前崎市',
              maxInt: '2',
            },
            {
              code: '2222600',
              name: '牧之原市',
              maxInt: '2',
            },
            {
              code: '2230400',
              name: '南伊豆町',
              maxInt: '2',
            },
            {
              code: '2242400',
              name: '吉田町',
              maxInt: '2',
            },
            {
              code: '2242900',
              name: '川根本町',
              maxInt: '2',
            },
            {
              code: '2310200',
              name: '名古屋東区',
              maxInt: '2',
            },
            {
              code: '2310300',
              name: '名古屋北区',
              maxInt: '2',
            },
            {
              code: '2310400',
              name: '名古屋西区',
              maxInt: '2',
            },
            {
              code: '2310500',
              name: '名古屋中村区',
              maxInt: '2',
            },
            {
              code: '2310600',
              name: '名古屋中区',
              maxInt: '2',
            },
            {
              code: '2310700',
              name: '名古屋昭和区',
              maxInt: '2',
            },
            {
              code: '2310800',
              name: '名古屋瑞穂区',
              maxInt: '2',
            },
            {
              code: '2310900',
              name: '名古屋熱田区',
              maxInt: '2',
            },
            {
              code: '2311000',
              name: '名古屋中川区',
              maxInt: '2',
            },
            {
              code: '2311200',
              name: '名古屋南区',
              maxInt: '2',
            },
            {
              code: '2311300',
              name: '名古屋守山区',
              maxInt: '2',
            },
            {
              code: '2311500',
              name: '名古屋名東区',
              maxInt: '2',
            },
            {
              code: '2311600',
              name: '名古屋天白区',
              maxInt: '2',
            },
            {
              code: '2320100',
              name: '豊橋市',
              maxInt: '2',
            },
            {
              code: '2320300',
              name: '一宮市',
              maxInt: '2',
            },
            {
              code: '2320400',
              name: '瀬戸市',
              maxInt: '2',
            },
            {
              code: '2320500',
              name: '半田市',
              maxInt: '2',
            },
            {
              code: '2320600',
              name: '春日井市',
              maxInt: '2',
            },
            {
              code: '2320700',
              name: '豊川市',
              maxInt: '2',
            },
            {
              code: '2320800',
              name: '愛知津島市',
              maxInt: '2',
            },
            {
              code: '2320900',
              name: '碧南市',
              maxInt: '2',
            },
            {
              code: '2321000',
              name: '刈谷市',
              maxInt: '2',
            },
            {
              code: '2321100',
              name: '豊田市',
              maxInt: '2',
            },
            {
              code: '2321200',
              name: '安城市',
              maxInt: '2',
            },
            {
              code: '2321300',
              name: '西尾市',
              maxInt: '2',
            },
            {
              code: '2321600',
              name: '常滑市',
              maxInt: '2',
            },
            {
              code: '2322000',
              name: '稲沢市',
              maxInt: '2',
            },
            {
              code: '2322100',
              name: '新城市',
              maxInt: '2',
            },
            {
              code: '2322200',
              name: '東海市',
              maxInt: '2',
            },
            {
              code: '2322300',
              name: '大府市',
              maxInt: '2',
            },
            {
              code: '2322400',
              name: '知多市',
              maxInt: '2',
            },
            {
              code: '2322500',
              name: '知立市',
              maxInt: '2',
            },
            {
              code: '2322600',
              name: '尾張旭市',
              maxInt: '2',
            },
            {
              code: '2322700',
              name: '高浜市',
              maxInt: '2',
            },
            {
              code: '2322800',
              name: '岩倉市',
              maxInt: '2',
            },
            {
              code: '2322900',
              name: '豊明市',
              maxInt: '2',
            },
            {
              code: '2323000',
              name: '日進市',
              maxInt: '2',
            },
            {
              code: '2323100',
              name: '田原市',
              maxInt: '2',
            },
            {
              code: '2323200',
              name: '愛西市',
              maxInt: '2',
            },
            {
              code: '2323300',
              name: '清須市',
              maxInt: '2',
            },
            {
              code: '2323400',
              name: '北名古屋市',
              maxInt: '2',
            },
            {
              code: '2323500',
              name: '弥富市',
              maxInt: '2',
            },
            {
              code: '2323600',
              name: '愛知みよし市',
              maxInt: '2',
            },
            {
              code: '2323700',
              name: 'あま市',
              maxInt: '2',
            },
            {
              code: '2323800',
              name: '長久手市',
              maxInt: '2',
            },
            {
              code: '2330200',
              name: '東郷町',
              maxInt: '2',
            },
            {
              code: '2334200',
              name: '豊山町',
              maxInt: '2',
            },
            {
              code: '2342400',
              name: '大治町',
              maxInt: '2',
            },
            {
              code: '2342500',
              name: '蟹江町',
              maxInt: '2',
            },
            {
              code: '2344100',
              name: '阿久比町',
              maxInt: '2',
            },
            {
              code: '2344200',
              name: '東浦町',
              maxInt: '2',
            },
            {
              code: '2344700',
              name: '武豊町',
              maxInt: '2',
            },
            {
              code: '2420100',
              name: '津市',
              maxInt: '2',
            },
            {
              code: '2420200',
              name: '四日市市',
              maxInt: '2',
            },
            {
              code: '2420500',
              name: '桑名市',
              maxInt: '2',
            },
            {
              code: '2430300',
              name: '木曽岬町',
              maxInt: '2',
            },
            {
              code: '2434100',
              name: '菰野町',
              maxInt: '2',
            },
            {
              code: '2434300',
              name: '三重朝日町',
              maxInt: '2',
            },
            {
              code: '2434400',
              name: '川越町',
              maxInt: '2',
            },
            {
              code: '2520200',
              name: '彦根市',
              maxInt: '2',
            },
            {
              code: '2520300',
              name: '長浜市',
              maxInt: '2',
            },
            {
              code: '2520400',
              name: '近江八幡市',
              maxInt: '2',
            },
            {
              code: '2521000',
              name: '野洲市',
              maxInt: '2',
            },
            {
              code: '2521200',
              name: '高島市',
              maxInt: '2',
            },
            {
              code: '2521300',
              name: '東近江市',
              maxInt: '2',
            },
            {
              code: '2538400',
              name: '竜王町',
              maxInt: '2',
            },
            {
              code: '2610600',
              name: '京都下京区',
              maxInt: '2',
            },
            {
              code: '2620800',
              name: '向日市',
              maxInt: '2',
            },
            {
              code: '2620900',
              name: '長岡京市',
              maxInt: '2',
            },
            {
              code: '2621000',
              name: '八幡市',
              maxInt: '2',
            },
            {
              code: '2630300',
              name: '大山崎町',
              maxInt: '2',
            },
            {
              code: '2710400',
              name: '大阪此花区',
              maxInt: '2',
            },
            {
              code: '2710700',
              name: '大阪港区',
              maxInt: '2',
            },
            {
              code: '2710800',
              name: '大阪大正区',
              maxInt: '2',
            },
            {
              code: '2711300',
              name: '大阪西淀川区',
              maxInt: '2',
            },
            {
              code: '2711500',
              name: '大阪東成区',
              maxInt: '2',
            },
            {
              code: '2711600',
              name: '大阪生野区',
              maxInt: '2',
            },
            {
              code: '2711700',
              name: '大阪旭区',
              maxInt: '2',
            },
            {
              code: '2711800',
              name: '大阪城東区',
              maxInt: '2',
            },
            {
              code: '2712300',
              name: '大阪淀川区',
              maxInt: '2',
            },
            {
              code: '2712400',
              name: '大阪鶴見区',
              maxInt: '2',
            },
            {
              code: '2720900',
              name: '守口市',
              maxInt: '2',
            },
            {
              code: '2721500',
              name: '寝屋川市',
              maxInt: '2',
            },
            {
              code: '2721800',
              name: '大東市',
              maxInt: '2',
            },
            {
              code: '2722900',
              name: '四條畷市',
              maxInt: '2',
            },
            {
              code: '2820900',
              name: '豊岡市',
              maxInt: '2',
            },
            {
              code: '2920100',
              name: '奈良市',
              maxInt: '2',
            },
            {
              code: '2920300',
              name: '大和郡山市',
              maxInt: '2',
            },
            {
              code: '2936200',
              name: '三宅町',
              maxInt: '2',
            },
            {
              code: '2936300',
              name: '田原本町',
              maxInt: '2',
            },
            {
              code: '0110100',
              name: '札幌中央区',
              maxInt: '1',
            },
            {
              code: '0110500',
              name: '札幌豊平区',
              maxInt: '1',
            },
            {
              code: '0110600',
              name: '札幌南区',
              maxInt: '1',
            },
            {
              code: '0110700',
              name: '札幌西区',
              maxInt: '1',
            },
            {
              code: '0120300',
              name: '小樽市',
              maxInt: '1',
            },
            {
              code: '0120400',
              name: '旭川市',
              maxInt: '1',
            },
            {
              code: '0120900',
              name: '夕張市',
              maxInt: '1',
            },
            {
              code: '0123000',
              name: '登別市',
              maxInt: '1',
            },
            {
              code: '0133100',
              name: '渡島松前町',
              maxInt: '1',
            },
            {
              code: '0139300',
              name: '黒松内町',
              maxInt: '1',
            },
            {
              code: '0140200',
              name: '岩内町',
              maxInt: '1',
            },
            {
              code: '0140800',
              name: '余市町',
              maxInt: '1',
            },
            {
              code: '0146200',
              name: '南富良野町',
              maxInt: '1',
            },
            {
              code: '0148400',
              name: '羽幌町',
              maxInt: '1',
            },
            {
              code: '0154400',
              name: '津別町',
              maxInt: '1',
            },
            {
              code: '0154500',
              name: '斜里町',
              maxInt: '1',
            },
            {
              code: '0155000',
              name: '置戸町',
              maxInt: '1',
            },
            {
              code: '0155500',
              name: '遠軽町',
              maxInt: '1',
            },
            {
              code: '0156100',
              name: '興部町',
              maxInt: '1',
            },
            {
              code: '0157100',
              name: '豊浦町',
              maxInt: '1',
            },
            {
              code: '0164800',
              name: '陸別町',
              maxInt: '1',
            },
            {
              code: '0166300',
              name: '浜中町',
              maxInt: '1',
            },
            {
              code: '1620200',
              name: '高岡市',
              maxInt: '1',
            },
            {
              code: '1620400',
              name: '魚津市',
              maxInt: '1',
            },
            {
              code: '1620700',
              name: '黒部市',
              maxInt: '1',
            },
            {
              code: '1620900',
              name: '小矢部市',
              maxInt: '1',
            },
            {
              code: '1621000',
              name: '南砺市',
              maxInt: '1',
            },
            {
              code: '1632300',
              name: '立山町',
              maxInt: '1',
            },
            {
              code: '1634200',
              name: '入善町',
              maxInt: '1',
            },
            {
              code: '1634300',
              name: '富山朝日町',
              maxInt: '1',
            },
            {
              code: '1720100',
              name: '金沢市',
              maxInt: '1',
            },
            {
              code: '1720900',
              name: 'かほく市',
              maxInt: '1',
            },
            {
              code: '1736100',
              name: '津幡町',
              maxInt: '1',
            },
            {
              code: '1820100',
              name: '福井市',
              maxInt: '1',
            },
            {
              code: '1820400',
              name: '小浜市',
              maxInt: '1',
            },
            {
              code: '1820500',
              name: '大野市',
              maxInt: '1',
            },
            {
              code: '1820900',
              name: '越前市',
              maxInt: '1',
            },
            {
              code: '1821000',
              name: '福井坂井市',
              maxInt: '1',
            },
            {
              code: '1842300',
              name: '越前町',
              maxInt: '1',
            },
            {
              code: '1848100',
              name: '高浜町',
              maxInt: '1',
            },
            {
              code: '1848300',
              name: '福井おおい町',
              maxInt: '1',
            },
            {
              code: '2034900',
              name: '青木村',
              maxInt: '1',
            },
            {
              code: '2035000',
              name: '長和町',
              maxInt: '1',
            },
            {
              code: '2041200',
              name: '売木村',
              maxInt: '1',
            },
            {
              code: '2042200',
              name: '上松町',
              maxInt: '1',
            },
            {
              code: '2044800',
              name: '生坂村',
              maxInt: '1',
            },
            {
              code: '2045100',
              name: '朝日村',
              maxInt: '1',
            },
            {
              code: '2048100',
              name: '長野池田町',
              maxInt: '1',
            },
            {
              code: '2048200',
              name: '松川村',
              maxInt: '1',
            },
            {
              code: '2048500',
              name: '白馬村',
              maxInt: '1',
            },
            {
              code: '2048600',
              name: '小谷村',
              maxInt: '1',
            },
            {
              code: '2054100',
              name: '小布施町',
              maxInt: '1',
            },
            {
              code: '2054300',
              name: '長野高山村',
              maxInt: '1',
            },
            {
              code: '2056100',
              name: '山ノ内町',
              maxInt: '1',
            },
            {
              code: '2120400',
              name: '多治見市',
              maxInt: '1',
            },
            {
              code: '2121100',
              name: '美濃加茂市',
              maxInt: '1',
            },
            {
              code: '2121300',
              name: '各務原市',
              maxInt: '1',
            },
            {
              code: '2121400',
              name: '可児市',
              maxInt: '1',
            },
            {
              code: '2121500',
              name: '岐阜山県市',
              maxInt: '1',
            },
            {
              code: '2121800',
              name: '本巣市',
              maxInt: '1',
            },
            {
              code: '2122000',
              name: '下呂市',
              maxInt: '1',
            },
            {
              code: '2134100',
              name: '養老町',
              maxInt: '1',
            },
            {
              code: '2136100',
              name: '垂井町',
              maxInt: '1',
            },
            {
              code: '2136200',
              name: '関ケ原町',
              maxInt: '1',
            },
            {
              code: '2138100',
              name: '神戸町',
              maxInt: '1',
            },
            {
              code: '2140100',
              name: '揖斐川町',
              maxInt: '1',
            },
            {
              code: '2140400',
              name: '岐阜池田町',
              maxInt: '1',
            },
            {
              code: '2142100',
              name: '北方町',
              maxInt: '1',
            },
            {
              code: '2150200',
              name: '富加町',
              maxInt: '1',
            },
            {
              code: '2150300',
              name: '川辺町',
              maxInt: '1',
            },
            {
              code: '2150600',
              name: '白川町',
              maxInt: '1',
            },
            {
              code: '2246100',
              name: '静岡森町',
              maxInt: '1',
            },
            {
              code: '2320200',
              name: '岡崎市',
              maxInt: '1',
            },
            {
              code: '2321400',
              name: '蒲郡市',
              maxInt: '1',
            },
            {
              code: '2321500',
              name: '犬山市',
              maxInt: '1',
            },
            {
              code: '2321700',
              name: '愛知江南市',
              maxInt: '1',
            },
            {
              code: '2321900',
              name: '小牧市',
              maxInt: '1',
            },
            {
              code: '2336100',
              name: '大口町',
              maxInt: '1',
            },
            {
              code: '2336200',
              name: '扶桑町',
              maxInt: '1',
            },
            {
              code: '2344500',
              name: '南知多町',
              maxInt: '1',
            },
            {
              code: '2350100',
              name: '幸田町',
              maxInt: '1',
            },
            {
              code: '2356200',
              name: '東栄町',
              maxInt: '1',
            },
            {
              code: '2356300',
              name: '豊根村',
              maxInt: '1',
            },
            {
              code: '2420300',
              name: '伊勢市',
              maxInt: '1',
            },
            {
              code: '2420400',
              name: '松阪市',
              maxInt: '1',
            },
            {
              code: '2420700',
              name: '鈴鹿市',
              maxInt: '1',
            },
            {
              code: '2421000',
              name: '亀山市',
              maxInt: '1',
            },
            {
              code: '2421400',
              name: 'いなべ市',
              maxInt: '1',
            },
            {
              code: '2421600',
              name: '伊賀市',
              maxInt: '1',
            },
            {
              code: '2432400',
              name: '東員町',
              maxInt: '1',
            },
            {
              code: '2454300',
              name: '三重紀北町',
              maxInt: '1',
            },
            {
              code: '2520100',
              name: '大津市',
              maxInt: '1',
            },
            {
              code: '2520900',
              name: '甲賀市',
              maxInt: '1',
            },
            {
              code: '2620400',
              name: '宇治市',
              maxInt: '1',
            },
            {
              code: '2620600',
              name: '亀岡市',
              maxInt: '1',
            },
            {
              code: '2620700',
              name: '城陽市',
              maxInt: '1',
            },
            {
              code: '2621300',
              name: '南丹市',
              maxInt: '1',
            },
            {
              code: '2621400',
              name: '木津川市',
              maxInt: '1',
            },
            {
              code: '2632200',
              name: '久御山町',
              maxInt: '1',
            },
            {
              code: '2634300',
              name: '井手町',
              maxInt: '1',
            },
            {
              code: '2636600',
              name: '精華町',
              maxInt: '1',
            },
            {
              code: '2710200',
              name: '大阪都島区',
              maxInt: '1',
            },
            {
              code: '2710300',
              name: '大阪福島区',
              maxInt: '1',
            },
            {
              code: '2710600',
              name: '大阪西区',
              maxInt: '1',
            },
            {
              code: '2710900',
              name: '大阪天王寺区',
              maxInt: '1',
            },
            {
              code: '2711100',
              name: '大阪浪速区',
              maxInt: '1',
            },
            {
              code: '2711400',
              name: '大阪東淀川区',
              maxInt: '1',
            },
            {
              code: '2711900',
              name: '大阪阿倍野区',
              maxInt: '1',
            },
            {
              code: '2712000',
              name: '大阪住吉区',
              maxInt: '1',
            },
            {
              code: '2712100',
              name: '大阪東住吉区',
              maxInt: '1',
            },
            {
              code: '2712200',
              name: '大阪西成区',
              maxInt: '1',
            },
            {
              code: '2712600',
              name: '大阪平野区',
              maxInt: '1',
            },
            {
              code: '2712700',
              name: '大阪北区',
              maxInt: '1',
            },
            {
              code: '2712800',
              name: '大阪中央区',
              maxInt: '1',
            },
            {
              code: '2714100',
              name: '大阪堺市堺区',
              maxInt: '1',
            },
            {
              code: '2714200',
              name: '大阪堺市中区',
              maxInt: '1',
            },
            {
              code: '2714300',
              name: '大阪堺市東区',
              maxInt: '1',
            },
            {
              code: '2714600',
              name: '大阪堺市北区',
              maxInt: '1',
            },
            {
              code: '2720200',
              name: '岸和田市',
              maxInt: '1',
            },
            {
              code: '2720300',
              name: '豊中市',
              maxInt: '1',
            },
            {
              code: '2720600',
              name: '泉大津市',
              maxInt: '1',
            },
            {
              code: '2720700',
              name: '高槻市',
              maxInt: '1',
            },
            {
              code: '2721000',
              name: '枚方市',
              maxInt: '1',
            },
            {
              code: '2721100',
              name: '茨木市',
              maxInt: '1',
            },
            {
              code: '2721200',
              name: '八尾市',
              maxInt: '1',
            },
            {
              code: '2721400',
              name: '富田林市',
              maxInt: '1',
            },
            {
              code: '2721700',
              name: '松原市',
              maxInt: '1',
            },
            {
              code: '2722000',
              name: '箕面市',
              maxInt: '1',
            },
            {
              code: '2722200',
              name: '羽曳野市',
              maxInt: '1',
            },
            {
              code: '2722300',
              name: '門真市',
              maxInt: '1',
            },
            {
              code: '2722400',
              name: '摂津市',
              maxInt: '1',
            },
            {
              code: '2722600',
              name: '藤井寺市',
              maxInt: '1',
            },
            {
              code: '2722700',
              name: '東大阪市',
              maxInt: '1',
            },
            {
              code: '2723000',
              name: '交野市',
              maxInt: '1',
            },
            {
              code: '2723100',
              name: '大阪狭山市',
              maxInt: '1',
            },
            {
              code: '2730100',
              name: '島本町',
              maxInt: '1',
            },
            {
              code: '2820400',
              name: '西宮市',
              maxInt: '1',
            },
            {
              code: '2821000',
              name: '加古川市',
              maxInt: '1',
            },
            {
              code: '2920200',
              name: '大和高田市',
              maxInt: '1',
            },
            {
              code: '2920400',
              name: '天理市',
              maxInt: '1',
            },
            {
              code: '2920600',
              name: '桜井市',
              maxInt: '1',
            },
            {
              code: '2921000',
              name: '香芝市',
              maxInt: '1',
            },
            {
              code: '2934500',
              name: '安堵町',
              maxInt: '1',
            },
            {
              code: '2936100',
              name: '奈良川西町',
              maxInt: '1',
            },
            {
              code: '2942600',
              name: '広陵町',
              maxInt: '1',
            },
            {
              code: '2942700',
              name: '河合町',
              maxInt: '1',
            },
            {
              code: '3020800',
              name: '紀の川市',
              maxInt: '1',
            },
            {
              code: '3120100',
              name: '鳥取市',
              maxInt: '1',
            },
            {
              code: '3120400',
              name: '境港市',
              maxInt: '1',
            },
            {
              code: '3137200',
              name: '北栄町',
              maxInt: '1',
            },
            {
              code: '3220500',
              name: '大田市',
              maxInt: '1',
            },
            {
              code: '3321400',
              name: '真庭市',
              maxInt: '1',
            },
            {
              code: '3420200',
              name: '呉市',
              maxInt: '1',
            },
          ],
          stations: [
            {
              code: '0430130',
              name: '蔵王町円田＊',
              int: '6+',
            },
            {
              code: '0720932',
              name: '相馬市中村＊',
              int: '6+',
            },
            {
              code: '0730334',
              name: '国見町藤田＊',
              int: '6+',
            },
            {
              code: '0756132',
              name: '新地町谷地小屋＊',
              int: '6+',
            },
            {
              code: '0420239',
              name: '石巻市桃生町＊',
              int: '6-',
            },
            {
              code: '0421120',
              name: '岩沼市桜＊',
              int: '6-',
            },
            {
              code: '0421236',
              name: '登米市迫町＊',
              int: '6-',
            },
            {
              code: '0432430',
              name: '宮城川崎町前川＊',
              int: '6-',
            },
            {
              code: '0436131',
              name: '亘理町悠里＊',
              int: '6-',
            },
            {
              code: '0436231',
              name: '山元町浅生原＊',
              int: '6-',
            },
            {
              code: '0720132',
              name: '福島市五老内町＊',
              int: '6-',
            },
            {
              code: '0720300',
              name: '郡山市朝日',
              int: '6-',
            },
            {
              code: '0720320',
              name: '郡山市開成＊',
              int: '6-',
            },
            {
              code: '0720321',
              name: '郡山市湖南町＊',
              int: '6-',
            },
            {
              code: '0720720',
              name: '須賀川市八幡山＊',
              int: '6-',
            },
            {
              code: '0720737',
              name: '須賀川市八幡町＊',
              int: '6-',
            },
            {
              code: '0721235',
              name: '南相馬市小高区＊',
              int: '6-',
            },
            {
              code: '0721330',
              name: '福島伊達市前川原＊',
              int: '6-',
            },
            {
              code: '0721331',
              name: '福島伊達市梁川町＊',
              int: '6-',
            },
            {
              code: '0721432',
              name: '本宮市白岩＊',
              int: '6-',
            },
            {
              code: '0730130',
              name: '桑折町東大隅＊',
              int: '6-',
            },
            {
              code: '0730832',
              name: '川俣町五百田＊',
              int: '6-',
            },
            {
              code: '0734431',
              name: '天栄村下松本＊',
              int: '6-',
            },
            {
              code: '0754120',
              name: '福島広野町下北迫大谷地原＊',
              int: '6-',
            },
            {
              code: '0754230',
              name: '楢葉町北田＊',
              int: '6-',
            },
            {
              code: '0754430',
              name: '川内村上川内早渡＊',
              int: '6-',
            },
            {
              code: '0754531',
              name: '大熊町大川原＊',
              int: '6-',
            },
            {
              code: '0754632',
              name: '双葉町両竹＊',
              int: '6-',
            },
            {
              code: '0754700',
              name: '浪江町幾世橋',
              int: '6-',
            },
            {
              code: '0410143',
              name: '仙台青葉区落合＊',
              int: '5+',
            },
            {
              code: '0410201',
              name: '仙台宮城野区五輪',
              int: '5+',
            },
            {
              code: '0410341',
              name: '仙台若林区遠見塚＊',
              int: '5+',
            },
            {
              code: '0420226',
              name: '石巻市大街道南＊',
              int: '5+',
            },
            {
              code: '0420237',
              name: '石巻市前谷地＊',
              int: '5+',
            },
            {
              code: '0420322',
              name: '塩竈市今宮町＊',
              int: '5+',
            },
            {
              code: '0420620',
              name: '白石市亘理町＊',
              int: '5+',
            },
            {
              code: '0420700',
              name: '仙台空港',
              int: '5+',
            },
            {
              code: '0420730',
              name: '名取市増田＊',
              int: '5+',
            },
            {
              code: '0420820',
              name: '角田市角田＊',
              int: '5+',
            },
            {
              code: '0421231',
              name: '登米市登米町＊',
              int: '5+',
            },
            {
              code: '0421232',
              name: '登米市米山町＊',
              int: '5+',
            },
            {
              code: '0421234',
              name: '登米市南方町＊',
              int: '5+',
            },
            {
              code: '0421343',
              name: '栗原市若柳＊',
              int: '5+',
            },
            {
              code: '0421433',
              name: '東松島市小野＊',
              int: '5+',
            },
            {
              code: '0421434',
              name: '東松島市矢本＊',
              int: '5+',
            },
            {
              code: '0421500',
              name: '大崎市古川三日町',
              int: '5+',
            },
            {
              code: '0421524',
              name: '大崎市古川旭＊',
              int: '5+',
            },
            {
              code: '0421530',
              name: '大崎市松山＊',
              int: '5+',
            },
            {
              code: '0421535',
              name: '大崎市田尻＊',
              int: '5+',
            },
            {
              code: '0432131',
              name: '大河原町新南＊',
              int: '5+',
            },
            {
              code: '0432230',
              name: '村田町村田＊',
              int: '5+',
            },
            {
              code: '0432300',
              name: '柴田町船岡',
              int: '5+',
            },
            {
              code: '0434130',
              name: '丸森町鳥屋＊',
              int: '5+',
            },
            {
              code: '0440101',
              name: '松島町高城',
              int: '5+',
            },
            {
              code: '0440431',
              name: '七ヶ浜町東宮浜＊',
              int: '5+',
            },
            {
              code: '0440632',
              name: '利府町利府＊',
              int: '5+',
            },
            {
              code: '0442231',
              name: '大郷町粕川＊',
              int: '5+',
            },
            {
              code: '0442431',
              name: '大衡村大衡＊',
              int: '5+',
            },
            {
              code: '0450100',
              name: '涌谷町新町裏',
              int: '5+',
            },
            {
              code: '0450531',
              name: '宮城美里町木間塚＊',
              int: '5+',
            },
            {
              code: '0720100',
              name: '福島市松木町',
              int: '5+',
            },
            {
              code: '0720120',
              name: '福島市桜木町＊',
              int: '5+',
            },
            {
              code: '0720401',
              name: 'いわき市三和町',
              int: '5+',
            },
            {
              code: '0720420',
              name: 'いわき市平四ツ波＊',
              int: '5+',
            },
            {
              code: '0720433',
              name: 'いわき市平梅本＊',
              int: '5+',
            },
            {
              code: '0720520',
              name: '白河市新白河＊',
              int: '5+',
            },
            {
              code: '0720532',
              name: '白河市東＊',
              int: '5+',
            },
            {
              code: '0720534',
              name: '白河市表郷＊',
              int: '5+',
            },
            {
              code: '0720535',
              name: '白河市大信＊',
              int: '5+',
            },
            {
              code: '0720731',
              name: '須賀川市長沼支所＊',
              int: '5+',
            },
            {
              code: '0720735',
              name: '須賀川市岩瀬支所＊',
              int: '5+',
            },
            {
              code: '0721030',
              name: '二本松市金色＊',
              int: '5+',
            },
            {
              code: '0721031',
              name: '二本松市油井＊',
              int: '5+',
            },
            {
              code: '0721034',
              name: '二本松市針道＊',
              int: '5+',
            },
            {
              code: '0721101',
              name: '田村市船引町',
              int: '5+',
            },
            {
              code: '0721131',
              name: '田村市大越町＊',
              int: '5+',
            },
            {
              code: '0721133',
              name: '田村市常葉町＊',
              int: '5+',
            },
            {
              code: '0721134',
              name: '田村市都路町＊',
              int: '5+',
            },
            {
              code: '0721135',
              name: '田村市滝根町＊',
              int: '5+',
            },
            {
              code: '0721200',
              name: '南相馬市原町区三島町',
              int: '5+',
            },
            {
              code: '0721220',
              name: '南相馬市原町区高見町＊',
              int: '5+',
            },
            {
              code: '0721230',
              name: '南相馬市原町区本町＊',
              int: '5+',
            },
            {
              code: '0721233',
              name: '南相馬市鹿島区西町＊',
              int: '5+',
            },
            {
              code: '0721332',
              name: '福島伊達市保原町＊',
              int: '5+',
            },
            {
              code: '0721333',
              name: '福島伊達市霊山町＊',
              int: '5+',
            },
            {
              code: '0721335',
              name: '福島伊達市月舘町＊',
              int: '5+',
            },
            {
              code: '0721430',
              name: '本宮市本宮＊',
              int: '5+',
            },
            {
              code: '0732201',
              name: '大玉村南小屋',
              int: '5+',
            },
            {
              code: '0732232',
              name: '大玉村玉井＊',
              int: '5+',
            },
            {
              code: '0734230',
              name: '鏡石町不時沼＊',
              int: '5+',
            },
            {
              code: '0740820',
              name: '猪苗代町千代田＊',
              int: '5+',
            },
            {
              code: '0746431',
              name: '泉崎村泉崎＊',
              int: '5+',
            },
            {
              code: '0746530',
              name: '中島村滑津＊',
              int: '5+',
            },
            {
              code: '0746630',
              name: '矢吹町一本木＊',
              int: '5+',
            },
            {
              code: '0750230',
              name: '玉川村小高＊',
              int: '5+',
            },
            {
              code: '0750430',
              name: '浅川町浅川＊',
              int: '5+',
            },
            {
              code: '0752220',
              name: '小野町中通＊',
              int: '5+',
            },
            {
              code: '0752230',
              name: '小野町小野新町＊',
              int: '5+',
            },
            {
              code: '0754130',
              name: '福島広野町下北迫苗代替＊',
              int: '5+',
            },
            {
              code: '0754330',
              name: '富岡町本岡＊',
              int: '5+',
            },
            {
              code: '0754400',
              name: '川内村下川内',
              int: '5+',
            },
            {
              code: '0754420',
              name: '川内村上川内小山平＊',
              int: '5+',
            },
            {
              code: '0754520',
              name: '大熊町野上＊',
              int: '5+',
            },
            {
              code: '0754830',
              name: '葛尾村落合落合＊',
              int: '5+',
            },
            {
              code: '0756431',
              name: '飯舘村伊丹沢＊',
              int: '5+',
            },
            {
              code: '0938630',
              name: '高根沢町石末＊',
              int: '5+',
            },
            {
              code: '0940730',
              name: '那須町寺子＊',
              int: '5+',
            },
            {
              code: '0320936',
              name: '一関市千厩町＊',
              int: '5-',
            },
            {
              code: '0320938',
              name: '一関市室根町＊',
              int: '5-',
            },
            {
              code: '0332232',
              name: '矢巾町南矢幅＊',
              int: '5-',
            },
            {
              code: '0410101',
              name: '仙台青葉区大倉',
              int: '5-',
            },
            {
              code: '0410121',
              name: '仙台青葉区作並＊',
              int: '5-',
            },
            {
              code: '0410142',
              name: '仙台青葉区雨宮＊',
              int: '5-',
            },
            {
              code: '0410221',
              name: '仙台宮城野区苦竹＊',
              int: '5-',
            },
            {
              code: '0410441',
              name: '仙台太白区山田＊',
              int: '5-',
            },
            {
              code: '0410541',
              name: '仙台泉区将監＊',
              int: '5-',
            },
            {
              code: '0420202',
              name: '石巻市泉町',
              int: '5-',
            },
            {
              code: '0420227',
              name: '石巻市北上町＊',
              int: '5-',
            },
            {
              code: '0420235',
              name: '石巻市相野谷＊',
              int: '5-',
            },
            {
              code: '0420931',
              name: '多賀城市中央＊',
              int: '5-',
            },
            {
              code: '0421200',
              name: '登米市中田町',
              int: '5-',
            },
            {
              code: '0421220',
              name: '登米市東和町＊',
              int: '5-',
            },
            {
              code: '0421222',
              name: '登米市豊里町＊',
              int: '5-',
            },
            {
              code: '0421237',
              name: '登米市石越町＊',
              int: '5-',
            },
            {
              code: '0421300',
              name: '栗原市栗駒',
              int: '5-',
            },
            {
              code: '0421321',
              name: '栗原市築館＊',
              int: '5-',
            },
            {
              code: '0421339',
              name: '栗原市瀬峰＊',
              int: '5-',
            },
            {
              code: '0421340',
              name: '栗原市志波姫＊',
              int: '5-',
            },
            {
              code: '0421341',
              name: '栗原市高清水＊',
              int: '5-',
            },
            {
              code: '0421342',
              name: '栗原市金成＊',
              int: '5-',
            },
            {
              code: '0421344',
              name: '栗原市一迫＊',
              int: '5-',
            },
            {
              code: '0421501',
              name: '大崎市古川大崎',
              int: '5-',
            },
            {
              code: '0421531',
              name: '大崎市三本木＊',
              int: '5-',
            },
            {
              code: '0421532',
              name: '大崎市鹿島台＊',
              int: '5-',
            },
            {
              code: '0421630',
              name: '富谷市富谷＊',
              int: '5-',
            },
            {
              code: '0434100',
              name: '丸森町上滝',
              int: '5-',
            },
            {
              code: '0442121',
              name: '大和町吉岡＊',
              int: '5-',
            },
            {
              code: '0444431',
              name: '色麻町四竈＊',
              int: '5-',
            },
            {
              code: '0444530',
              name: '宮城加美町中新田＊',
              int: '5-',
            },
            {
              code: '0444531',
              name: '宮城加美町小野田＊',
              int: '5-',
            },
            {
              code: '0450530',
              name: '宮城美里町北浦＊',
              int: '5-',
            },
            {
              code: '0620201',
              name: '米沢市アルカディア',
              int: '5-',
            },
            {
              code: '0620220',
              name: '米沢市林泉寺＊',
              int: '5-',
            },
            {
              code: '0620730',
              name: '上山市河崎＊',
              int: '5-',
            },
            {
              code: '0630231',
              name: '中山町長崎＊',
              int: '5-',
            },
            {
              code: '0640232',
              name: '白鷹町荒砥＊',
              int: '5-',
            },
            {
              code: '0720131',
              name: '福島市飯野町＊',
              int: '5-',
            },
            {
              code: '0720400',
              name: 'いわき市小名浜',
              int: '5-',
            },
            {
              code: '0720421',
              name: 'いわき市錦町＊',
              int: '5-',
            },
            {
              code: '0720500',
              name: '白河市郭内',
              int: '5-',
            },
            {
              code: '0720536',
              name: '白河市八幡小路＊',
              int: '5-',
            },
            {
              code: '0721201',
              name: '南相馬市鹿島区栃窪',
              int: '5-',
            },
            {
              code: '0740800',
              name: '猪苗代町城南',
              int: '5-',
            },
            {
              code: '0742232',
              name: '湯川村清水田＊',
              int: '5-',
            },
            {
              code: '0744734',
              name: '会津美里町新鶴庁舎＊',
              int: '5-',
            },
            {
              code: '0746130',
              name: '西郷村熊倉＊',
              int: '5-',
            },
            {
              code: '0748101',
              name: '棚倉町棚倉中居野',
              int: '5-',
            },
            {
              code: '0748221',
              name: '矢祭町戸塚＊',
              int: '5-',
            },
            {
              code: '0750131',
              name: '石川町長久保＊',
              int: '5-',
            },
            {
              code: '0750331',
              name: '平田村永田＊',
              int: '5-',
            },
            {
              code: '0750530',
              name: '古殿町松川新桑原＊',
              int: '5-',
            },
            {
              code: '0752130',
              name: '三春町大町＊',
              int: '5-',
            },
            {
              code: '0820220',
              name: '日立市助川小学校＊',
              int: '5-',
            },
            {
              code: '0820232',
              name: '日立市役所＊',
              int: '5-',
            },
            {
              code: '0820301',
              name: '土浦市常名',
              int: '5-',
            },
            {
              code: '0821234',
              name: '常陸太田市金井町＊',
              int: '5-',
            },
            {
              code: '0821235',
              name: '常陸太田市高柿町＊',
              int: '5-',
            },
            {
              code: '0821620',
              name: '笠間市石井＊',
              int: '5-',
            },
            {
              code: '0821631',
              name: '笠間市中央＊',
              int: '5-',
            },
            {
              code: '0822521',
              name: '常陸大宮市北町＊',
              int: '5-',
            },
            {
              code: '0822631',
              name: '那珂市瓜連＊',
              int: '5-',
            },
            {
              code: '0822700',
              name: '筑西市舟生',
              int: '5-',
            },
            {
              code: '0823431',
              name: '鉾田市汲上＊',
              int: '5-',
            },
            {
              code: '0831034',
              name: '城里町石塚＊',
              int: '5-',
            },
            {
              code: '0831036',
              name: '城里町小勝＊',
              int: '5-',
            },
            {
              code: '0834132',
              name: '東海村東海＊',
              int: '5-',
            },
            {
              code: '0921033',
              name: '大田原市本町＊',
              int: '5-',
            },
            {
              code: '0921500',
              name: '那須烏山市中央',
              int: '5-',
            },
            {
              code: '0941133',
              name: '栃木那珂川町小川＊',
              int: '5-',
            },
            {
              code: '1121033',
              name: '加須市大利根＊',
              int: '5-',
            },
            {
              code: '0220320',
              name: '八戸市内丸＊',
              int: '4',
            },
            {
              code: '0220331',
              name: '八戸市南郷＊',
              int: '4',
            },
            {
              code: '0220630',
              name: '十和田市西十二番町＊',
              int: '4',
            },
            {
              code: '0240231',
              name: '七戸町森ノ上＊',
              int: '4',
            },
            {
              code: '0240531',
              name: '六戸町犬落瀬＊',
              int: '4',
            },
            {
              code: '0240831',
              name: '東北町上北南＊',
              int: '4',
            },
            {
              code: '0241231',
              name: 'おいらせ町中下田＊',
              int: '4',
            },
            {
              code: '0241232',
              name: 'おいらせ町上明堂＊',
              int: '4',
            },
            {
              code: '0244200',
              name: '五戸町古舘',
              int: '4',
            },
            {
              code: '0244534',
              name: '青森南部町苫米地＊',
              int: '4',
            },
            {
              code: '0244631',
              name: '階上町道仏＊',
              int: '4',
            },
            {
              code: '0320100',
              name: '盛岡市山王町',
              int: '4',
            },
            {
              code: '0320121',
              name: '盛岡市薮川＊',
              int: '4',
            },
            {
              code: '0320130',
              name: '盛岡市渋民＊',
              int: '4',
            },
            {
              code: '0320220',
              name: '宮古市五月町＊',
              int: '4',
            },
            {
              code: '0320222',
              name: '宮古市川井＊',
              int: '4',
            },
            {
              code: '0320223',
              name: '宮古市区界＊',
              int: '4',
            },
            {
              code: '0320224',
              name: '宮古市田老＊',
              int: '4',
            },
            {
              code: '0320300',
              name: '大船渡市大船渡町',
              int: '4',
            },
            {
              code: '0320301',
              name: '大船渡市猪川町',
              int: '4',
            },
            {
              code: '0320320',
              name: '大船渡市盛町＊',
              int: '4',
            },
            {
              code: '0320500',
              name: '花巻市大迫町',
              int: '4',
            },
            {
              code: '0320520',
              name: '花巻市石鳥谷町＊',
              int: '4',
            },
            {
              code: '0320535',
              name: '花巻市材木町＊',
              int: '4',
            },
            {
              code: '0320536',
              name: '花巻市東和町＊',
              int: '4',
            },
            {
              code: '0320600',
              name: '北上市柳原町',
              int: '4',
            },
            {
              code: '0320621',
              name: '北上市相去町＊',
              int: '4',
            },
            {
              code: '0320700',
              name: '久慈市川崎町',
              int: '4',
            },
            {
              code: '0320701',
              name: '久慈市枝成沢',
              int: '4',
            },
            {
              code: '0320720',
              name: '久慈市長内町＊',
              int: '4',
            },
            {
              code: '0320821',
              name: '遠野市青笹町＊',
              int: '4',
            },
            {
              code: '0320830',
              name: '遠野市宮守町＊',
              int: '4',
            },
            {
              code: '0320902',
              name: '一関市大東町',
              int: '4',
            },
            {
              code: '0320921',
              name: '一関市竹山町＊',
              int: '4',
            },
            {
              code: '0320937',
              name: '一関市東山町＊',
              int: '4',
            },
            {
              code: '0320939',
              name: '一関市藤沢町＊',
              int: '4',
            },
            {
              code: '0320940',
              name: '一関市川崎町＊',
              int: '4',
            },
            {
              code: '0321033',
              name: '陸前高田市高田町＊',
              int: '4',
            },
            {
              code: '0321100',
              name: '釜石市只越町',
              int: '4',
            },
            {
              code: '0321120',
              name: '釜石市中妻町＊',
              int: '4',
            },
            {
              code: '0321400',
              name: '八幡平市大更',
              int: '4',
            },
            {
              code: '0321420',
              name: '八幡平市田頭＊',
              int: '4',
            },
            {
              code: '0321432',
              name: '八幡平市野駄＊',
              int: '4',
            },
            {
              code: '0321500',
              name: '奥州市水沢大鐘町',
              int: '4',
            },
            {
              code: '0321520',
              name: '奥州市水沢佐倉河＊',
              int: '4',
            },
            {
              code: '0321530',
              name: '奥州市江刺＊',
              int: '4',
            },
            {
              code: '0321531',
              name: '奥州市前沢＊',
              int: '4',
            },
            {
              code: '0321535',
              name: '奥州市胆沢＊',
              int: '4',
            },
            {
              code: '0321536',
              name: '奥州市衣川＊',
              int: '4',
            },
            {
              code: '0321630',
              name: '滝沢市鵜飼＊',
              int: '4',
            },
            {
              code: '0330330',
              name: '岩手町五日市＊',
              int: '4',
            },
            {
              code: '0332132',
              name: '紫波町紫波中央駅前＊',
              int: '4',
            },
            {
              code: '0338130',
              name: '金ケ崎町西根＊',
              int: '4',
            },
            {
              code: '0340231',
              name: '平泉町平泉＊',
              int: '4',
            },
            {
              code: '0344131',
              name: '住田町世田米＊',
              int: '4',
            },
            {
              code: '0348201',
              name: '山田町八幡町',
              int: '4',
            },
            {
              code: '0348221',
              name: '山田町大沢＊',
              int: '4',
            },
            {
              code: '0348531',
              name: '普代村銅屋＊',
              int: '4',
            },
            {
              code: '0350330',
              name: '野田村野田＊',
              int: '4',
            },
            {
              code: '0420203',
              name: '石巻市大瓜',
              int: '4',
            },
            {
              code: '0420225',
              name: '石巻市鮎川浜＊',
              int: '4',
            },
            {
              code: '0420240',
              name: '石巻市雄勝町＊',
              int: '4',
            },
            {
              code: '0420500',
              name: '気仙沼市赤岩',
              int: '4',
            },
            {
              code: '0420501',
              name: '気仙沼市本吉町西川内',
              int: '4',
            },
            {
              code: '0420520',
              name: '気仙沼市笹が陣＊',
              int: '4',
            },
            {
              code: '0420530',
              name: '気仙沼市唐桑町＊',
              int: '4',
            },
            {
              code: '0420531',
              name: '気仙沼市本吉町津谷＊',
              int: '4',
            },
            {
              code: '0421238',
              name: '登米市津山町＊',
              int: '4',
            },
            {
              code: '0421334',
              name: '栗原市鶯沢＊',
              int: '4',
            },
            {
              code: '0421337',
              name: '栗原市花山＊',
              int: '4',
            },
            {
              code: '0421523',
              name: '大崎市鳴子＊',
              int: '4',
            },
            {
              code: '0421533',
              name: '大崎市岩出山＊',
              int: '4',
            },
            {
              code: '0430230',
              name: '七ヶ宿町関＊',
              int: '4',
            },
            {
              code: '0444532',
              name: '宮城加美町宮崎＊',
              int: '4',
            },
            {
              code: '0458134',
              name: '女川町女川浜＊',
              int: '4',
            },
            {
              code: '0460601',
              name: '南三陸町志津川',
              int: '4',
            },
            {
              code: '0460621',
              name: '南三陸町歌津＊',
              int: '4',
            },
            {
              code: '0520131',
              name: '秋田市河辺和田＊',
              int: '4',
            },
            {
              code: '0520337',
              name: '横手市大雄＊',
              int: '4',
            },
            {
              code: '0520731',
              name: '湯沢市川連町＊',
              int: '4',
            },
            {
              code: '0521034',
              name: '由利本荘市西目町沼田＊',
              int: '4',
            },
            {
              code: '0521040',
              name: '由利本荘市前郷＊',
              int: '4',
            },
            {
              code: '0521232',
              name: '大仙市刈和野＊',
              int: '4',
            },
            {
              code: '0521233',
              name: '大仙市北長野＊',
              int: '4',
            },
            {
              code: '0521237',
              name: '大仙市太田町太田＊',
              int: '4',
            },
            {
              code: '0521238',
              name: '大仙市大曲花園町＊',
              int: '4',
            },
            {
              code: '0521239',
              name: '大仙市高梨＊',
              int: '4',
            },
            {
              code: '0521430',
              name: 'にかほ市平沢＊',
              int: '4',
            },
            {
              code: '0521520',
              name: '仙北市西木町上桧木内＊',
              int: '4',
            },
            {
              code: '0536631',
              name: '井川町北川尻＊',
              int: '4',
            },
            {
              code: '0543430',
              name: '秋田美郷町土崎＊',
              int: '4',
            },
            {
              code: '0546331',
              name: '羽後町西馬音内＊',
              int: '4',
            },
            {
              code: '0620100',
              name: '山形市緑町',
              int: '4',
            },
            {
              code: '0620120',
              name: '山形市薬師町＊',
              int: '4',
            },
            {
              code: '0620130',
              name: '山形市旅篭町＊',
              int: '4',
            },
            {
              code: '0620200',
              name: '米沢市駅前',
              int: '4',
            },
            {
              code: '0620230',
              name: '米沢市金池＊',
              int: '4',
            },
            {
              code: '0620330',
              name: '鶴岡市藤島＊',
              int: '4',
            },
            {
              code: '0620402',
              name: '酒田市亀ケ崎',
              int: '4',
            },
            {
              code: '0620420',
              name: '酒田市宮野浦＊',
              int: '4',
            },
            {
              code: '0620433',
              name: '酒田市飛鳥＊',
              int: '4',
            },
            {
              code: '0620434',
              name: '酒田市山田＊',
              int: '4',
            },
            {
              code: '0620500',
              name: '新庄市東谷地田町',
              int: '4',
            },
            {
              code: '0620520',
              name: '新庄市堀端町＊',
              int: '4',
            },
            {
              code: '0620531',
              name: '新庄市住吉町＊',
              int: '4',
            },
            {
              code: '0620620',
              name: '寒河江市西根＊',
              int: '4',
            },
            {
              code: '0620630',
              name: '寒河江市中央＊',
              int: '4',
            },
            {
              code: '0620830',
              name: '村山市中央＊',
              int: '4',
            },
            {
              code: '0620931',
              name: '長井市ままの上＊',
              int: '4',
            },
            {
              code: '0621030',
              name: '天童市老野森＊',
              int: '4',
            },
            {
              code: '0621120',
              name: '東根市中央＊',
              int: '4',
            },
            {
              code: '0621220',
              name: '尾花沢市若葉町＊',
              int: '4',
            },
            {
              code: '0621330',
              name: '南陽市三間通＊',
              int: '4',
            },
            {
              code: '0630132',
              name: '山辺町緑ケ丘＊',
              int: '4',
            },
            {
              code: '0632100',
              name: '河北町谷地',
              int: '4',
            },
            {
              code: '0632131',
              name: '河北町役場＊',
              int: '4',
            },
            {
              code: '0632220',
              name: '西川町大井沢＊',
              int: '4',
            },
            {
              code: '0632230',
              name: '西川町海味＊',
              int: '4',
            },
            {
              code: '0632330',
              name: '山形朝日町宮宿＊',
              int: '4',
            },
            {
              code: '0632430',
              name: '大江町左沢＊',
              int: '4',
            },
            {
              code: '0634131',
              name: '大石田町緑町＊',
              int: '4',
            },
            {
              code: '0636231',
              name: '最上町向町＊',
              int: '4',
            },
            {
              code: '0636331',
              name: '舟形町舟形＊',
              int: '4',
            },
            {
              code: '0636431',
              name: '真室川町新町＊',
              int: '4',
            },
            {
              code: '0636520',
              name: '大蔵村肘折＊',
              int: '4',
            },
            {
              code: '0636531',
              name: '大蔵村清水＊',
              int: '4',
            },
            {
              code: '0636630',
              name: '鮭川村佐渡＊',
              int: '4',
            },
            {
              code: '0636730',
              name: '戸沢村古口＊',
              int: '4',
            },
            {
              code: '0638130',
              name: '高畠町高畠＊',
              int: '4',
            },
            {
              code: '0638230',
              name: '山形川西町上小松＊',
              int: '4',
            },
            {
              code: '0640100',
              name: '山形小国町岩井沢',
              int: '4',
            },
            {
              code: '0640130',
              name: '山形小国町小国小坂町＊',
              int: '4',
            },
            {
              code: '0640200',
              name: '白鷹町黒鴨',
              int: '4',
            },
            {
              code: '0640320',
              name: '飯豊町上原＊',
              int: '4',
            },
            {
              code: '0640330',
              name: '飯豊町椿＊',
              int: '4',
            },
            {
              code: '0642631',
              name: '三川町横山＊',
              int: '4',
            },
            {
              code: '0642830',
              name: '庄内町狩川＊',
              int: '4',
            },
            {
              code: '0642832',
              name: '庄内町余目＊',
              int: '4',
            },
            {
              code: '0646100',
              name: '遊佐町遊佐',
              int: '4',
            },
            {
              code: '0646131',
              name: '遊佐町舞鶴＊',
              int: '4',
            },
            {
              code: '0720201',
              name: '会津若松市材木町',
              int: '4',
            },
            {
              code: '0720230',
              name: '会津若松市東栄町＊',
              int: '4',
            },
            {
              code: '0720231',
              name: '会津若松市北会津町＊',
              int: '4',
            },
            {
              code: '0720232',
              name: '会津若松市河東町＊',
              int: '4',
            },
            {
              code: '0720831',
              name: '喜多方市熱塩加納町＊',
              int: '4',
            },
            {
              code: '0720834',
              name: '喜多方市高郷町＊',
              int: '4',
            },
            {
              code: '0720835',
              name: '喜多方市御清水＊',
              int: '4',
            },
            {
              code: '0720836',
              name: '喜多方市塩川町＊',
              int: '4',
            },
            {
              code: '0721032',
              name: '二本松市小浜＊',
              int: '4',
            },
            {
              code: '0734432',
              name: '天栄村湯本支所＊',
              int: '4',
            },
            {
              code: '0736220',
              name: '下郷町高陦＊',
              int: '4',
            },
            {
              code: '0736230',
              name: '下郷町塩生＊',
              int: '4',
            },
            {
              code: '0736801',
              name: '南会津町田島',
              int: '4',
            },
            {
              code: '0736820',
              name: '南会津町界＊',
              int: '4',
            },
            {
              code: '0740501',
              name: '西会津町野沢',
              int: '4',
            },
            {
              code: '0740520',
              name: '西会津町登世島＊',
              int: '4',
            },
            {
              code: '0740731',
              name: '磐梯町磐梯＊',
              int: '4',
            },
            {
              code: '0742130',
              name: '会津坂下町市中三番甲＊',
              int: '4',
            },
            {
              code: '0742331',
              name: '柳津町柳津＊',
              int: '4',
            },
            {
              code: '0744733',
              name: '会津美里町本郷庁舎＊',
              int: '4',
            },
            {
              code: '0744735',
              name: '会津美里町高田庁舎＊',
              int: '4',
            },
            {
              code: '0748120',
              name: '棚倉町棚倉舘ヶ丘＊',
              int: '4',
            },
            {
              code: '0748230',
              name: '矢祭町東舘＊',
              int: '4',
            },
            {
              code: '0748330',
              name: '塙町塙＊',
              int: '4',
            },
            {
              code: '0748430',
              name: '鮫川村赤坂中野＊',
              int: '4',
            },
            {
              code: '0750500',
              name: '古殿町松川横川',
              int: '4',
            },
            {
              code: '0820101',
              name: '水戸市金町',
              int: '4',
            },
            {
              code: '0820121',
              name: '水戸市千波町＊',
              int: '4',
            },
            {
              code: '0820132',
              name: '水戸市内原町＊',
              int: '4',
            },
            {
              code: '0820133',
              name: '水戸市栗崎町＊',
              int: '4',
            },
            {
              code: '0820231',
              name: '日立市十王町友部＊',
              int: '4',
            },
            {
              code: '0820332',
              name: '土浦市田中＊',
              int: '4',
            },
            {
              code: '0820430',
              name: '茨城古河市長谷町＊',
              int: '4',
            },
            {
              code: '0820431',
              name: '茨城古河市下大野＊',
              int: '4',
            },
            {
              code: '0820432',
              name: '茨城古河市仁連＊',
              int: '4',
            },
            {
              code: '0820500',
              name: '石岡市柿岡',
              int: '4',
            },
            {
              code: '0820520',
              name: '石岡市若宮＊',
              int: '4',
            },
            {
              code: '0820532',
              name: '石岡市八郷＊',
              int: '4',
            },
            {
              code: '0820533',
              name: '石岡市石岡＊',
              int: '4',
            },
            {
              code: '0820731',
              name: '結城市中央町＊',
              int: '4',
            },
            {
              code: '0820831',
              name: '龍ケ崎市役所＊',
              int: '4',
            },
            {
              code: '0821030',
              name: '下妻市本城町＊',
              int: '4',
            },
            {
              code: '0821031',
              name: '下妻市鬼怒＊',
              int: '4',
            },
            {
              code: '0821133',
              name: '常総市新石下＊',
              int: '4',
            },
            {
              code: '0821134',
              name: '常総市水海道諏訪町＊',
              int: '4',
            },
            {
              code: '0821200',
              name: '常陸太田市町屋町',
              int: '4',
            },
            {
              code: '0821232',
              name: '常陸太田市町田町＊',
              int: '4',
            },
            {
              code: '0821233',
              name: '常陸太田市大中町＊',
              int: '4',
            },
            {
              code: '0821420',
              name: '高萩市安良川＊',
              int: '4',
            },
            {
              code: '0821432',
              name: '高萩市本町＊',
              int: '4',
            },
            {
              code: '0821530',
              name: '北茨城市磯原町＊',
              int: '4',
            },
            {
              code: '0821540',
              name: '北茨城市中郷町＊',
              int: '4',
            },
            {
              code: '0821632',
              name: '笠間市下郷＊',
              int: '4',
            },
            {
              code: '0821634',
              name: '笠間市笠間＊',
              int: '4',
            },
            {
              code: '0821720',
              name: '取手市寺田＊',
              int: '4',
            },
            {
              code: '0821730',
              name: '取手市井野＊',
              int: '4',
            },
            {
              code: '0821731',
              name: '取手市藤代＊',
              int: '4',
            },
            {
              code: '0821930',
              name: '牛久市中央＊',
              int: '4',
            },
            {
              code: '0822020',
              name: 'つくば市天王台＊',
              int: '4',
            },
            {
              code: '0822032',
              name: 'つくば市研究学園＊',
              int: '4',
            },
            {
              code: '0822033',
              name: 'つくば市小茎＊',
              int: '4',
            },
            {
              code: '0822100',
              name: 'ひたちなか市山ノ上町',
              int: '4',
            },
            {
              code: '0822120',
              name: 'ひたちなか市南神敷台＊',
              int: '4',
            },
            {
              code: '0822131',
              name: 'ひたちなか市東石川＊',
              int: '4',
            },
            {
              code: '0822201',
              name: '茨城鹿嶋市鉢形',
              int: '4',
            },
            {
              code: '0822220',
              name: '茨城鹿嶋市宮中＊',
              int: '4',
            },
            {
              code: '0822300',
              name: '潮来市堀之内',
              int: '4',
            },
            {
              code: '0822331',
              name: '潮来市辻＊',
              int: '4',
            },
            {
              code: '0822430',
              name: '守谷市大柏＊',
              int: '4',
            },
            {
              code: '0822500',
              name: '常陸大宮市中富町',
              int: '4',
            },
            {
              code: '0822531',
              name: '常陸大宮市山方＊',
              int: '4',
            },
            {
              code: '0822533',
              name: '常陸大宮市上小瀬＊',
              int: '4',
            },
            {
              code: '0822534',
              name: '常陸大宮市野口＊',
              int: '4',
            },
            {
              code: '0822535',
              name: '常陸大宮市高部＊',
              int: '4',
            },
            {
              code: '0822630',
              name: '那珂市福田＊',
              int: '4',
            },
            {
              code: '0822730',
              name: '筑西市下中山＊',
              int: '4',
            },
            {
              code: '0822733',
              name: '筑西市門井＊',
              int: '4',
            },
            {
              code: '0822734',
              name: '筑西市海老ヶ島＊',
              int: '4',
            },
            {
              code: '0822800',
              name: '坂東市岩井',
              int: '4',
            },
            {
              code: '0822820',
              name: '坂東市馬立＊',
              int: '4',
            },
            {
              code: '0822831',
              name: '坂東市山＊',
              int: '4',
            },
            {
              code: '0822832',
              name: '坂東市役所＊',
              int: '4',
            },
            {
              code: '0822920',
              name: '稲敷市江戸崎甲＊',
              int: '4',
            },
            {
              code: '0822934',
              name: '稲敷市役所＊',
              int: '4',
            },
            {
              code: '0822935',
              name: '稲敷市伊佐津＊',
              int: '4',
            },
            {
              code: '0822936',
              name: '稲敷市結佐＊',
              int: '4',
            },
            {
              code: '0822937',
              name: '稲敷市須賀津＊',
              int: '4',
            },
            {
              code: '0823031',
              name: 'かすみがうら市上土田＊',
              int: '4',
            },
            {
              code: '0823032',
              name: 'かすみがうら市大和田＊',
              int: '4',
            },
            {
              code: '0823130',
              name: '桜川市岩瀬＊',
              int: '4',
            },
            {
              code: '0823131',
              name: '桜川市真壁＊',
              int: '4',
            },
            {
              code: '0823132',
              name: '桜川市羽田＊',
              int: '4',
            },
            {
              code: '0823230',
              name: '神栖市溝口＊',
              int: '4',
            },
            {
              code: '0823331',
              name: '行方市山田＊',
              int: '4',
            },
            {
              code: '0823332',
              name: '行方市玉造＊',
              int: '4',
            },
            {
              code: '0823333',
              name: '行方市麻生＊',
              int: '4',
            },
            {
              code: '0823400',
              name: '鉾田市鉾田',
              int: '4',
            },
            {
              code: '0823430',
              name: '鉾田市造谷＊',
              int: '4',
            },
            {
              code: '0823531',
              name: 'つくばみらい市加藤＊',
              int: '4',
            },
            {
              code: '0823532',
              name: 'つくばみらい市福田＊',
              int: '4',
            },
            {
              code: '0823630',
              name: '小美玉市小川＊',
              int: '4',
            },
            {
              code: '0823631',
              name: '小美玉市堅倉＊',
              int: '4',
            },
            {
              code: '0823632',
              name: '小美玉市上玉里＊',
              int: '4',
            },
            {
              code: '0830230',
              name: '茨城町小堤＊',
              int: '4',
            },
            {
              code: '0831035',
              name: '城里町阿波山＊',
              int: '4',
            },
            {
              code: '0836430',
              name: '大子町池田＊',
              int: '4',
            },
            {
              code: '0844230',
              name: '美浦村受領＊',
              int: '4',
            },
            {
              code: '0844330',
              name: '阿見町中央＊',
              int: '4',
            },
            {
              code: '0844730',
              name: '河内町源清田＊',
              int: '4',
            },
            {
              code: '0852131',
              name: '八千代町菅谷＊',
              int: '4',
            },
            {
              code: '0854230',
              name: '五霞町小福田＊',
              int: '4',
            },
            {
              code: '0854631',
              name: '境町旭町＊',
              int: '4',
            },
            {
              code: '0856400',
              name: '利根町布川',
              int: '4',
            },
            {
              code: '0920100',
              name: '宇都宮市明保野町',
              int: '4',
            },
            {
              code: '0920120',
              name: '宇都宮市塙田＊',
              int: '4',
            },
            {
              code: '0920130',
              name: '宇都宮市旭＊',
              int: '4',
            },
            {
              code: '0920131',
              name: '宇都宮市中里町＊',
              int: '4',
            },
            {
              code: '0920133',
              name: '宇都宮市中岡本町＊',
              int: '4',
            },
            {
              code: '0920230',
              name: '足利市大正町＊',
              int: '4',
            },
            {
              code: '0920300',
              name: '栃木市旭町',
              int: '4',
            },
            {
              code: '0920332',
              name: '栃木市藤岡町藤岡＊',
              int: '4',
            },
            {
              code: '0920336',
              name: '栃木市岩舟町静＊',
              int: '4',
            },
            {
              code: '0920434',
              name: '佐野市葛生東＊',
              int: '4',
            },
            {
              code: '0920435',
              name: '佐野市高砂町＊',
              int: '4',
            },
            {
              code: '0920520',
              name: '鹿沼市晃望台＊',
              int: '4',
            },
            {
              code: '0920531',
              name: '鹿沼市口粟野＊',
              int: '4',
            },
            {
              code: '0920601',
              name: '日光市瀬川',
              int: '4',
            },
            {
              code: '0920620',
              name: '日光市鬼怒川温泉大原＊',
              int: '4',
            },
            {
              code: '0920624',
              name: '日光市芹沼＊',
              int: '4',
            },
            {
              code: '0920820',
              name: '小山市神鳥谷＊',
              int: '4',
            },
            {
              code: '0920830',
              name: '小山市中央町＊',
              int: '4',
            },
            {
              code: '0920920',
              name: '真岡市田町＊',
              int: '4',
            },
            {
              code: '0920932',
              name: '真岡市荒町＊',
              int: '4',
            },
            {
              code: '0921000',
              name: '大田原市黒羽田町',
              int: '4',
            },
            {
              code: '0921130',
              name: '矢板市本町＊',
              int: '4',
            },
            {
              code: '0921300',
              name: '那須塩原市蟇沼',
              int: '4',
            },
            {
              code: '0921320',
              name: '那須塩原市鍋掛＊',
              int: '4',
            },
            {
              code: '0921330',
              name: '那須塩原市共墾社＊',
              int: '4',
            },
            {
              code: '0921331',
              name: '那須塩原市あたご町＊',
              int: '4',
            },
            {
              code: '0921333',
              name: '那須塩原市塩原庁舎＊',
              int: '4',
            },
            {
              code: '0921430',
              name: '栃木さくら市氏家＊',
              int: '4',
            },
            {
              code: '0921530',
              name: '那須烏山市大金＊',
              int: '4',
            },
            {
              code: '0921531',
              name: '那須烏山市役所＊',
              int: '4',
            },
            {
              code: '0921633',
              name: '下野市田中＊',
              int: '4',
            },
            {
              code: '0921634',
              name: '下野市笹原＊',
              int: '4',
            },
            {
              code: '0921635',
              name: '下野市大松山＊',
              int: '4',
            },
            {
              code: '0934200',
              name: '益子町益子',
              int: '4',
            },
            {
              code: '0934321',
              name: '茂木町北高岡天矢場＊',
              int: '4',
            },
            {
              code: '0934330',
              name: '茂木町茂木＊',
              int: '4',
            },
            {
              code: '0934430',
              name: '市貝町市塙＊',
              int: '4',
            },
            {
              code: '0934531',
              name: '芳賀町祖母井＊',
              int: '4',
            },
            {
              code: '0936130',
              name: '壬生町通町＊',
              int: '4',
            },
            {
              code: '0936430',
              name: '野木町丸林＊',
              int: '4',
            },
            {
              code: '0938430',
              name: '塩谷町玉生＊',
              int: '4',
            },
            {
              code: '0941132',
              name: '栃木那珂川町馬頭＊',
              int: '4',
            },
            {
              code: '1020131',
              name: '前橋市堀越町＊',
              int: '4',
            },
            {
              code: '1020133',
              name: '前橋市粕川町＊',
              int: '4',
            },
            {
              code: '1020134',
              name: '前橋市富士見町＊',
              int: '4',
            },
            {
              code: '1020230',
              name: '高崎市高松町＊',
              int: '4',
            },
            {
              code: '1020320',
              name: '桐生市元宿町＊',
              int: '4',
            },
            {
              code: '1020331',
              name: '桐生市黒保根町＊',
              int: '4',
            },
            {
              code: '1020431',
              name: '伊勢崎市今泉町＊',
              int: '4',
            },
            {
              code: '1020434',
              name: '伊勢崎市境＊',
              int: '4',
            },
            {
              code: '1020520',
              name: '太田市西本町＊',
              int: '4',
            },
            {
              code: '1020530',
              name: '太田市浜町＊',
              int: '4',
            },
            {
              code: '1020532',
              name: '太田市新田金井町＊',
              int: '4',
            },
            {
              code: '1020631',
              name: '沼田市白沢町＊',
              int: '4',
            },
            {
              code: '1020720',
              name: '館林市美園町＊',
              int: '4',
            },
            {
              code: '1020730',
              name: '館林市城町＊',
              int: '4',
            },
            {
              code: '1021130',
              name: '安中市安中＊',
              int: '4',
            },
            {
              code: '1052101',
              name: '板倉町板倉',
              int: '4',
            },
            {
              code: '1052231',
              name: '群馬明和町新里＊',
              int: '4',
            },
            {
              code: '1052330',
              name: '千代田町赤岩＊',
              int: '4',
            },
            {
              code: '1052430',
              name: '大泉町日の出＊',
              int: '4',
            },
            {
              code: '1052531',
              name: '邑楽町中野＊',
              int: '4',
            },
            {
              code: '1110130',
              name: 'さいたま西区指扇＊',
              int: '4',
            },
            {
              code: '1110230',
              name: 'さいたま北区宮原＊',
              int: '4',
            },
            {
              code: '1110320',
              name: 'さいたま大宮区天沼町＊',
              int: '4',
            },
            {
              code: '1110331',
              name: 'さいたま大宮区大門＊',
              int: '4',
            },
            {
              code: '1110430',
              name: 'さいたま見沼区堀崎＊',
              int: '4',
            },
            {
              code: '1110530',
              name: 'さいたま中央区下落合＊',
              int: '4',
            },
            {
              code: '1110831',
              name: 'さいたま南区別所＊',
              int: '4',
            },
            {
              code: '1110930',
              name: 'さいたま緑区中尾＊',
              int: '4',
            },
            {
              code: '1111031',
              name: 'さいたま岩槻区本丸＊',
              int: '4',
            },
            {
              code: '1120230',
              name: '熊谷市大里＊',
              int: '4',
            },
            {
              code: '1120231',
              name: '熊谷市妻沼＊',
              int: '4',
            },
            {
              code: '1120232',
              name: '熊谷市江南＊',
              int: '4',
            },
            {
              code: '1120320',
              name: '川口市中青木分室＊',
              int: '4',
            },
            {
              code: '1120630',
              name: '行田市本丸＊',
              int: '4',
            },
            {
              code: '1120631',
              name: '行田市南河原＊',
              int: '4',
            },
            {
              code: '1121030',
              name: '加須市三俣＊',
              int: '4',
            },
            {
              code: '1121031',
              name: '加須市騎西＊',
              int: '4',
            },
            {
              code: '1121032',
              name: '加須市北川辺＊',
              int: '4',
            },
            {
              code: '1121101',
              name: '本庄市児玉町',
              int: '4',
            },
            {
              code: '1121120',
              name: '本庄市本庄＊',
              int: '4',
            },
            {
              code: '1121230',
              name: '東松山市松葉町＊',
              int: '4',
            },
            {
              code: '1121421',
              name: '春日部市粕壁＊',
              int: '4',
            },
            {
              code: '1121430',
              name: '春日部市金崎＊',
              int: '4',
            },
            {
              code: '1121440',
              name: '春日部市谷原新田＊',
              int: '4',
            },
            {
              code: '1121630',
              name: '羽生市東＊',
              int: '4',
            },
            {
              code: '1121730',
              name: '鴻巣市中央＊',
              int: '4',
            },
            {
              code: '1121733',
              name: '鴻巣市川里＊',
              int: '4',
            },
            {
              code: '1121734',
              name: '鴻巣市吹上富士見＊',
              int: '4',
            },
            {
              code: '1121832',
              name: '深谷市川本＊',
              int: '4',
            },
            {
              code: '1121931',
              name: '上尾市本町＊',
              int: '4',
            },
            {
              code: '1122131',
              name: '草加市中央＊',
              int: '4',
            },
            {
              code: '1122430',
              name: '戸田市上戸田＊',
              int: '4',
            },
            {
              code: '1123132',
              name: '桶川市泉＊',
              int: '4',
            },
            {
              code: '1123200',
              name: '久喜市下早見',
              int: '4',
            },
            {
              code: '1123220',
              name: '久喜市青葉＊',
              int: '4',
            },
            {
              code: '1123230',
              name: '久喜市菖蒲＊',
              int: '4',
            },
            {
              code: '1123231',
              name: '久喜市栗橋＊',
              int: '4',
            },
            {
              code: '1123232',
              name: '久喜市鷲宮＊',
              int: '4',
            },
            {
              code: '1123331',
              name: '北本市本町＊',
              int: '4',
            },
            {
              code: '1123430',
              name: '八潮市中央＊',
              int: '4',
            },
            {
              code: '1123530',
              name: '富士見市鶴馬＊',
              int: '4',
            },
            {
              code: '1123731',
              name: '三郷市中央＊',
              int: '4',
            },
            {
              code: '1123930',
              name: '坂戸市千代田＊',
              int: '4',
            },
            {
              code: '1124030',
              name: '幸手市東＊',
              int: '4',
            },
            {
              code: '1124130',
              name: '鶴ヶ島市三ツ木＊',
              int: '4',
            },
            {
              code: '1124331',
              name: '吉川市きよみ野＊',
              int: '4',
            },
            {
              code: '1124630',
              name: '白岡市千駄野＊',
              int: '4',
            },
            {
              code: '1132630',
              name: '毛呂山町中央＊',
              int: '4',
            },
            {
              code: '1134130',
              name: '滑川町福田＊',
              int: '4',
            },
            {
              code: '1134631',
              name: '川島町下八ツ林＊',
              int: '4',
            },
            {
              code: '1134730',
              name: '吉見町下細谷＊',
              int: '4',
            },
            {
              code: '1144231',
              name: '宮代町笠原＊',
              int: '4',
            },
            {
              code: '1146430',
              name: '杉戸町清地＊',
              int: '4',
            },
            {
              code: '1146530',
              name: '松伏町松伏＊',
              int: '4',
            },
            {
              code: '1210101',
              name: '千葉中央区中央港',
              int: '4',
            },
            {
              code: '1210120',
              name: '千葉中央区千葉市役所＊',
              int: '4',
            },
            {
              code: '1210240',
              name: '千葉花見川区花島町＊',
              int: '4',
            },
            {
              code: '1210340',
              name: '千葉稲毛区園生町＊',
              int: '4',
            },
            {
              code: '1210440',
              name: '千葉若葉区小倉台＊',
              int: '4',
            },
            {
              code: '1210600',
              name: '千葉美浜区ひび野',
              int: '4',
            },
            {
              code: '1210620',
              name: '千葉美浜区稲毛海岸＊',
              int: '4',
            },
            {
              code: '1220431',
              name: '船橋市湊町＊',
              int: '4',
            },
            {
              code: '1220740',
              name: '松戸市西馬橋＊',
              int: '4',
            },
            {
              code: '1220832',
              name: '野田市鶴奉＊',
              int: '4',
            },
            {
              code: '1220833',
              name: '野田市東宝珠花＊',
              int: '4',
            },
            {
              code: '1221101',
              name: '成田国際空港',
              int: '4',
            },
            {
              code: '1221102',
              name: '成田市名古屋',
              int: '4',
            },
            {
              code: '1221120',
              name: '成田市中台＊',
              int: '4',
            },
            {
              code: '1221133',
              name: '成田市役所＊',
              int: '4',
            },
            {
              code: '1221135',
              name: '成田市松子＊',
              int: '4',
            },
            {
              code: '1221231',
              name: '千葉佐倉市海隣寺町＊',
              int: '4',
            },
            {
              code: '1221320',
              name: '東金市日吉台＊',
              int: '4',
            },
            {
              code: '1221531',
              name: '旭市南堀之内＊',
              int: '4',
            },
            {
              code: '1221632',
              name: '習志野市鷺沼＊',
              int: '4',
            },
            {
              code: '1221701',
              name: '柏市旭町',
              int: '4',
            },
            {
              code: '1221732',
              name: '柏市柏＊',
              int: '4',
            },
            {
              code: '1222030',
              name: '流山市平和台＊',
              int: '4',
            },
            {
              code: '1222131',
              name: '八千代市大和田新田＊',
              int: '4',
            },
            {
              code: '1222431',
              name: '鎌ケ谷市新鎌ケ谷＊',
              int: '4',
            },
            {
              code: '1222700',
              name: '浦安市日の出',
              int: '4',
            },
            {
              code: '1222732',
              name: '浦安市猫実＊',
              int: '4',
            },
            {
              code: '1222831',
              name: '四街道市鹿渡＊',
              int: '4',
            },
            {
              code: '1223031',
              name: '八街市八街＊',
              int: '4',
            },
            {
              code: '1223130',
              name: '印西市大森＊',
              int: '4',
            },
            {
              code: '1223132',
              name: '印西市笠神＊',
              int: '4',
            },
            {
              code: '1223133',
              name: '印西市美瀬＊',
              int: '4',
            },
            {
              code: '1223232',
              name: '白井市復＊',
              int: '4',
            },
            {
              code: '1223330',
              name: '富里市七栄＊',
              int: '4',
            },
            {
              code: '1223602',
              name: '香取市佐原平田',
              int: '4',
            },
            {
              code: '1223620',
              name: '香取市佐原諏訪台＊',
              int: '4',
            },
            {
              code: '1223630',
              name: '香取市役所＊',
              int: '4',
            },
            {
              code: '1223631',
              name: '香取市羽根川＊',
              int: '4',
            },
            {
              code: '1223632',
              name: '香取市仁良＊',
              int: '4',
            },
            {
              code: '1223721',
              name: '山武市蓮沼ニ＊',
              int: '4',
            },
            {
              code: '1223734',
              name: '山武市埴谷＊',
              int: '4',
            },
            {
              code: '1232931',
              name: '栄町安食台＊',
              int: '4',
            },
            {
              code: '1234230',
              name: '神崎町神崎本宿＊',
              int: '4',
            },
            {
              code: '1234700',
              name: '多古町多古',
              int: '4',
            },
            {
              code: '1246330',
              name: '鋸南町下佐久間＊',
              int: '4',
            },
            {
              code: '1310100',
              name: '東京千代田区大手町',
              int: '4',
            },
            {
              code: '1310253',
              name: '東京中央区勝どき＊',
              int: '4',
            },
            {
              code: '1310750',
              name: '東京墨田区東向島＊',
              int: '4',
            },
            {
              code: '1310820',
              name: '東京江東区越中島＊',
              int: '4',
            },
            {
              code: '1310831',
              name: '東京江東区東陽＊',
              int: '4',
            },
            {
              code: '1310850',
              name: '東京江東区森下＊',
              int: '4',
            },
            {
              code: '1310854',
              name: '東京江東区枝川＊',
              int: '4',
            },
            {
              code: '1311250',
              name: '東京世田谷区三軒茶屋＊',
              int: '4',
            },
            {
              code: '1311350',
              name: '東京渋谷区本町＊',
              int: '4',
            },
            {
              code: '1311430',
              name: '東京中野区中野＊',
              int: '4',
            },
            {
              code: '1311451',
              name: '東京中野区江古田＊',
              int: '4',
            },
            {
              code: '1311550',
              name: '東京杉並区桃井＊',
              int: '4',
            },
            {
              code: '1311551',
              name: '東京杉並区高井戸＊',
              int: '4',
            },
            {
              code: '1311730',
              name: '東京北区西ヶ原＊',
              int: '4',
            },
            {
              code: '1311830',
              name: '東京荒川区荒川＊',
              int: '4',
            },
            {
              code: '1311850',
              name: '東京荒川区東尾久＊',
              int: '4',
            },
            {
              code: '1311931',
              name: '東京板橋区高島平＊',
              int: '4',
            },
            {
              code: '1311951',
              name: '東京板橋区相生町＊',
              int: '4',
            },
            {
              code: '1312152',
              name: '東京足立区神明南＊',
              int: '4',
            },
            {
              code: '1312153',
              name: '東京足立区千住中居町＊',
              int: '4',
            },
            {
              code: '1312154',
              name: '東京足立区伊興＊',
              int: '4',
            },
            {
              code: '1312230',
              name: '東京葛飾区立石＊',
              int: '4',
            },
            {
              code: '1312300',
              name: '東京江戸川区中央',
              int: '4',
            },
            {
              code: '1312352',
              name: '東京江戸川区船堀＊',
              int: '4',
            },
            {
              code: '1320850',
              name: '調布市西つつじヶ丘＊',
              int: '4',
            },
            {
              code: '1320952',
              name: '町田市本町田＊',
              int: '4',
            },
            {
              code: '1322431',
              name: '多摩市関戸＊',
              int: '4',
            },
            {
              code: '1410143',
              name: '横浜鶴見区末広町＊',
              int: '4',
            },
            {
              code: '1410240',
              name: '横浜神奈川区神大寺＊',
              int: '4',
            },
            {
              code: '1410242',
              name: '横浜神奈川区広台太田町＊',
              int: '4',
            },
            {
              code: '1410341',
              name: '横浜西区浜松町＊',
              int: '4',
            },
            {
              code: '1410400',
              name: '横浜中区山手町',
              int: '4',
            },
            {
              code: '1410440',
              name: '横浜中区山下町＊',
              int: '4',
            },
            {
              code: '1410441',
              name: '横浜中区山吹町＊',
              int: '4',
            },
            {
              code: '1410442',
              name: '横浜中区日本大通＊',
              int: '4',
            },
            {
              code: '1410641',
              name: '横浜保土ケ谷区上菅田町＊',
              int: '4',
            },
            {
              code: '1410941',
              name: '横浜港北区日吉本町＊',
              int: '4',
            },
            {
              code: '1411042',
              name: '横浜戸塚区鳥が丘＊',
              int: '4',
            },
            {
              code: '1411341',
              name: '横浜緑区十日市場町＊',
              int: '4',
            },
            {
              code: '1411342',
              name: '横浜緑区鴨居＊',
              int: '4',
            },
            {
              code: '1411441',
              name: '横浜瀬谷区三ツ境＊',
              int: '4',
            },
            {
              code: '1413120',
              name: '川崎川崎区宮前町＊',
              int: '4',
            },
            {
              code: '1413641',
              name: '川崎宮前区野川＊',
              int: '4',
            },
            {
              code: '1415141',
              name: '相模原緑区橋本＊',
              int: '4',
            },
            {
              code: '1420321',
              name: '平塚市浅間町＊',
              int: '4',
            },
            {
              code: '1420540',
              name: '藤沢市大庭＊',
              int: '4',
            },
            {
              code: '1420541',
              name: '藤沢市打戻＊',
              int: '4',
            },
            {
              code: '1420621',
              name: '小田原市荻窪＊',
              int: '4',
            },
            {
              code: '1421220',
              name: '厚木市中町＊',
              int: '4',
            },
            {
              code: '1421248',
              name: '厚木市下津古久＊',
              int: '4',
            },
            {
              code: '1421831',
              name: '綾瀬市深谷中＊',
              int: '4',
            },
            {
              code: '1432130',
              name: '寒川町宮山＊',
              int: '4',
            },
            {
              code: '1434230',
              name: '二宮町中里＊',
              int: '4',
            },
            {
              code: '1436131',
              name: '中井町比奈窪＊',
              int: '4',
            },
            {
              code: '1436230',
              name: '神奈川大井町金子＊',
              int: '4',
            },
            {
              code: '1438401',
              name: '湯河原町中央',
              int: '4',
            },
            {
              code: '1510200',
              name: '新潟空港',
              int: '4',
            },
            {
              code: '1510301',
              name: '新潟中央区美咲町',
              int: '4',
            },
            {
              code: '1510320',
              name: '新潟中央区関屋＊',
              int: '4',
            },
            {
              code: '1510331',
              name: '新潟中央区新潟市役所＊',
              int: '4',
            },
            {
              code: '1510430',
              name: '新潟江南区泉町＊',
              int: '4',
            },
            {
              code: '1510500',
              name: '新潟秋葉区程島',
              int: '4',
            },
            {
              code: '1510520',
              name: '新潟秋葉区新津東町＊',
              int: '4',
            },
            {
              code: '1510630',
              name: '新潟南区白根＊',
              int: '4',
            },
            {
              code: '1510731',
              name: '新潟西区寺尾東＊',
              int: '4',
            },
            {
              code: '1520237',
              name: '長岡市小島谷＊',
              int: '4',
            },
            {
              code: '1520240',
              name: '長岡市山古志竹沢＊',
              int: '4',
            },
            {
              code: '1520245',
              name: '長岡市中之島＊',
              int: '4',
            },
            {
              code: '1520433',
              name: '三条市新堀＊',
              int: '4',
            },
            {
              code: '1520930',
              name: '加茂市幸町＊',
              int: '4',
            },
            {
              code: '1521131',
              name: '見附市昭和町＊',
              int: '4',
            },
            {
              code: '1521220',
              name: '村上市片町＊',
              int: '4',
            },
            {
              code: '1521236',
              name: '村上市岩船駅前＊',
              int: '4',
            },
            {
              code: '1521830',
              name: '五泉市太田＊',
              int: '4',
            },
            {
              code: '1522238',
              name: '上越市吉川区原之町＊',
              int: '4',
            },
            {
              code: '1522242',
              name: '上越市三和区井ノ口＊',
              int: '4',
            },
            {
              code: '1522330',
              name: '阿賀野市岡山町＊',
              int: '4',
            },
            {
              code: '1522335',
              name: '阿賀野市姥ヶ橋＊',
              int: '4',
            },
            {
              code: '1522600',
              name: '南魚沼市六日町',
              int: '4',
            },
            {
              code: '1538520',
              name: '阿賀町鹿瀬中学校＊',
              int: '4',
            },
            {
              code: '1538531',
              name: '阿賀町鹿瀬支所＊',
              int: '4',
            },
            {
              code: '1538534',
              name: '阿賀町津川＊',
              int: '4',
            },
            {
              code: '1550433',
              name: '刈羽村割町新田＊',
              int: '4',
            },
            {
              code: '1920120',
              name: '甲府市相生＊',
              int: '4',
            },
            {
              code: '1920134',
              name: '甲府市下曽根町＊',
              int: '4',
            },
            {
              code: '1920833',
              name: '南アルプス市寺部＊',
              int: '4',
            },
            {
              code: '1921131',
              name: '笛吹市一宮町末木＊',
              int: '4',
            },
            {
              code: '1921140',
              name: '笛吹市役所＊',
              int: '4',
            },
            {
              code: '1921320',
              name: '甲州市塩山上於曽＊',
              int: '4',
            },
            {
              code: '1921335',
              name: '甲州市勝沼町勝沼＊',
              int: '4',
            },
            {
              code: '1936832',
              name: '富士川町鰍沢＊',
              int: '4',
            },
            {
              code: '1942432',
              name: '忍野村忍草＊',
              int: '4',
            },
            {
              code: '2221035',
              name: '富士市吉永＊',
              int: '4',
            },
            {
              code: '2221500',
              name: '御殿場市萩原',
              int: '4',
            },
            {
              code: '0120220',
              name: '函館市大森町＊',
              int: '3',
            },
            {
              code: '0120222',
              name: '函館市新浜町＊',
              int: '3',
            },
            {
              code: '0120231',
              name: '函館市日ノ浜町＊',
              int: '3',
            },
            {
              code: '0120623',
              name: '釧路市阿寒町阿寒湖温泉＊',
              int: '3',
            },
            {
              code: '0120641',
              name: '釧路市音別町中園＊',
              int: '3',
            },
            {
              code: '0120700',
              name: '帯広市東４条',
              int: '3',
            },
            {
              code: '0120720',
              name: '帯広市東６条＊',
              int: '3',
            },
            {
              code: '0123632',
              name: '渡島北斗市中央＊',
              int: '3',
            },
            {
              code: '0130431',
              name: '新篠津村第４７線＊',
              int: '3',
            },
            {
              code: '0133331',
              name: '知内町重内＊',
              int: '3',
            },
            {
              code: '0133421',
              name: '木古内町木古内＊',
              int: '3',
            },
            {
              code: '0142331',
              name: '南幌町栄町＊',
              int: '3',
            },
            {
              code: '0142831',
              name: '長沼町中央＊',
              int: '3',
            },
            {
              code: '0158620',
              name: 'むかわ町松風＊',
              int: '3',
            },
            {
              code: '0160431',
              name: '新冠町北星町＊',
              int: '3',
            },
            {
              code: '0163131',
              name: '音更町元町＊',
              int: '3',
            },
            {
              code: '0163931',
              name: '更別村更別＊',
              int: '3',
            },
            {
              code: '0164120',
              name: '十勝大樹町東本通＊',
              int: '3',
            },
            {
              code: '0164920',
              name: '浦幌町桜町＊',
              int: '3',
            },
            {
              code: '0220100',
              name: '青森市花園',
              int: '3',
            },
            {
              code: '0220120',
              name: '青森市中央＊',
              int: '3',
            },
            {
              code: '0220130',
              name: '青森市浪岡＊',
              int: '3',
            },
            {
              code: '0220220',
              name: '弘前市城東中央＊',
              int: '3',
            },
            {
              code: '0220230',
              name: '弘前市賀田＊',
              int: '3',
            },
            {
              code: '0220232',
              name: '弘前市五所＊',
              int: '3',
            },
            {
              code: '0220301',
              name: '八戸市島守',
              int: '3',
            },
            {
              code: '0220302',
              name: '八戸市湊町',
              int: '3',
            },
            {
              code: '0220430',
              name: '黒石市市ノ町＊',
              int: '3',
            },
            {
              code: '0220520',
              name: '五所川原市敷島町＊',
              int: '3',
            },
            {
              code: '0220621',
              name: '十和田市西二番町＊',
              int: '3',
            },
            {
              code: '0220631',
              name: '十和田市奥瀬＊',
              int: '3',
            },
            {
              code: '0220730',
              name: '三沢市桜町＊',
              int: '3',
            },
            {
              code: '0220800',
              name: 'むつ市金曲',
              int: '3',
            },
            {
              code: '0220820',
              name: 'むつ市金谷＊',
              int: '3',
            },
            {
              code: '0220824',
              name: 'むつ市大畑町中島＊',
              int: '3',
            },
            {
              code: '0220830',
              name: 'むつ市川内町＊',
              int: '3',
            },
            {
              code: '0220930',
              name: 'つがる市木造＊',
              int: '3',
            },
            {
              code: '0220932',
              name: 'つがる市柏＊',
              int: '3',
            },
            {
              code: '0220935',
              name: 'つがる市車力町＊',
              int: '3',
            },
            {
              code: '0220938',
              name: 'つがる市稲垣町＊',
              int: '3',
            },
            {
              code: '0221030',
              name: '平川市猿賀＊',
              int: '3',
            },
            {
              code: '0221031',
              name: '平川市柏木町＊',
              int: '3',
            },
            {
              code: '0230100',
              name: '平内町小湊',
              int: '3',
            },
            {
              code: '0230430',
              name: '蓬田村蓬田＊',
              int: '3',
            },
            {
              code: '0230730',
              name: '外ヶ浜町蟹田＊',
              int: '3',
            },
            {
              code: '0234330',
              name: '西目屋村田代＊',
              int: '3',
            },
            {
              code: '0236130',
              name: '藤崎町西豊田＊',
              int: '3',
            },
            {
              code: '0236132',
              name: '藤崎町水木＊',
              int: '3',
            },
            {
              code: '0236731',
              name: '田舎館村田舎館＊',
              int: '3',
            },
            {
              code: '0238131',
              name: '板柳町板柳＊',
              int: '3',
            },
            {
              code: '0238430',
              name: '鶴田町鶴田＊',
              int: '3',
            },
            {
              code: '0240120',
              name: '野辺地町田狭沢＊',
              int: '3',
            },
            {
              code: '0240130',
              name: '野辺地町野辺地＊',
              int: '3',
            },
            {
              code: '0240230',
              name: '七戸町七戸＊',
              int: '3',
            },
            {
              code: '0240620',
              name: '横浜町林ノ脇＊',
              int: '3',
            },
            {
              code: '0240630',
              name: '横浜町寺下＊',
              int: '3',
            },
            {
              code: '0240832',
              name: '東北町塔ノ沢山＊',
              int: '3',
            },
            {
              code: '0241100',
              name: '六ヶ所村尾駮',
              int: '3',
            },
            {
              code: '0242331',
              name: '大間町大間＊',
              int: '3',
            },
            {
              code: '0242400',
              name: '東通村砂子又蒲谷地',
              int: '3',
            },
            {
              code: '0242431',
              name: '東通村砂子又沢内＊',
              int: '3',
            },
            {
              code: '0244131',
              name: '三戸町在府小路町＊',
              int: '3',
            },
            {
              code: '0244231',
              name: '五戸町倉石中市＊',
              int: '3',
            },
            {
              code: '0244331',
              name: '田子町田子＊',
              int: '3',
            },
            {
              code: '0244530',
              name: '青森南部町沖田面＊',
              int: '3',
            },
            {
              code: '0245030',
              name: '新郷村戸来＊',
              int: '3',
            },
            {
              code: '0320120',
              name: '盛岡市馬場町＊',
              int: '3',
            },
            {
              code: '0320200',
              name: '宮古市鍬ヶ崎',
              int: '3',
            },
            {
              code: '0320201',
              name: '宮古市長沢',
              int: '3',
            },
            {
              code: '0320230',
              name: '宮古市茂市＊',
              int: '3',
            },
            {
              code: '0320531',
              name: '花巻市大迫総合支所＊',
              int: '3',
            },
            {
              code: '0320731',
              name: '久慈市山形町＊',
              int: '3',
            },
            {
              code: '0321301',
              name: '二戸市福岡',
              int: '3',
            },
            {
              code: '0321321',
              name: '二戸市石切所＊',
              int: '3',
            },
            {
              code: '0321330',
              name: '二戸市浄法寺町＊',
              int: '3',
            },
            {
              code: '0321431',
              name: '八幡平市叺田＊',
              int: '3',
            },
            {
              code: '0330101',
              name: '雫石町千刈田',
              int: '3',
            },
            {
              code: '0330102',
              name: '雫石町西根上駒木野',
              int: '3',
            },
            {
              code: '0330200',
              name: '葛巻町葛巻元木',
              int: '3',
            },
            {
              code: '0330220',
              name: '葛巻町消防分署＊',
              int: '3',
            },
            {
              code: '0330230',
              name: '葛巻町役場＊',
              int: '3',
            },
            {
              code: '0336620',
              name: '西和賀町川尻＊',
              int: '3',
            },
            {
              code: '0336621',
              name: '西和賀町沢内川舟＊',
              int: '3',
            },
            {
              code: '0336630',
              name: '西和賀町沢内太田＊',
              int: '3',
            },
            {
              code: '0346132',
              name: '大槌町小鎚＊',
              int: '3',
            },
            {
              code: '0348320',
              name: '岩泉町大川＊',
              int: '3',
            },
            {
              code: '0348330',
              name: '岩泉町岩泉＊',
              int: '3',
            },
            {
              code: '0348400',
              name: '田野畑村田野畑',
              int: '3',
            },
            {
              code: '0348430',
              name: '田野畑村役場＊',
              int: '3',
            },
            {
              code: '0350131',
              name: '軽米町軽米＊',
              int: '3',
            },
            {
              code: '0350631',
              name: '九戸村伊保内＊',
              int: '3',
            },
            {
              code: '0350700',
              name: '岩手洋野町種市',
              int: '3',
            },
            {
              code: '0350731',
              name: '岩手洋野町大野＊',
              int: '3',
            },
            {
              code: '0352430',
              name: '一戸町高善寺＊',
              int: '3',
            },
            {
              code: '0520100',
              name: '秋田市山王',
              int: '3',
            },
            {
              code: '0520101',
              name: '秋田市雄和女米木',
              int: '3',
            },
            {
              code: '0520120',
              name: '秋田市八橋運動公園＊',
              int: '3',
            },
            {
              code: '0520134',
              name: '秋田市雄和新波＊',
              int: '3',
            },
            {
              code: '0520200',
              name: '能代市緑町',
              int: '3',
            },
            {
              code: '0520201',
              name: '能代市常盤山谷',
              int: '3',
            },
            {
              code: '0520220',
              name: '能代市追分町＊',
              int: '3',
            },
            {
              code: '0520232',
              name: '能代市上町＊',
              int: '3',
            },
            {
              code: '0520233',
              name: '能代市二ツ井町上台＊',
              int: '3',
            },
            {
              code: '0520300',
              name: '横手市雄物川町今宿',
              int: '3',
            },
            {
              code: '0520320',
              name: '横手市安田柳堤地内＊',
              int: '3',
            },
            {
              code: '0520330',
              name: '横手市中央町＊',
              int: '3',
            },
            {
              code: '0520331',
              name: '横手市増田町増田＊',
              int: '3',
            },
            {
              code: '0520333',
              name: '横手市大森町＊',
              int: '3',
            },
            {
              code: '0520334',
              name: '横手市十文字町＊',
              int: '3',
            },
            {
              code: '0520338',
              name: '横手市山内土渕＊',
              int: '3',
            },
            {
              code: '0520339',
              name: '横手市平鹿町浅舞＊',
              int: '3',
            },
            {
              code: '0520400',
              name: '大館市比内町味噌内',
              int: '3',
            },
            {
              code: '0520420',
              name: '大館市桜町＊',
              int: '3',
            },
            {
              code: '0520431',
              name: '大館市比内町扇田＊',
              int: '3',
            },
            {
              code: '0520633',
              name: '男鹿市角間崎＊',
              int: '3',
            },
            {
              code: '0520700',
              name: '湯沢市沖鶴',
              int: '3',
            },
            {
              code: '0520720',
              name: '湯沢市寺沢＊',
              int: '3',
            },
            {
              code: '0520733',
              name: '湯沢市皆瀬＊',
              int: '3',
            },
            {
              code: '0520734',
              name: '湯沢市佐竹町＊',
              int: '3',
            },
            {
              code: '0520735',
              name: '湯沢市横堀＊',
              int: '3',
            },
            {
              code: '0520931',
              name: '鹿角市花輪＊',
              int: '3',
            },
            {
              code: '0521000',
              name: '由利本荘市石脇',
              int: '3',
            },
            {
              code: '0521020',
              name: '由利本荘市桜小路＊',
              int: '3',
            },
            {
              code: '0521021',
              name: '由利本荘市鳥海町伏見＊',
              int: '3',
            },
            {
              code: '0521032',
              name: '由利本荘市岩城内道川＊',
              int: '3',
            },
            {
              code: '0521035',
              name: '由利本荘市東由利老方＊',
              int: '3',
            },
            {
              code: '0521038',
              name: '由利本荘市矢島町矢島町＊',
              int: '3',
            },
            {
              code: '0521039',
              name: '由利本荘市岩谷町＊',
              int: '3',
            },
            {
              code: '0521130',
              name: '潟上市昭和大久保＊',
              int: '3',
            },
            {
              code: '0521133',
              name: '潟上市天王＊',
              int: '3',
            },
            {
              code: '0521220',
              name: '大仙市協和境唐松岳＊',
              int: '3',
            },
            {
              code: '0521235',
              name: '大仙市南外＊',
              int: '3',
            },
            {
              code: '0521240',
              name: '大仙市神宮寺＊',
              int: '3',
            },
            {
              code: '0521300',
              name: '北秋田市花園町',
              int: '3',
            },
            {
              code: '0521320',
              name: '北秋田市阿仁水無＊',
              int: '3',
            },
            {
              code: '0521333',
              name: '北秋田市米内沢＊',
              int: '3',
            },
            {
              code: '0521334',
              name: '北秋田市新田目＊',
              int: '3',
            },
            {
              code: '0521431',
              name: 'にかほ市金浦＊',
              int: '3',
            },
            {
              code: '0521432',
              name: 'にかほ市象潟町浜ノ田＊',
              int: '3',
            },
            {
              code: '0521501',
              name: '仙北市角館町中菅沢',
              int: '3',
            },
            {
              code: '0521521',
              name: '仙北市田沢湖生保内上清水＊',
              int: '3',
            },
            {
              code: '0521522',
              name: '仙北市角館町小勝田＊',
              int: '3',
            },
            {
              code: '0521523',
              name: '仙北市田沢湖田沢＊',
              int: '3',
            },
            {
              code: '0521530',
              name: '仙北市田沢湖生保内宮ノ後＊',
              int: '3',
            },
            {
              code: '0532730',
              name: '上小阿仁村小沢田＊',
              int: '3',
            },
            {
              code: '0534631',
              name: '藤里町藤琴＊',
              int: '3',
            },
            {
              code: '0534832',
              name: '三種町鵜川＊',
              int: '3',
            },
            {
              code: '0534834',
              name: '三種町鹿渡＊',
              int: '3',
            },
            {
              code: '0534835',
              name: '三種町森岳＊',
              int: '3',
            },
            {
              code: '0536100',
              name: '五城目町西磯ノ目',
              int: '3',
            },
            {
              code: '0536331',
              name: '八郎潟町大道＊',
              int: '3',
            },
            {
              code: '0543400',
              name: '秋田美郷町六郷東根',
              int: '3',
            },
            {
              code: '0546420',
              name: '東成瀬村椿川＊',
              int: '3',
            },
            {
              code: '0546430',
              name: '東成瀬村田子内＊',
              int: '3',
            },
            {
              code: '0620300',
              name: '鶴岡市馬場町',
              int: '3',
            },
            {
              code: '0620301',
              name: '鶴岡市温海川',
              int: '3',
            },
            {
              code: '0620321',
              name: '鶴岡市道田町＊',
              int: '3',
            },
            {
              code: '0620332',
              name: '鶴岡市上山添＊',
              int: '3',
            },
            {
              code: '0620333',
              name: '鶴岡市下名川＊',
              int: '3',
            },
            {
              code: '0620334',
              name: '鶴岡市羽黒町＊',
              int: '3',
            },
            {
              code: '0620435',
              name: '酒田市観音寺＊',
              int: '3',
            },
            {
              code: '0620436',
              name: '酒田市本町＊',
              int: '3',
            },
            {
              code: '0636100',
              name: '山形金山町中田',
              int: '3',
            },
            {
              code: '0636130',
              name: '山形金山町金山＊',
              int: '3',
            },
            {
              code: '0642820',
              name: '庄内町清川＊',
              int: '3',
            },
            {
              code: '0646101',
              name: '遊佐町小原田',
              int: '3',
            },
            {
              code: '0720820',
              name: '喜多方市松山町＊',
              int: '3',
            },
            {
              code: '0720837',
              name: '喜多方市山都町＊',
              int: '3',
            },
            {
              code: '0736720',
              name: '只見町黒谷＊',
              int: '3',
            },
            {
              code: '0736730',
              name: '只見町只見＊',
              int: '3',
            },
            {
              code: '0736821',
              name: '南会津町滝原＊',
              int: '3',
            },
            {
              code: '0736831',
              name: '南会津町古町＊',
              int: '3',
            },
            {
              code: '0736832',
              name: '南会津町山口＊',
              int: '3',
            },
            {
              code: '0740231',
              name: '北塩原村北山＊',
              int: '3',
            },
            {
              code: '0742300',
              name: '柳津町大成沢',
              int: '3',
            },
            {
              code: '0744430',
              name: '三島町宮下＊',
              int: '3',
            },
            {
              code: '0744530',
              name: '福島金山町川口＊',
              int: '3',
            },
            {
              code: '0744631',
              name: '福島昭和村下中津川＊',
              int: '3',
            },
            {
              code: '0823232',
              name: '神栖市波崎＊',
              int: '3',
            },
            {
              code: '0830930',
              name: '大洗町磯浜町＊',
              int: '3',
            },
            {
              code: '0920331',
              name: '栃木市大平町富田＊',
              int: '3',
            },
            {
              code: '0920333',
              name: '栃木市都賀町家中＊',
              int: '3',
            },
            {
              code: '0920334',
              name: '栃木市西方町本城＊',
              int: '3',
            },
            {
              code: '0920335',
              name: '栃木市万町＊',
              int: '3',
            },
            {
              code: '0920420',
              name: '佐野市中町＊',
              int: '3',
            },
            {
              code: '0920436',
              name: '佐野市田沼町＊',
              int: '3',
            },
            {
              code: '0920532',
              name: '鹿沼市今宮町＊',
              int: '3',
            },
            {
              code: '0920602',
              name: '日光市中宮祠',
              int: '3',
            },
            {
              code: '0920621',
              name: '日光市湯元＊',
              int: '3',
            },
            {
              code: '0920623',
              name: '日光市足尾町中才＊',
              int: '3',
            },
            {
              code: '0920635',
              name: '日光市足尾町通洞＊',
              int: '3',
            },
            {
              code: '0920636',
              name: '日光市藤原庁舎＊',
              int: '3',
            },
            {
              code: '0920637',
              name: '日光市御幸町＊',
              int: '3',
            },
            {
              code: '0920638',
              name: '日光市黒部＊',
              int: '3',
            },
            {
              code: '0920639',
              name: '日光市今市本町＊',
              int: '3',
            },
            {
              code: '0921321',
              name: '那須塩原市中塩原＊',
              int: '3',
            },
            {
              code: '0930130',
              name: '上三川町しらさぎ＊',
              int: '3',
            },
            {
              code: '1020101',
              name: '前橋市昭和町',
              int: '3',
            },
            {
              code: '1020120',
              name: '前橋市駒形町＊',
              int: '3',
            },
            {
              code: '1020130',
              name: '前橋市大手町＊',
              int: '3',
            },
            {
              code: '1020231',
              name: '高崎市倉渕町＊',
              int: '3',
            },
            {
              code: '1020232',
              name: '高崎市箕郷町＊',
              int: '3',
            },
            {
              code: '1020233',
              name: '高崎市足門町＊',
              int: '3',
            },
            {
              code: '1020234',
              name: '高崎市新町＊',
              int: '3',
            },
            {
              code: '1020235',
              name: '高崎市下室田＊',
              int: '3',
            },
            {
              code: '1020236',
              name: '高崎市吉井町吉井川＊',
              int: '3',
            },
            {
              code: '1020300',
              name: '桐生市織姫町',
              int: '3',
            },
            {
              code: '1020531',
              name: '太田市粕川町＊',
              int: '3',
            },
            {
              code: '1020534',
              name: '太田市大原町＊',
              int: '3',
            },
            {
              code: '1020601',
              name: '沼田市西倉内町',
              int: '3',
            },
            {
              code: '1020620',
              name: '沼田市下久屋町＊',
              int: '3',
            },
            {
              code: '1020632',
              name: '沼田市利根町＊',
              int: '3',
            },
            {
              code: '1020821',
              name: '渋川市有馬＊',
              int: '3',
            },
            {
              code: '1020830',
              name: '渋川市石原＊',
              int: '3',
            },
            {
              code: '1020831',
              name: '渋川市北橘町＊',
              int: '3',
            },
            {
              code: '1020833',
              name: '渋川市吹屋＊',
              int: '3',
            },
            {
              code: '1020834',
              name: '渋川市村上＊',
              int: '3',
            },
            {
              code: '1020930',
              name: '藤岡市中栗須＊',
              int: '3',
            },
            {
              code: '1020932',
              name: '藤岡市鬼石＊',
              int: '3',
            },
            {
              code: '1021000',
              name: '富岡市七日市',
              int: '3',
            },
            {
              code: '1021121',
              name: '安中市松井田町＊',
              int: '3',
            },
            {
              code: '1021230',
              name: 'みどり市東町＊',
              int: '3',
            },
            {
              code: '1021231',
              name: 'みどり市笠懸町＊',
              int: '3',
            },
            {
              code: '1021232',
              name: 'みどり市大間々町＊',
              int: '3',
            },
            {
              code: '1034431',
              name: '榛東村新井＊',
              int: '3',
            },
            {
              code: '1034530',
              name: '吉岡町下野田＊',
              int: '3',
            },
            {
              code: '1036720',
              name: '神流町生利＊',
              int: '3',
            },
            {
              code: '1038430',
              name: '甘楽町小幡＊',
              int: '3',
            },
            {
              code: '1042100',
              name: '中之条町日影',
              int: '3',
            },
            {
              code: '1042620',
              name: '草津町草津＊',
              int: '3',
            },
            {
              code: '1042831',
              name: '群馬高山村中山＊',
              int: '3',
            },
            {
              code: '1042920',
              name: '東吾妻町本宿＊',
              int: '3',
            },
            {
              code: '1042931',
              name: '東吾妻町奥田＊',
              int: '3',
            },
            {
              code: '1044831',
              name: '群馬昭和村糸井＊',
              int: '3',
            },
            {
              code: '1046430',
              name: '玉村町下新田＊',
              int: '3',
            },
            {
              code: '1110630',
              name: 'さいたま桜区道場＊',
              int: '3',
            },
            {
              code: '1110700',
              name: 'さいたま浦和区高砂',
              int: '3',
            },
            {
              code: '1110730',
              name: 'さいたま浦和区常盤＊',
              int: '3',
            },
            {
              code: '1120100',
              name: '川越市旭町',
              int: '3',
            },
            {
              code: '1120121',
              name: '川越市新宿町＊',
              int: '3',
            },
            {
              code: '1120200',
              name: '熊谷市桜町',
              int: '3',
            },
            {
              code: '1120220',
              name: '熊谷市宮町＊',
              int: '3',
            },
            {
              code: '1120331',
              name: '川口市三ツ和＊',
              int: '3',
            },
            {
              code: '1120332',
              name: '川口市安行領家＊',
              int: '3',
            },
            {
              code: '1120701',
              name: '秩父市上町',
              int: '3',
            },
            {
              code: '1120720',
              name: '秩父市近戸町＊',
              int: '3',
            },
            {
              code: '1120731',
              name: '秩父市吉田＊',
              int: '3',
            },
            {
              code: '1120733',
              name: '秩父市荒川＊',
              int: '3',
            },
            {
              code: '1120734',
              name: '秩父市熊木町＊',
              int: '3',
            },
            {
              code: '1120820',
              name: '所沢市北有楽町＊',
              int: '3',
            },
            {
              code: '1120831',
              name: '所沢市並木＊',
              int: '3',
            },
            {
              code: '1120930',
              name: '飯能市双柳＊',
              int: '3',
            },
            {
              code: '1120931',
              name: '飯能市名栗＊',
              int: '3',
            },
            {
              code: '1121220',
              name: '東松山市市ノ川＊',
              int: '3',
            },
            {
              code: '1121530',
              name: '狭山市入間川＊',
              int: '3',
            },
            {
              code: '1121831',
              name: '深谷市岡部＊',
              int: '3',
            },
            {
              code: '1121834',
              name: '深谷市花園＊',
              int: '3',
            },
            {
              code: '1122231',
              name: '越谷市越ヶ谷＊',
              int: '3',
            },
            {
              code: '1122330',
              name: '蕨市中央＊',
              int: '3',
            },
            {
              code: '1122530',
              name: '入間市豊岡＊',
              int: '3',
            },
            {
              code: '1122730',
              name: '朝霞市本町＊',
              int: '3',
            },
            {
              code: '1122831',
              name: '志木市本町＊',
              int: '3',
            },
            {
              code: '1122930',
              name: '和光市広沢＊',
              int: '3',
            },
            {
              code: '1123031',
              name: '新座市野火止＊',
              int: '3',
            },
            {
              code: '1123830',
              name: '蓮田市黒浜＊',
              int: '3',
            },
            {
              code: '1124230',
              name: '日高市南平沢＊',
              int: '3',
            },
            {
              code: '1124530',
              name: 'ふじみ野市福岡＊',
              int: '3',
            },
            {
              code: '1124532',
              name: 'ふじみ野市大井＊',
              int: '3',
            },
            {
              code: '1130130',
              name: '伊奈町小室＊',
              int: '3',
            },
            {
              code: '1132430',
              name: '埼玉三芳町藤久保＊',
              int: '3',
            },
            {
              code: '1132730',
              name: '越生町越生＊',
              int: '3',
            },
            {
              code: '1134230',
              name: '嵐山町杉山＊',
              int: '3',
            },
            {
              code: '1134320',
              name: '小川町大塚＊',
              int: '3',
            },
            {
              code: '1134800',
              name: '鳩山町大豆戸',
              int: '3',
            },
            {
              code: '1134930',
              name: 'ときがわ町桃木＊',
              int: '3',
            },
            {
              code: '1134931',
              name: 'ときがわ町玉川＊',
              int: '3',
            },
            {
              code: '1136130',
              name: '横瀬町横瀬＊',
              int: '3',
            },
            {
              code: '1136230',
              name: '皆野町皆野＊',
              int: '3',
            },
            {
              code: '1136320',
              name: '長瀞町野上下郷＊',
              int: '3',
            },
            {
              code: '1136330',
              name: '長瀞町本野上＊',
              int: '3',
            },
            {
              code: '1136530',
              name: '小鹿野町小鹿野＊',
              int: '3',
            },
            {
              code: '1136531',
              name: '小鹿野町役場両神庁舎＊',
              int: '3',
            },
            {
              code: '1136930',
              name: '東秩父村御堂＊',
              int: '3',
            },
            {
              code: '1138130',
              name: '埼玉美里町木部＊',
              int: '3',
            },
            {
              code: '1138332',
              name: '埼玉神川町下阿久原＊',
              int: '3',
            },
            {
              code: '1138333',
              name: '埼玉神川町植竹＊',
              int: '3',
            },
            {
              code: '1138530',
              name: '上里町七本木＊',
              int: '3',
            },
            {
              code: '1210540',
              name: '千葉緑区おゆみ野＊',
              int: '3',
            },
            {
              code: '1220200',
              name: '銚子市川口町',
              int: '3',
            },
            {
              code: '1220202',
              name: '銚子市小畑新町',
              int: '3',
            },
            {
              code: '1220220',
              name: '銚子市若宮町＊',
              int: '3',
            },
            {
              code: '1220332',
              name: '市川市八幡＊',
              int: '3',
            },
            {
              code: '1220501',
              name: '館山市長須賀',
              int: '3',
            },
            {
              code: '1220531',
              name: '館山市北条＊',
              int: '3',
            },
            {
              code: '1220601',
              name: '木更津市太田',
              int: '3',
            },
            {
              code: '1220631',
              name: '木更津市富士見＊',
              int: '3',
            },
            {
              code: '1220731',
              name: '松戸市根本＊',
              int: '3',
            },
            {
              code: '1221030',
              name: '茂原市道表＊',
              int: '3',
            },
            {
              code: '1221134',
              name: '成田市猿山＊',
              int: '3',
            },
            {
              code: '1221300',
              name: '東金市東新宿',
              int: '3',
            },
            {
              code: '1221331',
              name: '東金市東岩崎＊',
              int: '3',
            },
            {
              code: '1221532',
              name: '旭市高生＊',
              int: '3',
            },
            {
              code: '1221533',
              name: '旭市萩園＊',
              int: '3',
            },
            {
              code: '1221534',
              name: '旭市ニ＊',
              int: '3',
            },
            {
              code: '1221733',
              name: '柏市大島田＊',
              int: '3',
            },
            {
              code: '1221920',
              name: '市原市姉崎＊',
              int: '3',
            },
            {
              code: '1221930',
              name: '市原市国分寺台中央＊',
              int: '3',
            },
            {
              code: '1222230',
              name: '我孫子市我孫子＊',
              int: '3',
            },
            {
              code: '1222300',
              name: '鴨川市八色',
              int: '3',
            },
            {
              code: '1222320',
              name: '鴨川市横渚＊',
              int: '3',
            },
            {
              code: '1222520',
              name: '君津市久留里市場＊',
              int: '3',
            },
            {
              code: '1222531',
              name: '君津市久保＊',
              int: '3',
            },
            {
              code: '1222631',
              name: '富津市下飯野＊',
              int: '3',
            },
            {
              code: '1222931',
              name: '袖ケ浦市坂戸市場＊',
              int: '3',
            },
            {
              code: '1223400',
              name: '南房総市上堀',
              int: '3',
            },
            {
              code: '1223430',
              name: '南房総市富浦町青木＊',
              int: '3',
            },
            {
              code: '1223435',
              name: '南房総市岩糸＊',
              int: '3',
            },
            {
              code: '1223440',
              name: '南房総市谷向＊',
              int: '3',
            },
            {
              code: '1223530',
              name: '匝瑳市八日市場ハ＊',
              int: '3',
            },
            {
              code: '1223532',
              name: '匝瑳市今泉＊',
              int: '3',
            },
            {
              code: '1223633',
              name: '香取市岩部＊',
              int: '3',
            },
            {
              code: '1223700',
              name: '山武市松尾町富士見台',
              int: '3',
            },
            {
              code: '1223735',
              name: '山武市殿台＊',
              int: '3',
            },
            {
              code: '1223736',
              name: '山武市蓮沼ハ＊',
              int: '3',
            },
            {
              code: '1223737',
              name: '山武市松尾町五反田＊',
              int: '3',
            },
            {
              code: '1223831',
              name: 'いすみ市大原＊',
              int: '3',
            },
            {
              code: '1223832',
              name: 'いすみ市岬町長者＊',
              int: '3',
            },
            {
              code: '1223833',
              name: 'いすみ市国府台＊',
              int: '3',
            },
            {
              code: '1223930',
              name: '大網白里市大網＊',
              int: '3',
            },
            {
              code: '1232231',
              name: '酒々井町中央台＊',
              int: '3',
            },
            {
              code: '1234931',
              name: '東庄町笹川＊',
              int: '3',
            },
            {
              code: '1240330',
              name: '九十九里町片貝＊',
              int: '3',
            },
            {
              code: '1240931',
              name: '芝山町小池＊',
              int: '3',
            },
            {
              code: '1241030',
              name: '横芝光町宮川＊',
              int: '3',
            },
            {
              code: '1241032',
              name: '横芝光町栗山＊',
              int: '3',
            },
            {
              code: '1242101',
              name: '一宮町一宮',
              int: '3',
            },
            {
              code: '1242230',
              name: '睦沢町下之郷＊',
              int: '3',
            },
            {
              code: '1242330',
              name: '長生村本郷＊',
              int: '3',
            },
            {
              code: '1242431',
              name: '白子町関＊',
              int: '3',
            },
            {
              code: '1242630',
              name: '長柄町桜谷＊',
              int: '3',
            },
            {
              code: '1242700',
              name: '長南町総合グラウンド',
              int: '3',
            },
            {
              code: '1242731',
              name: '長南町長南＊',
              int: '3',
            },
            {
              code: '1244130',
              name: '大多喜町大多喜＊',
              int: '3',
            },
            {
              code: '1310134',
              name: '東京千代田区富士見＊',
              int: '3',
            },
            {
              code: '1310151',
              name: '東京千代田区麹町＊',
              int: '3',
            },
            {
              code: '1310230',
              name: '東京中央区築地＊',
              int: '3',
            },
            {
              code: '1310250',
              name: '東京中央区日本橋兜町＊',
              int: '3',
            },
            {
              code: '1310300',
              name: '東京港区海岸',
              int: '3',
            },
            {
              code: '1310330',
              name: '東京港区芝公園＊',
              int: '3',
            },
            {
              code: '1310352',
              name: '東京港区南青山＊',
              int: '3',
            },
            {
              code: '1310353',
              name: '東京港区白金＊',
              int: '3',
            },
            {
              code: '1310400',
              name: '東京新宿区西新宿',
              int: '3',
            },
            {
              code: '1310420',
              name: '東京新宿区上落合＊',
              int: '3',
            },
            {
              code: '1310451',
              name: '東京新宿区百人町＊',
              int: '3',
            },
            {
              code: '1310531',
              name: '東京文京区スポーツセンタ＊',
              int: '3',
            },
            {
              code: '1310550',
              name: '東京文京区本郷＊',
              int: '3',
            },
            {
              code: '1310551',
              name: '東京文京区大塚＊',
              int: '3',
            },
            {
              code: '1310632',
              name: '東京台東区東上野＊',
              int: '3',
            },
            {
              code: '1310650',
              name: '東京台東区千束＊',
              int: '3',
            },
            {
              code: '1310700',
              name: '東京墨田区横川',
              int: '3',
            },
            {
              code: '1310730',
              name: '東京墨田区吾妻橋＊',
              int: '3',
            },
            {
              code: '1310800',
              name: '東京江東区青海',
              int: '3',
            },
            {
              code: '1310852',
              name: '東京江東区亀戸＊',
              int: '3',
            },
            {
              code: '1310931',
              name: '東京品川区広町＊',
              int: '3',
            },
            {
              code: '1310950',
              name: '東京品川区北品川＊',
              int: '3',
            },
            {
              code: '1310951',
              name: '東京品川区平塚＊',
              int: '3',
            },
            {
              code: '1311030',
              name: '東京目黒区中央町＊',
              int: '3',
            },
            {
              code: '1311101',
              name: '東京国際空港',
              int: '3',
            },
            {
              code: '1311130',
              name: '東京大田区蒲田＊',
              int: '3',
            },
            {
              code: '1311150',
              name: '東京大田区大森東＊',
              int: '3',
            },
            {
              code: '1311152',
              name: '東京大田区本羽田＊',
              int: '3',
            },
            {
              code: '1311153',
              name: '東京大田区多摩川＊',
              int: '3',
            },
            {
              code: '1311230',
              name: '東京世田谷区世田谷＊',
              int: '3',
            },
            {
              code: '1311252',
              name: '東京世田谷区中町＊',
              int: '3',
            },
            {
              code: '1311253',
              name: '東京世田谷区成城＊',
              int: '3',
            },
            {
              code: '1311331',
              name: '東京渋谷区宇田川町＊',
              int: '3',
            },
            {
              code: '1311452',
              name: '東京中野区中央＊',
              int: '3',
            },
            {
              code: '1311501',
              name: '東京杉並区阿佐谷',
              int: '3',
            },
            {
              code: '1311631',
              name: '東京豊島区南池袋＊',
              int: '3',
            },
            {
              code: '1311753',
              name: '東京北区赤羽南＊',
              int: '3',
            },
            {
              code: '1311950',
              name: '東京板橋区板橋＊',
              int: '3',
            },
            {
              code: '1312031',
              name: '東京練馬区豊玉北＊',
              int: '3',
            },
            {
              code: '1312051',
              name: '東京練馬区東大泉＊',
              int: '3',
            },
            {
              code: '1312052',
              name: '東京練馬区光が丘＊',
              int: '3',
            },
            {
              code: '1312130',
              name: '東京足立区中央本町＊',
              int: '3',
            },
            {
              code: '1312252',
              name: '東京葛飾区金町＊',
              int: '3',
            },
            {
              code: '1312351',
              name: '東京江戸川区鹿骨＊',
              int: '3',
            },
            {
              code: '1320100',
              name: '八王子市大横町',
              int: '3',
            },
            {
              code: '1320120',
              name: '八王子市堀之内＊',
              int: '3',
            },
            {
              code: '1320150',
              name: '八王子市石川町＊',
              int: '3',
            },
            {
              code: '1320231',
              name: '立川市泉町＊',
              int: '3',
            },
            {
              code: '1320331',
              name: '武蔵野市緑町＊',
              int: '3',
            },
            {
              code: '1320352',
              name: '武蔵野市吉祥寺東町＊',
              int: '3',
            },
            {
              code: '1320432',
              name: '三鷹市野崎＊',
              int: '3',
            },
            {
              code: '1320550',
              name: '青梅市日向和田＊',
              int: '3',
            },
            {
              code: '1320631',
              name: '東京府中市寿町＊',
              int: '3',
            },
            {
              code: '1320651',
              name: '東京府中市朝日町＊',
              int: '3',
            },
            {
              code: '1320730',
              name: '昭島市田中町＊',
              int: '3',
            },
            {
              code: '1320830',
              name: '調布市小島町＊',
              int: '3',
            },
            {
              code: '1320921',
              name: '町田市忠生＊',
              int: '3',
            },
            {
              code: '1320932',
              name: '町田市森野＊',
              int: '3',
            },
            {
              code: '1321020',
              name: '小金井市本町＊',
              int: '3',
            },
            {
              code: '1321131',
              name: '小平市小川町＊',
              int: '3',
            },
            {
              code: '1321230',
              name: '日野市神明＊',
              int: '3',
            },
            {
              code: '1321331',
              name: '東村山市本町＊',
              int: '3',
            },
            {
              code: '1321351',
              name: '東村山市美住町＊',
              int: '3',
            },
            {
              code: '1321401',
              name: '国分寺市戸倉',
              int: '3',
            },
            {
              code: '1321450',
              name: '国分寺市本多＊',
              int: '3',
            },
            {
              code: '1321530',
              name: '国立市富士見台＊',
              int: '3',
            },
            {
              code: '1321931',
              name: '狛江市和泉本町＊',
              int: '3',
            },
            {
              code: '1322030',
              name: '東大和市中央＊',
              int: '3',
            },
            {
              code: '1322140',
              name: '清瀬市中里＊',
              int: '3',
            },
            {
              code: '1322150',
              name: '清瀬市中清戸＊',
              int: '3',
            },
            {
              code: '1322230',
              name: '東久留米市本町＊',
              int: '3',
            },
            {
              code: '1322331',
              name: '武蔵村山市本町＊',
              int: '3',
            },
            {
              code: '1322450',
              name: '多摩市鶴牧＊',
              int: '3',
            },
            {
              code: '1322530',
              name: '稲城市東長沼＊',
              int: '3',
            },
            {
              code: '1322730',
              name: '羽村市緑ヶ丘＊',
              int: '3',
            },
            {
              code: '1322851',
              name: 'あきる野市伊奈＊',
              int: '3',
            },
            {
              code: '1322941',
              name: '西東京市中町＊',
              int: '3',
            },
            {
              code: '1330331',
              name: '瑞穂町箱根ヶ崎＊',
              int: '3',
            },
            {
              code: '1410141',
              name: '横浜鶴見区鶴見＊',
              int: '3',
            },
            {
              code: '1410142',
              name: '横浜鶴見区馬場＊',
              int: '3',
            },
            {
              code: '1410340',
              name: '横浜西区みなとみらい＊',
              int: '3',
            },
            {
              code: '1410541',
              name: '横浜南区六ツ川＊',
              int: '3',
            },
            {
              code: '1410542',
              name: '横浜南区大岡＊',
              int: '3',
            },
            {
              code: '1410640',
              name: '横浜保土ケ谷区神戸町＊',
              int: '3',
            },
            {
              code: '1410740',
              name: '横浜磯子区磯子＊',
              int: '3',
            },
            {
              code: '1410741',
              name: '横浜磯子区洋光台＊',
              int: '3',
            },
            {
              code: '1410840',
              name: '横浜金沢区白帆＊',
              int: '3',
            },
            {
              code: '1410841',
              name: '横浜金沢区寺前＊',
              int: '3',
            },
            {
              code: '1410842',
              name: '横浜金沢区釜利谷南＊',
              int: '3',
            },
            {
              code: '1410940',
              name: '横浜港北区大倉山＊',
              int: '3',
            },
            {
              code: '1410942',
              name: '横浜港北区綱島西＊',
              int: '3',
            },
            {
              code: '1411040',
              name: '横浜戸塚区平戸町＊',
              int: '3',
            },
            {
              code: '1411041',
              name: '横浜戸塚区戸塚町＊',
              int: '3',
            },
            {
              code: '1411140',
              name: '横浜港南区丸山台東部＊',
              int: '3',
            },
            {
              code: '1411220',
              name: '横浜旭区大池町＊',
              int: '3',
            },
            {
              code: '1411240',
              name: '横浜旭区今宿東町＊',
              int: '3',
            },
            {
              code: '1411241',
              name: '横浜旭区上白根町＊',
              int: '3',
            },
            {
              code: '1411242',
              name: '横浜旭区川井宿町＊',
              int: '3',
            },
            {
              code: '1411440',
              name: '横浜瀬谷区中屋敷＊',
              int: '3',
            },
            {
              code: '1411540',
              name: '横浜栄区桂台南＊',
              int: '3',
            },
            {
              code: '1411541',
              name: '横浜栄区小菅ケ谷＊',
              int: '3',
            },
            {
              code: '1411640',
              name: '横浜泉区岡津町＊',
              int: '3',
            },
            {
              code: '1411641',
              name: '横浜泉区和泉町＊',
              int: '3',
            },
            {
              code: '1411740',
              name: '横浜青葉区榎が丘＊',
              int: '3',
            },
            {
              code: '1411741',
              name: '横浜青葉区市ケ尾町＊',
              int: '3',
            },
            {
              code: '1411742',
              name: '横浜青葉区美しが丘＊',
              int: '3',
            },
            {
              code: '1411840',
              name: '横浜都筑区池辺町＊',
              int: '3',
            },
            {
              code: '1411842',
              name: '横浜都筑区茅ケ崎＊',
              int: '3',
            },
            {
              code: '1413142',
              name: '川崎川崎区中島＊',
              int: '3',
            },
            {
              code: '1413241',
              name: '川崎幸区戸手本町＊',
              int: '3',
            },
            {
              code: '1413300',
              name: '川崎中原区小杉陣屋町',
              int: '3',
            },
            {
              code: '1413340',
              name: '川崎中原区小杉町＊',
              int: '3',
            },
            {
              code: '1413440',
              name: '川崎高津区下作延＊',
              int: '3',
            },
            {
              code: '1413540',
              name: '川崎多摩区登戸＊',
              int: '3',
            },
            {
              code: '1413740',
              name: '川崎麻生区万福寺＊',
              int: '3',
            },
            {
              code: '1413742',
              name: '川崎麻生区片平＊',
              int: '3',
            },
            {
              code: '1415120',
              name: '相模原緑区大島＊',
              int: '3',
            },
            {
              code: '1415130',
              name: '相模原緑区中野＊',
              int: '3',
            },
            {
              code: '1415132',
              name: '相模原緑区久保沢＊',
              int: '3',
            },
            {
              code: '1415200',
              name: '相模原中央区中央',
              int: '3',
            },
            {
              code: '1415241',
              name: '相模原中央区上溝＊',
              int: '3',
            },
            {
              code: '1415243',
              name: '相模原中央区水郷田名＊',
              int: '3',
            },
            {
              code: '1415340',
              name: '相模原南区相模大野＊',
              int: '3',
            },
            {
              code: '1415341',
              name: '相模原南区磯部＊',
              int: '3',
            },
            {
              code: '1420100',
              name: '横須賀市光の丘',
              int: '3',
            },
            {
              code: '1420420',
              name: '鎌倉市御成町＊',
              int: '3',
            },
            {
              code: '1420521',
              name: '藤沢市朝日町＊',
              int: '3',
            },
            {
              code: '1420542',
              name: '藤沢市長後＊',
              int: '3',
            },
            {
              code: '1420543',
              name: '藤沢市辻堂東海岸＊',
              int: '3',
            },
            {
              code: '1420700',
              name: '茅ヶ崎市茅ヶ崎',
              int: '3',
            },
            {
              code: '1420830',
              name: '逗子市桜山＊',
              int: '3',
            },
            {
              code: '1421020',
              name: '三浦市城山町＊',
              int: '3',
            },
            {
              code: '1421100',
              name: '秦野市曽屋',
              int: '3',
            },
            {
              code: '1421120',
              name: '秦野市平沢＊',
              int: '3',
            },
            {
              code: '1421332',
              name: '大和市下鶴間＊',
              int: '3',
            },
            {
              code: '1421432',
              name: '伊勢原市伊勢原＊',
              int: '3',
            },
            {
              code: '1421530',
              name: '海老名市大谷＊',
              int: '3',
            },
            {
              code: '1421631',
              name: '座間市相武台＊',
              int: '3',
            },
            {
              code: '1421731',
              name: '南足柄市関本＊',
              int: '3',
            },
            {
              code: '1434131',
              name: '大磯町月京＊',
              int: '3',
            },
            {
              code: '1436330',
              name: '松田町松田惣領＊',
              int: '3',
            },
            {
              code: '1436420',
              name: '山北町山北＊',
              int: '3',
            },
            {
              code: '1436631',
              name: '開成町延沢＊',
              int: '3',
            },
            {
              code: '1438230',
              name: '箱根町湯本＊',
              int: '3',
            },
            {
              code: '1438331',
              name: '真鶴町岩＊',
              int: '3',
            },
            {
              code: '1440131',
              name: '愛川町角田＊',
              int: '3',
            },
            {
              code: '1440230',
              name: '清川村煤ヶ谷＊',
              int: '3',
            },
            {
              code: '1510231',
              name: '新潟東区下木戸＊',
              int: '3',
            },
            {
              code: '1510800',
              name: '新潟西蒲区役所',
              int: '3',
            },
            {
              code: '1510820',
              name: '新潟西蒲区巻甲＊',
              int: '3',
            },
            {
              code: '1520221',
              name: '長岡市千手＊',
              int: '3',
            },
            {
              code: '1520231',
              name: '長岡市浦＊',
              int: '3',
            },
            {
              code: '1520232',
              name: '長岡市上岩井＊',
              int: '3',
            },
            {
              code: '1520234',
              name: '長岡市小国町法坂＊',
              int: '3',
            },
            {
              code: '1520241',
              name: '長岡市金町＊',
              int: '3',
            },
            {
              code: '1520242',
              name: '長岡市寺泊敦ケ曽根＊',
              int: '3',
            },
            {
              code: '1520244',
              name: '長岡市東川口＊',
              int: '3',
            },
            {
              code: '1520246',
              name: '長岡市与板町与板＊',
              int: '3',
            },
            {
              code: '1520431',
              name: '三条市西裏館＊',
              int: '3',
            },
            {
              code: '1520432',
              name: '三条市荻堀＊',
              int: '3',
            },
            {
              code: '1520534',
              name: '柏崎市西山町池浦＊',
              int: '3',
            },
            {
              code: '1520536',
              name: '柏崎市高柳町岡野町＊',
              int: '3',
            },
            {
              code: '1520620',
              name: '新発田市本町＊',
              int: '3',
            },
            {
              code: '1520631',
              name: '新発田市乙次＊',
              int: '3',
            },
            {
              code: '1520633',
              name: '新発田市住田＊',
              int: '3',
            },
            {
              code: '1520635',
              name: '新発田市中央町＊',
              int: '3',
            },
            {
              code: '1520636',
              name: '新発田市真野原外＊',
              int: '3',
            },
            {
              code: '1520800',
              name: '小千谷市城内',
              int: '3',
            },
            {
              code: '1520821',
              name: '小千谷市旭町＊',
              int: '3',
            },
            {
              code: '1521021',
              name: '十日町市下条＊',
              int: '3',
            },
            {
              code: '1521031',
              name: '十日町市千歳町＊',
              int: '3',
            },
            {
              code: '1521037',
              name: '十日町市上山＊',
              int: '3',
            },
            {
              code: '1521039',
              name: '十日町市松代＊',
              int: '3',
            },
            {
              code: '1521040',
              name: '十日町市水口沢＊',
              int: '3',
            },
            {
              code: '1521041',
              name: '十日町市松之山＊',
              int: '3',
            },
            {
              code: '1521200',
              name: '村上市塩町',
              int: '3',
            },
            {
              code: '1521221',
              name: '村上市寒川＊',
              int: '3',
            },
            {
              code: '1521231',
              name: '村上市三之町＊',
              int: '3',
            },
            {
              code: '1521232',
              name: '村上市山口＊',
              int: '3',
            },
            {
              code: '1521237',
              name: '村上市府屋＊',
              int: '3',
            },
            {
              code: '1521238',
              name: '村上市岩沢＊',
              int: '3',
            },
            {
              code: '1521336',
              name: '燕市秋葉町＊',
              int: '3',
            },
            {
              code: '1521338',
              name: '燕市吉田西太田＊',
              int: '3',
            },
            {
              code: '1521339',
              name: '燕市分水桜町＊',
              int: '3',
            },
            {
              code: '1521801',
              name: '五泉市村松乙',
              int: '3',
            },
            {
              code: '1521821',
              name: '五泉市愛宕甲＊',
              int: '3',
            },
            {
              code: '1522202',
              name: '上越市大手町',
              int: '3',
            },
            {
              code: '1522230',
              name: '上越市木田＊',
              int: '3',
            },
            {
              code: '1522235',
              name: '上越市柿崎区柿崎＊',
              int: '3',
            },
            {
              code: '1522237',
              name: '上越市頸城区百間町＊',
              int: '3',
            },
            {
              code: '1522245',
              name: '上越市板倉区針＊',
              int: '3',
            },
            {
              code: '1522333',
              name: '阿賀野市山崎＊',
              int: '3',
            },
            {
              code: '1522336',
              name: '阿賀野市かがやき＊',
              int: '3',
            },
            {
              code: '1522421',
              name: '佐渡市両津湊＊',
              int: '3',
            },
            {
              code: '1522430',
              name: '佐渡市千種＊',
              int: '3',
            },
            {
              code: '1522433',
              name: '佐渡市河原田本町＊',
              int: '3',
            },
            {
              code: '1522447',
              name: '佐渡市小木町＊',
              int: '3',
            },
            {
              code: '1522533',
              name: '魚沼市今泉＊',
              int: '3',
            },
            {
              code: '1522536',
              name: '魚沼市堀之内＊',
              int: '3',
            },
            {
              code: '1522537',
              name: '魚沼市須原＊',
              int: '3',
            },
            {
              code: '1522539',
              name: '魚沼市小出島＊',
              int: '3',
            },
            {
              code: '1522620',
              name: '南魚沼市塩沢小学校＊',
              int: '3',
            },
            {
              code: '1522630',
              name: '南魚沼市浦佐＊',
              int: '3',
            },
            {
              code: '1522631',
              name: '南魚沼市塩沢庁舎＊',
              int: '3',
            },
            {
              code: '1522700',
              name: '胎内市新和町',
              int: '3',
            },
            {
              code: '1522720',
              name: '胎内市大川町＊',
              int: '3',
            },
            {
              code: '1522731',
              name: '胎内市黒川＊',
              int: '3',
            },
            {
              code: '1530731',
              name: '聖籠町諏訪山＊',
              int: '3',
            },
            {
              code: '1534231',
              name: '弥彦村矢作＊',
              int: '3',
            },
            {
              code: '1536130',
              name: '田上町原ケ崎新田＊',
              int: '3',
            },
            {
              code: '1538532',
              name: '阿賀町豊川＊',
              int: '3',
            },
            {
              code: '1540500',
              name: '出雲崎町米田',
              int: '3',
            },
            {
              code: '1540530',
              name: '出雲崎町川西＊',
              int: '3',
            },
            {
              code: '1548231',
              name: '津南町下船渡＊',
              int: '3',
            },
            {
              code: '1558131',
              name: '関川村下関＊',
              int: '3',
            },
            {
              code: '1720520',
              name: '珠洲市正院町＊',
              int: '3',
            },
            {
              code: '1920100',
              name: '甲府市飯田',
              int: '3',
            },
            {
              code: '1920133',
              name: '甲府市古関町＊',
              int: '3',
            },
            {
              code: '1920221',
              name: '富士吉田市上吉田＊',
              int: '3',
            },
            {
              code: '1920531',
              name: '山梨市牧丘町窪平＊',
              int: '3',
            },
            {
              code: '1920533',
              name: '山梨市小原西＊',
              int: '3',
            },
            {
              code: '1920601',
              name: '大月市大月',
              int: '3',
            },
            {
              code: '1920621',
              name: '大月市御太刀＊',
              int: '3',
            },
            {
              code: '1920631',
              name: '大月市役所＊',
              int: '3',
            },
            {
              code: '1920730',
              name: '韮崎市水神＊',
              int: '3',
            },
            {
              code: '1920834',
              name: '南アルプス市鮎沢＊',
              int: '3',
            },
            {
              code: '1920835',
              name: '南アルプス市飯野＊',
              int: '3',
            },
            {
              code: '1920836',
              name: '南アルプス市小笠原＊',
              int: '3',
            },
            {
              code: '1920837',
              name: '南アルプス市榎原＊',
              int: '3',
            },
            {
              code: '1920920',
              name: '山梨北杜市健康ランド須玉＊',
              int: '3',
            },
            {
              code: '1920930',
              name: '山梨北杜市明野町＊',
              int: '3',
            },
            {
              code: '1920932',
              name: '山梨北杜市高根町＊',
              int: '3',
            },
            {
              code: '1920938',
              name: '山梨北杜市武川町＊',
              int: '3',
            },
            {
              code: '1920939',
              name: '山梨北杜市長坂町＊',
              int: '3',
            },
            {
              code: '1920940',
              name: '山梨北杜市白州町＊',
              int: '3',
            },
            {
              code: '1920941',
              name: '山梨北杜市役所＊',
              int: '3',
            },
            {
              code: '1920942',
              name: '山梨北杜市大泉町＊',
              int: '3',
            },
            {
              code: '1920943',
              name: '山梨北杜市小淵沢町＊',
              int: '3',
            },
            {
              code: '1921033',
              name: '甲斐市下今井＊',
              int: '3',
            },
            {
              code: '1921034',
              name: '甲斐市島上条＊',
              int: '3',
            },
            {
              code: '1921135',
              name: '笛吹市境川町藤垈＊',
              int: '3',
            },
            {
              code: '1921136',
              name: '笛吹市御坂町夏目原＊',
              int: '3',
            },
            {
              code: '1921139',
              name: '笛吹市八代町南＊',
              int: '3',
            },
            {
              code: '1921141',
              name: '笛吹市春日居町寺本＊',
              int: '3',
            },
            {
              code: '1921233',
              name: '上野原市役所＊',
              int: '3',
            },
            {
              code: '1921300',
              name: '甲州市塩山下於曽',
              int: '3',
            },
            {
              code: '1921332',
              name: '甲州市大和町初鹿野＊',
              int: '3',
            },
            {
              code: '1921333',
              name: '甲州市役所＊',
              int: '3',
            },
            {
              code: '1921430',
              name: '中央市大鳥居＊',
              int: '3',
            },
            {
              code: '1921432',
              name: '中央市臼井阿原＊',
              int: '3',
            },
            {
              code: '1934631',
              name: '市川三郷町役場＊',
              int: '3',
            },
            {
              code: '1936500',
              name: '身延町大磯小磯',
              int: '3',
            },
            {
              code: '1936532',
              name: '身延町役場＊',
              int: '3',
            },
            {
              code: '1936830',
              name: '富士川町天神中条＊',
              int: '3',
            },
            {
              code: '1938430',
              name: '昭和町押越＊',
              int: '3',
            },
            {
              code: '1942331',
              name: '西桂町小沼＊',
              int: '3',
            },
            {
              code: '1942531',
              name: '山中湖村山中＊',
              int: '3',
            },
            {
              code: '1942932',
              name: '鳴沢村役場＊',
              int: '3',
            },
            {
              code: '1943002',
              name: '富士河口湖町船津',
              int: '3',
            },
            {
              code: '1943021',
              name: '富士河口湖町本栖＊',
              int: '3',
            },
            {
              code: '1943034',
              name: '富士河口湖町勝山＊',
              int: '3',
            },
            {
              code: '1943037',
              name: '富士河口湖町長浜＊',
              int: '3',
            },
            {
              code: '2020301',
              name: '上田市築地',
              int: '3',
            },
            {
              code: '2020502',
              name: '飯田市高羽町',
              int: '3',
            },
            {
              code: '2020520',
              name: '飯田市上郷黒田＊',
              int: '3',
            },
            {
              code: '2020533',
              name: '飯田市大久保町＊',
              int: '3',
            },
            {
              code: '2020600',
              name: '諏訪市湖岸通り',
              int: '3',
            },
            {
              code: '2020630',
              name: '諏訪市高島＊',
              int: '3',
            },
            {
              code: '2020831',
              name: '小諸市文化センター＊',
              int: '3',
            },
            {
              code: '2021431',
              name: '茅野市葛井公園＊',
              int: '3',
            },
            {
              code: '2021733',
              name: '佐久市中込＊',
              int: '3',
            },
            {
              code: '2021734',
              name: '佐久市甲＊',
              int: '3',
            },
            {
              code: '2021736',
              name: '佐久市臼田＊',
              int: '3',
            },
            {
              code: '2030430',
              name: '長野川上村大深山＊',
              int: '3',
            },
            {
              code: '2030530',
              name: '長野南牧村海ノ口＊',
              int: '3',
            },
            {
              code: '2030931',
              name: '佐久穂町畑＊',
              int: '3',
            },
            {
              code: '2032101',
              name: '軽井沢町追分',
              int: '3',
            },
            {
              code: '2032130',
              name: '軽井沢町長倉＊',
              int: '3',
            },
            {
              code: '2032331',
              name: '御代田町役場＊',
              int: '3',
            },
            {
              code: '2036230',
              name: '富士見町落合＊',
              int: '3',
            },
            {
              code: '2036330',
              name: '原村役場＊',
              int: '3',
            },
            {
              code: '2038401',
              name: '飯島町飯島',
              int: '3',
            },
            {
              code: '2043232',
              name: '木曽町開田高原西野＊',
              int: '3',
            },
            {
              code: '2060230',
              name: '栄村北信＊',
              int: '3',
            },
            {
              code: '2210300',
              name: '静岡清水区千歳町',
              int: '3',
            },
            {
              code: '2220333',
              name: '沼津市高島本町＊',
              int: '3',
            },
            {
              code: '2220601',
              name: '三島市東本町',
              int: '3',
            },
            {
              code: '2220630',
              name: '三島市大社町＊',
              int: '3',
            },
            {
              code: '2220701',
              name: '富士宮市弓沢町',
              int: '3',
            },
            {
              code: '2220721',
              name: '富士宮市野中＊',
              int: '3',
            },
            {
              code: '2220730',
              name: '富士宮市猪之頭＊',
              int: '3',
            },
            {
              code: '2221521',
              name: '御殿場市茱萸沢＊',
              int: '3',
            },
            {
              code: '2222200',
              name: '伊豆市中伊豆グラウンド',
              int: '3',
            },
            {
              code: '2222430',
              name: '静岡菊川市赤土＊',
              int: '3',
            },
            {
              code: '2222533',
              name: '伊豆の国市長岡＊',
              int: '3',
            },
            {
              code: '2230120',
              name: '東伊豆町奈良本＊',
              int: '3',
            },
            {
              code: '2230230',
              name: '河津町田中＊',
              int: '3',
            },
            {
              code: '2230520',
              name: '松崎町江奈＊',
              int: '3',
            },
            {
              code: '2230531',
              name: '松崎町宮内＊',
              int: '3',
            },
            {
              code: '2230630',
              name: '西伊豆町仁科＊',
              int: '3',
            },
            {
              code: '2230632',
              name: '西伊豆町宇久須＊',
              int: '3',
            },
            {
              code: '2232531',
              name: '函南町平井＊',
              int: '3',
            },
            {
              code: '2234130',
              name: '静岡清水町堂庭＊',
              int: '3',
            },
            {
              code: '2234230',
              name: '長泉町中土狩＊',
              int: '3',
            },
            {
              code: '2234430',
              name: '小山町藤曲＊',
              int: '3',
            },
            {
              code: '2311141',
              name: '名古屋港区春田野＊',
              int: '3',
            },
            {
              code: '2342730',
              name: '飛島村竹之郷＊',
              int: '3',
            },
            {
              code: '0110220',
              name: '札幌北区太平＊',
              int: '2',
            },
            {
              code: '0110240',
              name: '札幌北区篠路＊',
              int: '2',
            },
            {
              code: '0110241',
              name: '札幌北区新琴似＊',
              int: '2',
            },
            {
              code: '0110341',
              name: '札幌東区元町＊',
              int: '2',
            },
            {
              code: '0110441',
              name: '札幌白石区北郷＊',
              int: '2',
            },
            {
              code: '0110840',
              name: '札幌厚別区もみじ台＊',
              int: '2',
            },
            {
              code: '0110940',
              name: '札幌手稲区前田＊',
              int: '2',
            },
            {
              code: '0111040',
              name: '札幌清田区平岡＊',
              int: '2',
            },
            {
              code: '0120202',
              name: '函館市美原',
              int: '2',
            },
            {
              code: '0120221',
              name: '函館市泊町＊',
              int: '2',
            },
            {
              code: '0120223',
              name: '函館市川汲町＊',
              int: '2',
            },
            {
              code: '0120520',
              name: '室蘭市寿町＊',
              int: '2',
            },
            {
              code: '0120601',
              name: '釧路市幸町',
              int: '2',
            },
            {
              code: '0120602',
              name: '釧路市音別町尺別',
              int: '2',
            },
            {
              code: '0120620',
              name: '釧路市黒金町＊',
              int: '2',
            },
            {
              code: '0120621',
              name: '釧路市阿寒町中央＊',
              int: '2',
            },
            {
              code: '0120820',
              name: '北見市南仲町＊',
              int: '2',
            },
            {
              code: '0121000',
              name: '岩見沢市５条',
              int: '2',
            },
            {
              code: '0121020',
              name: '岩見沢市鳩が丘＊',
              int: '2',
            },
            {
              code: '0121032',
              name: '岩見沢市北村赤川＊',
              int: '2',
            },
            {
              code: '0121034',
              name: '岩見沢市栗沢町東本町＊',
              int: '2',
            },
            {
              code: '0121301',
              name: '苫小牧市末広町',
              int: '2',
            },
            {
              code: '0121320',
              name: '苫小牧市旭町＊',
              int: '2',
            },
            {
              code: '0121501',
              name: '美唄市西５条',
              int: '2',
            },
            {
              code: '0121520',
              name: '美唄市西３条＊',
              int: '2',
            },
            {
              code: '0121600',
              name: '芦別市旭町',
              int: '2',
            },
            {
              code: '0121700',
              name: '江別市高砂町',
              int: '2',
            },
            {
              code: '0121720',
              name: '江別市緑町＊',
              int: '2',
            },
            {
              code: '0122231',
              name: '三笠市幸町＊',
              int: '2',
            },
            {
              code: '0122320',
              name: '根室市牧の内＊',
              int: '2',
            },
            {
              code: '0122321',
              name: '根室市厚床＊',
              int: '2',
            },
            {
              code: '0122322',
              name: '根室市落石東＊',
              int: '2',
            },
            {
              code: '0122323',
              name: '根室市珸瑶瑁＊',
              int: '2',
            },
            {
              code: '0122400',
              name: '千歳市北栄',
              int: '2',
            },
            {
              code: '0122401',
              name: '新千歳空港',
              int: '2',
            },
            {
              code: '0122420',
              name: '千歳市若草＊',
              int: '2',
            },
            {
              code: '0122500',
              name: '滝川市大町',
              int: '2',
            },
            {
              code: '0122520',
              name: '滝川市新町＊',
              int: '2',
            },
            {
              code: '0122900',
              name: '富良野市若松町',
              int: '2',
            },
            {
              code: '0122920',
              name: '富良野市末広町＊',
              int: '2',
            },
            {
              code: '0123100',
              name: '恵庭市漁平',
              int: '2',
            },
            {
              code: '0123130',
              name: '恵庭市京町＊',
              int: '2',
            },
            {
              code: '0123300',
              name: '胆振伊達市梅本',
              int: '2',
            },
            {
              code: '0123320',
              name: '胆振伊達市末永町＊',
              int: '2',
            },
            {
              code: '0123420',
              name: '北広島市共栄＊',
              int: '2',
            },
            {
              code: '0123500',
              name: '石狩市花川',
              int: '2',
            },
            {
              code: '0123522',
              name: '石狩市花畔＊',
              int: '2',
            },
            {
              code: '0123633',
              name: '渡島北斗市本町＊',
              int: '2',
            },
            {
              code: '0130320',
              name: '当別町白樺＊',
              int: '2',
            },
            {
              code: '0133220',
              name: '福島町福島＊',
              int: '2',
            },
            {
              code: '0133701',
              name: '七飯町桜町',
              int: '2',
            },
            {
              code: '0133720',
              name: '七飯町本町＊',
              int: '2',
            },
            {
              code: '0134320',
              name: '鹿部町宮浜＊',
              int: '2',
            },
            {
              code: '0134503',
              name: '渡島森町御幸町',
              int: '2',
            },
            {
              code: '0134520',
              name: '渡島森町上台町＊',
              int: '2',
            },
            {
              code: '0134531',
              name: '渡島森町砂原＊',
              int: '2',
            },
            {
              code: '0134620',
              name: '八雲町住初町＊',
              int: '2',
            },
            {
              code: '0134720',
              name: '長万部町平里＊',
              int: '2',
            },
            {
              code: '0136100',
              name: '檜山江差町姥神',
              int: '2',
            },
            {
              code: '0136120',
              name: '檜山江差町中歌町＊',
              int: '2',
            },
            {
              code: '0136320',
              name: '厚沢部町木間内＊',
              int: '2',
            },
            {
              code: '0136331',
              name: '厚沢部町新町＊',
              int: '2',
            },
            {
              code: '0136431',
              name: '乙部町緑町＊',
              int: '2',
            },
            {
              code: '0137131',
              name: 'せたな町北檜山区徳島＊',
              int: '2',
            },
            {
              code: '0139520',
              name: 'ニセコ町中央通＊',
              int: '2',
            },
            {
              code: '0139632',
              name: '真狩村真狩＊',
              int: '2',
            },
            {
              code: '0139731',
              name: '留寿都村留寿都＊',
              int: '2',
            },
            {
              code: '0140000',
              name: '倶知安町南１条',
              int: '2',
            },
            {
              code: '0140020',
              name: '倶知安町北４条＊',
              int: '2',
            },
            {
              code: '0140920',
              name: '赤井川村赤井川＊',
              int: '2',
            },
            {
              code: '0142720',
              name: '由仁町新光＊',
              int: '2',
            },
            {
              code: '0142931',
              name: '栗山町松風＊',
              int: '2',
            },
            {
              code: '0143020',
              name: '月形町円山公園＊',
              int: '2',
            },
            {
              code: '0143232',
              name: '新十津川町中央＊',
              int: '2',
            },
            {
              code: '0143331',
              name: '妹背牛町妹背牛＊',
              int: '2',
            },
            {
              code: '0143431',
              name: '秩父別町役場＊',
              int: '2',
            },
            {
              code: '0143731',
              name: '北竜町和＊',
              int: '2',
            },
            {
              code: '0143820',
              name: '沼田町沼田＊',
              int: '2',
            },
            {
              code: '0145431',
              name: '当麻町３条＊',
              int: '2',
            },
            {
              code: '0145921',
              name: '美瑛町忠別＊',
              int: '2',
            },
            {
              code: '0146000',
              name: '上富良野町大町',
              int: '2',
            },
            {
              code: '0146131',
              name: '中富良野町本町＊',
              int: '2',
            },
            {
              code: '0146320',
              name: '占冠村中央＊',
              int: '2',
            },
            {
              code: '0148120',
              name: '増毛町見晴町＊',
              int: '2',
            },
            {
              code: '0151121',
              name: '猿払村浅茅野＊',
              int: '2',
            },
            {
              code: '0154301',
              name: '美幌町東３条',
              int: '2',
            },
            {
              code: '0154631',
              name: '清里町羽衣町＊',
              int: '2',
            },
            {
              code: '0154720',
              name: '小清水町小清水＊',
              int: '2',
            },
            {
              code: '0154931',
              name: '訓子府町東町＊',
              int: '2',
            },
            {
              code: '0155920',
              name: '湧別町栄町＊',
              int: '2',
            },
            {
              code: '0156432',
              name: '大空町東藻琴＊',
              int: '2',
            },
            {
              code: '0156433',
              name: '大空町女満別西３条＊',
              int: '2',
            },
            {
              code: '0157520',
              name: '壮瞥町滝之町＊',
              int: '2',
            },
            {
              code: '0157800',
              name: '白老町大町',
              int: '2',
            },
            {
              code: '0157820',
              name: '白老町緑丘＊',
              int: '2',
            },
            {
              code: '0158100',
              name: '厚真町鹿沼',
              int: '2',
            },
            {
              code: '0158131',
              name: '厚真町京町＊',
              int: '2',
            },
            {
              code: '0158432',
              name: '洞爺湖町栄町＊',
              int: '2',
            },
            {
              code: '0158433',
              name: '洞爺湖町洞爺町＊',
              int: '2',
            },
            {
              code: '0158520',
              name: '安平町早来北進＊',
              int: '2',
            },
            {
              code: '0158521',
              name: '安平町追分柏が丘＊',
              int: '2',
            },
            {
              code: '0158621',
              name: 'むかわ町穂別＊',
              int: '2',
            },
            {
              code: '0160120',
              name: '日高地方日高町日高＊',
              int: '2',
            },
            {
              code: '0160121',
              name: '日高地方日高町門別＊',
              int: '2',
            },
            {
              code: '0160220',
              name: '平取町本町＊',
              int: '2',
            },
            {
              code: '0160221',
              name: '平取町振内＊',
              int: '2',
            },
            {
              code: '0160701',
              name: '浦河町野深',
              int: '2',
            },
            {
              code: '0160702',
              name: '浦河町潮見',
              int: '2',
            },
            {
              code: '0160720',
              name: '浦河町築地＊',
              int: '2',
            },
            {
              code: '0160820',
              name: '様似町栄町＊',
              int: '2',
            },
            {
              code: '0160922',
              name: 'えりも町えりも岬＊',
              int: '2',
            },
            {
              code: '0161001',
              name: '新ひだか町静内山手町',
              int: '2',
            },
            {
              code: '0161002',
              name: '新ひだか町静内御園',
              int: '2',
            },
            {
              code: '0161020',
              name: '新ひだか町静内御幸町＊',
              int: '2',
            },
            {
              code: '0161021',
              name: '新ひだか町三石旭町＊',
              int: '2',
            },
            {
              code: '0161022',
              name: '新ひだか町静内農屋＊',
              int: '2',
            },
            {
              code: '0163220',
              name: '士幌町士幌＊',
              int: '2',
            },
            {
              code: '0163320',
              name: '上士幌町清水谷＊',
              int: '2',
            },
            {
              code: '0163331',
              name: '上士幌町上士幌＊',
              int: '2',
            },
            {
              code: '0163431',
              name: '鹿追町東町＊',
              int: '2',
            },
            {
              code: '0163520',
              name: '新得町２条＊',
              int: '2',
            },
            {
              code: '0163600',
              name: '十勝清水町南４条',
              int: '2',
            },
            {
              code: '0163820',
              name: '中札内村東２条＊',
              int: '2',
            },
            {
              code: '0164121',
              name: '十勝大樹町生花＊',
              int: '2',
            },
            {
              code: '0164200',
              name: '広尾町並木通',
              int: '2',
            },
            {
              code: '0164333',
              name: '幕別町忠類錦町＊',
              int: '2',
            },
            {
              code: '0164334',
              name: '幕別町本町＊',
              int: '2',
            },
            {
              code: '0164420',
              name: '十勝池田町西１条＊',
              int: '2',
            },
            {
              code: '0164531',
              name: '豊頃町茂岩本町＊',
              int: '2',
            },
            {
              code: '0164600',
              name: '本別町北２丁目',
              int: '2',
            },
            {
              code: '0164620',
              name: '本別町向陽町＊',
              int: '2',
            },
            {
              code: '0164700',
              name: '足寄町上螺湾',
              int: '2',
            },
            {
              code: '0164720',
              name: '足寄町南１条＊',
              int: '2',
            },
            {
              code: '0166131',
              name: '釧路町別保＊',
              int: '2',
            },
            {
              code: '0166220',
              name: '厚岸町真栄＊',
              int: '2',
            },
            {
              code: '0166420',
              name: '標茶町川上＊',
              int: '2',
            },
            {
              code: '0166421',
              name: '標茶町塘路＊',
              int: '2',
            },
            {
              code: '0166501',
              name: '弟子屈町美里',
              int: '2',
            },
            {
              code: '0166520',
              name: '弟子屈町弟子屈＊',
              int: '2',
            },
            {
              code: '0166720',
              name: '鶴居村鶴居東＊',
              int: '2',
            },
            {
              code: '0166820',
              name: '白糠町西１条＊',
              int: '2',
            },
            {
              code: '0169100',
              name: '別海町常盤',
              int: '2',
            },
            {
              code: '0169120',
              name: '別海町西春別＊',
              int: '2',
            },
            {
              code: '0169122',
              name: '別海町本別海＊',
              int: '2',
            },
            {
              code: '0169220',
              name: '中標津町丸山＊',
              int: '2',
            },
            {
              code: '0169320',
              name: '標津町北２条＊',
              int: '2',
            },
            {
              code: '0169420',
              name: '羅臼町緑町＊',
              int: '2',
            },
            {
              code: '0220200',
              name: '弘前市和田町',
              int: '2',
            },
            {
              code: '0220201',
              name: '弘前市弥生',
              int: '2',
            },
            {
              code: '0220501',
              name: '五所川原市太田',
              int: '2',
            },
            {
              code: '0220532',
              name: '五所川原市金木町＊',
              int: '2',
            },
            {
              code: '0220533',
              name: '五所川原市相内＊',
              int: '2',
            },
            {
              code: '0220801',
              name: 'むつ市大畑町奥薬研',
              int: '2',
            },
            {
              code: '0220832',
              name: 'むつ市脇野沢＊',
              int: '2',
            },
            {
              code: '0220936',
              name: 'つがる市森田町＊',
              int: '2',
            },
            {
              code: '0221033',
              name: '平川市碇ヶ関＊',
              int: '2',
            },
            {
              code: '0230120',
              name: '平内町東田沢＊',
              int: '2',
            },
            {
              code: '0230330',
              name: '今別町今別＊',
              int: '2',
            },
            {
              code: '0230733',
              name: '外ヶ浜町平舘＊',
              int: '2',
            },
            {
              code: '0230734',
              name: '外ヶ浜町三厩＊',
              int: '2',
            },
            {
              code: '0232100',
              name: '鰺ヶ沢町本町',
              int: '2',
            },
            {
              code: '0232120',
              name: '鰺ヶ沢町舞戸町＊',
              int: '2',
            },
            {
              code: '0232301',
              name: '深浦町長慶平',
              int: '2',
            },
            {
              code: '0232302',
              name: '深浦町深浦岡町',
              int: '2',
            },
            {
              code: '0232320',
              name: '深浦町深浦中沢＊',
              int: '2',
            },
            {
              code: '0232331',
              name: '深浦町岩崎＊',
              int: '2',
            },
            {
              code: '0236230',
              name: '大鰐町大鰐＊',
              int: '2',
            },
            {
              code: '0238733',
              name: '中泊町小泊＊',
              int: '2',
            },
            {
              code: '0238734',
              name: '中泊町中里＊',
              int: '2',
            },
            {
              code: '0240200',
              name: '七戸町北天間舘',
              int: '2',
            },
            {
              code: '0241101',
              name: '六ヶ所村出戸',
              int: '2',
            },
            {
              code: '0242420',
              name: '東通村尻屋＊',
              int: '2',
            },
            {
              code: '0242422',
              name: '東通村白糠＊',
              int: '2',
            },
            {
              code: '0242530',
              name: '風間浦村易国間＊',
              int: '2',
            },
            {
              code: '0242620',
              name: '佐井村長後＊',
              int: '2',
            },
            {
              code: '0242630',
              name: '佐井村佐井＊',
              int: '2',
            },
            {
              code: '0520433',
              name: '大館市早口＊',
              int: '2',
            },
            {
              code: '0520601',
              name: '男鹿市男鹿中',
              int: '2',
            },
            {
              code: '0520632',
              name: '男鹿市船川＊',
              int: '2',
            },
            {
              code: '0521131',
              name: '潟上市飯田川下虻川＊',
              int: '2',
            },
            {
              code: '0530320',
              name: '小坂町小坂砂森＊',
              int: '2',
            },
            {
              code: '0534820',
              name: '三種町ことおか中央公園＊',
              int: '2',
            },
            {
              code: '0534920',
              name: '八峰町八森木戸の沢＊',
              int: '2',
            },
            {
              code: '0534932',
              name: '八峰町峰浜目名潟＊',
              int: '2',
            },
            {
              code: '0536831',
              name: '大潟村中央＊',
              int: '2',
            },
            {
              code: '0620320',
              name: '鶴岡市温海＊',
              int: '2',
            },
            {
              code: '0620401',
              name: '酒田市飛島',
              int: '2',
            },
            {
              code: '0736420',
              name: '檜枝岐村上河原＊',
              int: '2',
            },
            {
              code: '0736432',
              name: '檜枝岐村下ノ原＊',
              int: '2',
            },
            {
              code: '0736833',
              name: '南会津町松戸原＊',
              int: '2',
            },
            {
              code: '1020602',
              name: '沼田市尾瀬高等学校',
              int: '2',
            },
            {
              code: '1036631',
              name: '群馬上野村川和＊',
              int: '2',
            },
            {
              code: '1038220',
              name: '下仁田町下小坂＊',
              int: '2',
            },
            {
              code: '1038330',
              name: '群馬南牧村大日向＊',
              int: '2',
            },
            {
              code: '1042130',
              name: '中之条町中之条町＊',
              int: '2',
            },
            {
              code: '1042132',
              name: '中之条町入山＊',
              int: '2',
            },
            {
              code: '1042431',
              name: '長野原町長野原＊',
              int: '2',
            },
            {
              code: '1042530',
              name: '嬬恋村大前＊',
              int: '2',
            },
            {
              code: '1042901',
              name: '東吾妻町原町',
              int: '2',
            },
            {
              code: '1044320',
              name: '片品村鎌田＊',
              int: '2',
            },
            {
              code: '1044431',
              name: '川場村谷地＊',
              int: '2',
            },
            {
              code: '1044920',
              name: 'みなかみ町鹿野沢＊',
              int: '2',
            },
            {
              code: '1044930',
              name: 'みなかみ町後閑＊',
              int: '2',
            },
            {
              code: '1044931',
              name: 'みなかみ町布施＊',
              int: '2',
            },
            {
              code: '1120721',
              name: '秩父市中津川＊',
              int: '2',
            },
            {
              code: '1120735',
              name: '秩父市大滝＊',
              int: '2',
            },
            {
              code: '1120901',
              name: '飯能市下直竹',
              int: '2',
            },
            {
              code: '1120920',
              name: '飯能市征矢町＊',
              int: '2',
            },
            {
              code: '1136500',
              name: '小鹿野町両神薄',
              int: '2',
            },
            {
              code: '1140830',
              name: '寄居町寄居＊',
              int: '2',
            },
            {
              code: '1221800',
              name: '勝浦市墨名',
              int: '2',
            },
            {
              code: '1221820',
              name: '勝浦市新官＊',
              int: '2',
            },
            {
              code: '1222301',
              name: '鴨川市内浦',
              int: '2',
            },
            {
              code: '1222330',
              name: '鴨川市天津＊',
              int: '2',
            },
            {
              code: '1223433',
              name: '南房総市白浜町白浜＊',
              int: '2',
            },
            {
              code: '1223438',
              name: '南房総市久枝＊',
              int: '2',
            },
            {
              code: '1223439',
              name: '南房総市和田町＊',
              int: '2',
            },
            {
              code: '1223441',
              name: '南房総市千倉町瀬戸＊',
              int: '2',
            },
            {
              code: '1244330',
              name: '御宿町須賀＊',
              int: '2',
            },
            {
              code: '1320500',
              name: '青梅市東青梅',
              int: '2',
            },
            {
              code: '1321851',
              name: '福生市熊川＊',
              int: '2',
            },
            {
              code: '1330540',
              name: '日の出町平井＊',
              int: '2',
            },
            {
              code: '1330721',
              name: '檜原村本宿＊',
              int: '2',
            },
            {
              code: '1330740',
              name: '檜原村役場＊',
              int: '2',
            },
            {
              code: '1330852',
              name: '奥多摩町氷川＊',
              int: '2',
            },
            {
              code: '1336103',
              name: '伊豆大島町差木地',
              int: '2',
            },
            {
              code: '1336104',
              name: '伊豆大島町元町',
              int: '2',
            },
            {
              code: '1336121',
              name: '伊豆大島町波浮港＊',
              int: '2',
            },
            {
              code: '1336200',
              name: '東京利島村東山',
              int: '2',
            },
            {
              code: '1336300',
              name: '新島村大原',
              int: '2',
            },
            {
              code: '1336330',
              name: '新島村本村＊',
              int: '2',
            },
            {
              code: '1336401',
              name: '神津島村金長',
              int: '2',
            },
            {
              code: '1336431',
              name: '神津島村役場＊',
              int: '2',
            },
            {
              code: '1338103',
              name: '三宅村神着',
              int: '2',
            },
            {
              code: '1338104',
              name: '三宅村坪田',
              int: '2',
            },
            {
              code: '1338120',
              name: '三宅村阿古＊',
              int: '2',
            },
            {
              code: '1338200',
              name: '御蔵島村西川',
              int: '2',
            },
            {
              code: '1340104',
              name: '八丈町三根',
              int: '2',
            },
            {
              code: '1340121',
              name: '八丈町富士グランド＊',
              int: '2',
            },
            {
              code: '1340200',
              name: '青ヶ島村',
              int: '2',
            },
            {
              code: '1415100',
              name: '相模原緑区若柳',
              int: '2',
            },
            {
              code: '1415121',
              name: '相模原緑区小渕＊',
              int: '2',
            },
            {
              code: '1415131',
              name: '相模原緑区与瀬＊',
              int: '2',
            },
            {
              code: '1420120',
              name: '横須賀市坂本町＊',
              int: '2',
            },
            {
              code: '1420600',
              name: '小田原市久野',
              int: '2',
            },
            {
              code: '1430130',
              name: '葉山町堀内＊',
              int: '2',
            },
            {
              code: '1520200',
              name: '長岡市幸町',
              int: '2',
            },
            {
              code: '1520220',
              name: '長岡市寺泊一里塚＊',
              int: '2',
            },
            {
              code: '1520243',
              name: '長岡市寺泊烏帽子平＊',
              int: '2',
            },
            {
              code: '1521600',
              name: '糸魚川市一の宮',
              int: '2',
            },
            {
              code: '1521620',
              name: '糸魚川市大野＊',
              int: '2',
            },
            {
              code: '1521633',
              name: '糸魚川市能生＊',
              int: '2',
            },
            {
              code: '1521720',
              name: '妙高市田町＊',
              int: '2',
            },
            {
              code: '1521733',
              name: '妙高市栄町＊',
              int: '2',
            },
            {
              code: '1521734',
              name: '妙高市関山＊',
              int: '2',
            },
            {
              code: '1521735',
              name: '妙高市田口＊',
              int: '2',
            },
            {
              code: '1522201',
              name: '上越市中ノ俣',
              int: '2',
            },
            {
              code: '1522231',
              name: '上越市安塚区安塚＊',
              int: '2',
            },
            {
              code: '1522232',
              name: '上越市浦川原区釜淵＊',
              int: '2',
            },
            {
              code: '1522234',
              name: '上越市牧区柳島＊',
              int: '2',
            },
            {
              code: '1522236',
              name: '上越市大潟区土底浜＊',
              int: '2',
            },
            {
              code: '1522239',
              name: '上越市中郷区藤沢＊',
              int: '2',
            },
            {
              code: '1522241',
              name: '上越市清里区荒牧＊',
              int: '2',
            },
            {
              code: '1522244',
              name: '上越市大島区岡＊',
              int: '2',
            },
            {
              code: '1522246',
              name: '上越市名立区名立大町＊',
              int: '2',
            },
            {
              code: '1522300',
              name: '阿賀野市畑江',
              int: '2',
            },
            {
              code: '1522402',
              name: '佐渡市相川三町目',
              int: '2',
            },
            {
              code: '1522420',
              name: '佐渡市岩谷口＊',
              int: '2',
            },
            {
              code: '1522435',
              name: '佐渡市畑野＊',
              int: '2',
            },
            {
              code: '1522438',
              name: '佐渡市羽茂本郷＊',
              int: '2',
            },
            {
              code: '1522440',
              name: '佐渡市真野新町＊',
              int: '2',
            },
            {
              code: '1522441',
              name: '佐渡市赤泊＊',
              int: '2',
            },
            {
              code: '1522445',
              name: '佐渡市両津支所＊',
              int: '2',
            },
            {
              code: '1522446',
              name: '佐渡市新穂瓜生屋＊',
              int: '2',
            },
            {
              code: '1522501',
              name: '魚沼市下折立',
              int: '2',
            },
            {
              code: '1522532',
              name: '魚沼市大沢＊',
              int: '2',
            },
            {
              code: '1522538',
              name: '魚沼市穴沢＊',
              int: '2',
            },
            {
              code: '1546130',
              name: '湯沢町神立＊',
              int: '2',
            },
            {
              code: '1558600',
              name: '粟島浦村笹畑',
              int: '2',
            },
            {
              code: '1558631',
              name: '粟島浦村日ノ見山＊',
              int: '2',
            },
            {
              code: '1620130',
              name: '富山市新桜町＊',
              int: '2',
            },
            {
              code: '1620531',
              name: '氷見市加納＊',
              int: '2',
            },
            {
              code: '1620630',
              name: '滑川市寺家町＊',
              int: '2',
            },
            {
              code: '1621134',
              name: '射水市小島＊',
              int: '2',
            },
            {
              code: '1621135',
              name: '射水市本町＊',
              int: '2',
            },
            {
              code: '1621136',
              name: '射水市橋下条＊',
              int: '2',
            },
            {
              code: '1621138',
              name: '射水市加茂中部＊',
              int: '2',
            },
            {
              code: '1632130',
              name: '舟橋村仏生寺＊',
              int: '2',
            },
            {
              code: '1632230',
              name: '上市町稗田＊',
              int: '2',
            },
            {
              code: '1720220',
              name: '七尾市袖ヶ江町＊',
              int: '2',
            },
            {
              code: '1720402',
              name: '輪島市鳳至町',
              int: '2',
            },
            {
              code: '1720431',
              name: '輪島市門前町走出＊',
              int: '2',
            },
            {
              code: '1720720',
              name: '羽咋市旭町＊',
              int: '2',
            },
            {
              code: '1740733',
              name: '中能登町末坂＊',
              int: '2',
            },
            {
              code: '1746301',
              name: '能登町宇出津',
              int: '2',
            },
            {
              code: '1820200',
              name: '敦賀市松栄町',
              int: '2',
            },
            {
              code: '1820230',
              name: '敦賀市中央＊',
              int: '2',
            },
            {
              code: '1850132',
              name: '福井若狭町中央＊',
              int: '2',
            },
            {
              code: '1920232',
              name: '富士吉田市下吉田＊',
              int: '2',
            },
            {
              code: '1920431',
              name: '都留市上谷＊',
              int: '2',
            },
            {
              code: '1920534',
              name: '山梨市三富川浦＊',
              int: '2',
            },
            {
              code: '1920820',
              name: '南アルプス市芦安芦倉＊',
              int: '2',
            },
            {
              code: '1921137',
              name: '笛吹市芦川町中芦川＊',
              int: '2',
            },
            {
              code: '1921202',
              name: '上野原市四方津',
              int: '2',
            },
            {
              code: '1921232',
              name: '上野原市秋山＊',
              int: '2',
            },
            {
              code: '1934630',
              name: '市川三郷町上野＊',
              int: '2',
            },
            {
              code: '1936420',
              name: '早川町保＊',
              int: '2',
            },
            {
              code: '1936431',
              name: '早川町薬袋＊',
              int: '2',
            },
            {
              code: '1936530',
              name: '身延町梅平＊',
              int: '2',
            },
            {
              code: '1936533',
              name: '身延町常葉＊',
              int: '2',
            },
            {
              code: '1936620',
              name: '山梨南部町栄小学校＊',
              int: '2',
            },
            {
              code: '1936630',
              name: '山梨南部町内船＊',
              int: '2',
            },
            {
              code: '1936631',
              name: '山梨南部町福士＊',
              int: '2',
            },
            {
              code: '1942231',
              name: '道志村役場＊',
              int: '2',
            },
            {
              code: '1944321',
              name: '丹波山村丹波＊',
              int: '2',
            },
            {
              code: '2020100',
              name: '長野市箱清水',
              int: '2',
            },
            {
              code: '2020120',
              name: '長野市鶴賀緑町＊',
              int: '2',
            },
            {
              code: '2020130',
              name: '長野市戸隠＊',
              int: '2',
            },
            {
              code: '2020135',
              name: '長野市大岡＊',
              int: '2',
            },
            {
              code: '2020136',
              name: '長野市中条＊',
              int: '2',
            },
            {
              code: '2020201',
              name: '松本市沢村',
              int: '2',
            },
            {
              code: '2020220',
              name: '松本市美須々＊',
              int: '2',
            },
            {
              code: '2020234',
              name: '松本市丸の内＊',
              int: '2',
            },
            {
              code: '2020235',
              name: '松本市波田＊',
              int: '2',
            },
            {
              code: '2020240',
              name: '松本市寿＊',
              int: '2',
            },
            {
              code: '2020321',
              name: '上田市大手＊',
              int: '2',
            },
            {
              code: '2020331',
              name: '上田市上武石＊',
              int: '2',
            },
            {
              code: '2020332',
              name: '上田市真田町長＊',
              int: '2',
            },
            {
              code: '2020431',
              name: '岡谷市幸町＊',
              int: '2',
            },
            {
              code: '2020531',
              name: '飯田市南信濃＊',
              int: '2',
            },
            {
              code: '2020730',
              name: '須坂市須坂＊',
              int: '2',
            },
            {
              code: '2020820',
              name: '小諸市小諸消防署＊',
              int: '2',
            },
            {
              code: '2020900',
              name: '伊那市高遠町荊口',
              int: '2',
            },
            {
              code: '2020920',
              name: '伊那市下新田＊',
              int: '2',
            },
            {
              code: '2020930',
              name: '伊那市高遠町西高遠＊',
              int: '2',
            },
            {
              code: '2020931',
              name: '伊那市長谷溝口＊',
              int: '2',
            },
            {
              code: '2021020',
              name: '駒ヶ根市赤須町＊',
              int: '2',
            },
            {
              code: '2021131',
              name: '中野市豊津＊',
              int: '2',
            },
            {
              code: '2021132',
              name: '中野市三好町＊',
              int: '2',
            },
            {
              code: '2021230',
              name: '大町市八坂＊',
              int: '2',
            },
            {
              code: '2021320',
              name: '飯山市飯山福寿町＊',
              int: '2',
            },
            {
              code: '2021520',
              name: '塩尻市楢川保育園＊',
              int: '2',
            },
            {
              code: '2021530',
              name: '塩尻市広丘高出＊',
              int: '2',
            },
            {
              code: '2021700',
              name: '佐久市下小田切',
              int: '2',
            },
            {
              code: '2021735',
              name: '佐久市望月＊',
              int: '2',
            },
            {
              code: '2021831',
              name: '千曲市上山田温泉＊',
              int: '2',
            },
            {
              code: '2021832',
              name: '千曲市戸倉＊',
              int: '2',
            },
            {
              code: '2021834',
              name: '千曲市杭瀬下＊',
              int: '2',
            },
            {
              code: '2021930',
              name: '東御市県＊',
              int: '2',
            },
            {
              code: '2021931',
              name: '東御市大日向＊',
              int: '2',
            },
            {
              code: '2022001',
              name: '安曇野市穂高支所',
              int: '2',
            },
            {
              code: '2022020',
              name: '安曇野市穂高福祉センター＊',
              int: '2',
            },
            {
              code: '2022033',
              name: '安曇野市堀金＊',
              int: '2',
            },
            {
              code: '2022035',
              name: '安曇野市豊科＊',
              int: '2',
            },
            {
              code: '2022036',
              name: '安曇野市三郷＊',
              int: '2',
            },
            {
              code: '2030320',
              name: '小海町豊里＊',
              int: '2',
            },
            {
              code: '2030630',
              name: '南相木村見上＊',
              int: '2',
            },
            {
              code: '2030730',
              name: '北相木村役場＊',
              int: '2',
            },
            {
              code: '2030932',
              name: '佐久穂町高野町＊',
              int: '2',
            },
            {
              code: '2032432',
              name: '立科町芦田＊',
              int: '2',
            },
            {
              code: '2036130',
              name: '下諏訪町役場＊',
              int: '2',
            },
            {
              code: '2038200',
              name: '辰野町中央',
              int: '2',
            },
            {
              code: '2038330',
              name: '箕輪町中箕輪＊',
              int: '2',
            },
            {
              code: '2038530',
              name: '南箕輪村役場＊',
              int: '2',
            },
            {
              code: '2038630',
              name: '中川村大草＊',
              int: '2',
            },
            {
              code: '2038830',
              name: '宮田村役場＊',
              int: '2',
            },
            {
              code: '2040230',
              name: '松川町元大島＊',
              int: '2',
            },
            {
              code: '2040330',
              name: '長野高森町下市田＊',
              int: '2',
            },
            {
              code: '2040430',
              name: '阿南町東条＊',
              int: '2',
            },
            {
              code: '2040730',
              name: '阿智村駒場＊',
              int: '2',
            },
            {
              code: '2040732',
              name: '阿智村清内路＊',
              int: '2',
            },
            {
              code: '2040931',
              name: '平谷村役場＊',
              int: '2',
            },
            {
              code: '2041032',
              name: '根羽村役場＊',
              int: '2',
            },
            {
              code: '2041130',
              name: '下條村睦沢＊',
              int: '2',
            },
            {
              code: '2041321',
              name: '天龍村清水＊',
              int: '2',
            },
            {
              code: '2041330',
              name: '天龍村平岡＊',
              int: '2',
            },
            {
              code: '2041400',
              name: '泰阜村梨久保',
              int: '2',
            },
            {
              code: '2041431',
              name: '泰阜村役場＊',
              int: '2',
            },
            {
              code: '2041530',
              name: '喬木村役場＊',
              int: '2',
            },
            {
              code: '2041630',
              name: '豊丘村神稲＊',
              int: '2',
            },
            {
              code: '2041720',
              name: '大鹿村大河原＊',
              int: '2',
            },
            {
              code: '2042320',
              name: '南木曽町読書小学校＊',
              int: '2',
            },
            {
              code: '2042330',
              name: '南木曽町役場＊',
              int: '2',
            },
            {
              code: '2042530',
              name: '木祖村薮原＊',
              int: '2',
            },
            {
              code: '2042930',
              name: '王滝村役場＊',
              int: '2',
            },
            {
              code: '2043030',
              name: '大桑村長野＊',
              int: '2',
            },
            {
              code: '2043233',
              name: '木曽町三岳＊',
              int: '2',
            },
            {
              code: '2044630',
              name: '麻績村麻＊',
              int: '2',
            },
            {
              code: '2045030',
              name: '山形村役場＊',
              int: '2',
            },
            {
              code: '2045201',
              name: '筑北村坂井',
              int: '2',
            },
            {
              code: '2045230',
              name: '筑北村西条＊',
              int: '2',
            },
            {
              code: '2052130',
              name: '坂城町坂城＊',
              int: '2',
            },
            {
              code: '2056231',
              name: '木島平村往郷＊',
              int: '2',
            },
            {
              code: '2056330',
              name: '野沢温泉村豊郷＊',
              int: '2',
            },
            {
              code: '2058320',
              name: '信濃町柏原東裏＊',
              int: '2',
            },
            {
              code: '2058830',
              name: '小川村高府＊',
              int: '2',
            },
            {
              code: '2059032',
              name: '飯綱町芋川＊',
              int: '2',
            },
            {
              code: '2060240',
              name: '栄村小赤沢＊',
              int: '2',
            },
            {
              code: '2120100',
              name: '岐阜市加納二之丸',
              int: '2',
            },
            {
              code: '2120121',
              name: '岐阜市京町＊',
              int: '2',
            },
            {
              code: '2120130',
              name: '岐阜市柳津町＊',
              int: '2',
            },
            {
              code: '2120233',
              name: '大垣市墨俣町＊',
              int: '2',
            },
            {
              code: '2120600',
              name: '中津川市かやの木町',
              int: '2',
            },
            {
              code: '2120620',
              name: '中津川市本町＊',
              int: '2',
            },
            {
              code: '2120621',
              name: '中津川市小栗山＊',
              int: '2',
            },
            {
              code: '2120630',
              name: '中津川市坂下＊',
              int: '2',
            },
            {
              code: '2120632',
              name: '中津川市加子母＊',
              int: '2',
            },
            {
              code: '2120637',
              name: '中津川市川上＊',
              int: '2',
            },
            {
              code: '2120638',
              name: '中津川市付知町＊',
              int: '2',
            },
            {
              code: '2120640',
              name: '中津川市山口＊',
              int: '2',
            },
            {
              code: '2120831',
              name: '瑞浪市上平町＊',
              int: '2',
            },
            {
              code: '2120931',
              name: '羽島市竹鼻町＊',
              int: '2',
            },
            {
              code: '2121031',
              name: '恵那市岩村町＊',
              int: '2',
            },
            {
              code: '2121036',
              name: '恵那市山岡町＊',
              int: '2',
            },
            {
              code: '2121038',
              name: '恵那市長島町＊',
              int: '2',
            },
            {
              code: '2121230',
              name: '土岐市肥田＊',
              int: '2',
            },
            {
              code: '2121630',
              name: '瑞穂市別府＊',
              int: '2',
            },
            {
              code: '2121632',
              name: '瑞穂市宮田＊',
              int: '2',
            },
            {
              code: '2122130',
              name: '海津市海津町＊',
              int: '2',
            },
            {
              code: '2122135',
              name: '海津市平田町＊',
              int: '2',
            },
            {
              code: '2130232',
              name: '岐南町八剣＊',
              int: '2',
            },
            {
              code: '2130331',
              name: '笠松町司町＊',
              int: '2',
            },
            {
              code: '2138230',
              name: '輪之内町四郷＊',
              int: '2',
            },
            {
              code: '2138330',
              name: '安八町氷取＊',
              int: '2',
            },
            {
              code: '2140330',
              name: '大野町大野＊',
              int: '2',
            },
            {
              code: '2210120',
              name: '静岡葵区駒形通＊',
              int: '2',
            },
            {
              code: '2210121',
              name: '静岡葵区梅ヶ島＊',
              int: '2',
            },
            {
              code: '2210130',
              name: '静岡葵区追手町県庁＊',
              int: '2',
            },
            {
              code: '2210131',
              name: '静岡葵区追手町市役所＊',
              int: '2',
            },
            {
              code: '2210201',
              name: '静岡駿河区曲金',
              int: '2',
            },
            {
              code: '2210321',
              name: '静岡清水区蒲原新栄＊',
              int: '2',
            },
            {
              code: '2210333',
              name: '静岡清水区由比北田＊',
              int: '2',
            },
            {
              code: '2213101',
              name: '浜松中区高丘東',
              int: '2',
            },
            {
              code: '2213120',
              name: '浜松中区三組町＊',
              int: '2',
            },
            {
              code: '2213131',
              name: '浜松中区元城町＊',
              int: '2',
            },
            {
              code: '2213230',
              name: '浜松東区流通元町＊',
              int: '2',
            },
            {
              code: '2213330',
              name: '浜松西区舞阪町＊',
              int: '2',
            },
            {
              code: '2213331',
              name: '浜松西区雄踏＊',
              int: '2',
            },
            {
              code: '2213430',
              name: '浜松南区江之島町＊',
              int: '2',
            },
            {
              code: '2213500',
              name: '浜松北区三ヶ日町',
              int: '2',
            },
            {
              code: '2213630',
              name: '浜松浜北区西美薗＊',
              int: '2',
            },
            {
              code: '2213722',
              name: '浜松天竜区佐久間町＊',
              int: '2',
            },
            {
              code: '2220334',
              name: '沼津市戸田＊',
              int: '2',
            },
            {
              code: '2220501',
              name: '熱海市網代',
              int: '2',
            },
            {
              code: '2220520',
              name: '熱海市泉＊',
              int: '2',
            },
            {
              code: '2220532',
              name: '熱海市中央町＊',
              int: '2',
            },
            {
              code: '2220731',
              name: '富士宮市長貫＊',
              int: '2',
            },
            {
              code: '2220800',
              name: '伊東市大原',
              int: '2',
            },
            {
              code: '2220930',
              name: '島田市金谷代官町＊',
              int: '2',
            },
            {
              code: '2221000',
              name: '富士市富士総合運動公園',
              int: '2',
            },
            {
              code: '2221031',
              name: '富士市本市場＊',
              int: '2',
            },
            {
              code: '2221032',
              name: '富士市永田町＊',
              int: '2',
            },
            {
              code: '2221034',
              name: '富士市岩渕＊',
              int: '2',
            },
            {
              code: '2221036',
              name: '富士市大淵＊',
              int: '2',
            },
            {
              code: '2221130',
              name: '磐田市見付＊',
              int: '2',
            },
            {
              code: '2221131',
              name: '磐田市国府台＊',
              int: '2',
            },
            {
              code: '2221132',
              name: '磐田市福田＊',
              int: '2',
            },
            {
              code: '2221134',
              name: '磐田市森岡＊',
              int: '2',
            },
            {
              code: '2221231',
              name: '焼津市宗高＊',
              int: '2',
            },
            {
              code: '2221300',
              name: '掛川市篠場',
              int: '2',
            },
            {
              code: '2221330',
              name: '掛川市西大渕＊',
              int: '2',
            },
            {
              code: '2221331',
              name: '掛川市三俣＊',
              int: '2',
            },
            {
              code: '2221340',
              name: '掛川市長谷＊',
              int: '2',
            },
            {
              code: '2221431',
              name: '藤枝市岡出山＊',
              int: '2',
            },
            {
              code: '2221432',
              name: '藤枝市岡部町岡部＊',
              int: '2',
            },
            {
              code: '2221600',
              name: '袋井市新屋',
              int: '2',
            },
            {
              code: '2221630',
              name: '袋井市浅名＊',
              int: '2',
            },
            {
              code: '2221900',
              name: '下田市加増野',
              int: '2',
            },
            {
              code: '2221930',
              name: '下田市中＊',
              int: '2',
            },
            {
              code: '2222020',
              name: '裾野市石脇＊',
              int: '2',
            },
            {
              code: '2222030',
              name: '裾野市佐野＊',
              int: '2',
            },
            {
              code: '2222131',
              name: '湖西市新居町浜名＊',
              int: '2',
            },
            {
              code: '2222140',
              name: '湖西市吉美＊',
              int: '2',
            },
            {
              code: '2222230',
              name: '伊豆市土肥＊',
              int: '2',
            },
            {
              code: '2222232',
              name: '伊豆市八幡＊',
              int: '2',
            },
            {
              code: '2222301',
              name: '御前崎市御前崎',
              int: '2',
            },
            {
              code: '2222330',
              name: '御前崎市池新田＊',
              int: '2',
            },
            {
              code: '2222532',
              name: '伊豆の国市田京＊',
              int: '2',
            },
            {
              code: '2222600',
              name: '牧之原市鬼女新田',
              int: '2',
            },
            {
              code: '2222620',
              name: '牧之原市静波＊',
              int: '2',
            },
            {
              code: '2230130',
              name: '東伊豆町稲取＊',
              int: '2',
            },
            {
              code: '2230402',
              name: '南伊豆町石廊崎',
              int: '2',
            },
            {
              code: '2230420',
              name: '南伊豆町入間＊',
              int: '2',
            },
            {
              code: '2230431',
              name: '南伊豆町下賀茂＊',
              int: '2',
            },
            {
              code: '2230620',
              name: '西伊豆町一色＊',
              int: '2',
            },
            {
              code: '2242430',
              name: '吉田町住吉＊',
              int: '2',
            },
            {
              code: '2242920',
              name: '川根本町東藤川＊',
              int: '2',
            },
            {
              code: '2310240',
              name: '名古屋東区筒井＊',
              int: '2',
            },
            {
              code: '2310340',
              name: '名古屋北区萩野通＊',
              int: '2',
            },
            {
              code: '2310440',
              name: '名古屋西区八筋町＊',
              int: '2',
            },
            {
              code: '2310540',
              name: '名古屋中村区大宮町＊',
              int: '2',
            },
            {
              code: '2310630',
              name: '名古屋中区市役所＊',
              int: '2',
            },
            {
              code: '2310632',
              name: '名古屋中区県庁＊',
              int: '2',
            },
            {
              code: '2310740',
              name: '名古屋昭和区阿由知通＊',
              int: '2',
            },
            {
              code: '2310840',
              name: '名古屋瑞穂区塩入町＊',
              int: '2',
            },
            {
              code: '2310940',
              name: '名古屋熱田区一番＊',
              int: '2',
            },
            {
              code: '2311040',
              name: '名古屋中川区東春田＊',
              int: '2',
            },
            {
              code: '2311140',
              name: '名古屋港区金城ふ頭＊',
              int: '2',
            },
            {
              code: '2311142',
              name: '名古屋港区善進本町＊',
              int: '2',
            },
            {
              code: '2311240',
              name: '名古屋南区鳴尾＊',
              int: '2',
            },
            {
              code: '2311340',
              name: '名古屋守山区下志段味＊',
              int: '2',
            },
            {
              code: '2311341',
              name: '名古屋守山区西新＊',
              int: '2',
            },
            {
              code: '2311540',
              name: '名古屋名東区名東本町＊',
              int: '2',
            },
            {
              code: '2311640',
              name: '名古屋天白区島田＊',
              int: '2',
            },
            {
              code: '2320100',
              name: '豊橋市向山',
              int: '2',
            },
            {
              code: '2320130',
              name: '豊橋市東松山町＊',
              int: '2',
            },
            {
              code: '2320331',
              name: '一宮市西五城＊',
              int: '2',
            },
            {
              code: '2320332',
              name: '一宮市木曽川町＊',
              int: '2',
            },
            {
              code: '2320333',
              name: '一宮市緑＊',
              int: '2',
            },
            {
              code: '2320430',
              name: '瀬戸市苗場町＊',
              int: '2',
            },
            {
              code: '2320531',
              name: '半田市東洋町＊',
              int: '2',
            },
            {
              code: '2320630',
              name: '春日井市鳥居松町＊',
              int: '2',
            },
            {
              code: '2320730',
              name: '豊川市諏訪＊',
              int: '2',
            },
            {
              code: '2320830',
              name: '愛知津島市埋田町＊',
              int: '2',
            },
            {
              code: '2320931',
              name: '碧南市松本町＊',
              int: '2',
            },
            {
              code: '2321030',
              name: '刈谷市寿町＊',
              int: '2',
            },
            {
              code: '2321100',
              name: '豊田市小坂本町',
              int: '2',
            },
            {
              code: '2321120',
              name: '豊田市小坂町＊',
              int: '2',
            },
            {
              code: '2321220',
              name: '安城市和泉町＊',
              int: '2',
            },
            {
              code: '2321230',
              name: '安城市横山町＊',
              int: '2',
            },
            {
              code: '2321301',
              name: '西尾市一色町',
              int: '2',
            },
            {
              code: '2321331',
              name: '西尾市矢曽根町＊',
              int: '2',
            },
            {
              code: '2321600',
              name: '常滑市新開町',
              int: '2',
            },
            {
              code: '2322030',
              name: '稲沢市稲府町＊',
              int: '2',
            },
            {
              code: '2322033',
              name: '稲沢市祖父江町＊',
              int: '2',
            },
            {
              code: '2322034',
              name: '稲沢市平和町＊',
              int: '2',
            },
            {
              code: '2322131',
              name: '新城市作手高里縄手上＊',
              int: '2',
            },
            {
              code: '2322231',
              name: '東海市加木屋町＊',
              int: '2',
            },
            {
              code: '2322330',
              name: '大府市中央町＊',
              int: '2',
            },
            {
              code: '2322420',
              name: '知多市緑町＊',
              int: '2',
            },
            {
              code: '2322530',
              name: '知立市弘法＊',
              int: '2',
            },
            {
              code: '2322630',
              name: '尾張旭市東大道町＊',
              int: '2',
            },
            {
              code: '2322730',
              name: '高浜市稗田町＊',
              int: '2',
            },
            {
              code: '2322830',
              name: '岩倉市川井町＊',
              int: '2',
            },
            {
              code: '2322931',
              name: '豊明市沓掛町＊',
              int: '2',
            },
            {
              code: '2323030',
              name: '日進市蟹甲町＊',
              int: '2',
            },
            {
              code: '2323102',
              name: '田原市福江町',
              int: '2',
            },
            {
              code: '2323201',
              name: '愛西市稲葉町',
              int: '2',
            },
            {
              code: '2323230',
              name: '愛西市石田町＊',
              int: '2',
            },
            {
              code: '2323231',
              name: '愛西市江西町＊',
              int: '2',
            },
            {
              code: '2323232',
              name: '愛西市諏訪町＊',
              int: '2',
            },
            {
              code: '2323330',
              name: '清須市西枇杷島町花咲＊',
              int: '2',
            },
            {
              code: '2323334',
              name: '清須市須ケ口＊',
              int: '2',
            },
            {
              code: '2323335',
              name: '清須市清洲＊',
              int: '2',
            },
            {
              code: '2323336',
              name: '清須市春日振形＊',
              int: '2',
            },
            {
              code: '2323431',
              name: '北名古屋市西之保＊',
              int: '2',
            },
            {
              code: '2323533',
              name: '弥富市神戸＊',
              int: '2',
            },
            {
              code: '2323534',
              name: '弥富市前ヶ須町＊',
              int: '2',
            },
            {
              code: '2323631',
              name: '愛知みよし市三好町＊',
              int: '2',
            },
            {
              code: '2323730',
              name: 'あま市七宝町＊',
              int: '2',
            },
            {
              code: '2323731',
              name: 'あま市木田＊',
              int: '2',
            },
            {
              code: '2323732',
              name: 'あま市甚目寺＊',
              int: '2',
            },
            {
              code: '2323830',
              name: '長久手市岩作城の内＊',
              int: '2',
            },
            {
              code: '2330230',
              name: '東郷町春木＊',
              int: '2',
            },
            {
              code: '2334230',
              name: '豊山町豊場＊',
              int: '2',
            },
            {
              code: '2342430',
              name: '大治町馬島＊',
              int: '2',
            },
            {
              code: '2342530',
              name: '蟹江町蟹江本町＊',
              int: '2',
            },
            {
              code: '2344131',
              name: '阿久比町卯坂＊',
              int: '2',
            },
            {
              code: '2344230',
              name: '東浦町緒川＊',
              int: '2',
            },
            {
              code: '2344730',
              name: '武豊町長尾山＊',
              int: '2',
            },
            {
              code: '2420136',
              name: '津市香良洲町＊',
              int: '2',
            },
            {
              code: '2420201',
              name: '四日市市日永',
              int: '2',
            },
            {
              code: '2420220',
              name: '四日市市新浜町＊',
              int: '2',
            },
            {
              code: '2420230',
              name: '四日市市諏訪町＊',
              int: '2',
            },
            {
              code: '2420232',
              name: '四日市市楠町北五味塚＊',
              int: '2',
            },
            {
              code: '2420530',
              name: '桑名市中央町＊',
              int: '2',
            },
            {
              code: '2420533',
              name: '桑名市多度町多度＊',
              int: '2',
            },
            {
              code: '2420534',
              name: '桑名市長島町松ケ島＊',
              int: '2',
            },
            {
              code: '2430331',
              name: '木曽岬町西対海地＊',
              int: '2',
            },
            {
              code: '2434131',
              name: '菰野町潤田＊',
              int: '2',
            },
            {
              code: '2434330',
              name: '三重朝日町小向＊',
              int: '2',
            },
            {
              code: '2434431',
              name: '川越町豊田一色＊',
              int: '2',
            },
            {
              code: '2520201',
              name: '彦根市城町',
              int: '2',
            },
            {
              code: '2520220',
              name: '彦根市西今町＊',
              int: '2',
            },
            {
              code: '2520339',
              name: '長浜市西浅井町大浦＊',
              int: '2',
            },
            {
              code: '2520340',
              name: '長浜市八幡東町＊',
              int: '2',
            },
            {
              code: '2520341',
              name: '長浜市宮部町＊',
              int: '2',
            },
            {
              code: '2520401',
              name: '近江八幡市桜宮町',
              int: '2',
            },
            {
              code: '2520420',
              name: '近江八幡市出町＊',
              int: '2',
            },
            {
              code: '2520431',
              name: '近江八幡市安土町下豊浦＊',
              int: '2',
            },
            {
              code: '2521030',
              name: '野洲市西河原＊',
              int: '2',
            },
            {
              code: '2521236',
              name: '高島市勝野＊',
              int: '2',
            },
            {
              code: '2521335',
              name: '東近江市市子川原町＊',
              int: '2',
            },
            {
              code: '2521338',
              name: '東近江市妹町＊',
              int: '2',
            },
            {
              code: '2521340',
              name: '東近江市五個荘小幡町＊',
              int: '2',
            },
            {
              code: '2538430',
              name: '竜王町小口＊',
              int: '2',
            },
            {
              code: '2610640',
              name: '京都下京区河原町塩小路＊',
              int: '2',
            },
            {
              code: '2620830',
              name: '向日市寺戸町＊',
              int: '2',
            },
            {
              code: '2620930',
              name: '長岡京市開田＊',
              int: '2',
            },
            {
              code: '2621030',
              name: '八幡市八幡＊',
              int: '2',
            },
            {
              code: '2630330',
              name: '大山崎町円明寺＊',
              int: '2',
            },
            {
              code: '2710431',
              name: '大阪此花区春日出北＊',
              int: '2',
            },
            {
              code: '2710730',
              name: '大阪港区築港＊',
              int: '2',
            },
            {
              code: '2710830',
              name: '大阪大正区泉尾＊',
              int: '2',
            },
            {
              code: '2711331',
              name: '大阪西淀川区千舟＊',
              int: '2',
            },
            {
              code: '2711530',
              name: '大阪東成区東中本＊',
              int: '2',
            },
            {
              code: '2711630',
              name: '大阪生野区舎利寺＊',
              int: '2',
            },
            {
              code: '2711730',
              name: '大阪旭区大宮＊',
              int: '2',
            },
            {
              code: '2711830',
              name: '大阪城東区放出西＊',
              int: '2',
            },
            {
              code: '2712330',
              name: '大阪淀川区木川東＊',
              int: '2',
            },
            {
              code: '2712430',
              name: '大阪鶴見区横堤＊',
              int: '2',
            },
            {
              code: '2720931',
              name: '守口市京阪本通＊',
              int: '2',
            },
            {
              code: '2721530',
              name: '寝屋川市役所＊',
              int: '2',
            },
            {
              code: '2721831',
              name: '大東市新町＊',
              int: '2',
            },
            {
              code: '2722930',
              name: '四條畷市西中野＊',
              int: '2',
            },
            {
              code: '2820901',
              name: '豊岡市桜町',
              int: '2',
            },
            {
              code: '2920133',
              name: '奈良市二条大路南＊',
              int: '2',
            },
            {
              code: '2920330',
              name: '大和郡山市北郡山町＊',
              int: '2',
            },
            {
              code: '2936231',
              name: '三宅町伴堂＊',
              int: '2',
            },
            {
              code: '2936331',
              name: '田原本町役場＊',
              int: '2',
            },
            {
              code: '0110100',
              name: '札幌中央区北２条',
              int: '1',
            },
            {
              code: '0110140',
              name: '札幌中央区南４条＊',
              int: '1',
            },
            {
              code: '0110540',
              name: '札幌豊平区月寒東＊',
              int: '1',
            },
            {
              code: '0110642',
              name: '札幌南区川沿＊',
              int: '1',
            },
            {
              code: '0110643',
              name: '札幌南区石山＊',
              int: '1',
            },
            {
              code: '0110740',
              name: '札幌西区琴似＊',
              int: '1',
            },
            {
              code: '0120300',
              name: '小樽市勝納町',
              int: '1',
            },
            {
              code: '0120401',
              name: '旭川市宮前１条',
              int: '1',
            },
            {
              code: '0120420',
              name: '旭川市７条＊',
              int: '1',
            },
            {
              code: '0120801',
              name: '北見市留辺蘂町上町',
              int: '1',
            },
            {
              code: '0120821',
              name: '北見市常呂町常呂＊',
              int: '1',
            },
            {
              code: '0120822',
              name: '北見市留辺蘂町栄町＊',
              int: '1',
            },
            {
              code: '0120823',
              name: '北見市留辺蘂町富士見＊',
              int: '1',
            },
            {
              code: '0120900',
              name: '夕張市若菜',
              int: '1',
            },
            {
              code: '0121620',
              name: '芦別市北２条＊',
              int: '1',
            },
            {
              code: '0122300',
              name: '根室市弥栄',
              int: '1',
            },
            {
              code: '0122301',
              name: '根室市豊里',
              int: '1',
            },
            {
              code: '0122421',
              name: '千歳市支笏湖温泉＊',
              int: '1',
            },
            {
              code: '0123000',
              name: '登別市鉱山',
              int: '1',
            },
            {
              code: '0123020',
              name: '登別市桜木町＊',
              int: '1',
            },
            {
              code: '0123321',
              name: '胆振伊達市大滝区本町＊',
              int: '1',
            },
            {
              code: '0123501',
              name: '石狩市聚富',
              int: '1',
            },
            {
              code: '0123520',
              name: '石狩市厚田＊',
              int: '1',
            },
            {
              code: '0133100',
              name: '渡島松前町福山',
              int: '1',
            },
            {
              code: '0133101',
              name: '渡島松前町清部',
              int: '1',
            },
            {
              code: '0133300',
              name: '知内町小谷石',
              int: '1',
            },
            {
              code: '0134601',
              name: '八雲町上の湯',
              int: '1',
            },
            {
              code: '0134621',
              name: '八雲町熊石雲石町＊',
              int: '1',
            },
            {
              code: '0139321',
              name: '黒松内町黒松内＊',
              int: '1',
            },
            {
              code: '0140201',
              name: '岩内町高台',
              int: '1',
            },
            {
              code: '0140800',
              name: '余市町朝日町',
              int: '1',
            },
            {
              code: '0143700',
              name: '北竜町竜西',
              int: '1',
            },
            {
              code: '0145920',
              name: '美瑛町本町＊',
              int: '1',
            },
            {
              code: '0146200',
              name: '南富良野町幾寅',
              int: '1',
            },
            {
              code: '0146220',
              name: '南富良野町役場＊',
              int: '1',
            },
            {
              code: '0148400',
              name: '羽幌町南３条',
              int: '1',
            },
            {
              code: '0154420',
              name: '津別町幸町＊',
              int: '1',
            },
            {
              code: '0154500',
              name: '斜里町本町',
              int: '1',
            },
            {
              code: '0154521',
              name: '斜里町ウトロ香川＊',
              int: '1',
            },
            {
              code: '0155020',
              name: '置戸町拓殖＊',
              int: '1',
            },
            {
              code: '0155500',
              name: '遠軽町丸瀬布金湧山',
              int: '1',
            },
            {
              code: '0156120',
              name: '興部町興部＊',
              int: '1',
            },
            {
              code: '0157120',
              name: '豊浦町大岸＊',
              int: '1',
            },
            {
              code: '0160200',
              name: '平取町仁世宇',
              int: '1',
            },
            {
              code: '0160900',
              name: 'えりも町本町',
              int: '1',
            },
            {
              code: '0160921',
              name: 'えりも町目黒＊',
              int: '1',
            },
            {
              code: '0163521',
              name: '新得町トムラウシ＊',
              int: '1',
            },
            {
              code: '0164201',
              name: '広尾町白樺通',
              int: '1',
            },
            {
              code: '0164300',
              name: '幕別町忠類明和',
              int: '1',
            },
            {
              code: '0164820',
              name: '陸別町陸別＊',
              int: '1',
            },
            {
              code: '0166200',
              name: '厚岸町尾幌',
              int: '1',
            },
            {
              code: '0166300',
              name: '浜中町湯沸',
              int: '1',
            },
            {
              code: '0166321',
              name: '浜中町茶内＊',
              int: '1',
            },
            {
              code: '0166521',
              name: '弟子屈町サワンチサップ＊',
              int: '1',
            },
            {
              code: '0169200',
              name: '中標津町養老牛',
              int: '1',
            },
            {
              code: '0169300',
              name: '標津町古多糠',
              int: '1',
            },
            {
              code: '0169321',
              name: '標津町薫別＊',
              int: '1',
            },
            {
              code: '0169400',
              name: '羅臼町春日',
              int: '1',
            },
            {
              code: '0169421',
              name: '羅臼町岬町＊',
              int: '1',
            },
            {
              code: '1336301',
              name: '新島村式根島',
              int: '1',
            },
            {
              code: '1340103',
              name: '八丈町樫立',
              int: '1',
            },
            {
              code: '1521632',
              name: '糸魚川市青海＊',
              int: '1',
            },
            {
              code: '1522401',
              name: '佐渡市相川金山',
              int: '1',
            },
            {
              code: '1522424',
              name: '佐渡市松ヶ崎＊',
              int: '1',
            },
            {
              code: '1522443',
              name: '佐渡市相川栄町＊',
              int: '1',
            },
            {
              code: '1620100',
              name: '富山市石坂',
              int: '1',
            },
            {
              code: '1620101',
              name: '富山市八尾町福島',
              int: '1',
            },
            {
              code: '1620131',
              name: '富山市上二杉＊',
              int: '1',
            },
            {
              code: '1620136',
              name: '富山市花崎＊',
              int: '1',
            },
            {
              code: '1620200',
              name: '高岡市伏木',
              int: '1',
            },
            {
              code: '1620230',
              name: '高岡市広小路＊',
              int: '1',
            },
            {
              code: '1620231',
              name: '高岡市福岡町＊',
              int: '1',
            },
            {
              code: '1620400',
              name: '魚津市釈迦堂',
              int: '1',
            },
            {
              code: '1620720',
              name: '黒部市宇奈月町下立＊',
              int: '1',
            },
            {
              code: '1620901',
              name: '小矢部市泉町',
              int: '1',
            },
            {
              code: '1621001',
              name: '南砺市天池',
              int: '1',
            },
            {
              code: '1621030',
              name: '南砺市城端＊',
              int: '1',
            },
            {
              code: '1621037',
              name: '南砺市蛇喰＊',
              int: '1',
            },
            {
              code: '1632300',
              name: '立山町吉峰',
              int: '1',
            },
            {
              code: '1632330',
              name: '立山町米沢＊',
              int: '1',
            },
            {
              code: '1634230',
              name: '入善町入膳＊',
              int: '1',
            },
            {
              code: '1634300',
              name: '富山朝日町道下',
              int: '1',
            },
            {
              code: '1720100',
              name: '金沢市西念',
              int: '1',
            },
            {
              code: '1720200',
              name: '七尾市本府中町',
              int: '1',
            },
            {
              code: '1720420',
              name: '輪島市河井町＊',
              int: '1',
            },
            {
              code: '1720921',
              name: 'かほく市浜北＊',
              int: '1',
            },
            {
              code: '1736100',
              name: '津幡町加賀爪',
              int: '1',
            },
            {
              code: '1820100',
              name: '福井市豊島',
              int: '1',
            },
            {
              code: '1820136',
              name: '福井市大手＊',
              int: '1',
            },
            {
              code: '1820420',
              name: '小浜市四谷町＊',
              int: '1',
            },
            {
              code: '1820431',
              name: '小浜市大手町＊',
              int: '1',
            },
            {
              code: '1820533',
              name: '大野市天神町＊',
              int: '1',
            },
            {
              code: '1820932',
              name: '越前市粟田部＊',
              int: '1',
            },
            {
              code: '1821032',
              name: '福井坂井市坂井町下新庄＊',
              int: '1',
            },
            {
              code: '1821033',
              name: '福井坂井市春江町随応寺＊',
              int: '1',
            },
            {
              code: '1842337',
              name: '越前町西田中＊',
              int: '1',
            },
            {
              code: '1848101',
              name: '高浜町宮崎',
              int: '1',
            },
            {
              code: '1848333',
              name: '福井おおい町本郷＊',
              int: '1',
            },
            {
              code: '2020102',
              name: '長野市松代',
              int: '1',
            },
            {
              code: '2020131',
              name: '長野市鬼無里＊',
              int: '1',
            },
            {
              code: '2020132',
              name: '長野市信州新町新町＊',
              int: '1',
            },
            {
              code: '2020221',
              name: '松本市安曇＊',
              int: '1',
            },
            {
              code: '2020231',
              name: '松本市会田＊',
              int: '1',
            },
            {
              code: '2020233',
              name: '松本市梓川梓＊',
              int: '1',
            },
            {
              code: '2020236',
              name: '松本市奈川＊',
              int: '1',
            },
            {
              code: '2020330',
              name: '上田市上丸子＊',
              int: '1',
            },
            {
              code: '2020534',
              name: '飯田市上村＊',
              int: '1',
            },
            {
              code: '2021200',
              name: '大町市役所',
              int: '1',
            },
            {
              code: '2021220',
              name: '大町市大町図書館＊',
              int: '1',
            },
            {
              code: '2021240',
              name: '大町市美麻＊',
              int: '1',
            },
            {
              code: '2021531',
              name: '塩尻市木曽平沢＊',
              int: '1',
            },
            {
              code: '2022034',
              name: '安曇野市明科＊',
              int: '1',
            },
            {
              code: '2034930',
              name: '青木村田沢青木＊',
              int: '1',
            },
            {
              code: '2035020',
              name: '長和町古町＊',
              int: '1',
            },
            {
              code: '2035030',
              name: '長和町和田＊',
              int: '1',
            },
            {
              code: '2040731',
              name: '阿智村浪合＊',
              int: '1',
            },
            {
              code: '2041231',
              name: '売木村役場＊',
              int: '1',
            },
            {
              code: '2042230',
              name: '上松町駅前通り＊',
              int: '1',
            },
            {
              code: '2042920',
              name: '王滝村鈴ヶ沢＊',
              int: '1',
            },
            {
              code: '2043220',
              name: '木曽町新開＊',
              int: '1',
            },
            {
              code: '2043235',
              name: '木曽町日義＊',
              int: '1',
            },
            {
              code: '2043236',
              name: '木曽町福島＊',
              int: '1',
            },
            {
              code: '2044830',
              name: '生坂村役場＊',
              int: '1',
            },
            {
              code: '2045131',
              name: '朝日村役場＊',
              int: '1',
            },
            {
              code: '2045231',
              name: '筑北村坂北＊',
              int: '1',
            },
            {
              code: '2048130',
              name: '長野池田町池田＊',
              int: '1',
            },
            {
              code: '2048230',
              name: '松川村役場＊',
              int: '1',
            },
            {
              code: '2048520',
              name: '白馬村北城＊',
              int: '1',
            },
            {
              code: '2048630',
              name: '小谷村中小谷＊',
              int: '1',
            },
            {
              code: '2054130',
              name: '小布施町小布施＊',
              int: '1',
            },
            {
              code: '2054330',
              name: '長野高山村高井＊',
              int: '1',
            },
            {
              code: '2056100',
              name: '山ノ内町平穏',
              int: '1',
            },
            {
              code: '2056120',
              name: '山ノ内町消防署＊',
              int: '1',
            },
            {
              code: '2120430',
              name: '多治見市三笠町＊',
              int: '1',
            },
            {
              code: '2120431',
              name: '多治見市笠原町＊',
              int: '1',
            },
            {
              code: '2120634',
              name: '中津川市福岡＊',
              int: '1',
            },
            {
              code: '2120639',
              name: '中津川市蛭川＊',
              int: '1',
            },
            {
              code: '2121020',
              name: '恵那市長島小学校＊',
              int: '1',
            },
            {
              code: '2121033',
              name: '恵那市明智町＊',
              int: '1',
            },
            {
              code: '2121035',
              name: '恵那市上矢作町＊',
              int: '1',
            },
            {
              code: '2121037',
              name: '恵那市串原＊',
              int: '1',
            },
            {
              code: '2121100',
              name: '美濃加茂市太田町',
              int: '1',
            },
            {
              code: '2121332',
              name: '各務原市川島河田町＊',
              int: '1',
            },
            {
              code: '2121430',
              name: '可児市広見＊',
              int: '1',
            },
            {
              code: '2121532',
              name: '岐阜山県市高富＊',
              int: '1',
            },
            {
              code: '2121830',
              name: '本巣市文殊＊',
              int: '1',
            },
            {
              code: '2121832',
              name: '本巣市三橋＊',
              int: '1',
            },
            {
              code: '2121834',
              name: '本巣市下真桑＊',
              int: '1',
            },
            {
              code: '2122000',
              name: '下呂市森',
              int: '1',
            },
            {
              code: '2122021',
              name: '下呂市下呂小学校＊',
              int: '1',
            },
            {
              code: '2122034',
              name: '下呂市萩原町＊',
              int: '1',
            },
            {
              code: '2122134',
              name: '海津市南濃町＊',
              int: '1',
            },
            {
              code: '2134130',
              name: '養老町高田＊',
              int: '1',
            },
            {
              code: '2136131',
              name: '垂井町役場＊',
              int: '1',
            },
            {
              code: '2136231',
              name: '関ケ原町関ケ原＊',
              int: '1',
            },
            {
              code: '2138131',
              name: '神戸町神戸＊',
              int: '1',
            },
            {
              code: '2140102',
              name: '揖斐川町三輪',
              int: '1',
            },
            {
              code: '2140121',
              name: '揖斐川町中籠橋＊',
              int: '1',
            },
            {
              code: '2140430',
              name: '岐阜池田町六之井＊',
              int: '1',
            },
            {
              code: '2142132',
              name: '北方町北方＊',
              int: '1',
            },
            {
              code: '2150230',
              name: '富加町滝田＊',
              int: '1',
            },
            {
              code: '2150331',
              name: '川辺町中川辺＊',
              int: '1',
            },
            {
              code: '2150600',
              name: '白川町黒川',
              int: '1',
            },
            {
              code: '2213531',
              name: '浜松北区引佐町＊',
              int: '1',
            },
            {
              code: '2213720',
              name: '浜松天竜区春野町＊',
              int: '1',
            },
            {
              code: '2213730',
              name: '浜松天竜区二俣町鹿島＊',
              int: '1',
            },
            {
              code: '2213734',
              name: '浜松天竜区水窪町＊',
              int: '1',
            },
            {
              code: '2220901',
              name: '島田市川根町家山',
              int: '1',
            },
            {
              code: '2220902',
              name: '島田市旗指',
              int: '1',
            },
            {
              code: '2220920',
              name: '島田市川根町笹間上＊',
              int: '1',
            },
            {
              code: '2221135',
              name: '磐田市下野部＊',
              int: '1',
            },
            {
              code: '2221430',
              name: '藤枝市瀬戸新屋＊',
              int: '1',
            },
            {
              code: '2222234',
              name: '伊豆市湯ケ島＊',
              int: '1',
            },
            {
              code: '2222241',
              name: '伊豆市小立野＊',
              int: '1',
            },
            {
              code: '2222431',
              name: '静岡菊川市堀之内＊',
              int: '1',
            },
            {
              code: '2242930',
              name: '川根本町上長尾＊',
              int: '1',
            },
            {
              code: '2246131',
              name: '静岡森町森＊',
              int: '1',
            },
            {
              code: '2320201',
              name: '岡崎市若宮町',
              int: '1',
            },
            {
              code: '2320300',
              name: '一宮市千秋',
              int: '1',
            },
            {
              code: '2320731',
              name: '豊川市一宮町＊',
              int: '1',
            },
            {
              code: '2321101',
              name: '豊田市大洞町',
              int: '1',
            },
            {
              code: '2321130',
              name: '豊田市長興寺＊',
              int: '1',
            },
            {
              code: '2321135',
              name: '豊田市稲武町＊',
              int: '1',
            },
            {
              code: '2321136',
              name: '豊田市小原町＊',
              int: '1',
            },
            {
              code: '2321138',
              name: '豊田市小渡町＊',
              int: '1',
            },
            {
              code: '2321420',
              name: '蒲郡市御幸町＊',
              int: '1',
            },
            {
              code: '2321431',
              name: '蒲郡市水竹町＊',
              int: '1',
            },
            {
              code: '2321530',
              name: '犬山市五郎丸＊',
              int: '1',
            },
            {
              code: '2321601',
              name: '中部国際空港',
              int: '1',
            },
            {
              code: '2321730',
              name: '愛知江南市赤童子町＊',
              int: '1',
            },
            {
              code: '2321930',
              name: '小牧市安田町＊',
              int: '1',
            },
            {
              code: '2322100',
              name: '新城市乗本',
              int: '1',
            },
            {
              code: '2322121',
              name: '新城市作手高里松風呂＊',
              int: '1',
            },
            {
              code: '2322132',
              name: '新城市東入船＊',
              int: '1',
            },
            {
              code: '2323130',
              name: '田原市田原町＊',
              int: '1',
            },
            {
              code: '2336130',
              name: '大口町下小口＊',
              int: '1',
            },
            {
              code: '2336230',
              name: '扶桑町高雄＊',
              int: '1',
            },
            {
              code: '2344500',
              name: '南知多町豊浜',
              int: '1',
            },
            {
              code: '2350131',
              name: '幸田町菱池＊',
              int: '1',
            },
            {
              code: '2356230',
              name: '東栄町本郷＊',
              int: '1',
            },
            {
              code: '2356331',
              name: '豊根村富山＊',
              int: '1',
            },
            {
              code: '2420100',
              name: '津市島崎町',
              int: '1',
            },
            {
              code: '2420130',
              name: '津市西丸之内＊',
              int: '1',
            },
            {
              code: '2420132',
              name: '津市河芸町浜田＊',
              int: '1',
            },
            {
              code: '2420133',
              name: '津市芸濃町椋本＊',
              int: '1',
            },
            {
              code: '2420140',
              name: '津市安濃町東観音寺＊',
              int: '1',
            },
            {
              code: '2420145',
              name: '津市久居明神町＊',
              int: '1',
            },
            {
              code: '2420334',
              name: '伊勢市岩淵＊',
              int: '1',
            },
            {
              code: '2420335',
              name: '伊勢市二見町茶屋＊',
              int: '1',
            },
            {
              code: '2420432',
              name: '松阪市曽原町＊',
              int: '1',
            },
            {
              code: '2420700',
              name: '鈴鹿市西条',
              int: '1',
            },
            {
              code: '2420731',
              name: '鈴鹿市神戸＊',
              int: '1',
            },
            {
              code: '2421022',
              name: '亀山市椿世町＊',
              int: '1',
            },
            {
              code: '2421032',
              name: '亀山市本丸町＊',
              int: '1',
            },
            {
              code: '2421430',
              name: 'いなべ市員弁町笠田新田＊',
              int: '1',
            },
            {
              code: '2421433',
              name: 'いなべ市藤原町市場＊',
              int: '1',
            },
            {
              code: '2421601',
              name: '伊賀市緑ケ丘本町',
              int: '1',
            },
            {
              code: '2421631',
              name: '伊賀市下柘植＊',
              int: '1',
            },
            {
              code: '2421634',
              name: '伊賀市平田＊',
              int: '1',
            },
            {
              code: '2432430',
              name: '東員町山田＊',
              int: '1',
            },
            {
              code: '2454331',
              name: '三重紀北町相賀＊',
              int: '1',
            },
            {
              code: '2520100',
              name: '大津市御陵町',
              int: '1',
            },
            {
              code: '2520103',
              name: '大津市南小松',
              int: '1',
            },
            {
              code: '2520120',
              name: '大津市国分＊',
              int: '1',
            },
            {
              code: '2520901',
              name: '甲賀市水口町',
              int: '1',
            },
            {
              code: '2520920',
              name: '甲賀市甲賀町大久保＊',
              int: '1',
            },
            {
              code: '2521320',
              name: '東近江市上二俣町＊',
              int: '1',
            },
            {
              code: '2521341',
              name: '東近江市躰光寺町＊',
              int: '1',
            },
            {
              code: '2620400',
              name: '宇治市宇治琵琶',
              int: '1',
            },
            {
              code: '2620600',
              name: '亀岡市安町',
              int: '1',
            },
            {
              code: '2620731',
              name: '城陽市寺田＊',
              int: '1',
            },
            {
              code: '2621334',
              name: '南丹市八木町八木＊',
              int: '1',
            },
            {
              code: '2621432',
              name: '木津川市加茂町里＊',
              int: '1',
            },
            {
              code: '2621433',
              name: '木津川市木津＊',
              int: '1',
            },
            {
              code: '2632230',
              name: '久御山町田井＊',
              int: '1',
            },
            {
              code: '2634330',
              name: '井手町井手＊',
              int: '1',
            },
            {
              code: '2636631',
              name: '精華町南稲八妻＊',
              int: '1',
            },
            {
              code: '2710230',
              name: '大阪都島区都島本通＊',
              int: '1',
            },
            {
              code: '2710330',
              name: '大阪福島区福島＊',
              int: '1',
            },
            {
              code: '2710630',
              name: '大阪西区九条南＊',
              int: '1',
            },
            {
              code: '2710930',
              name: '大阪天王寺区上本町＊',
              int: '1',
            },
            {
              code: '2711130',
              name: '大阪浪速区元町＊',
              int: '1',
            },
            {
              code: '2711430',
              name: '大阪東淀川区北江口＊',
              int: '1',
            },
            {
              code: '2711930',
              name: '大阪阿倍野区松崎町＊',
              int: '1',
            },
            {
              code: '2712030',
              name: '大阪住吉区遠里小野＊',
              int: '1',
            },
            {
              code: '2712130',
              name: '大阪東住吉区杭全＊',
              int: '1',
            },
            {
              code: '2712230',
              name: '大阪西成区岸里＊',
              int: '1',
            },
            {
              code: '2712630',
              name: '大阪平野区平野南＊',
              int: '1',
            },
            {
              code: '2712730',
              name: '大阪北区茶屋町＊',
              int: '1',
            },
            {
              code: '2712800',
              name: '大阪中央区大手前',
              int: '1',
            },
            {
              code: '2712831',
              name: '大阪中央区大阪府庁＊',
              int: '1',
            },
            {
              code: '2714130',
              name: '大阪堺市堺区大浜南町＊',
              int: '1',
            },
            {
              code: '2714131',
              name: '大阪堺市堺区市役所＊',
              int: '1',
            },
            {
              code: '2714200',
              name: '大阪堺市中区深井清水町',
              int: '1',
            },
            {
              code: '2714330',
              name: '大阪堺市東区日置荘原寺町＊',
              int: '1',
            },
            {
              code: '2714630',
              name: '大阪堺市北区新金岡町＊',
              int: '1',
            },
            {
              code: '2720200',
              name: '岸和田市岸城町',
              int: '1',
            },
            {
              code: '2720230',
              name: '岸和田市役所＊',
              int: '1',
            },
            {
              code: '2720300',
              name: '大阪国際空港',
              int: '1',
            },
            {
              code: '2720320',
              name: '豊中市曽根南町＊',
              int: '1',
            },
            {
              code: '2720330',
              name: '豊中市役所＊',
              int: '1',
            },
            {
              code: '2720631',
              name: '泉大津市東雲町＊',
              int: '1',
            },
            {
              code: '2720700',
              name: '高槻市桃園町',
              int: '1',
            },
            {
              code: '2720720',
              name: '高槻市立第２中学校＊',
              int: '1',
            },
            {
              code: '2720732',
              name: '高槻市消防本部＊',
              int: '1',
            },
            {
              code: '2721031',
              name: '枚方市大垣内＊',
              int: '1',
            },
            {
              code: '2721130',
              name: '茨木市東中条町＊',
              int: '1',
            },
            {
              code: '2721230',
              name: '八尾市本町＊',
              int: '1',
            },
            {
              code: '2721400',
              name: '富田林市本町',
              int: '1',
            },
            {
              code: '2721430',
              name: '富田林市高辺台＊',
              int: '1',
            },
            {
              code: '2721730',
              name: '松原市阿保＊',
              int: '1',
            },
            {
              code: '2722000',
              name: '箕面市箕面',
              int: '1',
            },
            {
              code: '2722030',
              name: '箕面市粟生外院＊',
              int: '1',
            },
            {
              code: '2722231',
              name: '羽曳野市誉田＊',
              int: '1',
            },
            {
              code: '2722330',
              name: '門真市中町＊',
              int: '1',
            },
            {
              code: '2722430',
              name: '摂津市三島＊',
              int: '1',
            },
            {
              code: '2722630',
              name: '藤井寺市岡＊',
              int: '1',
            },
            {
              code: '2722731',
              name: '東大阪市荒本北＊',
              int: '1',
            },
            {
              code: '2723030',
              name: '交野市私部＊',
              int: '1',
            },
            {
              code: '2723130',
              name: '大阪狭山市狭山＊',
              int: '1',
            },
            {
              code: '2730130',
              name: '島本町若山台＊',
              int: '1',
            },
            {
              code: '2820400',
              name: '西宮市宮前町',
              int: '1',
            },
            {
              code: '2821000',
              name: '加古川市加古川町',
              int: '1',
            },
            {
              code: '2920102',
              name: '奈良市西紀寺町',
              int: '1',
            },
            {
              code: '2920230',
              name: '大和高田市大中＊',
              int: '1',
            },
            {
              code: '2920431',
              name: '天理市川原城町＊',
              int: '1',
            },
            {
              code: '2920631',
              name: '桜井市粟殿＊',
              int: '1',
            },
            {
              code: '2921031',
              name: '香芝市本町＊',
              int: '1',
            },
            {
              code: '2934530',
              name: '安堵町東安堵＊',
              int: '1',
            },
            {
              code: '2936131',
              name: '奈良川西町結崎＊',
              int: '1',
            },
            {
              code: '2942631',
              name: '広陵町南郷＊',
              int: '1',
            },
            {
              code: '2942730',
              name: '河合町池部＊',
              int: '1',
            },
            {
              code: '3020835',
              name: '紀の川市西大井＊',
              int: '1',
            },
            {
              code: '3120131',
              name: '鳥取市福部町細川＊',
              int: '1',
            },
            {
              code: '3120401',
              name: '境港市東本町',
              int: '1',
            },
            {
              code: '3120431',
              name: '境港市上道町＊',
              int: '1',
            },
            {
              code: '3137230',
              name: '北栄町土下＊',
              int: '1',
            },
            {
              code: '3220532',
              name: '大田市仁摩町仁万＊',
              int: '1',
            },
            {
              code: '3321439',
              name: '真庭市蒜山下福田＊',
              int: '1',
            },
            {
              code: '3321441',
              name: '真庭市蒜山上福田＊',
              int: '1',
            },
            {
              code: '3420200',
              name: '呉市宝町',
              int: '1',
            },
          ],
        },
        comments: {
          forecast: {
            text: 'この地震により、日本の沿岸では若干の海面変動があるかもしれませんが、被害の心配はありません。\nこの地震について、緊急地震速報を発表しています。',
            codes: ['0212', '0241'],
          },
          var: {
            text: '＊印は気象庁以外の震度観測点についての情報です。',
            codes: ['0262'],
          },
        },
      },
    }
    return EqmonitorTelegramSchema.fromDmdataToTelegramV3(payload)
  }
}