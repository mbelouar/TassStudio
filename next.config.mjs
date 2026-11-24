/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats for real screenshots (PNG/JPG you drop into /public/games).
    formats: ["image/avif", "image/webp"],
  },
  // Want a pure static site (any host, no server)? Uncomment the line below,
  // then add `unoptimized: true` inside `images`. Vercel works either way.
  // output: "export",
};

export default nextConfig;
