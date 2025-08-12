import { API_BASE_URL } from "@/constants";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import storage from "redux-persist/lib/storage";
import { setCredentials } from "./authSlice";
import { CreateUserRequest } from "@/types";

export type LoginUserRequest = {
    email: string;
    password: string;
};

export type UserResponse = {
    token: string;
    username: string;
    email: string;
    mobile: string;
}


const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/auth`,
        // responseHandler: async (response) => {
        //     if (!response.ok) {
        //         const errorData = await response.json();

        //         return {
        //             status: response.status,
        //             errors: errorData,
        //         }
        //     }
        // }
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        register: builder.mutation<string, CreateUserRequest>({
            query: (data) => ({
                url: "/register",
                body: data,
                method: "POST"
            }),


            transformResponse: (response: { data: { message: string } }) => response.data.message,
        }),

        login: builder.mutation<UserResponse, LoginUserRequest>({
            query: (data) => ({
                url: "/login",
                body: data,
                method: "POST",
            }),

            transformResponse: (response: { data: UserResponse }) => response.data,

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // Dispatch setCredentials to update and persist the auth state
                    console.log("data", data);
                    dispatch(setCredentials({
                        token: data.token,
                        username: data.username
                    }));
                } catch (error) {
                    // Handle login error if needed
                    console.error('Login failed:', error);
                }
            },
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST"
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    // Import logout action dynamically to avoid circular dependency
                    const { logout } = await import('./authSlice');
                    dispatch(logout());
                } catch (error) {
                    // Even if logout fails, clear local state
                    const { logout } = await import('./authSlice');
                    dispatch(logout());
                }
            }
        })
    })
})

export default authApi;

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
}