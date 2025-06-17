"use client";

import React, { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast"; // Import toast

// ... (semua import lainnya tetap sama)
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
  IconAlertTriangle,
  IconServerOff,
  IconScan,
} from "@tabler/icons-react";
import { LoaderCircle } from "lucide-react";

import {
  getAllRawMaterials,
  createRawMaterial,
  updateRawMaterial,
  deleteRawMaterial,
  processBarcode,
  adjustStock,
} from "../../../services/RawMaterials.service";
import {
  CreateRawMaterialPayload,
  RawMaterial,
  UpdateRawMaterialPayload,
} from "@/types/RawMaterials";
import BarcodeScanner from "./BarcodeScanner";
import RawMaterialStatusPanel from "./RawMaterialStatusPanel";
import { getMaterialByBarcode } from "@/services/materials.service";
import { Material } from "@/types/materiasl";
import MaterialMasterForm from "./MaterialMasterForm";
import TableSkeleton from "./TableSkeleton";
import MaterialFormFields from "./MaterialFormFields";

enum DialogType {
  None,
  Form,
  DeleteConfirmation,
  BarcodeScanner,
  MaterialMasterForm,
}

const MaterialManagementPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeDialog, setActiveDialog] = useState<DialogType>(DialogType.None);
  const [editingMaterial, setEditingMaterial] = useState<RawMaterial | null>(
    null
  );
  const [materialToDelete, setMaterialToDelete] = useState<RawMaterial | null>(
    null
  );
  const [scannedBarcode, setScannedBarcode] = useState<string>("");
  const [isAdjustingStock, setIsAdjustingStock] = useState(false);

  const queryKey = ["rawMaterials"];

  const {
    data: materials = [],
    isLoading,
    isError,
    error,
  } = useQuery<RawMaterial[]>({
    queryKey,
    queryFn: getAllRawMaterials,
  });

  // Mutasi untuk simpan (create/update) data
  const saveMutation = useMutation({
    mutationFn: async (data: {
      id?: number;
      payload: CreateRawMaterialPayload | UpdateRawMaterialPayload;
    }) => {
      const { id, payload } = data;
      if (id) {
        return updateRawMaterial(id, payload as UpdateRawMaterialPayload);
      }
      return createRawMaterial(payload as CreateRawMaterialPayload);
    },
    onSuccess: (_, variables) => {
      // Menampilkan notifikasi sukses
      const action = variables.id ? "diperbarui" : "dibuat";
      toast.success(`Bahan baku berhasil ${action}!`);

      // Membatalkan query yang ada untuk memuat ulang data dari server
      queryClient.invalidateQueries({ queryKey });

      // Menutup dialog dan mereset state
      setActiveDialog(DialogType.None);
      setEditingMaterial(null);
    },
    onError: (err: Error, variables) => {
      const action = variables.id ? "memperbarui" : "membuat";
      toast.error(`Gagal ${action} bahan baku: ${err.message}`);
    },
  });

  // Mutasi untuk hapus data
  const deleteMutation = useMutation({
    mutationFn: (materialId: number) => deleteRawMaterial(materialId),
    onSuccess: () => {
      toast.success("Bahan baku berhasil dihapus!");
      queryClient.invalidateQueries({ queryKey });
      setActiveDialog(DialogType.None);
    },
    onError: (err: Error) => {
      toast.error(`Gagal menghapus: ${err.message}`);
      setActiveDialog(DialogType.None);
    },
  });

  // Mutasi untuk memproses barcode
  const barcodeMutation = useMutation({
    mutationFn: (barcode: string) => getMaterialByBarcode(barcode),
    onSuccess: (data: Material | null) => {
      setActiveDialog(DialogType.None);
      if (data) {
        const payload = {
          stock: data.defaultStock,
          barcode: data.barcode,
          reorder_level: data.defaultStock,
        };

        // Memilih aksi dan menampilkan notifikasi yang sesuai
        const promise = isAdjustingStock
          ? adjustStock(payload)
          : processBarcode(payload);
        const actionText = isAdjustingStock
          ? "Penyesuaian stok"
          : "Penambahan stok";

        toast.promise(promise, {
          loading: `${actionText} sedang diproses...`,
          success: `${actionText} berhasil!`,
          error: `Gagal melakukan ${actionText.toLowerCase()}.`,
        });

        promise.then(() => {
          queryClient.invalidateQueries({ queryKey });
        });
      } else {
        // Jika material tidak ditemukan, buka form master material
        setScannedBarcode(data?.barcode || "");
        setActiveDialog(DialogType.MaterialMasterForm);
      }
    },
    onError: (_, barcode) => {
      // Jika terjadi error (misal: 404), langsung buka form master
      toast.error(
        "Barcode tidak terdaftar. Silakan buat master material baru."
      );
      setActiveDialog(DialogType.None);
      setScannedBarcode(barcode);
      setActiveDialog(DialogType.MaterialMasterForm);
    },
  });

  const handleFormSubmit = (
    formData: CreateRawMaterialPayload | UpdateRawMaterialPayload
  ) => {
    saveMutation.mutate({ id: editingMaterial?.id, payload: formData });
  };

  const openCreateForm = () => {
    setEditingMaterial(null);
    setActiveDialog(DialogType.Form);
  };

  const openEditForm = (material: RawMaterial) => {
    setEditingMaterial(material);
    setActiveDialog(DialogType.Form);
  };

  const openDeleteDialog = (material: RawMaterial) => {
    setMaterialToDelete(material);
    setActiveDialog(DialogType.DeleteConfirmation);
  };

  const confirmDelete = () => {
    if (materialToDelete) {
      deleteMutation.mutate(materialToDelete.id);
    }
  };

  const openBarcodeScanner = (adjust: boolean) => {
    setIsAdjustingStock(adjust);
    setActiveDialog(DialogType.BarcodeScanner);
  };

  const handleBarcodeScanAndProcess = (barcode: string) => {
    setScannedBarcode(barcode);
    barcodeMutation.mutate(barcode);
  };

  const handleMaterialMasterFormSuccess = () => {
    setActiveDialog(DialogType.None);
    queryClient.invalidateQueries({ queryKey: ["materials", "rawMaterials"] });
    toast.success("Material Master baru berhasil dibuat!");
    openCreateForm();
  };

  const filteredMaterials = useMemo(
    () =>
      materials.filter((material) =>
        material.material.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [materials, searchQuery]
  );

  // ... (JSX return statement tetap sama persis seperti sebelumnya)
  // Tidak ada perubahan yang diperlukan pada bagian JSX
  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 lg:p-8 w-full">
      {/* ... Header dan Breadcrumb */}
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Manajemen Bahan Baku
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Bahan Baku</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* ... Search dan Tombol Aksi */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 mb-4">
        <div className="relative flex items-center w-full md:max-w-sm">
          <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <Input
            type="search"
            placeholder="Cari nama bahan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-3">
          <Button onClick={openCreateForm}>
            <IconPlus size={18} className="mr-2" /> Tambah Bahan
          </Button>
          <Button onClick={() => openBarcodeScanner(false)}>
            <IconScan size={18} className="mr-2" /> Pindai Masuk
          </Button>
          <Button onClick={() => openBarcodeScanner(true)} variant="outline">
            <IconScan size={18} className="mr-2" /> Adjust Stok
          </Button>
        </div>
      </div>

      {/* ... Panel Status */}
      <div className="flex justify-end mb-4">
        <RawMaterialStatusPanel />
      </div>

      {/* ... Tabel Data */}
      <ScrollArea className="h-[calc(100vh-500px)] w-full relative rounded-md border">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-background shadow-sm">
            <TableRow>
              <TableHead>Nama Bahan Baku</TableHead>
              <TableHead className="w-[120px] text-right">
                Stok Saat Ini
              </TableHead>
              <TableHead className="w-[120px] text-right">Batas Min.</TableHead>
              <TableHead className="w-[120px] text-center">Status</TableHead>
              <TableHead className="w-[120px] text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          {isLoading ? (
            <TableSkeleton />
          ) : isError ? (
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center h-48 text-destructive"
                >
                  <IconServerOff className="mx-auto h-12 w-12 mb-2" />
                  {(error as Error).message}
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {filteredMaterials.length > 0 ? (
                filteredMaterials.map((material) => (
                  <TableRow key={material.id}>
                    <TableCell className="font-medium">
                      {material.material.name}
                    </TableCell>
                    <TableCell className="text-right">
                      {material.stock} {material.material.unit}
                    </TableCell>
                    <TableCell className="text-right">
                      {material.reorder_level} {material.material.unit}
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${material.stock > material.reorder_level ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      >
                        {material.stock > material.reorder_level
                          ? "Aman"
                          : "Rendah"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => openEditForm(material)}
                        >
                          <IconPencil size={16} />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => openDeleteDialog(material)}
                        >
                          <IconTrash size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    Tidak ada data bahan baku.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      {/* ... Dialog Terpusat */}
      <Dialog
        open={activeDialog !== DialogType.None}
        onOpenChange={() => setActiveDialog(DialogType.None)}
      >
        <DialogContent className="sm:max-w-lg">
          {activeDialog === DialogType.Form && (
            <MaterialFormFields
              mode={editingMaterial ? "update" : "create"}
              initialData={editingMaterial}
              isSaving={saveMutation.isPending}
              onSubmit={handleFormSubmit}
              onCancel={() => setActiveDialog(DialogType.None)}
            />
          )}
          {activeDialog === DialogType.DeleteConfirmation &&
            materialToDelete && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <IconAlertTriangle className="text-red-500" />
                    Konfirmasi Hapus
                  </DialogTitle>
                  <DialogDescription>
                    Anda yakin ingin menghapus{" "}
                    <strong>"{materialToDelete.material.name}"</strong>?
                    Tindakan ini tidak dapat dibatalkan.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Batal</Button>
                  </DialogClose>
                  <Button
                    variant="destructive"
                    onClick={confirmDelete}
                    disabled={deleteMutation.isPending}
                  >
                    {deleteMutation.isPending && (
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Ya, Hapus
                  </Button>
                </DialogFooter>
              </>
            )}
          {activeDialog === DialogType.BarcodeScanner && (
            <>
              <DialogHeader>
                <DialogTitle>Pindai Barcode Produk</DialogTitle>
                <DialogDescription>
                  Arahkan kamera ke barcode untuk memproses bahan baku.
                </DialogDescription>
              </DialogHeader>
              <BarcodeScanner onScan={handleBarcodeScanAndProcess} />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveDialog(DialogType.None)}
                >
                  Tutup
                </Button>
              </DialogFooter>
            </>
          )}
          {activeDialog === DialogType.MaterialMasterForm && (
            <MaterialMasterForm
              initialBarcode={scannedBarcode}
              onSuccess={handleMaterialMasterFormSuccess}
              onCancel={() => setActiveDialog(DialogType.None)}
              isSaving={false}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MaterialManagementPage;
