// src/layouts/GuestLayouts.tsx

"use client";

import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useEffect, type ReactNode } from "react";
import { LoaderCircle } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import MaintenancePage from "@/components/maintenance/MaintenancePage"; // Halaman maintenance

import { getGeneralSettings } from "@/services/settings.service";
import { RootState } from "@/lib/redux/store";

type GuestLayoutsProps = {
  children: ReactNode;
};

export const GuestLayouts = ({ children }: GuestLayoutsProps) => {
  const { user } = useSelector((state: RootState) => state.auth);
useEffect(() => {
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
    document.body.style.overflow = "auto";
  }, []);

  const {
    data: settings,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["generalSettings"],
    queryFn: getGeneralSettings,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-neutral-900">
        <LoaderCircle className="h-10 w-10 animate-spin text-rose-500" />
      </div>
    );
  }

  if (isError) {
    console.error("Gagal memuat status maintenance, situs akan ditampilkan.");
  }

  // 4. Tentukan kondisi untuk mode maintenance
  const isMaintenanceActive = settings?.maintenanceMode || false;

  if (isMaintenanceActive) {
    return <MaintenancePage />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
