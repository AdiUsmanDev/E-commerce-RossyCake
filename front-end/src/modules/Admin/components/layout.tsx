import { Tabs } from "@/components/ui/tabs";
import SidebarAdmin from "./sidebar";
import { useEffect } from "react";
import { fetchUserProfile } from "@/lib/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/redux/store";

export const LayoutAdmin = ({ children }) => {
  const {
    user,
    token,
    status: authStatus,
  } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // Hanya dispatch jika ada token, tapi belum ada data user, dan tidak sedang dalam proses fetching
    if (token && !user && authStatus !== "loading") {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, token, user, authStatus]);
  return (
    <Tabs
      defaultValue="dashboard"
      className="flex w-full max-w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800 h-screen"
    >
      <SidebarAdmin />
      {children}
    </Tabs>
  );
};
