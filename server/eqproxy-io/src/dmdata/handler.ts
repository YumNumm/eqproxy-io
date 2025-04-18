import type {
	EarthquakeInformation,
	EewInformation,
} from '@dmdata/telegram-json-types';
import { EqmonitorTelegramSchema } from '@eqproxy-io/eqapi-types-v3';
import { Logger } from '..';
import { websocket } from '../websocket/websocket';
class DmDataTelegramHandler {
	async eewInformation(telegram: EewInformation.Latest.Main): Promise<void> {
		switch (telegram.type) {
			case 'リアルタイム震度':
				return;
			case '緊急地震速報配信テスト':
				Logger.info('緊急地震速報配信テストを受信しました。');
				break;
			case '緊急地震速報（地震動予報）': {
				//TODO(YumNumm): API POST
				const data = EqmonitorTelegramSchema.fromDmdataToTelegramV3(telegram);
				const broadcast = data[0];
				// 取消報の場合  serialNo をincrement
				if (broadcast.infoType === '取消') {
					broadcast.serialNo = (broadcast.serialNo ?? 0) + 1;
				}
				await websocket.broadcast(broadcast);
				Logger.info('Broadcasted');
				Logger.info(broadcast);
				break;
			}
			default:
				break;
		}
	}

	async earthquakeInforamtion(
		telegram: EarthquakeInformation.Latest.Main,
	): Promise<void> {
		const data = EqmonitorTelegramSchema.fromDmdataToTelegramV3(telegram);
		for await (const d of data) {
			await websocket.broadcast(d);
			Logger.info('Broadcasted');
			Logger.info(d);
		}
	}
}

export const dmDataTelegramHandler = new DmDataTelegramHandler();
