/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note (2026 rebuild): `output: 'export'` was removed. It was incompatible with
  // `POST /api/subscribe`, which needs a server — the subscribe form could not have
  // worked as deployed. Vercel runs Next.js natively, so dropping static export also
  // restores next/image optimization. Everything except the subscribe route is still
  // statically prerendered at build time.
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
