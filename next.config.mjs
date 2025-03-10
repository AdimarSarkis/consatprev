import withVideos from 'next-videos';
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    },
    
};

export default withVideos(nextConfig);
