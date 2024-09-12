/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'negixttyakfaxiigxfxi.supabase.co',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'dashboard.looklook.pet',
            pathname: '**',
          },
        ],
      },
  };
  
  export default nextConfig;