import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import env from '@config/environment'
import es from '@/lang/es.json'
import en from '@/lang/en.json'

const languages = {
    es: {
        translation: es,
    },
    en: {
        translation: en,
    },
}

await i18next.use(LanguageDetector).init({
    debug: env.APP_DEBUG,
    supportedLngs: ['en', 'es'],
    fallbackLng: 'es',
    resources: languages,
})

const __ = i18next.t

const defaultLanguage = 'en'

export { i18next, __, languages, defaultLanguage }
