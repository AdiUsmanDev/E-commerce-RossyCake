import { Link } from "@tanstack/react-router";
import { FloatingNav } from "../ui/floating-navbar";
import DarkMode from "../DarkMode";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { User } from "@/types/user.types";

const NavbarMobile = ({
  navItems,
  isLoggedIn,
  user,
}: {
  navItems: { name: string; link: string }[];
  isLoggedIn: boolean;
  user: User | null; // Tambahkan prop user
}) => (
  <div className="relative w-full px-4 sm:px-6 md:px-8 lg:hidden">
    {/* Asumsi FloatingNav juga akan menggunakan prop user */}
    <FloatingNav navItems={navItems} isLoggedIn={isLoggedIn} />
  </div>
);

const NavbarPc = ({
  isLoggedIn,
  user,
}: {
  isLoggedIn: boolean;
  user: User | null; // Tambahkan prop user
}) => (
  <nav className="py-3 border-b-2 hidden lg:flex">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 ms-5">
        <Link to="/" className="flex items-center gap-3 font-semibold">
          <h3>Rossi Cake</h3>
        </Link>
      </div>

      {/* Static Navbar Items */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link to="/" className="px-5 py-2 rounded-full">
          Home
        </Link>
        <Link to="/shop" className="px-5 py-2 rounded-full">
          Shop
        </Link>

        <DarkMode />

        {/* --- Conditional Login/Account Button --- */}
        {isLoggedIn ? (
          <Link
            to={user?.role === "ADMIN" ? "/admin" : "/user/account/"}
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
          >
            <span>{user?.role === "ADMIN" ? "Admin" : "Akun"}</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </Link>
        ) : (
          <Link
            to="/auth" // Correct path for the login page
            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
          >
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </Link>
        )}
      </div>
    </div>
  </nav>
);

export const Navbar = () => {
  // Mengambil state token dan user dari Redux store
  const { token, user } = useSelector((state: RootState) => state.auth);
  // Status login ditentukan oleh keberadaan token
  const isLoggedIn = !!token;

  // Define nav items dynamically based on auth state for the mobile menu
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
  ];

  return (
    <>
      <NavbarPc isLoggedIn={isLoggedIn} user={user} />
      <NavbarMobile navItems={navItems} isLoggedIn={isLoggedIn} user={user} />
    </>
  );
};
