// src/utils/AppConfig.ts
import { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

export const AppConfig = {
  name: 'Zumar Awan',
  locales: ['en', 'ur'], 
  defaultLocale: 'en',  
  localePrefix,
  pathname: {
    '/': {
      en: '/',
      ur: '/',
    },
  },
};