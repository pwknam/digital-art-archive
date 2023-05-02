/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.squarespace-cdn.com"],
    domains: ["upload.wikimedia.org"],
    domains: ["www.jinnieseo.com"],
    domains: ["upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
