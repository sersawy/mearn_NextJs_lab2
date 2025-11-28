/** @type {import('next').NextConfig} */
const nextConfig = {
  // images:{
  //   domains:['images.unsplash.com']
  // }
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
