<script lang="ts">
  import moment from 'moment';
  import CalendarStore from '../../../stores/calendar-store'

  export let weeks = 4;

  const startOfWeekBefore = moment().startOf('week').subtract(1, 'd');
  const weeksDate = Array.from({length: weeks}) // 4 weeks
    .map((_, widx) => // 1 dimension of week
      Array.from({length: 7})
        .map((_, idx) => { // 2 dimension of days of week
          const dt = startOfWeekBefore.add(1, 'd');
          const format = idx === 0 ? 'M/D' : 'D';
          return {
            date: dt.toDate(),
            short: dt.format(format),
            today: dt.isSame(new Date(), 'day'),
            sunday: dt.day() === 0,
            saturday: dt.day() === 6,
          }
        })
    )
</script>

<div class="week-slot">
  {#each weeksDate as week}
    <div class="week">
      {#each week as day}
        <div class:sunday={day.sunday}
             class:saturday={day.saturday}
             class:today={day.today}
             class:current={CalendarStore.current(day.date)}>
          {day.short}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .week-slot {
    @apply flex overflow-hidden overflow-x-auto
    w-screen py-2 border-b shadow-sm;
    scroll-snap-points-x: repeat(100vw);
    scroll-snap-destination: 0 0;
    scroll-snap-type: x mandatory;
    scroll-snap-type: mandatory;
  }
  .week {
    @apply w-screen flex-shrink-0 flex justify-evenly gap-1;
    scroll-snap-align: start;
  }
  .week > div {
    @apply relative text-sm bg-gray-200
    rounded-full p-2 w-12 text-center
    border-2 border-transparent;
  }
  .week > .sunday {@apply bg-red-300;}
  .week > .saturday {@apply bg-blue-300;}
  .week > .current {@apply border-2 border-red-600;}
  .week > .today:before {
    content: 'TODAY';
    @apply absolute -top-1.5 left-1
    bg-indigo-600 text-white text-[0.6rem] leading-4
    px-0.5 h-4 rounded opacity-70
    md:text-sm md:-top-3 md:-left-0.5 md:h-5 md:opacity-90;
  }
</style>
