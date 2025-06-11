"use client";

import { useState, FormEvent, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "@tanstack/react-router";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { loginUser, registerUser } from "@/lib/redux/slices/authSlice";
import { IconBrandGoogle } from "@tabler/icons-react";
import InputAuth from "./InputAuth";
import { LoaderCircle, User, Mail, Lock } from "lucide-react";
import { Route } from "@/routes/auth";

// Props baru untuk AuthForm, lebih sederhana
interface AuthFormProps {
  isSignUp: boolean;
  onSwitch: () => void;
}

// State untuk semua field form
type FormState = {
  name: string;
  email: string;
  password: string;
};

const AuthForm = ({ isSignUp, onSwitch }: AuthFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { redirect } = Route.useSearch();
  const { status, error, token } = useSelector(
    (state: RootState) => state.auth
  );

  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      // Dispatch register dan tunggu hasilnya
      const resultAction = await dispatch(
        registerUser({
          name: formState.name,
          email: formState.email,
          password: formState.password,
        })
      );
      // Jika registrasi berhasil, panggil onSwitch untuk pindah ke form login
      if (registerUser.fulfilled.match(resultAction)) {
        onSwitch();
      }
    } else {
      // Dispatch login hanya dengan email dan password
      dispatch(
        loginUser({ email: formState.email, password: formState.password })
      );
    }
  };
  // Redirect setelah login berhasil
  useEffect(() => {
    if (token) {
      navigate({ to: "/" });
    }
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center w-full max-w-sm">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        {isSignUp ? "Create Account" : "Login"}
      </h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-1">
        {/* Input untuk Nama hanya ditampilkan saat registrasi */}
        {isSignUp && (
          <InputAuth
            icon={<User size={20} className="text-gray-400" />}
            type="text"
            placeholder="Name"
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

        {!isSignUp && (
          <a
            href="#"
            className="text-sm text-gray-500 dark:text-gray-400 self-end mb-4"
          >
            Forgot password?
          </a>
        )}

        {error && (
          <p className="text-sm text-red-500 text-center my-2">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2.5 mt-2 rounded-full font-semibold hover:bg-blue-600 transition flex items-center justify-center disabled:bg-blue-400"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <LoaderCircle className="animate-spin" />
          ) : isSignUp ? (
            "Create Account"
          ) : (
            "Login"
          )}
        </button>
      </form>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
        or continue with
      </p>
      <button className="mt-2 w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 hover:border-blue-500 transition">
        <IconBrandGoogle />
      </button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={onSwitch}
            className="text-blue-500 font-semibold hover:underline ml-1"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
