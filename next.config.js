/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        // domains: ['imgur.com', 'images.unsplash.com'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "imgur.com/**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com/**"
            }
          ],
    }
};

module.exports = nextConfig;
