import { createClient } from "@supabase/supabase-js";

const getRequiredEnv = (key) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const getSupabaseUrl = () => getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL");
const getSupabaseAnonKey = () => getRequiredEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

export const createSupabaseBrowserClient = () => createClient(getSupabaseUrl(), getSupabaseAnonKey());

export const createSupabaseAuthClient = () => createClient(getSupabaseUrl(), getSupabaseAnonKey());

export const createSupabaseAdminClient = () => createClient(getSupabaseUrl(), getRequiredEnv("SUPABASE_SERVICE_ROLE_KEY"));

export const createSupabaseServerClient = () => {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  return createClient(getSupabaseUrl(), serviceRoleKey || getSupabaseAnonKey());
};
