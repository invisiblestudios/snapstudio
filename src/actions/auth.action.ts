'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import createSupabaseServerClient from '@/lib/supabase/server';

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

  revalidatePath('/');
  redirect('/');
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

  revalidatePath('/');
  redirect('/');
}

/**
 * Logs out the user
 */
export async function logout() {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect('/login');
}
