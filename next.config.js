/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: process.env.STRAPI_PUBLIC_URL,
         },
      ],
    },
  }