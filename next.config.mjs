/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "api.genderize.io"
            }
        ]
    }
};

export default nextConfig;
