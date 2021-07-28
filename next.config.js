module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['cdn.buttercms.com'],
  },
  rules: {
    '@next/next/no-img-element': 'off',
  },
};
