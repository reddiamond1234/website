import { createI18n } from 'vue-i18n'
import sl from './locales/sl.json'
import en from './locales/en.json'
import it from './locales/it.json'
import hr from './locales/hr.json'

type MessageSchema = typeof sl

// Get stored locale or default to Slovenian
const getStoredLocale = (): string => {
  try {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('locale') || 'sl'
    }
  } catch {
    // localStorage may be disabled or full
  }
  return 'sl'
}

export const i18n = createI18n<[MessageSchema], 'sl' | 'en' | 'it' | 'hr'>({
  legacy: false,
  locale: getStoredLocale(),
  fallbackLocale: 'sl',
  messages: {
    sl,
    en,
    it,
    hr
  }
})

export const setLocale = (locale: 'sl' | 'en' | 'it' | 'hr') => {
  i18n.global.locale.value = locale
  try {
    localStorage.setItem('locale', locale)
  } catch {
    // Ignore storage errors
  }
  document.documentElement.lang = locale
}

export const availableLocales = [
  { code: 'sl', name: 'Slovensko', flag: '🇸🇮' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' }
] as const
