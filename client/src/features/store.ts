// src/features/store.ts

import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

// Define RootState type (state shape of your entire store)
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type (dispatch function)
export type AppDispatch = typeof store.dispatch;

export default store;
