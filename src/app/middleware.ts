// src/middleware.ts
import { routing } from '@/libs/i18nNavigation';
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware(routing);

export default intlMiddleware;

export const config = {
  '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)'// Match root + English/Urdu paths
};