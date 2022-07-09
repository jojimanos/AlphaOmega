/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {nextConfig,
  i18n:{
  locales: ["en-US", "es-ES", "it-IT", "gr-GR"],
  defaultLocale: "en-US"}}
