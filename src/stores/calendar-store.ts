import {writable, get} from 'svelte/store';
import dayjs, {Dayjs} from 'dayjs';

export type CalendarStore = {
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
  getDayjs,
  setDate: (date) => calendarStore.update(s => ({...s, date})), // select date
  current: (date) => getDayjs().isSame(date, 'day'),
};
