<script lang="ts">
	import SideBar from './_SideBar.svelte';
	import Header from './_Header.svelte';
</script>

<div class='wrapper'>
	<div class='layout'>
		<SideBar title='BlackPet' />
		<div class='flex flex-col w-full md:space-y-4'>
			<Header />

			<main class='overflow-auto h-screen pb-24 px-4'>

				<slot/>

			</main>
		</div>
	</div>

</div>

<style>
  .wrapper {
    @apply bg-gray-100 relative h-screen overflow-hidden;
  }
  .layout {
    @apply flex justify-between items-start;
  }
</style>
