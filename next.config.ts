import type { NextConfig } from "next";

const isStaticBuild = process.env.STATIC_BUILD === "1";

const nextConfig: NextConfig = {
  output: isStaticBuild ? "export" : undefined,
  basePath: isStaticBuild ? "/L-Alchimie-du-Miroir" : undefined,
  images: {
    unoptimized: isStaticBuild,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
