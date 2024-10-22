/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'strapi.looklook.pet',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;