'use server';

import createSupabaseServerClient from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { getUser } from './supabase/queries';

export async function readUserSessionServer() {
  const supabase = await createSupabaseServerClient();

  return getUser(supabase);
}

export async function logout() {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();

  redirect('/auth/signin');
}

/**
 * Logs in the user using email and password
 */
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

/**
 * Creates a new user account using email and password
 */
export async function signup({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const data = {
    email,
    password,
    data: {
      name,
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
