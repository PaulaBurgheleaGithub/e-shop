/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["placeimg.com"],
	},
	useFileSystemPublicRoutes: false,
};

module.exports = nextConfig;
