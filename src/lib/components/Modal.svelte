<script>
  import {fly} from 'svelte/transition';
  import {clickOutside} from "../../actions";
  import Backdrop from './Backdrop.svelte';

  export let title = '';
  export let backdrop;
  export let classes;
  export const open = (_param = undefined) => {
    param = _param;
    _open = true;
    backdrop.open();
  }
  export const close = () => {
    _open = false;
    backdrop.close();
  }

  let param;
  let _open = false;

</script>

<Backdrop bind:this={backdrop}>
  <div class="{classes} relative bg-white rounded-lg shadow-xl"
       use:clickOutside={{enabled: _open, cb: backdrop.close}}
       transition:fly={{duration: 100, y: -50, opacity: 0.3}}>
    <div class="h-8 py-2 text-center text-xl sm:text-2xl font-medium">
      {title}
    </div>
    <div class="absolute right-0 top-0 p-2 cursor-pointer"
         on:click={close}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div class="p-4">
      <slot {param} />
    </div>
  </div>
</Backdrop>
