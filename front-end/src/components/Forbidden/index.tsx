import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { useNavigate } from "@tanstack/react-router";
import { Ban, Cake, Home } from "lucide-react";
import { Button } from "../ui/button";

const NotAdminErrorPage = () => {
  const navigate = useNavigate();
  return (
    <GuestLayouts>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center">
        <div className="relative inline-block">
          <Cake className="h-24 w-24 text-pink-300" />
          <Ban className="absolute -top-2 -right-2 h-12 w-12 text-red-500 bg-white rounded-full p-1" />
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          Akses Ditolak
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Maaf, halaman ini hanya dapat diakses oleh Administrator.
        </p>
        <Button onClick={() => navigate({ to: "/" })} className="mt-8">
          <Home className="mr-2 h-4 w-4" />
          Kembali ke Beranda
        </Button>
      </div>
    </GuestLayouts>
  );
};

export default NotAdminErrorPage;
