/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Removed static export for dynamic AI functionality
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
