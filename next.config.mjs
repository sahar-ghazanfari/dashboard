const withNextIntl = require("next-intl/plugin")(
  "./src/locales" // مسیر فایل‌های ترجمه
);

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },
  experimental: {
    appDir: true,
  },
});

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ["en", "fa"],
//     defaultLocale: "en",
//   },
// };

// export default nextConfig;
