import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/harun-portfolio/next-site" : undefined,
  assetPrefix: isProd ? "/harun-portfolio/next-site/" : undefined,
};

export default nextConfig;
