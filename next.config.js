/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.squarespace-cdn.com"],
  },
};

module.exports = nextConfig;
