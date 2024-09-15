/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
    experimental: {
    outputFileTracingIncludes: {
      '/*': ['./src/database.json'],
    },
  },
};

const analyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default analyzerConfig(nextConfig);