// src/lib/redux/slices/authSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "@/types/auth.types";
import { User } from "@/types/user.types";
import { login, register } from "@/services/auth.service";
import {
  getProfile,
  updateProfile,
  UpdateProfilePayload,
} from "@/services/profile.service";

// Interface untuk state, tidak berubah
interface AuthState {
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Inisialisasi state awal, tidak berubah
const initialState: AuthState = {
  user: null,
  token:
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null,
  status: "idle",
  error: null,
};

// --- Async Thunks ---
// Definisi async thunk Anda sudah baik, tidak perlu diubah.
// loginUser, registerUser, fetchUserProfile, updateUserProfile

export const loginUser = createAsyncThunk<AuthResponse, LoginPayload>(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await login(payload);
      localStorage.setItem("authToken", response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const registerUser = createAsyncThunk<User, RegisterPayload>(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await register(payload);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const fetchUserProfile = createAsyncThunk<User>(
  "auth/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const user = await getProfile();
      return user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Could not fetch profile"
      );
    }
  }
);

export const updateUserProfile = createAsyncThunk<User, UpdateProfilePayload>(
  "auth/updateProfile",
  async (payload, { rejectWithValue }) => {
    try {
      const updatedUser = await updateProfile(payload);
      return updatedUser;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Update profile failed"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // Membersihkan semua data sesi pengguna untuk logout yang bersih.
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("authToken");
    },
    // **PERBAIKAN 1: Tambahkan action untuk membersihkan error secara manual jika diperlukan**
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // --- Kasus untuk Login ---
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.status = "succeeded";
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })

      // --- Kasus untuk Registrasi ---
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null; // **PERBAIKAN 2: Konsistensi, bersihkan error saat memulai**
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })

      // --- Kasus untuk Mengambil Profil ---
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null; // **PERBAIKAN 2: Konsistensi, bersihkan error saat memulai**
      })
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "succeeded";
          state.user = action.payload;
        }
      )
      .addCase(fetchUserProfile.rejected, (state, action) => {
        // **PERBAIKAN 3: Penanganan sesi tidak valid yang lebih baik**
        // Jika fetch profile gagal, ini kemungkinan besar karena token tidak valid.
        // Lakukan logout otomatis untuk membersihkan state.
        state.status = "failed"; // Tandai sebagai gagal
        state.user = null;
        state.token = null;
        // Simpan pesan error yang relevan
        state.error = (action.payload as string) || "Sesi tidak valid.";
        localStorage.removeItem("authToken");
      })

      // --- Kasus untuk Memperbarui Profil ---
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null; // Sudah benar, membersihkan error lama
      })
      .addCase(
        updateUserProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "succeeded";
          // Pastikan state.user diperbarui dengan data terbaru
          state.user = action.payload;
        }
      )
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed";
        // Cukup simpan pesan error. Logika logout jika token invalid
        // sudah ditangani oleh `fetchUserProfile.rejected`.
        state.error = action.payload as string;
      });
  },
});

// Ekspor action baru
export const { logout, clearAuthError } = authSlice.actions;

export default authSlice.reducer;
