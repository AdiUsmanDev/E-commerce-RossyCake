import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // ...tambahkan reducer lain di sini
  },
});

// Definisikan tipe untuk RootState dan AppDispatch untuk digunakan di seluruh aplikasi
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
