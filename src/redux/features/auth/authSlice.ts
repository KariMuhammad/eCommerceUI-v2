// authSlice.ts - Create a separate slice for persisting auth data
import { isTokenExpired } from '@/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface AuthState {
    token: string;
    username: string;
    email: string;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    token: "",
    username: "",
    email: "",
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ token: string; username?: string }>) => {
            state.token = action.payload.token;
            state.username = action.payload.username || "";
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.token = "";
            state.username = "";
            state.isAuthenticated = false;
        },

        checkTokenExpiration: (state) => {
            if (state.token && isTokenExpired(state.token)) {
                // Token is expired, clear auth state
                state.token = "";
                state.username = "";
                state.email = "";
                state.isAuthenticated = false;
            }
        },
    },
});

export const { setCredentials, logout, checkTokenExpiration } = authSlice.actions;

// Persist configuration for auth slice
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'username', 'isAuthenticated'], // Persist these fields
};

export const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

const authReducer = authSlice.reducer;
export default authReducer;