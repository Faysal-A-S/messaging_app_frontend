import axios from "axios";
import { getDefaultStore } from "jotai/vanilla";
import { authAtom } from "@/store/auth";
import config from "./config";

const store = getDefaultStore();

const api = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const auth = store.get(authAtom);
  config.headers = config.headers ?? {};
  if (config.headers["Content-Type"] === "multipart/form-data") {
    delete config.headers["Content-Type"];
  }
  if (auth?.token) {
    config.headers["Authorization"] = `Bearer ${auth.token}`;
  }
  return config;
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.set(authAtom, null);
    }
    return Promise.reject(error);
  }
);
export default api;
