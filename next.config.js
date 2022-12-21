/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables use of Next.js 13 beta features
  experimental: {
    appDir: true
  },
  // Enables support for importing SVGs as components (yarn add @svgr/webpack / npm install @svgr/webpack)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    // Enables topLevelAwait
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    }
    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'localhost',
      },
    ],
  },
}

module.exports = nextConfig
