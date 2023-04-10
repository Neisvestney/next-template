var runtimeConfig = require("./lib/runtimeConfig")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: [runtimeConfig.strapiHost]
  },
  publicRuntimeConfig: {
    strapiUrl: runtimeConfig.strapiUrl
  }
}

module.exports = nextConfig;
