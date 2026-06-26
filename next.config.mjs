/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',/* aibabe star diye dile jkono hostname ar img support korbe */
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
