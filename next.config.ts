// next.config.ts

import type { NextConfig } from 'next'
// import type { NextWebpackConfig } from 'next/dist/server/config-shared'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dvsxt5681pvqm.cloudfront.net',
      },
    ],
  },

  webpack(config) {
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

}

export default nextConfig
