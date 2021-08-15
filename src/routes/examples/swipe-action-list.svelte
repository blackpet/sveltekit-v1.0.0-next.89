<script>
  import SwipeActionButtonItem from "$lib/components/List/SwipeActionButtonItem.svelte";

  const list = ['List 1', 'List 2', 'List 3', 'List 4', ]

  function deleteItem(item) {
    console.log(`${item} deleted!!!`);
  }
</script>
<div class="container">
  <ul>
    {#each list as item}
      <SwipeActionButtonItem
              on:delete={() => deleteItem(item)}>
        {item}
      </SwipeActionButtonItem>
    {/each}
  </ul>
</div>

<style>
  div {
    @apply mx-auto w-4/5 md:w-1/2 m-12 p-4 bg-gray-200;
  }
  ul {
    @apply bg-red-300 flex flex-col gap-2;
  }
</style>
