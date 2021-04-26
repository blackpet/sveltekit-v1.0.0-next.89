<script>
  import {fly} from 'svelte/transition';
  import {clickOutside} from "$actions";
  import Backdrop from './Backdrop.svelte';

  export let open = false;

  function closeModal() {
    console.log('close modal!');
    open = false;
  }
</script>

<Backdrop bind:open>
  <div class="z-10 bg-white rounded-lg shadow-xl"
       use:clickOutside={{enabled: open, cb: closeModal}}
       transition:fly={{duration: 100, y: -50, opacity: 0.3}}>
    <slot />
  </div>
</Backdrop>
