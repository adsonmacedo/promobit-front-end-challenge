/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  experimental: {
    swcFileReading: false,
    prefetchOnHover: false,
  },
}

module.exports = nextConfig
