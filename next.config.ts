import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  outputFileTracingIncludes: {
    "/*": ["./content/**/*"],
  },
  /* config options here */
};

export default nextConfig;
