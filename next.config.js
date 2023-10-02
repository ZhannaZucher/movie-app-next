/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/original/**",
      },
    ],
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig
