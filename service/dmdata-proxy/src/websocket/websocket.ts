import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import { config } from '../config/config';
import { Logger } from '..';

const httpServer = createServer((req, response) => {
	response.writeHead(200);
	response.end();
});

export const wss = new WebSocketServer({
  server: httpServer,
});

wss.on('connection', ws => {
	var isAlive = true;
	var interval = setInterval(() => {
		if (ws.readyState === ws.OPEN) {
			if (!isAlive) {
				ws.terminate();
				clearInterval(interval);
				return;
			}
			isAlive = false;
			ws.ping();
		}
	}, 5000);
	Logger.info(`WebSocket connected: ${ws.protocol}`);
	ws.on('error', err => Logger.error(`WebSocket error: ${err}`));
	ws.on('close', () => {
		Logger.info(`WebSocket closed: ${ws.protocol}`);
		clearInterval(interval);
	});
	ws.on('pong', () => {
		isAlive = true;
	});
});


export function startHttpServer() {
  httpServer.listen(config.WEBSOCKET_PORT, () => {
    Logger.info(`WebSocket server started on port ${config.WEBSOCKET_PORT}`);
  });
}