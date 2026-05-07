import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.STATIC_BUILD === "1" ? "export" : undefined,
  basePath: process.env.STATIC_BUILD === "1" ? "/L-Alchimie-du-Miroir" : undefined,
  images: {
    unoptimized: process.env.STATIC_BUILD === "1" ? true : undefined,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
