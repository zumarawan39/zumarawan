// src/utils/AppConfig.ts
import { LocalePrefixMode } from 'next-intl/routing';
const localePrefix: LocalePrefixMode = 'never'; // instead of 'as-needed'


export const AppConfig = {
  name: 'Zumar Awan',
  locales: ['en', 'ur', 'tr'], 
  defaultLocale: 'en',  
  localePrefix,
  pathname: {
    '/': {
      en: '/en',
      ur: '/ur',
      tr: '/tr',
    },
  },
};