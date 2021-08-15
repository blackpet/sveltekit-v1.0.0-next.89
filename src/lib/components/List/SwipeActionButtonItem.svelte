<script>
  import {fade} from 'svelte/transition';
  import {createEventDispatcher} from 'svelte';
  import {clickOutside} from "$actions";

  const dispatch = createEventDispatcher();

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
    // el.addEventListener('mouseleave', drop);

    return {
      destroy() {
        detachSwipe(el);
      }
    }
  }

  function detachSwipe(el) {
    // touch events
    el.removeEventListener('touchstart', dragStart);
    el.removeEventListener('touchmove', drag);
    el.removeEventListener('touchend', drop);

    // mouse events
    el.removeEventListener('mousedown', dragStart);
    el.removeEventListener('mousemove', drag);
    el.removeEventListener('mouseup', drop);
    // el.removeEventListener('mouseleave', drop);
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

  function drop(e) {
    console.log('drop!!!!!!!');
    dragging = false;
    cancelAnimationFrame(animationId);

    // moving over the threshold! show action button
    if(pos.current < -100) {
      pos.current = -70;
      setItemPositionX();
      actionReady = true;
    }
    // actionReady 상태에서는 event bubbling 이 실행되면 안되고
    // reset 만 해야한다!
    else if (actionReady) {
      e.preventDefault();
      e.stopPropagation();
      reset();
    } else {
      reset();
    }
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ?
      e.clientX :
      e.touches[0].clientX;
  }
  function setItemPositionX() {
    item.style.transform = `translateX(${pos.current}px)`;
  }

  function reset() {
    pos.current = 0;
    setItemPositionX();
    actionReady = false;
    setTimeout(() => item.style.transform = 'unset', 0);
  }

  function dispatchAction() {
    dispatch('delete');
    reset();
  }
</script>

<li use:clickOutside={{enabled: actionReady, cb: reset}}>
  {#if actionReady}
    <div transition:fade class="action-button"
         on:click={dispatchAction}>
      <svg xmlns="http://www.w3.org/2000/svg" class="trash" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </div>
  {/if}
  <div class="swipe-action-item" bind:this={item} use:swipe>
    {#if actionReady}
      <div class="swipe-block"></div>
    {/if}
    <slot />
  </div>
</li>


<style>
  .trash {@apply h-full w-10;}
  li {
    @apply relative;
    user-select: none;
  }
  .action-button {
    @apply absolute right-0 bg-red-600 text-gray-50
    flex justify-end items-center h-full px-4;
  }
  .swipe-block {
    @apply absolute inset-0 w-full h-full
    z-10 bg-red-600 opacity-10;
  }
  .swipe-action-item {
    @apply bg-white p-4;
    transition: transform .2s ease-out;
  }
</style>
