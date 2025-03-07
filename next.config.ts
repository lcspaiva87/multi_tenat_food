import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'u9a6wmr3as.ufs.sh',
      },
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
