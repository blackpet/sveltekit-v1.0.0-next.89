<script>
  import {fade} from 'svelte/transition';
  import {clickOutside} from "$actions";

  let dragging = false;
  let actionReady = false;
  let animationId;
  let pos = {x0: 0, current: 0};
  let item; // element itself

  function swipe(el) {
    // touch events
    el.addEventListener('touchstart', dragStart);
    el.addEventListener('touchmove', drag);
    el.addEventListener('touchend', drop);

    // mouse events
    el.addEventListener('mousedown', dragStart);
    el.addEventListener('mousemove', drag);
    el.addEventListener('mouseup', drop);
    el.addEventListener('mouseleave', drop);

    return {
      destroy() {
        if(el) detachSwipe(el);
      }
    }
  }

  function detachSwipe(el) {
    el.removeEventListener('mousedown', dragStart);
    el.removeEventListener('mousemove', drag);
    el.removeEventListener('mouseup', drop);
  }

  function dragStart(e) {
    dragging = true;
    pos.x0 = getPositionX(e);
    animationId = requestAnimationFrame(animation);
  }
  function animation() {
    setItemPositionX();
    if(dragging) requestAnimationFrame(animation);
  }

  function drag(e) {
    if (dragging) {
      const x = getPositionX(e);

      // accept swipe right to left
      const moveBy = x - pos.x0;
      if(moveBy > 0) return;

      pos.current = x - pos.x0;
    }
  }

  function drop() {
    dragging = false;
    cancelAnimationFrame(animationId);

    // moving over the threshold! show action button
    if(pos.current < -100) actionReady = true;
    else actionReady = false;

    setPositionBySwipe();
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ?
      e.clientX :
      e.touches[0].clientX;
  }

  function setPositionBySwipe() {
    if (actionReady) {
      pos.current = -80;
    } else {
      pos.current = 0;
    }
    setItemPositionX();
  }
  function setItemPositionX() {
    item.style.transform = `translateX(${pos.current}px)`;
  }

  function reset() {
    pos.current = 0;
    setItemPositionX();
    actionReady = false;
  }
</script>

<li use:clickOutside={{cb: reset}}>
  {#if actionReady}
    <div transition:fade class="action-button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </div>
  {/if}
  <div class="swipe-action-item" bind:this={item} use:swipe>
    <slot />
  </div>
</li>


<style>
  li {
    @apply relative;
    user-select: none;
  }
  .action-button {
    @apply absolute right-0 bg-red-600 text-gray-50
    flex justify-end items-center h-full px-4;
  }
  .swipe-action-item {
    @apply bg-white p-4;
    transition: transform .2s ease-out;
    transform: translateX(0);
  }
</style>
