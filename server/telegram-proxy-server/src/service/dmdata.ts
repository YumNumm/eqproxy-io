import { exit } from "process";
import { config } from "../config/config";
import { APITypes } from "@dmdata/api-types";
import { EewInformation } from "@dmdata/telegram-json-types";
import { Database, Json } from "@eqproxy-io/eqapi-types-v1";
import { parseNumber, parseNumberOrNull } from "../extension/number";
import { broadcast } from "../..";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";

export async function startListeningDmdataProxy() {
  const url = new URL(config.DMDATA_PROXY_URL);
  const ws = new WebSocket(url);
  ws.onopen = () => {
    console.log(`Connected to DMDATA Proxy: ${url}`);
  };
  ws.onclose = () => {
    console.log(`Disconnected from DMDATA Proxy: ${url}`);
    exit(1);
  };
  ws.onmessage = (event) => {
    const data = json2object<APITypes.WebSocketV2.Event.Data>(
      event.data.toString(),
    );
    console.log(`Message from DMDATA Proxy: ${JSON.stringify(data, null, 2)}`);
    if (data === null) {
      console.error("Failed to parse DMDATA data");
      return;
    }
    if (data.classification == "eew.forecast") {
      if (
        data.compression == "gzip" &&
        data.format == "json" &&
        data.encoding == "base64"
      ) {
        const gzipped = Buffer.from(data.body, "base64");
        const decompressed = Bun.gunzipSync(gzipped);
        const decoder = new TextDecoder();
        const text = decoder.decode(decompressed);
        const telegram = JSON.parse(text) as EewInformation.Latest.Main;
        if (telegram.type === "緊急地震速報（地震動予報）") {
          const eewV1 = dmdataEewToV1(telegram);
          if (eewV1 !== null) {
            // supabase準拠のPayloadを配信
            const broadcastData: RealtimePostgresChangesPayload<{
              [key: string]: any;
            }> = {
              commit_timestamp: new Date().toISOString(),
              eventType: "INSERT",
              new: eewV1,
              old: {},
              schema: "public",
              table: "eew",
              errors: [],
            };
            broadcast(broadcastData);
          }
          // DO SOMETHING
        }
        console.log(`EEW配信条件を満たしませんでした: ${telegram.type}`);
        return;
      }
      return;
    }
    console.log(`Telegram配信条件を満たしませんでした: ${data.classification}`);
  };
  ws.onerror = (event) => {
    console.error(`Error from DMDATA Proxy: ${JSON.stringify(event)}`);
  };
}

function json2object<T>(data: string | ArrayBuffer) {
  if (data instanceof ArrayBuffer) {
    data = new TextDecoder().decode(data);
  }
  try {
    return JSON.parse(data) as T;
  } catch {
    return null;
  }
}

function dmdataEewToV1(telegram: EewInformation.Latest.Main) {
  if (telegram.type !== "緊急地震速報（地震動予報）") {
    return null;
  }
  type Eew = Database["public"]["Tables"]["eew"]["Row"];
  switch (telegram.infoType) {
    case "発表": {
      const forecastMaxIntBase =
        telegram.body.intensity?.forecastMaxInt.to === "over"
          ? telegram.body.intensity?.forecastMaxInt?.from
          : telegram.body.intensity?.forecastMaxInt?.to;
      const forecastMaxIntIsOver =
        telegram.body.intensity?.forecastMaxInt.to === "over";
      const forecastMaxInt =
        forecastMaxIntBase == "不明" ? undefined : forecastMaxIntBase;

      const forecastMaxLgIntBase =
        telegram.body.intensity?.forecastMaxLgInt?.to === "over"
          ? telegram.body.intensity?.forecastMaxLgInt?.from
          : telegram.body.intensity?.forecastMaxLgInt?.to;
      const forecastMaxLgIntIsOver =
        telegram.body.intensity?.forecastMaxLgInt?.to === "over";
      const forecastMaxLgInt =
        forecastMaxLgIntBase == "不明" ? undefined : forecastMaxLgIntBase;
      const result: Eew = {
        // IDは常に`-1`
        id: -1,
        event_id: parseNumber(telegram.eventId),
        info_type: telegram.infoType,
        schema_type: telegram._schema.type,
        status: telegram.status,
        type: telegram.type,
        headline: telegram.headline,
        serial_no: parseNumberOrNull(telegram.serialNo),
        is_canceled: telegram.body.isCanceled,
        is_last_info: telegram.body.isLastInfo,
        arrival_time: telegram.body.earthquake.arrivalTime,
        depth:
          parseNumberOrNull(telegram.body.earthquake.hypocenter.depth.value) ??
          null,
        forecast_max_intensity: forecastMaxInt ?? null,
        forecast_max_intensity_is_over: forecastMaxIntIsOver,
        forecast_max_lpgm_intensity: forecastMaxLgInt ?? null,
        forecast_max_lpgm_intensity_is_over: forecastMaxLgIntIsOver,
        hypo_name: telegram.body.earthquake.hypocenter?.name ?? undefined,
        is_warning: telegram.body.isWarning,
        latitude: parseNumberOrNull(
          telegram.body.earthquake.hypocenter?.coordinate?.latitude?.value,
        ),
        longitude: parseNumberOrNull(
          telegram.body.earthquake.hypocenter?.coordinate?.longitude?.value,
        ),

        magnitude: parseNumberOrNull(telegram.body.earthquake.magnitude?.value),
        origin_time: telegram.body.earthquake.originTime ?? null,
        regions:
          formatToJson(
            telegram.body.intensity?.regions.map((region): Region => {
              return {
                code: region.code,
                forecastMaxInt: region.forecastMaxInt,
                forecastMaxLgInt: region.forecastMaxLgInt,
                isPlum: region.isPlum,
                isWarning: region.isWarning,
                name: region.name,
                arrivalTime: region.arrivalTime,
              };
            }) ?? [],
          ) ?? null,
        report_time: telegram.reportDateTime,
        accuracy:
          formatToJson(telegram.body.earthquake.hypocenter.accuracy) ?? null,
        is_plum: telegram.body.earthquake.condition === "仮定震源要素",
      };
      return result;
    }
    case "訂正":
    case "取消": {
      const result: Eew = {
        // IDは常に`-1`
        id: -1,
        event_id: parseNumber(telegram.eventId),
        info_type: telegram.infoType,
        schema_type: telegram._schema.type,
        status: telegram.status,
        type: telegram.type,
        headline: telegram.headline,
        // 取消時はserial_noを+1しておく
        serial_no: parseNumber(telegram.serialNo, { defaultValue: 100 }) + 1,
        is_canceled: telegram.body.isCanceled,
        is_last_info: telegram.body.isLastInfo,
        arrival_time: null,
        depth: null,
        forecast_max_intensity: null,
        forecast_max_intensity_is_over: null,
        forecast_max_lpgm_intensity: null,
        forecast_max_lpgm_intensity_is_over: null,
        hypo_name: null,
        is_warning: null,
        latitude: null,
        longitude: null,
        magnitude: null,
        origin_time: null,
        regions: null,
        report_time: telegram.reportDateTime,
        accuracy: null,
        is_plum: false,
      };
      return result;
    }
  }
}

interface Region {
  code: string;
  name: string;
  isPlum: boolean;
  isWarning: boolean;
  forecastMaxInt: ForecastMaxInt;
  forecastMaxLgInt?: ForecastMaxLgInt;
  arrivalTime?: string; // 予想到達時刻 / undefinedの場合は`既に主要動到達と推測` / PLUM法の場合、その階級震度を予測した時刻
}

type ForecastMaxInt = {
  from: Database["public"]["Enums"]["jma_intensity"] | "不明";
  to: Database["public"]["Enums"]["jma_intensity"] | "不明" | "over";
};

type ForecastMaxLgInt = {
  from: Database["public"]["Enums"]["jma_lg_intensity"] | "不明";
  to: Database["public"]["Enums"]["jma_lg_intensity"] | "不明" | "over";
};

function formatToJson(data: any): Json | undefined {
  if (data == null || data == undefined) {
    return undefined;
  }
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    console.error(`formatToJson: ${e}`);
    return undefined;
  }
}
