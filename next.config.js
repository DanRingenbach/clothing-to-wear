/**  @type {import('next').NextConfig} */

const nextConfig = {};

export default {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};
