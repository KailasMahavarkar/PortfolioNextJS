/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		deviceSizes: [425, 768, 1024, 1280, 1440],
		domains: ["https://placeimg.com", "res.cloudinary.com", "i2.wp.com"],
	},
};

module.exports = nextConfig;
