/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_API: process.env.WEATHER_API,
    API_KEY: process.env.API_KEY
  }
};

module.exports = nextConfig;
