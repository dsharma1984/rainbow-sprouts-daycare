import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/studio/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://*.sanity.io https://*.sanity.build https://sanity.io;",
          },
        ],
      },
    ];
  },
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

// Forcing deployment update
export default nextConfig;
