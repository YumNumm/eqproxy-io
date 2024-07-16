import {
  EarthquakeInformation,
  EewInformation,
} from "@dmdata/telegram-json-types"
import { format } from "date-fns"
import { JmaIntensity } from "../sql/sql_service"

class MessageGenerator {
  private eewHistory: EewFcmHistory[] = []
  private vxse51History: EarthquakeInformation.Latest.PublicVXSE51[] = []

  constructor() {}

  handleVxse51(telegram: EarthquakeInformation.Latest.PublicVXSE51): Message {
    // vxse51Historyに同じEventIdの電文があれば消去
    this.vxse51History = this.vxse51History.filter(
      (e) => e.eventId !== telegram.eventId
    )
    this.vxse51History.push(telegram)

    // 最大震度観測1つの場合: 「最大震度4を石川県で観測」
    // 「最大震度4を石川県などで観測」
    const maxIntName = telegram.body.intensity.maxInt
      .replace("+", "強")
      .replace("-", "弱")
    const maxIntPrefs = telegram.body.intensity.prefectures.filter(
      (e) => e.maxInt == telegram.body.intensity.maxInt
    )
    const maxIntMoreThan1 = maxIntPrefs.length > 1
    const maxIntPrefName = maxIntPrefs.map((e) => e.name)[0]
    var title = `震度速報`
    // 震度速報 (第2報)
    if (
      telegram.serialNo !== "1" &&
      telegram.serialNo !== null &&
      telegram.serialNo !== undefined
    ) {
      title += ` (第${telegram.serialNo}報)`
    }

    const subtitle = `${maxIntPrefName}${
      maxIntMoreThan1 ? "などで" : "で"
    }震度${maxIntName}を観測`

    const body = `詳しい情報は追ってお知らせします。`
    let topics = ["earthquake_all"]
    const maxInt = telegram?.body.intensity?.maxInt
    if (maxInt !== null) {
      topics.push(...jmaIntensityToTopicName(maxInt, "earthquake_"))
    }

    return {
      title,
      subtitle,
      body,
      topics,
      regions: telegram.body.intensity?.regions,
      maxIntensity: telegram.body.intensity.maxInt,
    }
  }

  handleVxse52(telegram: EarthquakeInformation.Latest.PublicVXSE52): Message & {
    previous: EarthquakeInformation.Latest.PublicVXSE51 | undefined
  } {
    // vxse51Historyに同じEventIdの電文があれば取得
    const vxse51 = this.vxse51History.find((e) => e.eventId == telegram.eventId)
    this.vxse51History = this.vxse51History.filter(
      (e) => e.eventId !== telegram.eventId
    )
    let topics = ["earthquake_all"]
    const maxInt = vxse51?.body.intensity?.maxInt
    if (maxInt !== undefined) {
      topics.push(...jmaIntensityToTopicName(maxInt, "earthquake_"))
    }

    let magnitude = telegram.body.earthquake.magnitude.value
    if (magnitude == null) {
      magnitude = telegram.body.earthquake.magnitude.condition ?? "不明"
    } else {
      magnitude = "M" + magnitude
    }
    let depth = telegram.body.earthquake.hypocenter.depth.value
    if (depth == "0") {
      depth = "ごく浅い"
    } else if (depth == "700") {
      depth = "700km以上"
    } else if (depth != null) {
      depth = depth + "km"
    } else {
      depth = "不明"
    }
    let title: string = ""
    let body: string = ""
    // 震度情報がある場合
    if (vxse51) {
      const maxInt =
        vxse51.body.intensity?.maxInt.replace("+", "強").replace("-", "弱") ??
        "不明"
      title = `震度速報+震源情報 最大震度 ${maxInt}`
      // 最大震度観測1つの場合: 「最大震度4を石川県で観測」
      // 「最大震度4を石川県などで観測」
      const maxIntName = vxse51.body.intensity.maxInt
        .replace("+", "強")
        .replace("-", "弱")
      const maxIntPrefs = vxse51.body.intensity.prefectures.filter(
        (e) => e.maxInt == vxse51.body.intensity.maxInt
      )
      const maxIntMoreThan1 = maxIntPrefs.length > 1
      const maxIntPrefName = maxIntPrefs.map((e) => e.name)[0]

      const headline =
        (telegram.headline ?? "")
          .replace(" ", "")
          .replace("ころ", "頃")
          // 頃 の前まで取得
          .match(/(.*)、/)?.[1] ?? ""

      body =
        headline +
        `${telegram.body.earthquake.hypocenter.name}で地震がありました。(${magnitude} 深さ${depth})` +
        `\n震度${maxIntName}を${maxIntPrefName}${
          maxIntMoreThan1 ? "などで" : "で"
        }観測しています。\n` +
        (telegram.body.comments.free ?? "")
      const ttsMessage =
        `${telegram.body.earthquake.hypocenter.name}で地震がありました。${magnitude}、深さ${depth}` +
        `最大震度${maxIntName}を${maxIntPrefName}${
          maxIntMoreThan1 ? "などで" : ""
        }観測しています。`
          .replace("M", "マグニチュード")
          .replace(".", "点")
          .replace("km", "キロメートル")
    } else {
      title = `震源情報`
      body = `${telegram.body.earthquake.hypocenter.name}で${magnitude} 深さ${depth}の地震がありました`
    }
    return {
      title: title,
      body,
      subtitle: "",
      topics,
      regions: vxse51?.body.intensity.regions,
      maxIntensity: vxse51?.body.intensity.maxInt,
      previous: vxse51,
    }
  }

  handleVxse53(telegram: EarthquakeInformation.Latest.PublicVXSE53): Message {
    let topics = ["earthquake_all"]
    // 最大震度ごとにTOPICを追加
    const tempMaxInt = telegram.body.intensity?.maxInt
    if (tempMaxInt !== undefined) {
      topics.push(...jmaIntensityToTopicName(tempMaxInt, "earthquake_"))
    }
    const isFar = telegram.headline?.includes("海外で規模の大きな地震")
    /*
          (comment.free?.contains('大規模な噴火が発生しました') ?? false) &&
          (comment.free?.contains('実際には、規模の大きな地震は発生していない点に留意') ?? false);*/

    const isVolcano =
      (telegram.body.comments.free?.includes("大規模な噴火が発生しました") ??
        false) &&
      (telegram.body.comments.free?.includes(
        "実際には、規模の大きな地震は発生していない点に留意"
      ) ??
        false)

    let magnitude = telegram.body.earthquake.magnitude.value
    if (magnitude == null) {
      magnitude = telegram.body.earthquake.magnitude.condition ?? "不明"
    } else {
      magnitude = "M" + magnitude
    }
    let depth = telegram.body.earthquake.hypocenter.depth.value ?? "不明"
    if (depth == "0") {
      depth = "ごく浅い"
    } else if (depth == "700") {
      depth = "700km以上"
    } else if (depth !== "不明") {
      depth = depth + "km"
    }

    const maxInt =
      telegram.body.intensity?.maxInt.replace("+", "強").replace("-", "弱") ??
      "不明"
    const maxIntPrefs =
      telegram.body.intensity?.prefectures.filter(
        (e) => e.maxInt == telegram.body.intensity?.maxInt
      ) ?? []
    const maxIntPrefsName = maxIntPrefs.map((e) => e.name)
    const maxIntMoreThan1 = (maxIntPrefs ?? []).length > 1
    let title =
      telegram.body.intensity == undefined
        ? `地震情報 `
        : `地震情報 最大震度 ${maxInt}`

    // x日xx時xx分ころ、地震による.... の x日xx時xx分ころ を取得
    const dateTime = telegram.headline?.match(/(.*)、/)?.[0] ?? ""
    const formattedDateTime = (
      dateTime

        .replace("ころ", "頃")
        // 頃 の前まで取得
        .match(/(.*)、/)?.[0] ?? ""
    ).replace(" ", "")
    let body = `${formattedDateTime}${telegram.body.earthquake.hypocenter.name}で地震がありました。 (${magnitude} 深さ${depth})`

    if (telegram.body.intensity !== undefined) {
      body += `\n最大震度 ${maxInt}`
    } else {
      body += "\n震度1以上を観測した地域はありません"
    }
    if (maxIntPrefsName.length > 0) {
      body += `を${maxIntPrefsName[0]}${
        maxIntMoreThan1 ? "など" : ""
      }で観測しています`
    }
    const message = telegram.body.comments.forecast?.text
    if (message) {
      body += `\n${message}`
    }
    let ttsMessage =
      `${telegram.body.earthquake.hypocenter.name}で地震がありました。${magnitude}、深さ${depth}` +
      `\n最大震度 ${maxInt}`
        .replace("M", "マグニチュード")
        .replace(".", "点")
        .replace("km", "キロメートル")
    if (isFar) {
      title = "海外地震情報 "
      const serialNo = Number(telegram.serialNo)
      if (Number.isInteger(serialNo) && serialNo > 1) {
        title += `(遠地地震情報 第${serialNo}報)`
      } else {
        title += "(遠地地震情報)"
      }
      body = `${telegram.body.earthquake.hypocenter.name}`
      if (telegram.body.earthquake.hypocenter.detailed != undefined) {
        body += `(${telegram.body.earthquake.hypocenter.detailed.name})`
      }
      body += `で地震発生 `
      body += `(${magnitude} 深さ${depth})`
      body += telegram.body.comments.forecast?.text ?? ""
      body += telegram.body.comments?.free ?? ""
      ttsMessage = `海外地震情報 遠地 地震情報 `
      if (Number.isInteger(serialNo) && serialNo > 1) {
        ttsMessage += `第${serialNo}報`
      }
      ttsMessage += "。"
      ttsMessage += `${telegram.body.earthquake.hypocenter.name}`
      if (telegram.body.earthquake.hypocenter.detailed != undefined) {
        ttsMessage += `、${telegram.body.earthquake.hypocenter.detailed.name}、`
      }
      ttsMessage += `で${magnitude} 深さ${depth}の地震が発生しました。`
        .replace("km", "キロメートル")
        .replace("M", "マグニチュード")
    }
    if (isVolcano) {
      title = "海外噴火情報"
      const serialNo = Number(telegram.serialNo)
      if (Number.isInteger(serialNo) && serialNo > 1) {
        title += `(第${serialNo}報)`
      } else {
      }
      body =
        telegram.body.comments.free ??
        "海外で大規模な噴火が発生しました。" +
          telegram.body.earthquake.hypocenter.name ??
        "不明"
      ttsMessage = `海外噴火情報 `
      if (Number.isInteger(serialNo) && serialNo > 1) {
        ttsMessage += `第${serialNo}報`
      }
      ttsMessage += "。"
      ttsMessage += telegram.body.comments.free ?? ""
    }
    return {
      title,
      body,
      subtitle: "",
      topics,
      regions: telegram.body.intensity?.regions,
      maxIntensity: telegram.body.intensity?.maxInt,
    }
  }

  handleVxse62(telegram: EarthquakeInformation.Latest.PublicVXSE62): Message {
    const topics = ["earthquake_vxse62"]

    const title =
      "長周期地震動の観測情報 " +
      `最大階級 ${telegram.body.intensity?.maxLgInt}`
    const maxLgInt = telegram.body.intensity?.maxLgInt ?? "不明"
    const maxLgIntPrefs = telegram.body.intensity?.prefectures.filter(
      (e) => e.maxLgInt == telegram.body.intensity?.maxLgInt
    )
    const maxLgIntName = maxLgIntPrefs?.map((e) => e.name)[0]
    const maxLgIntMoreThan1 = (maxLgIntPrefs ?? []).length > 1
    const body = `最大長周期地震動階級${maxLgInt}を${
      maxLgIntName ?? "不明な地域"
    }${
      maxLgIntMoreThan1 ? "など" : ""
    }で観測しています。\n周期の長い揺れが発生しました`
    const ttsMessage = `${telegram.headline ?? ""}\n最大階級${maxLgInt}を${
      maxLgIntName ?? "不明な地域"
    }${
      maxLgIntMoreThan1 ? "など" : ""
    }で観測しています。これらの地域では、周期の長い揺れが発生しました。`

    return {
      title,
      body,
      subtitle: "",
      topics,
      regions: undefined,
      maxIntensity: undefined,
    }
  }

  handleVzse40(telegram: EarthquakeInformation.Latest.PublicVZSE40): Message {
    let topics = ["basic_vzse40"]
    const title = telegram.headline ?? ""
    const body = telegram.body.text ?? ""
    return {
      title,
      body,
      subtitle: "",
      topics,
      regions: undefined,
      maxIntensity: undefined,
    }
  }

  handleEew(
    telegram: EewInformation.Latest.PublicCommon | EewInformation.Latest.Cancel
  ):
    | (Message & {
        isOnePointEew?: boolean
        isWarning?: boolean
      })
    | null {
    if (telegram.infoType == "取消") {
      const lastEew = this.eewHistory.find((e) => e.eventId == telegram.eventId)
      let topics = ["eew_all"]
      let isOnePointEew = false
      if (lastEew !== undefined) {
        // 1点検知EEWかどうか
        isOnePointEew = lastEew.isOnePointEew
        if (isOnePointEew) {
          topics.length = 0
          topics.push("eew_all_low_accuracy")
        } else {
          const maxInt = lastEew.maxInt
          if (maxInt !== undefined) {
            const intensityTopics = jmaIntensityToTopicName(maxInt, "eew_")
            topics.push(...intensityTopics)
          }
        }
      }
      return {
        title: telegram.headline ?? "緊急地震速報の取消",
        subtitle: "",
        body: telegram.body.text ?? "",
        topics,
        regions: undefined,
        maxIntensity: undefined,
      }
    }

    const body = telegram.body
    // 1点検知EEWかどうか
    const isOnePointEew =
      body.earthquake.hypocenter.accuracy.epicenters[0] == "1" &&
      body.earthquake.condition == undefined

    // 前回の情報を取得
    const lastEew = this.eewHistory.find((e) => e.eventId == telegram.eventId)
    let maxInt =
      telegram.body.intensity?.forecastMaxInt.to == "over"
        ? telegram.body.intensity?.forecastMaxInt.from
        : telegram.body.intensity?.forecastMaxInt.to
    if (maxInt == "不明") {
      maxInt = undefined
    }
    let maxLgInt =
      telegram.body.intensity?.forecastMaxLgInt?.to == "over"
        ? telegram.body.intensity?.forecastMaxLgInt?.from
        : telegram.body.intensity?.forecastMaxLgInt?.to
    if (maxLgInt == "不明") {
      maxLgInt = undefined
    }

    if (lastEew !== undefined) {
      let isContinue = false
      // * 続行ケース判定 *
      // 最終報の場合
      if (telegram.body.isLastInfo) {
        isContinue = true
      }
      // 予報から警報になった場合
      if (lastEew.isWarning == false && telegram.body.isWarning) {
        isContinue = true
      }
      // キャンセル報の場合
      if (telegram.body.isCanceled) {
        isContinue = true
      }
      // 1点検知EEWではなくなった場合
      if (lastEew.isOnePointEew && !isOnePointEew) {
        isContinue = true
      }
      // 最大震度が不明から不明では無くなった場合
      if (lastEew.maxInt == undefined && maxInt !== undefined) {
        isContinue = true
      }
      // 最大震度が上がった場合
      if (
        lastEew.maxInt !== undefined &&
        maxInt !== undefined &&
        intensityToInt(lastEew.maxInt) < intensityToInt(maxInt)
      ) {
        isContinue = true
      }

      // 最大長周期地震動階級が不明から変わった場合
      if (lastEew.maxLgInt == undefined && maxLgInt !== undefined) {
        isContinue = true
      }

      // 最大長周期地震動階級が上がった場合
      if (
        lastEew.maxLgInt !== undefined &&
        maxLgInt !== undefined &&
        intensityToInt(lastEew.maxLgInt) < intensityToInt(maxLgInt)
      ) {
        isContinue = true
      }

      // * 続行しない場合の処理 *
      if (!isContinue) {
        console.log(
          `FCMのEEW更新条件を満たしませんでした。第${telegram.serialNo}報`
        )
        return null
      }
      // * 続行する場合 *
      console.log(`FCMのEEW更新条件を満たしました。第${telegram.serialNo}報`)
      // 履歴更新
      lastEew.isWarning = telegram.body.isWarning
      lastEew.isOnePointEew = isOnePointEew
      lastEew.maxInt = maxInt
      lastEew.maxLgInt = maxLgInt
      lastEew.isCancel = telegram.body.isCanceled
      lastEew.isLastInfo = telegram.body.isLastInfo
      lastEew.serialNo = Number(telegram.serialNo)
    } else {
      // 前回の情報がない場合、新規に追加
      console.log(
        `FCMのEEW更新条件を満たしました。初回 第${telegram.serialNo}報`
      )
      this.eewHistory.unshift({
        eventId: telegram.eventId,
        isWarning: telegram.body.isWarning,
        isOnePointEew: isOnePointEew,
        maxInt: undefined,
        maxLgInt: undefined,
        isCancel: telegram.body.isCanceled,
        isLastInfo: telegram.body.isLastInfo,
        serialNo: Number(telegram.serialNo),
      })
    }

    //* title
    const title: string = (
      body.isWarning
        ? "🚨緊急地震速報(警報) " + telegram.headline ?? ""
        : "⚠️緊急地震速報(予報) "
    ).toHalfWidth()

    //* sustitle
    let subtitle: string = ""

    // 「予想最大震度6弱以上 予想最大長周期階級3以上 」
    if (body.intensity !== undefined) {
      const intensity = body.intensity!
      subtitle += "予想最大震度"
      if (intensity.forecastMaxInt.to == "over") {
        subtitle += intensity.forecastMaxInt.from
          .replace("+", "強")
          .replace("-", "弱")
        subtitle += "以上"
      } else {
        subtitle += intensity.forecastMaxInt.to
          .replace("+", "強")
          .replace("-", "弱")
      }
      subtitle += " "
      // 長周期地震動
      if (
        intensity.forecastMaxLgInt != null &&
        intensity.forecastMaxLgInt.to != "0"
      ) {
        const maxLgInt = intensity.forecastMaxLgInt
        subtitle += "予想最大長周期階級"
        if (maxLgInt.to == "over") {
          subtitle += maxLgInt.from
          subtitle += "以上"
        } else {
          subtitle += maxLgInt.to
        }
      }
    }

    //* message
    let message: string = telegram.headline ?? ""
    if (message == "") {
      message +=
        body.earthquake.hypocenter.name +
        "で地震" +
        (body.earthquake.originTime == undefined ? "検知" : "発生")
    }

    if (message !== "") {
      message += "\n"
    }
    // 「第2報」・「最終 第17報」
    if (body.isLastInfo) {
      message += "最終 "
    }
    message += `第${telegram.serialNo}報 `

    // 「マグニチュード6.0」
    if (body.earthquake.condition == "仮定震源要素") {
      if (
        body.earthquake.originTime == undefined &&
        body.earthquake.hypocenter.accuracy.epicenters[0] == "1"
      ) {
        message += "レベル法による検知"
      } else {
        message += "PLUM法による検知"
      }
    } else {
      message += "M"
      message += body.earthquake.magnitude.value ?? "不明"
      message += " "
      // 「深さ 60km」
      message += "深さ "
      if (body.earthquake.hypocenter.depth.value == "0") {
        message += "ごく浅い"
      } else if (body.earthquake.condition == "仮定震源要素" || isOnePointEew) {
        message += "不明"
      } else {
        message += body.earthquake.hypocenter.depth.value + "km"
      }
      if (body.earthquake.hypocenter.accuracy.epicenters[0] == "1") {
        message += " (IPF1点による検知)"
      }
    }
    message += "\n"
    // 「19:34頃発生」・「19:34頃検知」
    if (body.earthquake.originTime !== undefined) {
      const dt = new Date(body.earthquake.originTime)
      message += `${format(dt, "HH:mm:ss")}発生`
    } else {
      const dt = new Date(body.earthquake.arrivalTime)
      message += `${format(dt, "HH:mm:ss")}検知`
    }

    message = message.toHalfWidth()

    // 通常送信
    let topics = isOnePointEew ? ["eew_low_accuracy"] : ["eew", "eew_all"]
    if (!isOnePointEew && maxInt !== undefined) {
      const intensityTopics = jmaIntensityToTopicName(maxInt, "eew")
      console.log(intensityTopics)
      topics.push(...intensityTopics)
    }
    return {
      title,
      subtitle,
      body: message,
      topics,
      isOnePointEew,
      isWarning: body.isWarning,
      regions: undefined,
      maxIntensity: undefined,
    }
  }
}

export type Message = {
  title: string
  subtitle: string
  body: string
  topics: string[]
  regions:
    | EarthquakeInformation.Latest.IntensityMaxInt[]
    | EarthquakeInformation.Latest.IntensityMaxIntOnRevise[]
    | undefined
  maxIntensity: EarthquakeInformation.Latest.IntensityClass | undefined
}

interface EewFcmHistory {
  eventId: string
  serialNo: number
  isWarning: boolean
  isLastInfo: boolean
  isCancel: boolean
  isOnePointEew: boolean
  maxInt: EewInformation.Latest.IntensityClass | undefined
  maxLgInt: EewInformation.Latest.IntensityClass | undefined
}

declare global {
  interface String {
    toHalfWidth(): string
  }
}

String.prototype.toHalfWidth = function () {
  return this.replace(/[！-～]/g, function (input) {
    return String.fromCharCode(input.charCodeAt(0) - 0xfee0)
  })
}

function intensityToInt(
  intensity:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5-"
    | "5+"
    | "6-"
    | "6+"
    | "7"
    | "不明"
): number {
  switch (intensity) {
    case "不明":
      return -1
    case "0":
      return 0
    case "1":
      return 1
    case "2":
      return 2
    case "3":
      return 3
    case "4":
      return 4
    case "5-":
      return 5
    case "5+":
      return 6
    case "6-":
      return 7
    case "6+":
      return 8
    case "7":
      return 9
    default:
      return 0
  }
}

function jmaIntensityToTopicName(
  intensity:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5-"
    | "5+"
    | "6-"
    | "6+"
    | "7"
    | "不明",
  prefix: string
): string[] {
  switch (intensity) {
    case "0":
      return [prefix + "0"]
    case "1":
      return [...jmaIntensityToTopicName("0", prefix), prefix + "1"]
    case "2":
      return [...jmaIntensityToTopicName("1", prefix), prefix + "2"]
    case "3":
      return [...jmaIntensityToTopicName("2", prefix), prefix + "3"]
    case "4":
      return [...jmaIntensityToTopicName("3", prefix), prefix + "4"]
    case "5-":
      return [...jmaIntensityToTopicName("4", prefix), prefix + "5lower"]
    case "5+":
      return [
        ...jmaIntensityToTopicName("5-", prefix),
        prefix + "5lower" + "5upper",
      ]
    case "6-":
      return [...jmaIntensityToTopicName("5+", prefix), prefix + "6lower"]
    case "6+":
      return [...jmaIntensityToTopicName("6-", prefix), prefix + "6upper"]
    case "7":
      return [...jmaIntensityToTopicName("6+", prefix), prefix + "7"]
    case "不明":
      return [prefix + "unknown"]
  }
}

export const messageGenerator = new MessageGenerator()
