import * as v from 'valibot';

export const ConfigSchema = v.object({
	DMDATA_PROXY_URL: v.string(),
	SLACK_WEBHOOK_URL: v.string(),
	GO_RUSH_URL: v.string(),
	POSTGRES: v.string(),
	GOOGLE_APPLICATION_CREDENTIALS: v.string(),
	FCM_DRY_RUN: v.pipe(
		v.string(),
		v.transform((i) => i === 'true'),
	),
});

export const config = v.parse(ConfigSchema, process.env);
