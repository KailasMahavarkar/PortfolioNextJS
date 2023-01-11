/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["https://placeimg.com", "res.cloudinary.com", "i2.wp.com"],
	},
};

module.exports = nextConfig;
