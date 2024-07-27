/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['firebasestorage.googleapis.com'], // Allow images from Firebase Storage
    },

    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  