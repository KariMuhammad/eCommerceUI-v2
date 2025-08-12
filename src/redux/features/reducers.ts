import { combineReducers } from "@reduxjs/toolkit";
import authApi from "./auth/authApi";
import { persistedAuthReducer } from "./auth/authSlice";
import { productsApi } from "./products/productsApi";
import { categoryApi } from "./category";
import { reviewsApi } from "./reviews";

// Combine all reducers into a single root reducer
export const rootReducer = combineReducers({
  // Add other reducers here as needed
  auth: persistedAuthReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// Export the root reducer type for use in the store configuration
