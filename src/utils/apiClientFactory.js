import axios from "axios";
import { authStore } from "../store/auth";

//FACTORY METHOD
export function createApiClient(API_URL) {
  const axiosInstance = axios.create({ baseURL: API_URL });

  // REQUEST INTERCEPTOR
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = authStore.getState().accessToken;

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // RESPONSE INTERCEPTOR
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const refreshToken = authStore.getState().refreshToken;
        if (!refreshToken) return Promise.reject(error);

        try {
          const refreshResponse = await axios.post(`${API_URL}Auth/refresh`, {
            refreshToken,
          });

          const data = refreshResponse.data;
          if (!data.isSuccess) return Promise.reject(error);

          // update tokens
          authStore.getState().setAuth(data);

          // retry original request with new access token
          originalRequest.headers.Authorization = `Bearer ${data.token}`;

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
}
