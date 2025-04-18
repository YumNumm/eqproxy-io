import { exit } from "node:process";
import { serve } from "@hono/node-server";
import { instrument } from "@socket.io/admin-ui";
import { Hono } from "hono";
import { Server, Socket } from "socket.io";
import { App, type TemplatedApp } from "uWebSockets.js";
import { Logger } from "..";
import type { ClientToServerEvents, ServerToClientEvents } from "./model";

class WebSocketProvider {
  constructor() {
    this.io = new Server<ClientToServerEvents, ServerToClientEvents>({
      maxHttpBufferSize: 1e4,
      cors: {
        origin: [
          "https://status.ws.api.eqmonitor.app",
          "https://status.api.eqmonitor.app",
          "https://eqmonitor-web.pages.dev",
          "https://web.eqmonitor.app",
          "https://widgetbook.eqmonitor.app",
        ],
      },
    });

    instrument(this.io, {
      auth: {
        type: "basic",
        username: "yumnumm",
        password:
          "$2a$12$/9W1feY3e8owseqQH9tHFu/JR6M9b4d2/2KQUe3KovUBzbjMOUyiK",
      },
      mode: "production",
      serverId: `${require("node:os").hostname()}#${process.pid}`,
      readonly: true,
    });

    this.app = App({});
    this.app.get("/health", (res, req) => {
      res.writeStatus("200 OK");
      res.end("OK");
    });
    this.app.get("*", (res, req) => {
      res.writeStatus("404 Not Found");
      res.end("Not Found");
    });
    this.io.attachApp(this.app);
  }

  io: Server;
  app: TemplatedApp;

  public async broadcast(data: unknown) {
    Logger.debug("socket broadcast", data);

    this.io.emit("data", data);
  }

  public async start() {
    this.io.on("connection", (socket) => {
      Logger.debug("socket connected");
      socket.on("message", (_) => {
        socket.disconnect();
      });
      socket.on("disconnect", (reason: unknown) => {
        Logger.debug("socket disconnected", reason);
        socket.removeAllListeners();
      });
      socket.on("error", (err) => {
        Logger.error("socket error", err);
        socket.removeAllListeners();
        socket.disconnect();
      });
      socket.on("ping", (callback) => {
        callback();
      });
    });

    const app = App({});
    this.io.attachApp(app);
    app.listen(4000, (token) => {
      if (!token) {
        Logger.warn("failed to listen to port 4000");
        exit(1);
      }
      Logger.info("Listening to port 4000");
    });

    const ioMetrics = require("socket.io-prometheus");
    const promRegister = require("prom-client").register;
    ioMetrics(this.io);
    const hono = new Hono();
    hono.get("/metrics", async (c) => {
      const metrics = await promRegister.metrics();
      return c.text(metrics.toString());
    });
    serve({
      fetch: hono.fetch,
      port: 4002,
    });
  }
}

export const websocket = new WebSocketProvider();
