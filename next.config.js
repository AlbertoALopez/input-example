/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // disabled for main branch, only for deployment on gh-pages
  // basePath: '/input-example'
};

module.exports = nextConfig;
