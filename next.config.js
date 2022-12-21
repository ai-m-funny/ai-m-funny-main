/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error'],
  //   },
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
