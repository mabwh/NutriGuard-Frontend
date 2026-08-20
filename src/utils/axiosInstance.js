import axios from "axios";
import { authStore } from "../store/auth";

const API_URL = "https://nutriguard.runasp.net/api/";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// This holds the refresh request while it is running.
// If another request gets a 401 during that time,
// it will wait for this same promise instead of starting
// another refresh request.
let refreshPromise = null;

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = authStore.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    // Only handle 401 responses from requests that are allowed
    // to use the refresh-token flow.
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.skipAuthRefresh
    ) {
      originalRequest._retry = true;

      const refreshToken = authStore.getState().refreshToken;

      if (!refreshToken) {
        return Promise.reject(error);
      }

      try {
        // If another request is already refreshing,
        // wait for that refresh instead of starting another one.
        if (!refreshPromise) {
          refreshPromise = axios
            .post(`${API_URL}Auth/refresh`, {
              refreshToken: refreshToken,
            })
            .then((response) => {
              const data = response.data;

              if (!data.isSuccess) {
                authStore.getState().clearAuth();
                throw new Error(data.message || "Refresh token failed");
              }

              // Store the new access token and refresh token.
              authStore.getState().updateTokens(data);

              return data;
            })
            .finally(() => {
              // Allow a future refresh after this one finishes.
              refreshPromise = null;
            });
        }

        // Wait for the existing refresh request.
        const data = await refreshPromise;

        // Get the newest access token from the store.
        // This is safer than relying only on the token that
        // belonged to the request that originally received 401.
        const newAccessToken = authStore.getState().accessToken;

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry the original request.
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;