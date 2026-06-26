import axios from "axios";

const trimTrailingSlash = (value = "") => value.replace(/\/$/, "");

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

  return "http://localhost:3000/api";
};

export const apiClient = axios.create();

apiClient.interceptors.request.use((config) => ({
  ...config,
  baseURL: config.baseURL || getApiBaseUrl(),
}));
