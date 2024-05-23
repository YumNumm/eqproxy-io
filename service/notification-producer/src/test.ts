import { EewInformation } from "@dmdata/telegram-json-types"
import { messageGenerator } from "./dmdata/message_generator"
import { notificationService } from "./notification/notification_service"
import { JmaIntensity, SqlService, sqlService } from "./sql/sql_service"
import { client } from "./sample"

async function main() {
  await sqlService.start()
  const payload: EewInformation.Latest.PublicCommon = {
    _originalId:
      "7fdf6125b3a7933d78531829b852820941704d6d5bac4a8d12dc9e81f8bbe79121a7cb3b2db432b1085d33958849ce74",
    _schema: {
      type: "eew-information",
      version: "1.0.0",
    },
    type: "緊急地震速報（地震動予報）",
    title: "緊急地震速報（地震動予報）",
    status: "通常",
    infoType: "発表",
    editorialOffice: "大阪管区気象台",
    publishingOffice: ["気象庁"],
    pressDateTime: "2024-05-23T11:00:55Z",
    reportDateTime: "2024-05-23T20:00:55+09:00",
    targetDateTime: "2024-05-23T20:00:55+09:00",
    eventId: "20240523200007",
    serialNo: "5",
    infoKind: "緊急地震速報",
    infoKindVersion: "1.2_0",
    headline: null,
    body: {
      isLastInfo: true,
      isCanceled: false,
      isWarning: false,
      earthquake: {
        originTime: "2024-05-23T19:59:58+09:00",
        arrivalTime: "2024-05-23T20:00:07+09:00",
        hypocenter: {
          code: "189",
          name: "根室半島南東沖",
          coordinate: {
            latitude: {
              text: "43.1˚N",
              value: "43.1000",
            },
            longitude: {
              text: "145.6˚E",
              value: "145.6000",
            },
            height: {
              type: "高さ",
              unit: "m",
              value: "-60000",
            },
            geodeticSystem: "日本測地系",
          },
          depth: {
            type: "深さ",
            unit: "km",
            value: "60",
          },
          reduce: {
            code: "9708",
            name: "根室半島沖",
          },
          landOrSea: "海域",
          accuracy: {
            epicenters: ["4", "9"],
            depth: "4",
            magnitudeCalculation: "5",
            numberOfMagnitudeCalculation: "5",
          },
        },
        magnitude: {
          type: "マグニチュード",
          value: "4.3",
          unit: "Mj",
        },
      },
      intensity: {
        forecastMaxInt: {
          from: "2",
          to: "2",
        },
        forecastMaxLgInt: {
          from: "0",
          to: "0",
        },
        appendix: {
          maxIntChange: "0",
          maxLgIntChange: "0",
          maxIntChangeReason: "0",
        },
        regions: [],
      },
    },
  }
  const messaege = messageGenerator.handleEew(payload)
  if (!messaege) {
    console.log("message is null")
    return
  }
  const result = await notificationService.handleEewForecast(messaege, payload)
  console.log(result)
}

main()
