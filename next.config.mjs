/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'negixttyakfaxiigxfxi.supabase.co',
            pathname: '**',
          },
        ],
      },
    env: {
      STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
      STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
    },
  };
  
  export default nextConfig;