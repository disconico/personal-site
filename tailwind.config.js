/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#1F2937',
			},
			fontFamily: {
				WorkSans: ['WorkSans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
