import {
	EarthquakeInformation,
	EewInformation,
} from '@dmdata/telegram-json-types';
import { Timestamp } from '@bufbuild/protobuf';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';
import { messageGenerator } from './dmdata/message_generator';
import { gzipSync } from 'zlib';
import {
	NotificationChannel,
	generateBodyForAndroid,
} from './dmdata/fcm_message_generator';
(async () => {
	try {
		const url =
			'https://sample.dmdata.jp/conversion/json/schema/earthquake-information/vxse53_rjtd_20210213231800.json';
		const response = await fetch(url);
		const json = await response.json();
		const telegram = json as EarthquakeInformation.Latest.PublicVXSE53;
		const message = messageGenerator.handleVxse53(telegram);
		if (!message) {
			return;
		}

		const fcmMessage: Message = {
			token:
				'dpTSSkXGKEi7nGg-RFjbeC:APA91bHSa0kUMf55uR5KH_Ac8tc-R5wcA09w08AizItXsZdyjQx4CwmCtV8HORqp3XmYBZrBWjqsBYjR6ksQaXZd5sCdZgunlHaJ-DaAGOdSEiyWeNI_4Zw1alN9qHhu6iycziTEGK93',
			notification: {
				title: message.title.toHalfWidth(),
				body: message.body.toHalfWidth(),
			},
			data: {
				enableDebugMode: 'true',
			},
			apns: {
				payload: {
					aps: {
						mutableContent: true,
						sound: 'default',
						threadId: telegram.eventId,
						contentAvailable: true,
						badge: 0,
						alert: {
							subtitle: message.subtitle.toHalfWidth(),
						},
						'relevance-score': 1,
						'interruption-level': 'time-sensitive',
					},
				},
			},
			android: {
				collapseKey: telegram.eventId,
				notification: {
					body: generateBodyForAndroid(message),
					channelId: NotificationChannel.VXSE53,
					icon: '@mipmap/ic_launcher_foreground',
					imageUrl: undefined,
				},
			},
		};
		if (fcmMessage.token === undefined) {
			throw new Error('Not implemented');
		}

		console.log(JSON.stringify(fcmMessage));
	} catch (e) {
		console.error(e);
	}
})();
