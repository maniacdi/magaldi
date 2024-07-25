import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './public/locales/en.json';
import translationES from './public/locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    usePureTranslation: false,
    nsMode: 'default',
    wait: true,
    bindStore: 'added removed',
    ns: [],
    defaultNS: '',
    fallbackLng: '',
    serializeConfig: false,
    react: {
      wait: true,
      useSuspense: false,
    },
    changeLanguage(lng) {
      i18n.changeLanguage(lng);
    },
  },
});
export default i18n;
