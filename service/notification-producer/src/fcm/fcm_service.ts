import * as admin from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';
import { config } from '../config/config';

class FcmService {
	async init() {
		await admin.initializeApp({
			credential: applicationDefault(),
		});
	}

	async send(messages: admin.messaging.Message[]) {
		// chunk 500
		const start = performance.now();
		const chunked = chunk(messages, 500);
		for (const chunk of chunked) {
			await this._sendChunk(chunk);
		}
		const end = performance.now();
		console.log(`chunk time: ${end - start}ms`);
	}

	async _sendChunk(messages: admin.messaging.Message[]) {
		const isDryRun = config.FCM_DRY_RUN;

		const start = performance.now();
		const result = await admin.messaging().sendEach(messages, isDryRun);
		const end = performance.now();
		console.log(`send time: ${end - start}ms`);
		return result;
	}
}

export const fcmService = new FcmService();

export const chunk = <T>(array: T[], size: number): T[][] => {
	return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
		array.slice(i * size, (i + 1) * size),
	);
};
