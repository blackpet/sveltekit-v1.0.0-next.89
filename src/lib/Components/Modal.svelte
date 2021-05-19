<script>
  import {fly} from 'svelte/transition';
  import {clickOutside} from "../../actions";
  import Backdrop from './Backdrop.svelte';

  export let backdrop;
  export const open = () => {
    _open = true;
    backdrop.open();
  }
  export const close = () => {
    _open = false;
    backdrop.close();
  }

  let _open = false;

</script>

<Backdrop bind:this={backdrop}>
  <div class="z-10 bg-white rounded-lg shadow-xl"
       use:clickOutside={{enabled: _open, cb: backdrop.close}}
       transition:fly={{duration: 100, y: -50, opacity: 0.3}}>
    <slot />
  </div>
</Backdrop>
