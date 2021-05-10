<script lang="ts">
  import dayjs from 'dayjs';
  import type {TimeSlot} from '$types/Calendar';
  import {onMount} from 'svelte';

  /**
   * @slotStart 'HH:mm'
   */
  export let slotStart = '06:00';
  /**
   * @slotEnd 'HH:mm'
   */
  export let slotEnd = '20:40';
  /**
   * @slotDuration 10 | 15 | 20 | 30 | 60 | 120
   *  - A minutes that multiplies to 60(min)
   */
  export let slotDuration = 20;

  export let date = dayjs();

  date = date.second(0).minute(0).hour(0);
  const dateStr = date.format('MM/DD');
  const slotSize = (24 * 60) / slotDuration;

  let slots: Array<TimeSlot> = [];
  onMount(() => {
    slots = generateSlots();
  });

  function generateSlots(): Array<TimeSlot> {
    let _time = date;
    let slots = Array.from({length: slotSize}).map(_ => {
      const slot = {
        date: _time,
        label: _time.format('h:mm a'),
        fulltime: _time.format('HH:mm'),
        oclock: _time.minute() === 0,
      };
      _time = _time.add(slotDuration, 'minute');
      return slot;
    });

    slots = slots.filter(s => s.fulltime >= slotStart && s.fulltime <= slotEnd);

    return slots;
  }
</script>

<div class="h-screen bg-red-200 flex flex-col">
  <div class="bg-gray-100">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
  <div class="bg-white">{dateStr}</div>
  <div class="h-full bg-blue-200 overflow-hidden overflow-y-auto">

    <!-- slot -->
    {#each slots as slot}
      <div class="flex slot" class:oclock={slot.oclock}>
        <div class="w-16 text-sm text-right">{slot.oclock ? slot.label : ''}</div>
        <div class="flex-1 bg-green-200"></div>
      </div>
    {/each}
    <!-- // slot -->

  </div>
</div>

<style>
  .slot {
    @apply border-t border-gray-300 h-5;
  }
  .slot.oclock {
    @apply border-t border-gray-400;
  }
</style>
