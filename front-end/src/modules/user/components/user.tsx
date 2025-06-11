// src/app/user/account/RouteComponent.tsx
"use client";

import React, { JSX, ReactNode, useEffect } from "react";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import AccountNavigation from "./AccountNavigation";
import DisplayBooking from "./DisplayBooking";
import DisplayNotification from "./DisplayNotification";
import DisplayVoucher from "./DisplayVoucher";
import {
  IconBasket,
  IconDiscount,
  IconNotification,
  IconUser,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { fetchUserProfile, logout } from "@/lib/redux/slices/authSlice";
import { useNavigate } from "@tanstack/react-router";
import { LoaderCircle } from "lucide-react";
import DisplayEditProfile from "./DisplayEditProfile";
import UnderDevelopmentPage from "@/components/UnderDevelopmentPage";

// Interface dan komponen wrapper tidak perlu diubah
interface NavLinkItem {
  title: string;
  value: string;
  icon: JSX.Element;
}
const DisplayWrapper = ({ children }: { children: ReactNode }) => (
  <Card className="h-full w-full shadow-none border-0 md:border md:shadow-sm dark:border-neutral-700">
    {children}
  </Card>
);

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // Ambil semua state yang relevan dari Redux
  const { user, token, status } = useSelector((state: RootState) => state.auth);

  // Efek untuk mengambil data user jika belum ada (misal: setelah refresh halaman)
  useEffect(() => {
    // Hanya dispatch jika ada token, tapi belum ada data user, dan tidak sedang dalam proses fetching
    if (token && !user && status !== "loading") {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, user, status]);

  // Efek untuk redirect jika tidak terautentikasi
  useEffect(() => {
    // Jika proses auth sudah selesai (berhasil/gagal) dan tidak ada token, redirect ke halaman login
    if (!token && (status === "succeeded" || status === "failed")) {
      navigate({ to: "/auth" });
    }
  }, [token, status, navigate]);

  const accountLinks: NavLinkItem[] = [
    { title: "Profil Saya", value: "editProfile", icon: <IconUser /> },
    { title: "Pesanan Saya", value: "orders", icon: <IconBasket /> },
    { title: "Notifikasi", value: "notifications", icon: <IconNotification /> },
    { title: "Voucher Saya", value: "voucher", icon: <IconDiscount /> },
  ];

  const handleUserLogout = () => {
    dispatch(logout());
    // Redirect ke halaman utama setelah logout
    navigate({ to: "/" });
  };

  // --- KUNCI SINKRONISASI ---
  // Tampilkan loader jika:
  // 1. Sedang dalam proses loading awal ('idle' atau 'loading').
  // 2. Ada token tapi data 'user' belum ada (menunggu fetchUserProfile selesai).
  const isStillLoading = status === "loading" || (token && !user);

  if (isStillLoading) {
    return (
      <GuestLayouts>
        <div className="container flex items-center justify-center min-h-[calc(100vh-10rem)]">
          <LoaderCircle className="h-10 w-10 animate-spin" />
        </div>
      </GuestLayouts>
    );
  }

  // Jika tidak loading dan tetap tidak ada user (misal: token tidak valid), redirect
  // Ini adalah pengaman tambahan
  if (!user) {
    // Atau tampilkan pesan error, redirect lebih baik untuk UX
    navigate({ to: "/auth" });
    return null; // Render null sambil menunggu navigasi
  }

  return (
    <GuestLayouts>
      <div className="container mt-10 md:mt-12 mx-auto px-2 sm:px-4 md:px-8 lg:px-12 py-8 md:py-10">
        <Tabs
          defaultValue="editProfile"
          className="w-full relative flex flex-col md:flex-row gap-4 lg:gap-6"
        >
          {/* Navigasi (Desktop) */}
          <div className="navigation hidden md:block md:w-1/4 lg:w-1/5 shrink-0">
            <AccountNavigation
              userData={{
                name: user.name,
                address: "Alamat belum diatur", // Placeholder
                avatarUrl: `https://ui-avatars.com/api/?name=${user.name?.replace(
                  / /g,
                  "+"
                )}&background=random`,
              }}
              onLogout={handleUserLogout}
              links={accountLinks}
            />
          </div>

          {/* Konten Tab */}
          <div className="display w-full md:w-3/4 lg:w-4/5 h-auto md:min-h-[calc(100vh-10rem)]">
            <DisplayWrapper>
              <TabsContent value="editProfile" className="mt-0">
                {/* Komponen child sekarang aman untuk dirender karena 'user' sudah pasti ada */}
                <DisplayEditProfile />
              </TabsContent>
              <TabsContent value="orders" className="mt-0">
                <DisplayBooking />
              </TabsContent>
              <TabsContent value="notifications" className="mt-0">
                <DisplayNotification />
               
              </TabsContent>
              <TabsContent value="voucher" className="mt-0">
                <DisplayVoucher />
              </TabsContent>
            </DisplayWrapper>
          </div>

          {/* Navigasi Bawah (Mobile) */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 pb-envSafe flex items-center justify-center z-50">
            <div className="absolute bottom-0 left-0 right-0 h-full bg-background/80 dark:bg-neutral-900/80 backdrop-blur-sm border-t dark:border-neutral-700"></div>
            <FloatingDock
              items={accountLinks.map((link) => ({
                title: link.title, // ✅ sesuai
                icon: React.cloneElement(link.icon, {
                  className: "w-5 h-5",
                }),
                href: link.value, // ✅ `value` diganti jadi `href`
              }))}
            />
          </div>
        </Tabs>
      </div>
    </GuestLayouts>
  );
};

export default Users;
