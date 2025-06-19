"use client";

import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "@tanstack/react-router";
import { AppDispatch, RootState } from "@/lib/redux/store";
import {
  loginUser,
  registerUser,
  resetAuthStatus,
} from "@/lib/redux/slices/authSlice";
import { IconBrandGoogle } from "@tabler/icons-react";
import InputAuth from "./InputAuth";
import { LoaderCircle, User, Mail, Lock, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

interface AuthFormProps {
  isSignUp: boolean;
  onSwitch: () => void;
}

type FormState = {
  name: string;
  email: string;
  password: string;
};

const AuthForm = ({ isSignUp, onSwitch }: AuthFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { status, token, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });
  // State untuk melacak aksi terakhir yang disubmit
  const [submittedAction, setSubmittedAction] = useState<
    "login" | "register" | null
  >(null);

  // PERBAIKAN: useEffect untuk menampilkan notifikasi berdasarkan status dari Redux
  useEffect(() => {
    // Hanya jalankan jika ada aksi yang telah disubmit
    if (!submittedAction) return;

    if (status === "succeeded") {
      if (submittedAction === "register") {
        toast.success("Akun berhasil dibuat! Silakan masuk.");
        onSwitch(); // Pindah ke form login
      }
      // Notifikasi login akan ditangani oleh useEffect di bawah yang menghandle navigasi
      if (submittedAction === "login" && token) {
        toast.success("Berhasil masuk!");
      }
      setSubmittedAction(null); // Reset aksi
      dispatch(resetAuthStatus()); // Reset status di Redux
    }

    if (status === "failed") {
      toast.error(error || "Terjadi kesalahan.");
      setSubmittedAction(null); // Reset aksi
      dispatch(resetAuthStatus()); // Reset status di Redux
    }
  }, [status, token, error, submittedAction, dispatch, navigate, onSwitch]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isSignUp) {
      setSubmittedAction("register"); // Tandai aksi sebagai 'register'
      dispatch(
        registerUser({
          name: formState.name,
          email: formState.email,
          password: formState.password,
        })
      );
    } else {
      setSubmittedAction("login"); // Tandai aksi sebagai 'login'
      dispatch(
        loginUser({
          email: formState.email,
          password: formState.password,
        })
      );
    }
  };

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  // Redirect setelah login berhasil
  useEffect(() => {
    if (token) {
      // Menunggu sesaat agar notifikasi terlihat sebelum navigasi
      setTimeout(() => {
        navigate({ to: "/" });
      }, 500);
    }
  }, [token, navigate]);

  return (
    <div className="relative flex flex-col items-center w-full max-w-sm">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        {isSignUp ? "Buat Akun" : "Masuk"}
      </h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-1">
        {isSignUp && (
          <InputAuth
            icon={<User size={20} className="text-gray-400" />}
            type="text"
            placeholder="Nama"
            value={formState.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange("name", e.target.value)
            }
          />
        )}
        <InputAuth
          icon={<Mail size={20} className="text-gray-400" />}
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange("email", e.target.value)
          }
        />
        <InputAuth
          icon={<Lock size={20} className="text-gray-400" />}
          type="password"
          placeholder="Password"
          value={formState.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange("password", e.target.value)
          }
        />
        {/* {!isSignUp && (
          <a
            href="#"
            className="text-sm text-gray-500 dark:text-gray-400 self-end mb-4"
          >
            Lupa password?
          </a>
        )} */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2.5 mt-2 rounded-full font-semibold hover:bg-blue-600 transition flex items-center justify-center disabled:bg-blue-400"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <LoaderCircle className="animate-spin" />
          ) : isSignUp ? (
            "Buat Akun"
          ) : (
            "Masuk"
          )}
        </button>
      </form>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
        atau lanjutkan dengan
      </p>
      <button className="mt-2 w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 hover:border-blue-500 transition">
        <IconBrandGoogle />
      </button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isSignUp ? "Sudah punya akun?" : "Belum punya akun?"}{" "}
          <button
            onClick={onSwitch}
            className="text-blue-500 font-semibold hover:underline ml-1"
          >
            {isSignUp ? "Masuk" : "Daftar"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
