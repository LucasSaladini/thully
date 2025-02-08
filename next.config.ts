import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.fcpq5-1.fna.fbcdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'twitch.tv',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'player.twitch.tv',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
