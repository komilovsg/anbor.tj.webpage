import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage } from '@/shared/constants';

import common_en from '@/public/translation/ru.json';
import common_ru from '@/public/translation/en.json';

const resources = {
  ru: { common: common_ru },
  en: { common: common_en },
};

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
