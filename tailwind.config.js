/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontSize: {
			xs: '0.625rem',
			sm: '0.75rem',
			md: '0.8125rem',
			base: '0.875rem',
			lg: '1rem',
			xl: '1.125rem',
			'2xl': '1.25rem',
			'3xl': '1.5rem',
			'4xl': '2rem',
			'5xl': '2.25rem',
			'6xl': '2.5rem',
			'7xl': '3rem',
			'8xl': '4rem',
			'9xl': '6rem',
			'10xl': '8rem'
		},
		screens: {
			sm: '600px',
			md: '960px',
			lg: '1280px',
			xl: '1440px'
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
	darkMode: 'class'
};
