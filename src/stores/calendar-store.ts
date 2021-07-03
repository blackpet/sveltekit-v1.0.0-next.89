import {writable, get} from 'svelte/store';
import dayjs, {Dayjs} from 'dayjs';

type CalendarStore = {
  date: Date;
}
const defaultStore = {
  date: new Date(),
};
const calendarStore = writable<CalendarStore>(defaultStore);
const $store = () => get(calendarStore);

function getDate(format?): Date | string {
  let date: Date | string = $store().date;
  if (format) {
    date = dayjs(date).format(format);
  }
  return date;
}

const getDayjs = (): Dayjs => dayjs(getDate());

export default {
  subscribe: calendarStore.subscribe,
  getDate, // selected date
  setDate: (date) => $store().date = date, // select date
  current: (date) => getDayjs().isSame(date, 'day'),
};
