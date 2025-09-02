import { logout } from "@/redux/features/auth/authSlice";
import store from "@/redux/store";
import axios from "axios";
import { isTokenExpired } from ".";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000" // API Server
})

// Request interceptor to add token to headers
axiosInstance.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const token = state.auth.token;

        if (token) {
            // Check if token is expired before making request
            if (isTokenExpired(token)) {
                store.dispatch(logout());
                // Optionally redirect to login page
                window.location.href = '/login';
                return Promise.reject(new Error('Token expired'));
            }

            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle 401 responses
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token is invalid or expired
            store.dispatch(logout());
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;