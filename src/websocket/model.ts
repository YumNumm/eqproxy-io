import { EqmonitorTelegramSchema } from '../model/telegram_v3'

export type ServerToClientEvents = {
  data: (data: EqmonitorTelegramSchema.TelegramV3) => void
}

export type ClientToServerEvents = {
  message: (data: string) => void
}
