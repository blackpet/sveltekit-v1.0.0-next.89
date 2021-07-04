<script lang="ts">
  import Timegrid from "$lib/components/Calendar/Timegrid.svelte";
  import type {CalendarEvent} from '$types/Calendar';
  import SingleLineWeek from "$lib/components/Calendar/SingleLineWeek.svelte";
  import calendarStore from '$stores/calendar-store';
  import Modal from "$lib/components/Modal.svelte";

  const events: Array<CalendarEvent> = [
    {start: '09:00', duration: 60, title: '출근은 은제 하누?'},
    {start: '10:00', duration: 120, title: '점심은 볼링이지!'},
  ];

  let timeSlotModal; // time slot dialog
  let eventModal; // calendar event dialo
  let modal = {
    title: '',
  }

  function handleSlotClick({detail: {user, slot}}) {
    console.log('onSlotClick', user, slot);

    modal.title = slot.label;
    timeSlotModal.open();
  }

  function handleEventClick({detail: {user, event}}) {
    console.log('onEventClick', user, event);

    modal.title = event.title;
    eventModal.open();
  }

  let search = ''; // 검색 keyword (전화번호 또는 성명)
</script>

<code>
  {JSON.stringify($calendarStore)}
</code>

<SingleLineWeek weeks={4} />
<Timegrid {events}
          on:slotClick={handleSlotClick}
          on:eventClick={handleEventClick} />

<Modal bind:this={timeSlotModal} bind:title={modal.title}>
  <div class="w-[90vw] sm:w-[50vw]">
    <div>
      전화번호 또는 성명
      <input type="text" class="w-full"
             bind:value={search}>
    </div>
  </div>
</Modal>

<Modal bind:this={eventModal} bind:title={modal.title}>
  <h1>event</h1>
  <div class="w-80 p-8 text-center">
    <button on:click={eventModal.close}>close modal</button>
  </div>
</Modal>
