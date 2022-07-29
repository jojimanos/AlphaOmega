/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {nextConfig,
  i18n:{
  locales: ["English", "es-ES", "it-IT", "el-EL"],
  defaultLocale: "English"}}
