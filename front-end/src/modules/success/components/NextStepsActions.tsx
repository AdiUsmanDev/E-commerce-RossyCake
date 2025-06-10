import React from "react";
import { Button } from "@/components/ui/button";
import { Home, PackageSearch } from "lucide-react";
import { useNavigate } from "@tanstack/react-router"; // Gunakan useNavigate

export const NextStepsActions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
      {/* Tombol ini akan mengarahkan ke halaman riwayat pesanan */}
      <Button
        variant="outline"
        className="w-full sm:w-auto"
        onClick={() =>
          navigate({ to: "/user/account", search: { tab: "orders" } })
        }
      >
        <PackageSearch className="mr-2 h-4 w-4" />
        Lihat Riwayat Pesanan
      </Button>

      {/* Tombol ini akan mengarahkan ke halaman utama toko */}
      <Button
        className="w-full sm:w-auto"
        onClick={() => navigate({ to: "/shop" })}
      >
        <Home className="mr-2 h-4 w-4" />
        Kembali ke Toko
      </Button>
    </div>
  );
};
