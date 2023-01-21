/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "rb.gy",
      "image.tmdb.org",
      "hips.hearstapps.com",
      "cdn.pastemagazine.com",
      "sgp1.digitaloceanspaces.com",
      "wallpaperaccess.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig
