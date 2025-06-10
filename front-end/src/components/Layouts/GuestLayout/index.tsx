import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ReactNode } from "@tanstack/react-router";
import { useEffect } from "react";

type GuestLayoutsProps = {
  children: ReactNode;
};
export const GuestLayouts = ({ children }: GuestLayoutsProps) => {
  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden overflow-y-auto">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
