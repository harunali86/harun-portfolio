import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/harun-portfolio" : undefined,
  assetPrefix: isProd ? "/harun-portfolio/" : undefined,
};

export default nextConfig;
