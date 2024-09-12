/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['negixttyakfaxiigxfxi.supabase.co'],
    },
    env: {
      STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
      STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
    },
  };
  
  export default nextConfig;