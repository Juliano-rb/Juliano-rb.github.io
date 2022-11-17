/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  eslint: {
    dirs: ['pages', 'src']
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
