import { exit } from 'process';
import { config } from './src/config/config';
import { startListeningSupabaseProxy } from './src/service/supabase';
import { startListeningDmdataProxy } from './src/service/dmdata';

let connectionCount = 0;

const httpServer = Bun.serve({
	fetch(request, server) {
		const { searchParams, pathname } = new URL(request.url);
		const auth =
			searchParams.get('key') ?? request.headers.get('Authorization');

		if (pathname === '/health') {
			return new Response('OK', { status: 200 });
		}
		if (auth === 'Bearer ' + config.JWT) {
			if (pathname === '/metrics') {
				return Response.json({
					connectionCount,
				});
			}
		}
		if (pathname === '/ws') {
			if (server.upgrade(request)) {
				return;
			}
			return new Response('Upgrade failed', { status: 500 });
		}
		return new Response(undefined, { status: 404 });
	},
	websocket: {
		message(ws, __) {
			ws.close(1000, 'Not implemented');
		},
		open(ws) {
			connectionCount++;
			ws.subscribe('public');
		},
		close(ws, code, message) {
			connectionCount--;
		},
	},
});

export function broadcast(data: string) {
	httpServer.publish('public', data);
}

console.log(`Server running at ${httpServer.url}`);


startListeningSupabaseProxy();
startListeningDmdataProxy();