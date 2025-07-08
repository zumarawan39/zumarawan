// import {NextConfig} from 'next';
// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');
 
// const nextConfig: NextConfig = {

//   images: {
//     domains: [
//       "images.prismic.io",
//       // agar aur bhi domains hain toh yahan add karen
//     ],
//   },
// };

// export default withNextIntl(nextConfig);


// =======================================================================
// next.config.ts

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/NextjsPortfolio' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.prismic.io'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);
