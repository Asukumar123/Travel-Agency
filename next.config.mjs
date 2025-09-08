/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization
  output: 'export',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true, // For static export
    formats: ['image/webp', 'image/avif'],
  },
  
  // Compression
  compress: true,
  
  // Headers for SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
    ]
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      { source: '/tours/:slug', destination: '/tours/:slug' },
    ]
  },
}

// ✅ ESM export
export default nextConfig
