import { EqmonitorTelegramSchema } from '@eqproxy-io/eqapi-types-v3'

export type ServerToClientEvents = {
  data: (data: EqmonitorTelegramSchema.TelegramV3) => void
}

export type ClientToServerEvents = {
  message: (data: string) => void
}
