import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/L-Alchimie-du-Miroir",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
