<script>
</script>

<header class='w-full h-16 z-40 flex justify-between items-center'>
	<div class='block ml-6'>
		hamburger
	</div>

	<div class='z-20 flex flex-col justify-center h-full px-3 md:w-full'>
		<div class='flex justify-end items-center p-1 w-full space-x-4'>
			<button class='circle'>
				<i class="fas fa-link"></i>
			</button>
			<button class='circle'>
				<i class="fas fa-bell"></i>
			</button>

			<span class='w-1 h-8 rounded-lg bg-gray-200'></span>

			<a href='#'>
				<img
					src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
					alt='profile'
					class='mx-auto object-cover rounded-full h-10 w-10'>
			</a>
			<button class='flex align-middle gap-2'>
				<div>Jaeho Sim</div>
				<i class='fas fa-sort-down text-gray-400'></i>
			</button>
		</div>
	</div>
</header>

<style>
	button.circle {
		@apply flex p-2 rounded-full bg-white shadow
		text-gray-400 hover:text-gray-700;
	}
</style>
