import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // if needed
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jsmc.everyfarmer.farm",
        pathname: "/**",
      },
       {
        protocol: "http",
        hostname: "jsmc.everyfarmer.farm",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
