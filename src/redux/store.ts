import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore } from "redux-persist";

import { rootReducer } from "./features/reducers";
import authApi from "./features/auth/authApi";
import { productsApi } from "./features/products/productsApi";
import { categoryApi } from "./features/category";
import { reviewsApi } from "./features/reviews";



const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
    }

  }).concat(authApi.middleware)
    .concat(productsApi.middleware)
    .concat(categoryApi.middleware)
    .concat(reviewsApi.middleware)
});

export default store;
export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
