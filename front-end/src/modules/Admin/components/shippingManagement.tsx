"use client"; // Diperlukan karena menggunakan hooks (useState, useEffect) dan event handlers

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PlusCircle, LoaderCircle } from "lucide-react";

// Impor komponen dan service yang relevan
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  getAllShippingMethods,
  createShippingMethod,
  updateShippingMethod,
  deleteShippingMethod,
} from "@/services/shipping.service"; // Impor service API
import { ShippingMethod } from "@/types/shipping.type";
import ShippingMethodFormFields from "./ShippingMethodFormFields";
import toast from "react-hot-toast";

const ShippingMethodManagement = () => {
  const queryClient = useQueryClient();

  // State untuk mengontrol visibilitas dialog form
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // State untuk menentukan mode form ('create' atau 'update')
  const [formMode, setFormMode] = useState<"create" | "update">("create");
  const [editingMethod, setEditingMethod] = useState<ShippingMethod | null>(
    null
  );

  const {
    data: shippingMethods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["shippingMethods"],
    queryFn: getAllShippingMethods,
  });

  const createMutation = useMutation({
    mutationFn: createShippingMethod,
    onSuccess: () => {
      toast.success("Metode pengiriman berhasil dibuat!");
      queryClient.invalidateQueries({ queryKey: ["shippingMethods"] }); // Muat ulang data
      setIsDialogOpen(false); // Tutup dialog
    },
    onError: (error) => {
      toast.error(`Gagal membuat metode: ${error.message}`);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      methodId,
      payload,
    }: {
      methodId: number;
      payload: Partial<ShippingMethod>;
    }) => updateShippingMethod(methodId, payload),
    onSuccess: () => {
      toast.success("Metode pengiriman berhasil diperbarui!");
      queryClient.invalidateQueries({ queryKey: ["shippingMethods"] });
      setIsDialogOpen(false);
      setEditingMethod(null);
    },
    onError: (error) => {
      toast.error(`Gagal memperbarui metode: ${error.message}`);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteShippingMethod,
    onSuccess: () => {
      toast.success("Metode pengiriman berhasil dihapus.");
      queryClient.invalidateQueries({ queryKey: ["shippingMethods"] });
    },
    onError: (error) => {
      toast.error(`Gagal menghapus metode: ${error.message}`);
    },
  });

  const handleAddNew = () => {
    setFormMode("create");
    setEditingMethod(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (method: ShippingMethod) => {
    setFormMode("update");
    setEditingMethod(method);
    setIsDialogOpen(true);
  };

  const handleFormSubmit = (data: Partial<ShippingMethod>) => {
    if (formMode === "create") {
      createMutation.mutate(data);
    } else if (editingMethod) {
      updateMutation.mutate({ methodId: editingMethod.id, payload: data });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <LoaderCircle className="animate-spin text-primary" size={32} />
        <span className="ml-2">Memuat data...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Terjadi kesalahan saat memuat data metode pengiriman.
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manajemen Metode Pengiriman</h1>
        <Button onClick={handleAddNew}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Metode
        </Button>
      </div>

      {/* Dialog untuk form Create/Update */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="sm:max-w-[425px]"
          onCloseAutoFocus={() => setEditingMethod(null)}
        >
          <ShippingMethodFormFields
            mode={formMode}
            initialData={editingMethod}
            onSubmit={handleFormSubmit}
            onCancel={() => setIsDialogOpen(false)}
            isSaving={createMutation.isPending || updateMutation.isPending}
          />
        </DialogContent>
      </Dialog>

      {/* Tabel untuk menampilkan data */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Nama Metode</TableHead>
              <TableHead>Biaya (Rp)</TableHead>
              <TableHead>Estimasi Pengiriman</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shippingMethods && shippingMethods.length > 0 ? (
              shippingMethods.map((method) => (
                <TableRow key={method.id}>
                  <TableCell>{method.id}</TableCell>
                  <TableCell className="font-medium">{method.name}</TableCell>
                  <TableCell>{method.cost.toLocaleString("id-ID")}</TableCell>
                  <TableCell>{method.estimated_delivery_time}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(method)}
                    >
                      Edit
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="sm"
                          disabled={deleteMutation.isPending}
                        >
                          Hapus
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Apakah Anda yakin?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Tindakan ini tidak dapat diurungkan. Ini akan
                            menghapus metode pengiriman secara permanen.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Batal</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteMutation.mutate(method.id)}
                            disabled={deleteMutation.isPending}
                          >
                            {deleteMutation.isPending
                              ? "Menghapus..."
                              : "Ya, hapus"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Tidak ada data metode pengiriman.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ShippingMethodManagement;
