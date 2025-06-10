// src/components/ui/ApiErrorDisplay.tsx

import React, { useState } from "react";
import { AlertTriangle, ChevronDown, RefreshCw } from "lucide-react";
import { isAxiosError } from "axios"; // Helper untuk mengecek tipe error
import { Button } from "@/components/ui/button";

interface ApiErrorDisplayProps {
  /**
   * Pesan error utama yang ingin ditampilkan.
   */
  title?: string;
  /**
   * Objek error yang diterima dari 'catch' atau TanStack Query.
   */
  error: Error | null;
  /**
   * Fungsi yang akan dijalankan saat tombol "Coba Lagi" diklik.
   */
  onRetry?: () => void;
  /**
   * ClassName tambahan untuk styling.
   */
  className?: string;
}

/**
 * Komponen reusable untuk menampilkan pesan error saat fetch API gagal.
 */
export const ApiErrorDisplay: React.FC<ApiErrorDisplayProps> = ({
  title = "Gagal Memuat Data",
  error,
  onRetry,
  className,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  // Mendapatkan pesan error yang lebih spesifik
  const getErrorMessage = () => {
    if (isAxiosError(error) && error.response) {
      // Jika error dari Axios dan ada respons dari server
      return `Server merespons dengan status ${error.response.status}. Coba beberapa saat lagi.`;
    }
    if (error?.message.includes("Network Error")) {
      // Jika error karena masalah jaringan
      return "Gagal terhubung ke server. Periksa koneksi internet Anda.";
    }
    // Error umum
    return "Terjadi kesalahan yang tidak terduga. Silakan coba lagi.";
  };

  if (!error) return null; // Jangan render apapun jika tidak ada error

  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/20 rounded-lg ${className}`}
      role="alert"
    >
      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
        <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
      </div>

      <h3 className="text-xl font-semibold text-red-800 dark:text-red-300">
        {title}
      </h3>
      <p className="mt-2 text-sm text-red-700 dark:text-red-400">
        {getErrorMessage()}
      </p>

      {/* Tombol Aksi */}
      {onRetry && (
        <Button onClick={onRetry} variant="destructive" className="mt-6">
          <RefreshCw className="mr-2 h-4 w-4" />
          Coba Lagi
        </Button>
      )}

      {/* Detail Teknis untuk Debugging */}
      <div className="mt-4 w-full max-w-md">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs text-neutral-500 dark:text-neutral-400 hover:underline flex items-center justify-center w-full"
        >
          Detail Teknis
          <ChevronDown
            className={`ml-1 h-4 w-4 transition-transform ${
              showDetails ? "rotate-180" : ""
            }`}
          />
        </button>
        {showDetails && (
          <pre className="mt-2 p-3 bg-neutral-100 dark:bg-neutral-800 text-left text-xs text-neutral-600 dark:text-neutral-300 rounded-md overflow-auto whitespace-pre-wrap">
            <code>{error.stack || error.toString()}</code>
          </pre>
        )}
      </div>
    </div>
  );
};
