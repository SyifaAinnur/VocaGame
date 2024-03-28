/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
		return [
			{
				source: '/',
				destination: '/auth/login',
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ik.imagekit.io',
			},
		],
	},
};

export default nextConfig;
