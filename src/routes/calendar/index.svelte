<script lang="ts">
  import dayjs from 'dayjs';
  import Timegrid from "$lib/components/Calendar/Timegrid.svelte";
  import type {CalendarEvent} from '$types/Calendar';
  import SingleLineWeek from "../../lib/components/Calendar/SingleLineWeek.svelte";
  import calendarStore from '$stores/calendar-store';

  const today = dayjs();
  const events: Array<CalendarEvent> = [
    {start: '09:00', duration: 60, title: '출근은 은제 하누?'},
    {start: '13:00', duration: 120, title: '점심은 볼링이지!'},
  ];
</script>

<code>
  {JSON.stringify($calendarStore)}
</code>

<SingleLineWeek weeks={4} />
<Timegrid {events} />
