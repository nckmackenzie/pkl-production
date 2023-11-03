import { supabase } from '../supabase/supabase';

type UserFields = { email: string; password: string };

export async function login({ email, password }: UserFields) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getUser() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);

  if (!data.session) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
