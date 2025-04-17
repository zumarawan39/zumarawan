import { AppConfig } from '@/utils/AppConfig';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';



export const routing = defineRouting({
  locales: AppConfig.locales,
  defaultLocale: AppConfig.defaultLocale,
  localePrefix: AppConfig.localePrefix,
});

// export type Pathnames = keyof typeof routing.pathnames; // Now types are flattened correctly
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
