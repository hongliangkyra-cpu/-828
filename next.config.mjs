/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  allowedDevOrigins: ['127.0.0.1'],
  // This preview ships all brand photography locally. Serving the originals
  // avoids low-resolution optimizer variants while the long homepage is
  // captured or reviewed offline.
  images: { unoptimized: true },
};
export default nextConfig;
