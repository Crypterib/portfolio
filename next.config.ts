import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "preview-chat-c6b65a6e-0199-462c-9307-a883cf0be894.space-z.ai",
    ".space-z.ai",
  ],
};

export default nextConfig;
