// @bun
// src/service/test_eew_service.ts
import {readdir} from "fs/promises";

// src/extension/number.ts
function parseNumberOrNull(value) {
  if (value == null) {
    return null;
  }
  const parsed = Number(value);
  return isNaN(parsed) ? null : parsed;
}
function parseNumber(value, { defaultValue = 0 } = { defaultValue: 0 }) {
  const parsed = Number(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

// src/service/dmdata.ts
function dmdataEewToV1(telegram) {
  if (telegram.type !== "\u7DCA\u6025\u5730\u9707\u901F\u5831\uFF08\u5730\u9707\u52D5\u4E88\u5831\uFF09") {
    return null;
  }
  switch (telegram.infoType) {
    case "\u767A\u8868": {
      const forecastMaxIntBase = telegram.body.intensity?.forecastMaxInt.to === "over" ? telegram.body.intensity?.forecastMaxInt?.from : telegram.body.intensity?.forecastMaxInt?.to;
      const forecastMaxIntIsOver = telegram.body.intensity?.forecastMaxInt.to === "over";
      const forecastMaxInt = forecastMaxIntBase == "\u4E0D\u660E" ? undefined : forecastMaxIntBase;
      const forecastMaxLgIntBase = telegram.body.intensity?.forecastMaxLgInt?.to === "over" ? telegram.body.intensity?.forecastMaxLgInt?.from : telegram.body.intensity?.forecastMaxLgInt?.to;
      const forecastMaxLgIntIsOver = telegram.body.intensity?.forecastMaxLgInt?.to === "over";
      const forecastMaxLgInt = forecastMaxLgIntBase == "\u4E0D\u660E" ? undefined : forecastMaxLgIntBase;
      const result = {
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
        depth: parseNumberOrNull(telegram.body.earthquake.hypocenter.depth.value) ?? null,
        forecast_max_intensity: forecastMaxInt ?? null,
        forecast_max_intensity_is_over: forecastMaxIntIsOver,
        forecast_max_lpgm_intensity: forecastMaxLgInt ?? null,
        forecast_max_lpgm_intensity_is_over: forecastMaxLgIntIsOver,
        hypo_name: telegram.body.earthquake.hypocenter?.name ?? undefined,
        is_warning: telegram.body.isWarning,
        latitude: parseNumberOrNull(telegram.body.earthquake.hypocenter?.coordinate?.latitude?.value),
        longitude: parseNumberOrNull(telegram.body.earthquake.hypocenter?.coordinate?.longitude?.value),
        magnitude: parseNumberOrNull(telegram.body.earthquake.magnitude?.value),
        origin_time: telegram.body.earthquake.originTime ?? null,
        regions: formatToJson(telegram.body.intensity?.regions.map((region) => {
          return {
            code: region.code,
            forecastMaxInt: region.forecastMaxInt,
            forecastMaxLgInt: region.forecastMaxLgInt,
            isPlum: region.isPlum,
            isWarning: region.isWarning,
            name: region.name,
            arrivalTime: region.arrivalTime
          };
        }) ?? []) ?? null,
        report_time: telegram.reportDateTime,
        accuracy: formatToJson(telegram.body.earthquake.hypocenter.accuracy) ?? null,
        is_plum: telegram.body.earthquake.condition === "\u4EEE\u5B9A\u9707\u6E90\u8981\u7D20"
      };
      return result;
    }
    case "\u8A02\u6B63":
    case "\u53D6\u6D88": {
      const result = {
        id: -1,
        event_id: parseNumber(telegram.eventId),
        info_type: telegram.infoType,
        schema_type: telegram._schema.type,
        status: telegram.status,
        type: telegram.type,
        headline: telegram.headline,
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
        is_plum: false
      };
      return result;
    }
  }
}
var formatToJson = function(data) {
  if (data == null || data == undefined) {
    return;
  }
  try {
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    console.error(`formatToJson: ${e}`);
    return;
  }
};

// src/service/test_eew_service.ts
class TestEewService {
  constructor() {
  }
  async handleTest(ws, message) {
    const acceptablePaths = [
      "eew/20170701a",
      "eew/20171213a",
      "eew/20171213b",
      "eew/20220721085038",
      "eew/tech566"
    ];
    if (!acceptablePaths.includes(message)) {
      ws.send(JSON.stringify({
        type: "error",
        message: "Not found"
      }));
      return;
    }
    const files = await readdir(`./assets/${message}`);
    const data = [];
    for (const path of files) {
      console.log(`Reading ${path}`);
      const content = await Bun.file(`./assets/${message}/${path}`).text();
      var payload = JSON.parse(JSON.stringify({
        ...JSON.parse(content),
        type: "\u7DCA\u6025\u5730\u9707\u901F\u5831\uFF08\u5730\u9707\u52D5\u4E88\u5831\uFF09",
        title: "\u7DCA\u6025\u5730\u9707\u901F\u5831\uFF08\u5730\u9707\u52D5\u4E88\u5831\uFF09"
      }));
      data.push(payload);
    }
    console.log(data);
    const oldestTelegram = data.filter((data2) => data2.pressDateTime !== null).sort((a, b) => new Date(a.pressDateTime).getTime() - new Date(b.pressDateTime).getTime());
    console.log(oldestTelegram);
    if (oldestTelegram === undefined) {
      ws.send(JSON.stringify({
        type: "error",
        message: "No data"
      }));
      return;
    }
    const firstPressTime = new Date(oldestTelegram[0].pressDateTime);
    const promises2 = data.map((data2) => {
      const next = new Date(data2.pressDateTime);
      const delay = next.getTime() - firstPressTime.getTime();
      console.log(`Waiting ${delay}ms`);
      return new Promise((resolve) => {
        setTimeout(() => {
          var eewV1 = dmdataEewToV1(data2);
          const diff = new Date().getTime() - new Date(data2.pressDateTime).getTime();
          console.log(eewV1);
          if (eewV1 !== null) {
            eewV1.arrival_time = eewV1.arrival_time !== null ? new Date(new Date(eewV1.arrival_time).getTime() + diff).toISOString() : null;
            eewV1.report_time = new Date(new Date(eewV1.report_time).getTime() + diff).toISOString();
            eewV1.origin_time = eewV1.origin_time !== null ? new Date(new Date(eewV1.origin_time).getTime() + diff).toISOString() : null;
            eewV1.status = "\u8A13\u7DF4";
            const broadcastData = {
              commit_timestamp: new Date().toISOString(),
              eventType: "INSERT",
              new: eewV1,
              old: {},
              schema: "public",
              table: "eew",
              errors: []
            };
            const str = JSON.stringify(broadcastData, null, 2);
            console.log(str);
            ws.send(str);
          } else {
            console.log("eewV1 is null");
          }
          resolve();
        }, delay);
      });
    });
    await Promise.allSettled(promises2);
  }
}
var testEewService = new TestEewService;

// index.ts
function broadcast(data) {
  console.log(`Broadcasting: ${JSON.stringify(data, null, 2)}`);
  httpServer.publish("public", JSON.stringify(data));
}
var connectionCount = 0;
var totalConnectionCount = 0;
var httpServer = Bun.serve({
  fetch(request, server) {
    const { searchParams, pathname } = new URL(request.url);
    const auth = searchParams.get("key") ?? request.headers.get("Authorization");
    if (pathname === "/health") {
      return new Response("OK", { status: 200 });
    }
    if (pathname === "/metrics") {
      return new Response(`# HELP ws_connections_total \u73FE\u5728\u306EWebSocket\u306E\u63A5\u7D9A\u6570
` + "# TYPE ws_connections_total gauge\n" + `ws_connections_total ${connectionCount}\n` + `# HELP ws_connections_total \u7D2F\u8A08\u306EWebSocket\u306E\u63A5\u7D9A\u6570
` + "# TYPE ws_connections_total counter\n" + `total_ws_connections_total ${totalConnectionCount}\n`, {
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
    if (pathname === "/ws") {
      if (server.upgrade(request)) {
        return;
      }
      return new Response("Upgrade failed", { status: 500 });
    }
    return new Response(undefined, { status: 404 });
  },
  websocket: {
    message(ws, message) {
      testEewService.handleTest(ws, message.toString());
    },
    open(ws) {
      connectionCount++;
      totalConnectionCount++;
      ws.subscribe("public");
      setInterval(() => {
        ws.ping(JSON.stringify({
          type: "ping",
          timestamp: new Date().toISOString()
        }));
      }, 15000);
    },
    close(ws, code, message) {
      connectionCount--;
    },
    perMessageDeflate: true,
    sendPings: true,
    backpressureLimit: 1048576,
    closeOnBackpressureLimit: true,
    idleTimeout: 20,
    maxPayloadLength: 1024
  }
});
console.log(`Server running at ${httpServer.url}`);
export {
  broadcast
};
