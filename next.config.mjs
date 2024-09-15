/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
    experimental: {
      outputFileTracingIncludes: {
        '/*': ['./src/database.json'],
      },
    },
    images: {
        remotePatterns: [
          { hostname: 'via.placeholder.com' },
        ], // Allow domains
    },
};

const analyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default analyzerConfig(nextConfig);