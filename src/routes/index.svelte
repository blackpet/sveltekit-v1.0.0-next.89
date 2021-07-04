<script lang="ts">
	import Nav from '$lib/Nav.svelte';
</script>

<main>
	<h1>Svelte + TailwindCSS Templates</h1>

	<Nav />
</main>

<style style lang="postcss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
		'Open Sans', 'Helvetica Neue', sans-serif;
		@apply bg-gray-50;
	}

	main {
		@apply text-center p-4 mx-auto;
	}

	h1 {
		@apply text-red-600 uppercase text-3xl md:text-6xl font-thin
		leading-tight my-8 mx-auto max-w-xs;
	}

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}
</style>
