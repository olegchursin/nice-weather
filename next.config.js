/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.weatherapi.com']
  },
  env: {
    WEATHER_API: process.env.WEATHER_API,
    API_KEY: process.env.API_KEY
  }
};

module.exports = nextConfig;
