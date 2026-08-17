import axios from "axios";
import { authStore } from "../store/auth";

const AI_API_URL = "http://localhost:3000";
const BACKEND_API_URL = "https://nutriguard.runasp.net/api/";

// NEW CODE:
// The AI server has its own base URL and must not reuse the Backend Axios instance.
const aiAxios = axios.create({
  baseURL: AI_API_URL,
});

// AI REQUEST INTERCEPTOR
// The AI server requires only the current Backend access token.
aiAxios.interceptors.request.use(
  (config) => {
    const accessToken = authStore.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// AI RESPONSE INTERCEPTOR
// A single AI 401 refreshes through the existing Backend endpoint, then retries once.
aiAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = authStore.getState().refreshToken;

      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        const response = await axios.post(`${BACKEND_API_URL}Auth/refresh`, {
          refreshToken,
        });
        const data = response.data;

        if (!data.isSuccess) {
          return Promise.reject(error);
        }

        authStore.getState().setAuth(data);

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${data.token}`;

        return aiAxios(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default aiAxios;
