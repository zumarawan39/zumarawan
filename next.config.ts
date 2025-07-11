
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.ts');
 
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.prismic.io",
      // agar aur bhi domains hain toh yahan add karen
    ],
  },
};

export default withNextIntl(nextConfig);
