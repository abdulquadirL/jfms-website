import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["localhost","jsmc.everyfarmer.farm"], // add your Strapi domain here (and production domain later)
  },
};

export default nextConfig;
