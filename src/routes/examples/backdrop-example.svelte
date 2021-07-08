<script>
  import Backdrop from '../../lib/components/Backdrop.svelte';
  import Modal from '../../lib/components/Modal.svelte';
  import {clickOutside} from "$actions";
  import {fade, fly} from 'svelte/transition';
  let open = false;
  let backdrop1; // for Backdrop
  let modal1; // for Modal
</script>

<div>

  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <p class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi culpa dolore ducimus illo iusto laboriosam modi perspiciatis, quaerat quas quos reiciendis, repellendus soluta suscipit velit? Itaque nam suscipit voluptates?</p>
  <div>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 tracking-wider"
            on:click|stopPropagation={() => open = true}>show modal</button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 tracking-wider"
            on:click|stopPropagation={backdrop1.open}>backdrop</button>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded px-4 py-2 tracking-wider"
            on:click|stopPropagation={modal1.open}>Modal</button>
  </div>
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

<Backdrop bind:this={backdrop1} />
<Modal bind:this={modal1} classes="max-w-3xl">
  <div class="w-80 p-8 text-center">
    <button on:click={modal1.close}>close modal</button>
  </div>
  <div class="text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga hic itaque nemo nihil nobis repellat sapiente, voluptatem. At debitis distinctio facilis, incidunt laborum maxime officiis perspiciatis praesentium tempora unde?</div>
</Modal>
