import { Link } from "@tanstack/react-router";
import { FloatingNav } from "../ui/floating-navbar";
import DarkMode from "../DarkMode";

const navItems = [
  { name: "Home", link: "/" },
  // { name: "About ", link: "/about/aboutUs" },
  // { name: "Product", link: "/about/aboutProduct" },
  { name: "Shop", link: "/shop" },
  // { name: "Login", link: "/login" },
  // { name: "akun", link: "/user/account" },
];

const NavbarMobile = () => (
  <div className="relative w-full px-28 lg:hidden">
    <FloatingNav navItems={navItems} />
  </div>
);

const NavbarPc = () => (
  <nav className="py-3 border-b-2 hidden lg:flex">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 ms-5">
        <Link to="/" className="flex items-center gap-3 font-semibold">
          <h3>Rossi Cake</h3>
        </Link>
      </div>

      {/* Navbar Items */}
      <div className="hidden lg:flex items-center space-x-6">
        {navItems.map(({ name, link }) => (
          <Link key={link} to={link} className="px-5 py-2 rounded-full">
            {name}
          </Link>
        ))}

        <DarkMode />
        <Link
          to="/user/account"
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
        >
          <span>Akun</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
      </div>
    </div>
  </nav>
);

export const Navbar = () => (
  <>
    <NavbarPc />
    <NavbarMobile />
  </>
);
