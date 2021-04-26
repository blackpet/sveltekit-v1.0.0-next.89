<script>
	const links = [
		{name: 'Products', target: '/'},
		{name: 'Sell', target: '/'},
		{name: 'Orders', target: '/'},
		{name: 'Account', target: '/'},
		{name: 'Sign Out', target: '/'},
		{name: 'My Cart', target: '/'},
	]
</script>

<header class='mb-8'>
	<div class='flex flex-col items-center xl:items-stretch xl:flex-row pl-6 border-b-10 border-black'>
		<h1 class='bg-sick text-white inline-block p-2 my-7 uppercase text-4.5xl transform -skew-x-7 hover:underline'>
			Sick Fits
		</h1>
		<nav class='mt-4 xl:mt-0 flex flex-wrap flex-1 justify-center xl:justify-end'>
			{#each links as link}
				<a class='group px-4 lg:px-6 xl:px-8 text-sm lg:text-lg xl:text-xl uppercase flex-shrink-0 relative flex items-center'
					 href='{link.target}'>
					<span class='absolute top-0 left-0 w-0.5 h-full bg-gray-200 transform -skew-x-20'></span>

					<span class='relative'>
						{#if link.name === 'My Cart'}
							<span class='flex items-center space-x-2'>
								<span>{link.name}</span>
								<span class='bg-sick text-white h-8 w-8 rounded-full flex justify-center items-center'>5</span>
							</span>
						{:else}
							{link.name}
						{/if}
						<span class='absolute w-full h-1 bg-sick -bottom-1 left-0 rounded-sm group-hover:scale-x-100 scale-x-0 transform transition ease-bloop duration-400'></span>
					</span>
				</a>
			{/each}
		</nav>
	</div>
</header>
