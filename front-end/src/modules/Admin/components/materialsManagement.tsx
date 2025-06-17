"use client";

import React, { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  DialogTrigger,
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

const MaterialManagementPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<"create" | "update">("create");
  const [editingMaterial, setEditingMaterial] = useState<RawMaterial | null>(
    null
  );
  const [materialToDelete, setMaterialToDelete] = useState<RawMaterial | null>(
    null
  );
  const [isScannerDialogOpen, setIsScannerDialogOpen] = useState(false);
  const [scannedBarcode, setScannedBarcode] = useState<string>("");
  const [isMaterialMasterFormOpen, setIsMaterialMasterFormOpen] =
    useState(false);

  const {
    data: materials = [],
    isLoading,
    isError,
    error,
  } = useQuery<RawMaterial[]>({
    queryKey: ["rawMaterials"],
    queryFn: getAllRawMaterials,
  });

  const saveMutation = useMutation({
    mutationFn: (data: {
      id?: number;
      payload: CreateRawMaterialPayload | UpdateRawMaterialPayload;
    }) => {
      if (data.id) {
        return updateRawMaterial(
          data.id,
          data.payload as UpdateRawMaterialPayload
        );
      }
      return createRawMaterial(data.payload as CreateRawMaterialPayload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rawMaterials"] });
      setIsFormOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (materialId: number) => deleteRawMaterial(materialId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["rawMaterials"] });
      setMaterialToDelete(null);
    },
    onError: (err) => {
      alert(`Gagal menghapus: ${err.message}`);
      setMaterialToDelete(null);
    },
  });

  const handleFormSubmit = (
    formData: CreateRawMaterialPayload | UpdateRawMaterialPayload
  ) => {
    saveMutation.mutate({ id: editingMaterial?.id, payload: formData });
  };

  const openCreateForm = () => {
    setEditingMaterial(null);
    setFormMode("create");
    setIsFormOpen(true);
  };

  const openEditForm = (material: RawMaterial) => {
    setEditingMaterial(material);
    setFormMode("update");
    setIsFormOpen(true);
  };

  const confirmDelete = () => {
    if (materialToDelete) deleteMutation.mutate(materialToDelete.id);
  };

  const handleBarcodeActionMutation = useMutation({
    mutationFn: async (barcode: string) => getMaterialByBarcode(barcode),
    onSuccess: (data: Material | null) => {
      setIsScannerDialogOpen(false);
      if (data) {
        const payload: UpdateRawMaterialPayload = {
          stock: data.defaultStock,
          barcode: data.barcode,
          reorder_level: data.defaultStock,
        };
        processBarcode(payload);
      } else {
        setIsMaterialMasterFormOpen(true);
      }
    },

    onError: (err, barcode) => {
      setIsScannerDialogOpen(false);
      setScannedBarcode(barcode);
      setIsMaterialMasterFormOpen(true);
    },
  });

  const handleBarcodeScanAndProcess = (barcode: string) => {
    setScannedBarcode(barcode); // Set scanned barcode first
    handleBarcodeActionMutation.mutate(barcode); // Then trigger the mutation with the barcode
  };

  const handleMaterialMasterFormSuccess = () => {
    setIsMaterialMasterFormOpen(false);
    queryClient.invalidateQueries({ queryKey: ["materials"] });
    queryClient.invalidateQueries({ queryKey: ["rawMaterials"] });
    alert("Material Master baru berhasil dibuat!");
    openCreateForm();
  };

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) =>
      material.material.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [materials, searchQuery]);

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 lg:p-8 w-full">
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
          <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogTrigger asChild>
              <Button onClick={openCreateForm}>
                <IconPlus size={18} className="mr-2" /> Tambah Bahan
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <MaterialFormFields
                mode={formMode}
                initialData={editingMaterial}
                isSaving={saveMutation.isPending}
                onSubmit={handleFormSubmit}
                onCancel={() => {
                  setIsFormOpen(false);
                }}
              />
            </DialogContent>
          </Dialog>

          <Dialog
            open={isScannerDialogOpen}
            onOpenChange={setIsScannerDialogOpen}
          >
            <DialogTrigger asChild>
              <Button onClick={() => setIsScannerDialogOpen(true)}>
                <IconScan size={18} className="mr-2" /> Pindai Barcode
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl">
              <DialogHeader>
                <DialogTitle>Pindai Barcode Produk</DialogTitle>
                <DialogDescription>
                  Arahkan kamera ke barcode produk untuk menambahkannya atau
                  memperbarui stok.
                </DialogDescription>
              </DialogHeader>
              <BarcodeScanner onScan={handleBarcodeScanAndProcess} />
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Tutup
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog
            open={isMaterialMasterFormOpen}
            onOpenChange={setIsMaterialMasterFormOpen}
          >
            <DialogContent className="sm:max-w-lg">
              {scannedBarcode && (
                <MaterialMasterForm
                  initialBarcode={scannedBarcode}
                  onSuccess={handleMaterialMasterFormSuccess}
                  onCancel={() => setIsMaterialMasterFormOpen(false)}
                  isSaving={false}
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <RawMaterialStatusPanel />
      </div>

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
                          onClick={() => setMaterialToDelete(material)}
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

      <Dialog
        open={!!materialToDelete}
        onOpenChange={() => setMaterialToDelete(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <IconAlertTriangle className="text-red-500" />
              Konfirmasi Hapus
            </DialogTitle>
            <DialogDescription>
              Anda yakin ingin menghapus{" "}
              <strong>"{materialToDelete?.material.name}"</strong>? Tindakan ini
              tidak dapat dibatalkan.
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
              )}{" "}
              Ya, Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MaterialManagementPage;
