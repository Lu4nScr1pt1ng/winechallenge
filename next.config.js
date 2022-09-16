/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.wine.com.br',
  }]
  },
  reactStrictMode: false,
}

module.exports = nextConfig
