/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.GITHUB_ACTIONS ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  basePath: process.env.GITHUB_ACTIONS ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  trailingSlash: true,
  reactStrictMode: false,
}

module.exports = nextConfig
