/** @type {import('next').NextConfig} */
const nextConfig = {
  //...
  webpack: (config) => {
    config.module.rules.push({
      test: /swiper/,
      loader: "babel-loader",
    });
    return config;
  },
};

export default nextConfig;
