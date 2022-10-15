const { BLOG_URL, CHAT_URL, EC_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
      {
        source: '/chat',
        destination: `${CHAT_URL}/chat`
      },
      {
        source: '/chat/:path*',
        destination: `${CHAT_URL}/chat/:path*`
      },
      {
        source: '/ec',
        destination: `${EC_URL}/ec`
      },
      {
        source: '/ec/:path*',
        destination: `${EC_URL}/ec/:path*`
      }
    ];
  },
};

module.exports = nextConfig
