"use client";

import React, { FormEvent } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

// Komponen UI
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
import { Switch } from "@/components/ui/switch";
import { LoaderCircle } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Service & Tipe Data
import {
  getGeneralSettings,
  updateGeneralSettings,
  GeneralSettingsData,
} from "@/services/settings.service";

// Komponen Pengaturan Umum yang sudah fungsional
const GeneralSettings = () => {
  const queryClient = useQueryClient();

  // 1. Fetch data pengaturan menggunakan React Query
  const { data: settings, isLoading } = useQuery<GeneralSettingsData>({
    queryKey: ["generalSettings"],
    queryFn: getGeneralSettings,
  });

  // 2. Buat mutasi untuk memperbarui pengaturan
  const { mutate: updateSettings, isPending: isSaving } = useMutation({
    mutationFn: updateGeneralSettings,
    onSuccess: (newData) => {
      queryClient.setQueryData(["generalSettings"], newData);
      toast.success("Pengaturan berhasil disimpan.");
    },
    onError: (error) => {
      toast.error(`Gagal menyimpan: ${error.message}`);
    },
  });

  const handleSaveChanges = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const siteName = (form.elements.namedItem("siteName") as HTMLInputElement)
      .value;
    const siteTagline = (
      form.elements.namedItem("siteTagline") as HTMLInputElement
    ).value;

    updateSettings({ siteName, siteTagline });
  };

  const handleToggleMaintenance = (checked: boolean) => {
    updateSettings({ maintenanceMode: checked });
  };

  if (isLoading) {
    return <p>Memuat pengaturan...</p>; // Bisa diganti dengan skeleton UI
  }

  return (
    <Card>
      <form onSubmit={handleSaveChanges}>
        <CardHeader>
          <CardTitle>Pengaturan Umum</CardTitle>
          <CardDescription>
            Kelola informasi dasar dan status operasional toko Anda.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="siteName">Nama Toko</Label>
            <Input
              id="siteName"
              name="siteName"
              defaultValue={settings?.siteName}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteTagline">Tagline Toko</Label>
            <Input
              id="siteTagline"
              name="siteTagline"
              defaultValue={settings?.siteTagline}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <Label htmlFor="maintenance-mode" className="font-medium">
                Mode Maintenance
              </Label>
              <p className="text-xs text-muted-foreground">
                Jika aktif, hanya admin yang bisa mengakses toko.
              </p>
            </div>
            <Switch
              id="maintenance-mode"
              checked={settings?.maintenanceMode}
              onCheckedChange={handleToggleMaintenance}
              disabled={isSaving}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSaving}>
              {isSaving && (
                <LoaderCircle className="animate-spin mr-2 h-4 w-4" />
              )}
              Simpan Perubahan
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

// Halaman Wrapper Utama
const AdminSettingsPage: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col gap-4 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">Pengaturan</h1>
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
      {/* Di sini bisa ditambahkan <Tabs> jika ada jenis pengaturan lain */}
      <GeneralSettings />
    </div>
  );
};

export default AdminSettingsPage;
