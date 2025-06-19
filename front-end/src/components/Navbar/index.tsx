"use client";

import { Link, useRouterState } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import {
  IconCake,
  IconHome,
  IconBuildingStore,
  IconShoppingCart,
  IconUserCircle,
  IconToolsKitchen2, // Untuk Admin
} from "@tabler/icons-react";

import { FloatingNav } from "../ui/floating-navbar";
import DarkMode from "../DarkMode";
import { RootState } from "@/lib/redux/store";
import { User } from "@/types/user.types";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

// ===================================================================
// Navbar untuk Tampilan Mobile (Menggunakan FloatingNav)
// ===================================================================
const NavbarMobile = ({
  isLoggedIn,
  user,
}: {
  isLoggedIn: boolean;
  user: User | null;
}) => {
  // Item navigasi untuk mobile, bisa ditambahkan ikon
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome className="h-4 w-4" /> },
    {
      name: "Shop",
      link: "/shop",
      icon: <IconBuildingStore className="h-4 w-4" />,
    },
    {
      name: "Cart",
      link: "/cart",
      icon: <IconShoppingCart className="h-4 w-4" />,
    },
    // Tombol Akun/Admin/Login akan ditangani secara terpisah di dalam FloatingNav
  ];

  // CATATAN: Pastikan komponen FloatingNav Anda juga di-style dengan tema baru
  // dan dapat menerima prop 'user' dan 'isLoggedIn' untuk menampilkan tombol yang sesuai.
  return (
    <div className="relative w-full lg:hidden">
      <FloatingNav navItems={navItems} isLoggedIn={isLoggedIn} user={user} />
    </div>
  );
};

// ===================================================================
// Navbar untuk Tampilan Desktop (PC)
// ===================================================================
const NavbarPc = ({
  isLoggedIn,
  user,
}: {
  isLoggedIn: boolean;
  user: User | null;
}) => {
  // Hook untuk mendeteksi path saat ini, untuk menandai link aktif
  const { location } = useRouterState();

  // Daftar item navigasi untuk PC
  const navItems = [
    { name: "Home", link: "/", icon: <IconHome size={18} /> },
    { name: "Shop", link: "/shop", icon: <IconBuildingStore size={18} /> },
  ];

  return (
    <nav className="hidden lg:flex sticky top-0 z-50 w-full border-b border-black/[0.1] dark:border-white/[0.1] bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <IconCake
            className="h-7 w-7 text-rose-500 group-hover:animate-spin"
            style={{ animationDuration: "2s" }}
          />
          <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 tracking-tight group-hover:text-rose-600 transition-colors">
            Rossi Cake
          </h3>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.link
                  ? "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30"
                  : "text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-neutral-800"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-5">
          <DarkMode />

          {isLoggedIn ? (
            <Button
              asChild
              className="bg-rose-500 text-white hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-700 rounded-full"
            >
              <Link to={user?.role === "ADMIN" ? "/admin" : "/user/account"}>
                {user?.role === "ADMIN" ? (
                  <IconToolsKitchen2 size={18} />
                ) : (
                  <IconUserCircle size={18} />
                )}
                <span className="ml-2">
                  {user?.role === "ADMIN" ? "Admin" : "Akun"}
                </span>
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/auth">
                <span>Login / Daftar</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

// ===================================================================
// Komponen Navbar Utama
// ===================================================================
export const Navbar = () => {
  const { token, user } = useSelector((state: RootState) => state.auth);
  const isLoggedIn = !!token;

  return (
    <>
      <NavbarPc isLoggedIn={isLoggedIn} user={user} />
      <NavbarMobile isLoggedIn={isLoggedIn} user={user} />
    </>
  );
};
