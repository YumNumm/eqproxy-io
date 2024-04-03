import { EqmonitorTelegramSchema } from "./telegram_v3";
import * as dmdata from "@dmdata/telegram-json-types";

export namespace EarthquakeNankai {
  export interface Comment {
    free: string;
  }

  export interface PublicBody {
    earthquakeInfo: EarthquakeInfo | undefined;
    nextAdvisory: string | undefined;
    text: string | undefined;
  }

  export interface EarthquakeInfo {
    text: string;
    appendix: string | undefined;
    kind:
      | {
          code: string;
          name: string;
        }
      | undefined;
  }

  export interface CancelBody {
    text: string;
  }

  export interface PublicVYSE50 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: "南海トラフ地震臨時情報";
    infoType: "発表" | "訂正";
    eventId: number;
    serialNo: undefined;
    body: PublicBody;
  }

  export interface PublicVYSE51 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: "南海トラフ地震関連解説情報";
    infoType: "発表" | "訂正";
    eventId: number;
    serialNo: undefined;
    body: PublicBody;
  }

  export interface PublicVYSE52 extends EqmonitorTelegramSchema.TelegramV3Base {
    type: "南海トラフ地震関連解説情報";
    infoType: "発表" | "訂正";
    eventId: number;
    serialNo: undefined;
    body: PublicBody;
  }

  export interface Cancel extends EqmonitorTelegramSchema.TelegramV3Base {
    type: "南海トラフ地震臨時情報" | "南海トラフ地震関連解説情報";
    infoType: "取消";
    eventId: number;
    body: CancelBody;
  }

  export type Main = PublicVYSE50 | PublicVYSE51 | PublicVYSE52 | Cancel;

  export function fromEarthquakeNankai(
    telegram: dmdata.EarthquakeNankai.Latest.Main,
  ): EqmonitorTelegramSchema.TelegramV3 {
    if (telegram.infoType == "取消") {
      const data: Cancel = {
        type: telegram.type,
        schemaType: "earthquake-nankai",
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
    const data: PublicVYSE50 | PublicVYSE51 | PublicVYSE52 = {
      eventId: Number(telegram.eventId),
      infoType: telegram.infoType,
      pressTime: telegram.pressDateTime,
      schemaType: "earthquake-nankai",
      serialNo: undefined,
      status: telegram.status,
      type: telegram.type,
      headline: telegram.headline ?? undefined,
      reportTime: telegram.reportDateTime ?? undefined,
      validTime: telegram.validDateTime ?? undefined,
      body: {
        earthquakeInfo:
          telegram.body.earthquakeInfo == null
            ? undefined
            : {
                appendix: telegram.body.earthquakeInfo.appendix ?? undefined,
                kind: telegram.body.earthquakeInfo.kind,
                text: telegram.body.earthquakeInfo.text,
              },
        text: telegram.body.text ?? undefined,
        nextAdvisory: telegram.body.nextAdvisory ?? undefined,
      },
    };
    return data;
  }
}
