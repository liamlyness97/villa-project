import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				claret: '#460324',
				avBlue: '#96c0ea'
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
