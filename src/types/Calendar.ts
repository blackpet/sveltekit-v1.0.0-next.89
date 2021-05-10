import type {Dayjs} from 'dayjs';

export interface TimeSlot {
  date: Dayjs;
  label: string;
  fulltime: string;
  oclock: boolean;
}

export interface Event {
  start: string;
  duration: number;
  title: string;
}
