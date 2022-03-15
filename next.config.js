/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return [
      // Redir everything to / because cool one page thing
      {
        source: '/:path',
        destination: ':',
      },
    ];
  },
};

module.exports = nextConfig
