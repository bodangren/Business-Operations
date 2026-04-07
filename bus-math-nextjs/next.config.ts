import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Business-Operations' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Business-Operations' : '',
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
