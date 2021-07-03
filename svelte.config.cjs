const preprocess = require('svelte-preprocess');
const {resolve} = require('path');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: require('@sveltejs/adapter-netlify')(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$actions: resolve(__dirname, './src/actions'),
					$stores: resolve(__dirname, './src/stores'),
					$types: resolve(__dirname, './src/types'),
				}
			}
		},
	}
};
