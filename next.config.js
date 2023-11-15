/** @type {import('next').NextConfig} */
const path = require('path');
const { i18n } = require('./i18n');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drscdn.500px.org',
        port: '',
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/photo/**',
      },
    ],
  },
  env: {
    MONGO_URL:
      'mongodb+srv://artemzakharchuk:p69RUunZu25tY1It@artemzakharchuk.efhi8fb.mongodb.net/artemzakharchuk?retryWrites=true&w=majority',
  },
};

module.exports = nextConfig;
