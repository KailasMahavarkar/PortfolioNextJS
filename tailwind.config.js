/** @type {import('tailwindcss').Config} */

const daisy = require("daisyui");
const tailwindTypography = require("@tailwindcss/typography");

const childrenSupport = ({ addVariant }) => {
	addVariant("child", "& > *");
	addVariant("child-hover", "& > *:hover");
};

const themes = [
	{
		light: {
			primary: "#0116FF", // requires black text
			secondary: "#9333ea", // required white text
			accent: "#9333EA", // requires black text
			neutral: "#272D3F", // requires white text
			"base-100": "#fafafa",
            "base-200": "#f5f5f5",
            "base-300": "#f8f8f8",
			info: "#29BCE0",
			success: "#1DC9A6",
			warning: "#F1920E",
			error: "#EF346F",
			"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
			"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
			"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
			"--animation-btn": "0.25s", // duration of animation when you click on button
			"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
			"--btn-text-case": "uppercase", // set default text transform for buttons
			"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
			"--border-btn": "1px", // border width of buttons
			"--tab-border": "1px", // border width of tabs
			"--tab-radius": "0.5rem", // border radius of tabs
		},
		dark: {
            primary: "#661AE6",
            "primary-content": "#ffffff",
            secondary: "#D926AA",
            "secondary-content": "#ffffff",
            accent: "#1FB2A5",
            "accent-content": "#ffffff",
            neutral: "#191D24",
            "neutral-focus": "#111318",
            "neutral-content": "#A6ADBB",
			"base-100": "#1f2028",
            "base-200": "#242933",
            "base-300": "#20252E",
            "base-content": "#A6ADBB",
		},
	},
];

module.exports = {
	darkMode: ["class", '[data-theme="dark"]'],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx,md,mdx}",
	],
	
	theme: {
		extend: {
			spacing: {
				"2/3": "66.666667%",
			},
			//for representing thick underline under links
			boxShadow: {
				link: "0 -3px 0 0 rgba(255, 216, 95, 0.7) inset",
				hover: "0 -3rem 0 0 rgba(255, 216, 95, 0.7) inset",
			},
		},
		screen: {
			sm: 425,
			md: 768,
			lg: 1024,
			xl: 1280,
			"2xl": 1440,
		},
	},
	plugins: [tailwindTypography, daisy, childrenSupport],
	daisyui: {
		styled: true,
		base: true,
		themes: themes,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
	},
};
