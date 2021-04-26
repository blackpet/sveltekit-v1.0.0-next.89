<script>
  import {fade} from 'svelte/transition';
  export let open = false;
</script>

{#if open}
  <div class="fixed inset-0 grid place-content-center">
    <div class="absolute inset-0 opacity-50 inset-0 bg-gray-800 h-full w-full"
         transition:fade={{duration: 100}}></div>
    <slot>
      <div class="z-10 bg-white rounded-lg shadow-xl text-center px-8 py-4">
        <button on:click={() => open = false}>close</button>
      </div>
    </slot>
  </div>
{/if}
