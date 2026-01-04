import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.rainbowsprouts.in" },
        ],
        destination: "https://rainbowsprouts.in/:path*",
        permanent: true, // 308
      },
    ];
  },
};

export default nextConfig;
