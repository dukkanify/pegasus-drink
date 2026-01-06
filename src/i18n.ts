import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false,
    },
  });

// Set initial direction
document.documentElement.dir = 'ltr';
document.documentElement.lang = 'en';

export default i18n;