/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#151515',
				navbar: '#403E41',
				button: '#151515'
			}
		}
	},
	plugins: []
}
