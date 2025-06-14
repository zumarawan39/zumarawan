import { routing } from '@/libs/i18nNavigation';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    const defaultLocale = routing.defaultLocale || 'en';
    return Response.redirect(new URL(`/${defaultLocale}/home`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Only include routes that should be localized
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};