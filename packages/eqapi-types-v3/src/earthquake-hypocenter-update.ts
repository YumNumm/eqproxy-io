import { EqmonitorTelegramSchema } from "./telegram_v3";
import * as dmdata from "@dmdata/telegram-json-types";

export namespace EarthquakeHypocenterUpdate {
  export interface Comment {
    free: string;
  }

  export interface PublicBodyVXSE61 {
    earthquake: EqmonitorTelegramSchema.Earthquake;
    text?: string;
    comments?: Comment;
  }

  export interface CancelBody {
    text: string;
  }

  export interface PublicVXSE61 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: "顕著な地震の震源要素更新のお知らせ";
    infoType: "発表" | "訂正";
    eventId: number;
    body: PublicBodyVXSE61;
  }

  export interface Cancel extends EqmonitorTelegramSchema.TelegramV3Base {
    type: "顕著な地震の震源要素更新のお知らせ";
    infoType: "取消";
    eventId: number;
    body: CancelBody;
  }

  export type Main = PublicVXSE61 | Cancel;

  export function fromEarthquakeHypocenterUpdate(
    telegram: dmdata.EarthquakeHypocenterUpdate.Latest.Main,
  ): EqmonitorTelegramSchema.TelegramV3 {
    if (telegram.infoType == "取消") {
      const data: Cancel = {
        type: telegram.type,
        schemaType: "earthquake-hypocenter-update",
        infoType: "取消",
        eventId: Number(telegram.eventId),
        body: {
          text: telegram.body.text,
        },
        serialNo: undefined,
        pressTime: telegram.pressDateTime,
        headline: telegram.headline ?? undefined,
        reportTime: telegram.reportDateTime ?? undefined,
        validTime: telegram.validDateTime ?? undefined,
        status: telegram.status,
      };
      return data;
    }
    const data: PublicVXSE61 = {
      eventId: Number(telegram.eventId),
      infoType: telegram.infoType,
      pressTime: telegram.pressDateTime,
      schemaType: "earthquake-hypocenter-update",
      serialNo: undefined,
      status: telegram.status,
      type: telegram.type,
      headline: telegram.headline ?? undefined,
      reportTime: telegram.reportDateTime ?? undefined,
      validTime: telegram.validDateTime ?? undefined,
      body: {
        earthquake: EqmonitorTelegramSchema.dmdataEqToEarthquake(
          telegram.body.earthquake,
        ),
        comments: telegram.body.comments,
        text: telegram.body.text,
      },
    };
    return data;
  }
}
