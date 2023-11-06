import { LoginResponse } from '@/services/auth-api';
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

function apiUrl(): string {
  return import.meta.env.VITE_API_URL;
}

export const url = apiUrl() + '/api/v1';

export function getToken(): LoginResponse | null {
  const storedValue = localStorage.getItem('pkl-auth-status');
  return storedValue ? JSON.parse(storedValue) : null;
}

export async function httpRequest(
  url: string,
  method = 'GET',
  body: string | null = null,
  headers = {}
) {
  try {
    const response = await fetch(url, {
      method: method,
      body,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getToken()?.token,
        ...headers, // Additional headers can be passed as an object
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors || data.error || 'Something went wrong with your request'
      );
    }

    return data; // Return the response data on success
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw error;
    }
  }
}

export function errorHandling(error: unknown) {
  if (error instanceof Error) {
    throw new Error(error.message);
  } else {
    // Rethrow the error.
    throw error;
  }
}

export function createDateTime(date: string, time: string) {
  return new Date(`${date} ${time}`);
}
