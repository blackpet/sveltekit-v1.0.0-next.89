<script>

	export let title = 'Plannifer';

	let menus = [
		{ menu: 'Home', icon: 'fas fa-home' },
		{ menu: 'Refered Projects', icon: 'fab fa-accusoft' },
		{ menu: 'Resources', icon: 'fas fa-folder-open' },
		{ menu: 'Store feedback', icon: 'fas fa-comments' }
	];
	let activeMenu = menus[0];
</script>


<aside>
	<div class='bg-white h-full'>
		<!-- aside title -->
		<div class='flex items-center justify-start pt-6 ml-8'>
			<p class='font-bold text-xl'>
				{title}
			</p>
		</div>
		<nav class='mt-6'>
			<div>
				{#each menus as menu}
					<a href='#' class:active={menu === activeMenu}
						 on:click|preventDefault={() => activeMenu = menu}
					>
						{#if menu.icon}
							<span class='text-left'>
								<i class='h-4 w-4 {menu.icon}'></i>
							</span>
						{/if}

						<span class='mx-2 text-sm font-normal'>{menu.menu}</span>
					</a>
				{/each}
			</div>
		</nav>
	</div>
</aside>

<style>
  aside {
    @apply h-screen shadow-lg relative w-80;
  }

  nav a {
    @apply w-full flex justify-start items-center
    text-gray-400
    p-2 pl-6 my-2
    transition-colors duration-200 hover:text-gray-800
		border-l-4 border-transparent;
  }
	nav a.active {
		@apply border-l-4 border-purple-500 text-gray-800;
  }

</style>
