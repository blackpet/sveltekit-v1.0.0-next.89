import type {Dayjs} from 'dayjs';

export interface TimeSlot {
  date: Dayjs;
  label: string;
  fulltime: string;
  oclock: boolean;
}

export interface CalendarEvent {
  start: string;
  duration: number;
  title: string;
}
