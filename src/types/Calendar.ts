import type {Dayjs} from 'dayjs';

export interface TimeSlot {
  date: Dayjs;
  label: string;
  fulltime: string;
  oclock: boolean;
}
