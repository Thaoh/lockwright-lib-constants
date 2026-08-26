import { MS_PER_MINUTE, MS_PER_HOUR } from './time.js'

export const CLIPBOARD_CLEAR_TIMEOUT_OPTIONS = {
  MINUTES_1: { label: '1 Minute', value: MS_PER_MINUTE },
  MINUTES_3: { label: '3 Minutes', value: 3 * MS_PER_MINUTE },
  MINUTES_5: { label: '5 Minutes', value: 5 * MS_PER_MINUTE },
  MINUTES_10: { label: '10 Minutes', value: 10 * MS_PER_MINUTE },
  MINUTES_30: { label: '30 Minutes', value: 30 * MS_PER_MINUTE },
  HOURS_1: { label: '1 Hour', value: MS_PER_HOUR },
  HOURS_3: { label: '3 Hours', value: 3 * MS_PER_HOUR },
  NEVER: { label: 'Never', value: null }
}

export const DEFAULT_CLIPBOARD_CLEAR_TIMEOUT =
  CLIPBOARD_CLEAR_TIMEOUT_OPTIONS.MINUTES_1.value

/** Fixed delay used by the extension copy hook. Keep the old name. */
export const CLIPBOARD_CLEAR_TIMEOUT = 30000
