import { type ClassValue, clsx } from 'clsx';
import { formatDistance } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PAGE_SIZE = 10;

export function formatDateFromDistance(date: Date) {
  return formatDistance(date, new Date(), {
    addSuffix: true,
  });
}

export function getPercentage(x: number, y: number) {
  return Math.round((x / y) * 100);
}
