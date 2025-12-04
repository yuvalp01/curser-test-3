import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Azure App Service runs on Linux, so we use standalone output for better performance
  output: 'standalone',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;

