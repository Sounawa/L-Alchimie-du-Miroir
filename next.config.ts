import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel-compatible: no "standalone" output */
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  allowedDevOrigins: [
    "*.space-z.ai",
  ],
};

export default nextConfig;
