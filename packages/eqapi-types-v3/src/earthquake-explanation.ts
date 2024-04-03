import { EqmonitorTelegramSchema } from "./telegram_v3";
import * as dmdata from "@dmdata/telegram-json-types";

export namespace EarthquakeExplanation {
  export interface Naming {
    text: string;
    en?: string;
  }

  export interface Comments {
    free: string;
  }

  export interface PublicBody {
    naming?: Naming;
    text: string;
    comments?: Comments;
  }

  export interface CancelBody {
    text: string;
  }

  export interface Public extends EqmonitorTelegramSchema.TelegramV3Base {
    type: "地震の活動状況等に関する情報";
    infoType: "発表" | "訂正";
    body: PublicBody;
  }

  export interface Cancel extends EqmonitorTelegramSchema.TelegramV3Base {
    type: "地震の活動状況等に関する情報";
    infoType: "取消";
    body: CancelBody;
  }

  export type Main = Public | Cancel;

  export function fromEarthquakeExplanation(
    telegram: dmdata.EarthquakeExplanation.Latest.Main,
  ): EqmonitorTelegramSchema.TelegramV3 {
    if (telegram.infoType == "取消") {
      const data: Cancel = {
        type: "地震の活動状況等に関する情報",
        eventId: Number(telegram.eventId),
        infoType: telegram.infoType,
        pressTime: telegram.pressDateTime,
        schemaType: "earthquake-explanation",
        serialNo: undefined,
        status: telegram.status,
        headline: telegram.headline ?? undefined,
        reportTime: telegram.reportDateTime,
        validTime: telegram.validDateTime,

        body: {
          text: telegram.body.text,
        },
      };
      return data;
    }
    const data: Public = {
      type: "地震の活動状況等に関する情報",
      eventId: Number(telegram.eventId),
      infoType: telegram.infoType,
      pressTime: telegram.pressDateTime,
      schemaType: "earthquake-explanation",
      serialNo: undefined,
      status: telegram.status,
      headline: telegram.headline ?? undefined,
      reportTime: telegram.reportDateTime,
      validTime: telegram.validDateTime,

      body: {
        text: telegram.body.text,
        comments: telegram.body.comments,
        naming: telegram.body.naming,
      },
    };
    return data;
  }
}
