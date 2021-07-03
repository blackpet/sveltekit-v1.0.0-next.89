<script lang="ts">
  import dayjs from 'dayjs';
  import type {TimeSlot, Event} from '$types/Calendar';
  import {onMount} from 'svelte';

  /**
   * @slotStart 'HH:mm'
   */
  export let slotStart = '06:00';
  /**
   * @slotEnd 'HH:mm'
   */
  export let slotEnd = '21:40';
  /**
   * @slotDuration 10 | 15 | 20 | 30 | 60 | 120
   *  - A minutes that multiplies to 60(min)
   */
  export let slotDuration = 20;

  export let events: Array<Event>;
  console.log('events', events);

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

  const users = [
    {name: '홍길동', color: 'red'},
    // {name: '강감찬', color: 'yellow'},
    // {name: '김진영', color: 'fuchsia'},
    // {name: '심재호', color: 'green'}
  ];
</script>

<div class="h-screen bg-red-200 flex flex-col">
  <div class="bg-white">{dateStr}</div>
  <div class="h-full bg-indigo-200 overflow-hidden overflow-y-auto">

    <div class="!sm:w-screen">
      <!-- users -->
      <div class="flex h-5">
        <div class="w-16 bg-indigo-300"></div>
        {#each users as user}
          <div class="user {user.color} flex-1 text-center">{user.name}</div>
        {/each}
      </div>
      <!-- slot -->
      {#each slots as slot}
        <div class="flex slot" class:oclock={slot.oclock}>
          <div class="w-16 text-xs sm:text-sm text-right pr-1">
            {slot.oclock ? slot.label : ''}
          </div>
          <div class="flex flex-1 bg-green-200">
            {#each users as name}
              <div class="{name.color} flex-1 relative">
                {#each events.filter(evt => slot.fulltime === evt.start) as event}
                <div class="event" style="height: {event.duration / slotDuration * 1.25}rem;">{event.title}</div>
                {/each}
              </div>
            {/each}
          </div>
        </div>
      {/each}
      <!-- // slot -->
    </div>

  </div>
</div>

<style lang="scss">
  .slot {
    @apply border-t border-gray-300 h-5;
  }
  .slot.oclock {
    @apply border-t border-gray-400;
  }
  .event {
    @apply absolute shadow-md z-10 h-5 w-[97%] sm:w-[99%] text-sm sm:text-base ml-1 rounded bg-blue-500 text-white p-1;
  }

  .user.red {@apply bg-red-300;}
  .red {
    @apply bg-red-100;
    .event {@apply bg-red-500;}
  }
  .user.fuchsia {@apply bg-fuchsia-300;}
  .fuchsia {
    @apply bg-fuchsia-100;
    .event {@apply bg-fuchsia-500;}
  }
  .user.yellow {@apply bg-yellow-300;}
  .yellow {
    @apply bg-yellow-100;
    .event {@apply bg-yellow-600;}
  }
  .user.green {@apply bg-green-300;}
  .green {
    @apply bg-green-100;
    .event {@apply bg-green-500;}
  }
</style>
