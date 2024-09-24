/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io']
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  }
};

module.exports = nextConfig;
