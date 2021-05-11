const colors = require('tailwindcss/colors');

module.exports = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			colors: {
				sick: '#ff0000',
				black: '#393939',
				fuchsia: colors.fuchsia,
			},
			fontSize: {
				'4.5xl': '2.5rem',
			},
			skew: {
				'-7': '-7deg',
				'-20': '-20deg',
			},
			borderWidth: {
				'10': '10px',
			},
			transitionTimingFunction: {
				bloop: 'cubic-bezier(1, -0.65, 0, 2.31)',
			},
		},
	},
	plugins: [],
};
