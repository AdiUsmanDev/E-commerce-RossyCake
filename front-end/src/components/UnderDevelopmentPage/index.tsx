"use client";

import React from "react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { HardHat, Home } from "lucide-react";

const UnderDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      {/* Ikon yang menarik dan relevan */}
      <div className="relative mb-6">
        <div className="absolute -inset-2 bg-amber-200 dark:bg-amber-800/50 rounded-full blur-xl"></div>
        <div className="relative p-6 bg-amber-400 rounded-full shadow-lg">
          <HardHat className="h-16 w-16 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Judul dan Deskripsi */}
      <h1 className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
        Segera Hadir!
      </h1>
      <p className="mt-3 max-w-md text-lg text-muted-foreground">
        Tim kami sedang bekerja keras menyiapkan fitur ini untuk Anda. Nantikan
        pembaruan selanjutnya!
      </p>

      {/* Tombol Aksi */}
      <Button onClick={() => navigate({ to: "/" })} className="mt-8">
        <Home className="mr-2 h-4 w-4" />
        Kembali ke Beranda
      </Button>
    </div>
  );
};

export default UnderDevelopmentPage;
