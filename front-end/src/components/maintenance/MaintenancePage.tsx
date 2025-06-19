// src/components/maintenance/MaintenancePage.tsx

"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IconCake,
  IconLayoutDashboard,
  IconToolsKitchen2,
} from "@tabler/icons-react";

// Impor komponen Button dan tipe RootState
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { Link } from "@tanstack/react-router";
import { fetchUserProfile } from "@/lib/redux/slices/authSlice";

const MaintenancePage: React.FC = () => {
  const {
    user,
    token,
    status: authStatus,
  } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // Hanya dispatch jika ada token, tapi belum ada data user, dan tidak sedang dalam proses fetching
    if (token && !user && authStatus !== "loading") {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, user, authStatus]);
  const isAdmin = user?.role === "ADMIN";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-50 dark:bg-neutral-900 text-center p-4">
      {/* Container utama dengan bayangan dan border */}
      <div className="bg-white dark:bg-neutral-800 p-8 sm:p-12 rounded-2xl shadow-xl border border-rose-100 dark:border-neutral-700 max-w-lg w-full">
        {/* Ikon Kue */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <IconToolsKitchen2
            size={40}
            className="absolute top-0 left-0 text-rose-300 dark:text-rose-600 animate-bounce"
            style={{ animationDuration: "2s" }}
          />
          <IconCake size={80} className="text-rose-400 dark:text-rose-500" />
          <IconToolsKitchen2
            size={40}
            className="absolute bottom-0 right-0 text-rose-300 dark:text-rose-600 animate-bounce"
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
          />
        </div>

        {/* Judul Utama */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Sedang Menyiapkan Sesuatu yang Lezat!
        </h1>

        {/* Deskripsi */}
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          Toko kami sedang dalam perbaikan untuk memberikan pengalaman yang
          lebih baik untuk Anda. Kami akan segera kembali dengan tampilan baru
          dan produk-produk yang menggugah selera.
        </p>

        {/* Pesan Tambahan */}
        <p className="mt-6 text-sm font-semibold text-rose-500 dark:text-rose-400">
          Terima kasih atas kesabaran Anda!
        </p>

        {/* 3. Tampilkan tombol navigasi HANYA untuk ADMIN */}
        {isAdmin && (
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link to="/admin">
                <IconLayoutDashboard className="mr-2 h-4 w-4" />
                Kembali ke Dashboard Admin
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-xs text-gray-500 dark:text-gray-600">
        &copy; {new Date().getFullYear()} Rossi Cake. All Rights Reserved.
      </footer>
    </div>
  );
};

export default MaintenancePage;
