import { exit } from "process";
import { config } from "../config/config";
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js';
import { broadcast } from "../..";

export async function startListeningSupabaseProxy() {
	const url = new URL(config.SUPABASE_PROXY_URL);
	const ws = new WebSocket(url);
	ws.onopen = () => {
		console.log(`Connected to Supabase Proxy: ${url}`);
	};
	ws.onclose = () => {
		console.log(
			`Disconnected from Supabase Proxy: ${url}`,
		);
		exit(1);
	};
	ws.onmessage = event => {
		console.log(`Message from Supabase Proxy: ${JSON.stringify(event)}`);
		const json = JSON.parse(
			event.data.toString(),
		) as RealtimePostgresChangesPayload<{
			[key: string]: any;
    }>;
    if (json.table !== "eew") {
      broadcast(JSON.stringify(json));
    }
	};
	ws.onerror = event => {
		console.error(`Error from Supabase Proxy: ${event}`);
	}
}
