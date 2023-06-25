/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  i18n: {
    locales: ["English", "Espagnol", "Italian", "Greek"],
    defaultLocale: "English",
  },
};
