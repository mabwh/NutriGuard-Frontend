import axios from "axios";
import { authStore } from "../store/auth";

const API_URL = "https://nutriguard.runasp.net/api/";

const axiosInstance = axios.create({
    baseURL: API_URL,
});

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

        // Only try to refresh when the backend returns 401 and if it's only the backend not the ai server
        if (error.response?.status === 401 && !originalRequest._retry &&
            !originalRequest.skipAuthRefresh) {
            originalRequest._retry = true;

            const refreshToken = authStore.getState().refreshToken;

            if (!refreshToken) {
                return Promise.reject(error);
            }

            try {
                const response = await axios.post(
                    `${API_URL}Auth/refresh`,
                    {
                        refreshToken: refreshToken,
                    },
                );

                const data = response.data;

                if (!data.isSuccess) {
                    // OLD CODE - kept intentionally for safety.
                    // return Promise.reject(error);

                    // NEW CODE:
                    // A rejected refresh token cannot authenticate future protected requests.
                    authStore.getState().clearAuth();
                    return Promise.reject(error);
                }

                // Refresh responses contain tokens, not the full login payload.
                authStore.getState().updateTokens(data);

                // Put the new access token on the original request
                originalRequest.headers.Authorization = `Bearer ${data.token}`;

                // Try the original request again
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                // NEW CODE:
                // Clear only an explicitly rejected refresh response; keep auth on network failures.
                if (refreshError.response?.data?.isSuccess === false) {
                    authStore.getState().clearAuth();
                }
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    },
);

export default axiosInstance;

//Without _retry, you could accidentally create:
//401 → refresh → 401 → refresh → 401 → refresh → ...
