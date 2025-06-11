import NotAdminErrorPage from "@/components/Forbidden";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";
import { fetchUserProfile } from "@/lib/redux/slices/authSlice";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { useNavigate } from "@tanstack/react-router";
import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ProtectedProps {
  children: React.ReactNode;
  roles: string[]; // list of allowed roles or IDs
}

const Protected = ({ children, roles }: ProtectedProps) => {
  // Ambil juga 'status' dari Redux untuk mengetahui state loading
  const {
    user,
    token,
    status: authStatus,
  } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  // --- Efek untuk Navigasi ---
  // Dijalankan setiap kali auth state berubah
  useEffect(() => {
    // Hanya dispatch jika ada token, tapi belum ada data user, dan tidak sedang dalam proses fetching
    if (token && !user && authStatus !== "loading") {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, user, authStatus]);

  if (authStatus === "loading" || (token && !user)) {
    return (
      <GuestLayouts>
        <div className="flex justify-center items-center min-h-screen">
          <LoaderCircle className="h-12 w-12 animate-spin text-primary" />
        </div>
      </GuestLayouts>
    );
  }
  if (!token) {
    navigate({ to: "/auth" });
  }

  if (user && token) {
    const isAuthorized = roles.includes(user.role);

    if (isAuthorized) {
      return <>{children}</>;
    } else {
      return <NotAdminErrorPage />;
    }
  }

  return;
};

export default Protected;
