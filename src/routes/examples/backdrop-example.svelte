<script>
  import Backdrop from '$lib/Components/Backdrop.svelte';
  import Modal from '$lib/Components/Modal.svelte';
  import {clickOutside} from "$actions";
  import {fade, fly} from 'svelte/transition';
  let open = false;
  let open2 = false; // for Backdrop
  let open3 = false; // for Modal
</script>

<div>
  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 tracking-wider"
          on:click|stopPropagation={() => open = true}>show modal</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 tracking-wider"
          on:click|stopPropagation={() => open2 = true}>backdrop</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 tracking-wider"
          on:click|stopPropagation={() => open3 = true}>Modal</button>

  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
</div>

{#if open}
  <div class="fixed inset-0 grid place-content-center">
    <div class="absolute inset-0 opacity-50 inset-0 bg-gray-800 h-full w-full"
         transition:fade={{duration: 100}}></div>
    <div class="z-10 bg-white rounded-lg shadow-xl w-64 p-4 text-center"
         transition:fly={{duration: 100, y: -50, opacity: 0.3}}
         use:clickOutside={{enabled: open, cb: () => open = false}}>bbb</div>
  </div>
{/if}

<Backdrop bind:open={open2} />
<Modal bind:open={open3}>
  <div class="w-80 p-8 text-center">
    <button on:click={() => open3 = false}>close modal</button>
  </div>
</Modal>
