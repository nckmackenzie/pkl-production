// import { supabase } from '../supabase/supabase';

import { errorHandling, httpRequest, url } from '@/lib/utils';

type UserFields = { user_id: string; password: string };

export type LoginResponse = {
  user: User;
  token: string;
};

type SessionResponse = {
  user: User;
  status: ResponseStatus;
};

export async function login({
  user_id,
  password,
}: UserFields): Promise<LoginResponse> {
  try {
    const response = await fetch(url + '/users/login', {
      method: 'POST',
      body: JSON.stringify({ user_id, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Unable to log you in');

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUser() {
  //check session
  const storedValue = localStorage.getItem('pkl-auth-status');
  if (!storedValue) return null;

  try {
    const data = await httpRequest(url + '/users/me');

    return data as SessionResponse;
  } catch (error) {
    errorHandling(error);
  }
}
