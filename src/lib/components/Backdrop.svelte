<script>
  import {fade} from 'svelte/transition';

  export const open = () => _open = true;
  export const close = () => _open = false;

  let _open = false;

  // prevent background body scroll
  function freezeBackground(node) {
    document.body.classList.add('freeze');

    return {
      destroy() {
        document.body.classList.remove('freeze');
      }
    }
  }
</script>

{#if _open}
  <div class="fixed z-40 inset-0 grid place-content-center"
       use:freezeBackground>
    <div class="absolute inset-0 opacity-50 inset-0 bg-gray-800 h-full w-full"
         transition:fade={{duration: 100}}></div>
    <slot>
      <div class="relative bg-white rounded-lg shadow-xl text-center px-8 py-4">
        <button on:click={close}>close</button>
      </div>
    </slot>
  </div>
{/if}

<style>
  :global(body.freeze) {
    @apply w-screen h-screen overflow-hidden;
  }
</style>
