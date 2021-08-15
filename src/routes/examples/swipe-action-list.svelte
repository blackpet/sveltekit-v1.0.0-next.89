<script>
  import SwipeActionButtonItem from "$lib/components/List/SwipeActionButtonItem.svelte";
</script>
<div class="container">
  <ul>
    <SwipeActionButtonItem>List 1</SwipeActionButtonItem>
    <SwipeActionButtonItem>List 2</SwipeActionButtonItem>
    <SwipeActionButtonItem>List 3</SwipeActionButtonItem>
    <SwipeActionButtonItem>List 4</SwipeActionButtonItem>
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
