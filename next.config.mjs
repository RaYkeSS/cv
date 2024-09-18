/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["raykess.ru", "localhost:3000"],
    },
  },
};

export default nextConfig;
