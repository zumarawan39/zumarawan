import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // output: 'export',
  basePath: isProd ? '/NextjsPortfolio' : '',
  assetPrefix: isProd ? '/NextjsPortfolio/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.prismic.io'],
  },
};

export default withNextIntl(nextConfig);
