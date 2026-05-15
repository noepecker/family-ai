import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/charla", destination: "/slides/index.html", permanent: false },
      { source: "/charla/marcos", destination: "/slides/marcos.html", permanent: false },
    ];
  },
};

export default config;
