// src/services/api.ts atau src/lib/axios.ts

import axios from "axios";
import { store } from "@/lib/redux/store"; // Impor store Redux Anda

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", // Ganti dengan base URL API Anda
  headers: {
    "Content-Type": "application/json",
  },
});

// Gunakan interceptor untuk menambahkan token ke setiap request
api.interceptors.request.use(
  (config) => {
    // Ambil token dari Redux state
    const token = store.getState().auth.token;

    // Jika token ada, tambahkan ke header Authorization
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
