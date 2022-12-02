/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: ['pages', 'src']
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  ...nextConfig
  // env: {
  //   NEXT_PUBLIC_ENV: 'PRODUCTION'
  // }
})
