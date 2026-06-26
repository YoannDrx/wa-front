import axios from "axios";

const trimTrailingSlash = (value = "") => value.replace(/\/$/, "");

const getConfiguredApiUrl = () => {
  const value = process.env.NEXT_PUBLIC_API_URL;

  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);

    // This variable was historically set to the Supabase project URL on Vercel.
    // It must never be used as the base for this application's /api routes.
    if (url.hostname.endsWith(".supabase.co")) {
      return null;
    }
  } catch {
    // Relative URLs are valid for local development and are handled as-is below.
  }

  return trimTrailingSlash(value);
};

export const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "/api";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}/api`;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return `${trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL)}/api`;
  }

  const configuredApiUrl = getConfiguredApiUrl();

  if (configuredApiUrl) {
    return configuredApiUrl;
  }

  return "http://localhost:3000/api";
};

export const apiClient = axios.create();

apiClient.interceptors.request.use((config) => ({
  ...config,
  baseURL: config.baseURL || getApiBaseUrl(),
}));
