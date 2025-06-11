"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  IconUser,
  IconSettings,
  IconCreditCard,
  IconBell,
} from "@tabler/icons-react";
import { LoaderCircle } from "lucide-react";

import { RootState, AppDispatch } from "@/lib/redux/store";
import { updateUserProfile } from "@/lib/redux/slices/authSlice";
import { UpdateProfilePayload } from "@/services/profile.service";
import { Switch } from "@/components/ui/switch";

// =======================================================================
// Komponen-komponen untuk setiap tab pengaturan
// =======================================================================

// --- 1. Komponen Pengaturan Profil Admin ---
const AdminProfileSettings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const queryClient = useQueryClient();
  const { user } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name,
        email: user.email,
        password: "",
        confirmPassword: "",
      }));
    }
  }, [user]);

  const { mutate: updateProfile, isPending: isSaving } = useMutation({
    mutationFn: (payload: UpdateProfilePayload) =>
      dispatch(updateUserProfile(payload)).unwrap(),
    onSuccess: () => {
      alert("Profil berhasil diperbarui.");
      queryClient.invalidateQueries({ queryKey: ["userProfile", user?.id] });
      setFormData((prev) => ({ ...prev, password: "", confirmPassword: "" }));
    },
    onError: (err: any) => {
      setError(err.message || "Gagal memperbarui profil.");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (formData.password && formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok.");
      return;
    }

    const payload: UpdateProfilePayload = { name: formData.name };
    if (formData.password) {
      payload.password = formData.password;
    }

    updateProfile(payload);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profil Admin</CardTitle>
        <CardDescription>
          Perbarui informasi personal dan kata sandi Anda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Alamat Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              disabled
            />
            <p className="text-xs text-muted-foreground">
              Email tidak dapat diubah.
            </p>
          </div>
          <Separator />
          <div className="space-y-4">
            <h4 className="font-medium">Ubah Password</h4>
            <div className="space-y-2">
              <Label htmlFor="password">Password Baru</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Isi untuk mengubah"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Password Baru</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div className="flex justify-end">
            <Button type="submit" disabled={isSaving}>
              {isSaving && (
                <LoaderCircle className="h-4 w-4 animate-spin mr-2" />
              )}
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

// --- 2. Komponen Pengaturan Umum ---
const GeneralSettings = () => {
  // State ini akan diganti dengan data dari API di aplikasi nyata
  const [settings, setSettings] = useState({
    siteName: "Rossi Cake",
    siteTagline: "Kue Lezat, Momen Spesial",
    maintenanceMode: false,
  });

  const handleToggleMaintenance = (checked: boolean) => {
    setSettings((prev) => ({ ...prev, maintenanceMode: checked }));
    // Di sini akan ada panggilan API untuk menyimpan status maintenance
    alert(`Mode Maintenance ${checked ? "diaktifkan" : "dinonaktifkan"}.`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pengaturan Umum</CardTitle>
        <CardDescription>
          Kelola informasi dasar dan status operasional toko Anda.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="siteName">Nama Toko</Label>
          <Input id="siteName" defaultValue={settings.siteName} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="siteTagline">Tagline Toko</Label>
          <Input id="siteTagline" defaultValue={settings.siteTagline} />
        </div>
        <Separator />
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div>
            <Label htmlFor="maintenance-mode" className="font-medium">
              Mode Maintenance
            </Label>
            <p className="text-xs text-muted-foreground">
              Jika aktif, pelanggan tidak akan bisa mengakses toko.
            </p>
          </div>
          <Switch
            id="maintenance-mode"
            checked={settings.maintenanceMode}
            onCheckedChange={handleToggleMaintenance}
          />
        </div>
        <div className="flex justify-end">
          <Button>Simpan Pengaturan Umum</Button>
        </div>
      </CardContent>
    </Card>
  );
};

// --- Halaman Utama Pengaturan ---
const AdminSettingsPage: React.FC = () => {
  return (
    // PERBAIKAN: Menambahkan flex-grow dan overflow-y-auto ke container utama
    <div className="flex-grow flex flex-col gap-4 p-4 md:p-6 lg:p-8 overflow-y-auto">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Pengaturan
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Pengaturan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-fit md:grid-cols-4">
          <TabsTrigger value="profile">
            <IconUser className="w-4 h-4 mr-2" />
            Profil
          </TabsTrigger>
          <TabsTrigger value="general">
            <IconSettings className="w-4 h-4 mr-2" />
            Umum
          </TabsTrigger>
          <TabsTrigger value="payment" disabled>
            <IconCreditCard className="w-4 h-4 mr-2" />
            Pembayaran
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            <IconBell className="w-4 h-4 mr-2" />
            Notifikasi
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <AdminProfileSettings />
        </TabsContent>
        <TabsContent value="general" className="mt-6">
          <GeneralSettings />
        </TabsContent>
        <TabsContent value="payment">
          {/* Konten untuk pengaturan pembayaran bisa ditambahkan di sini */}
        </TabsContent>
        <TabsContent value="notifications">
          {/* Konten untuk pengaturan notifikasi bisa ditambahkan di sini */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettingsPage;
