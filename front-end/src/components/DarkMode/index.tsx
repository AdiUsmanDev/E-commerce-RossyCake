import { useEffect, useState } from "react";
import { Toggle } from "../ui/toggle";
import { IconSun, IconMoon } from "@tabler/icons-react";

const DarkMode = () => {
  // Logika ini sudah benar dan tidak perlu diubah.
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Cek tema sistem pengguna sebagai fallback jika localStorage kosong
    if (typeof window !== "undefined") {
      if (localStorage.getItem("darkMode")) {
        return localStorage.getItem("darkMode") === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // useEffect ini juga sudah benar.
  useEffect(() => {
    const html = document.querySelector("html");
    if (darkMode) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    // Perbaikan 3: Menggunakan handler `onPressedChange` yang lebih idiomatis untuk komponen Toggle
    <Toggle
      pressed={darkMode}
      onPressedChange={setDarkMode}
      aria-label="Toggle dark mode"
      // Perbaikan 2: Palet warna disesuaikan dengan tema "Rossi Cake"
      className="relative h-9 w-9 rounded-full border-none bg-stone-200 text-stone-700
                 dark:bg-neutral-800 dark:text-stone-300
                 hover:bg-rose-100 dark:hover:bg-neutral-700
                 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
    >
      {/* Perbaikan 1: Menggunakan ikon in-line dengan animasi rotasi */}
      <IconSun
        size={20}
        className={`absolute transition-transform duration-500 ease-in-out
                    ${darkMode ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
      />
      <IconMoon
        size={20}
        className={`absolute transition-transform duration-500 ease-in-out
                    ${darkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
      />
    </Toggle>
  );
};

export default DarkMode;
