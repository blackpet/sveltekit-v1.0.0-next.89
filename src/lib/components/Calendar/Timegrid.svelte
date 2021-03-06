<script lang="ts">
  import dayjs from 'dayjs';
  import type {CalendarEvent, TimeSlot} from '$types/Calendar';
  import {onMount, createEventDispatcher} from 'svelte';
  import store from '$stores/calendar-store';
  import type {CalendarStore} from '$stores/calendar-store';

  const dispatch = createEventDispatcher();

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

  export let events: Array<CalendarEvent>;
  console.log('events', events);

  let date = dayjs(new Date());
  $: dateStr = date.format('MM/DD');
  $: console.log('date', date.format());

  date = date.second(0).minute(0).hour(0);
  const slotSize = (24 * 60) / slotDuration;

  let slots: Array<TimeSlot> = [];
  onMount(() => {
    slots = generateSlots();

    return store.subscribe((s: CalendarStore) => {
      date = dayjs(s.date);
    });
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
    {name: '홍길동', color: 'gray'},
    // {name: '강감찬', color: 'yellow'},
    // {name: '김진영', color: 'fuchsia'},
    // {name: '심재호', color: 'green'}
  ];

  function slotClick(user, slot) {
    dispatch('slotClick', {user, slot});
  }
  function eventClick(user, event) {
    dispatch('eventClick', {user, event});
  }
</script>

<div class="bg-red-200 flex flex-col">
  <div class="bg-white">{dateStr}</div>
  <div class="h-full bg-indigo-200">

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
            {#each users as user}
              <div class="{user.color} flex-1 relative py-0.5"
                   on:click|stopPropagation={() => slotClick(user, slot)}>
                {#each events.filter(evt => slot.fulltime === evt.start) as event}
                <div class="event" style="height: {(event.duration / slotDuration * 1.5) - 0.25}rem;"
                     on:click|stopPropagation={() => eventClick(user, event)}>{event.title}</div>
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
    @apply border-t border-gray-300 h-6;
  }
  .slot.oclock {
    @apply border-t border-gray-400;
  }
  .event {
    @apply absolute shadow-md z-10 h-6 w-[97%] sm:w-[99%] text-sm sm:text-base ml-1 rounded bg-blue-500 text-white p-1;
  }

  .user.red {@apply bg-red-300;}
  .red {
    @apply bg-red-100;
    .event {@apply bg-red-500;}
  }
  .user.gray {@apply bg-gray-300;}
  .gray {
    @apply bg-gray-100;
    .event {@apply bg-blue-500;}
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
