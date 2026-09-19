/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/zelvaneo-dev.github.io",
  assetPrefix: "/zelvaneo-dev.github.io/",
};

export default nextConfig;
