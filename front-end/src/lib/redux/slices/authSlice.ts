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

// Interface untuk state
interface AuthState {
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Inisialisasi state awal
const initialState: AuthState = {
  user: null,
  token:
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null,
  status: "idle",
  error: null,
};

// --- Async Thunks ---
// Definisi async thunk Anda sudah baik
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
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      state.role = null; // PERBAIKAN: Pastikan role juga di-reset saat logout
      localStorage.removeItem("authToken");
    },
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
          // PERBAIKAN: Set state 'role' setelah login berhasil
          state.role = action.payload.user.role;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })

      // --- Kasus untuk Mengambil Profil ---
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "succeeded";
          state.user = action.payload;
          // PERBAIKAN: Set state 'role' setelah fetch profile berhasil
          state.role = action.payload.role;
        }
      )
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.token = null;
        state.role = null; // PERBAIKAN: Reset role jika fetch gagal
        state.error = (action.payload as string) || "Sesi tidak valid.";
        localStorage.removeItem("authToken");
      })

      // --- Kasus untuk Memperbarui Profil ---
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        updateUserProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.status = "succeeded";
          state.user = action.payload;
          // PERBAIKAN: Update juga role jika ada perubahan
          state.role = action.payload.role;
        }
      )
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })

      // Kasus registrasi tidak perlu mengubah role, jadi bisa dibiarkan
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;

export default authSlice.reducer;
