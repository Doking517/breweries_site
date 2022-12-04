/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins-extrabold': ['Poppins-ExtraBold', 'ui-monospace'],
				'poppins-regular': ['Poppins-Regular','sans-serif'],
			},
		},
	},
	plugins: [],
};
