import { createClient } from "@supabase/supabase-js";

const getRequiredEnv = (key, value) => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const getSupabaseUrl = () => getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL);
const getSupabaseApiKey = () => getRequiredEnv("NEXT_PUBLIC_SUPABASE_KEY", process.env.NEXT_PUBLIC_SUPABASE_KEY);

export const createSupabaseBrowserClient = () => createClient(getSupabaseUrl(), getSupabaseApiKey());

export const createSupabaseAuthClient = () => createClient(getSupabaseUrl(), getSupabaseApiKey());

export const createSupabaseAdminClient = () => createClient(getSupabaseUrl(), getSupabaseApiKey());

export const createSupabaseServerClient = () => createClient(getSupabaseUrl(), getSupabaseApiKey());
