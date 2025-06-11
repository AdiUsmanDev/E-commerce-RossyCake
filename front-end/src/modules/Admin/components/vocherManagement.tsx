"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
  IconAlertTriangle,
  IconServerOff,
} from "@tabler/icons-react";
import { LoaderCircle } from "lucide-react";

// Impor service dan tipe data yang benar
import {
  createVoucher,
  deleteVoucher,
  getAllVouchers,
  updateVoucher,
} from "../../../services/vocher.service.ts";
import {
  Voucher,
  CreateVoucherDTO,
  UpdateVoucherDTO,
  VoucherType,
} from "../../../types/vocher.types.ts";

const DiscountVoucherFormFields = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
  isSaving,
}: {
  mode: "create" | "update";
  initialData?: Voucher | null;
  onSubmit: (data: CreateVoucherDTO | UpdateVoucherDTO) => void;
  onCancel: () => void;
  isSaving: boolean;
}) => {
  // Menggunakan state untuk controlled form
  const [formData, setFormData] = useState({
    code: "",
    description: "",
    discount_type: "FIXED" as VoucherType,
    discount_value: "",
    max_discount: "",
    min_purchase: "0",
    usage_limit: "",
    valid_until: "",
  });

  useEffect(() => {
    if (mode === "update" && initialData) {
      setFormData({
        code: initialData.code || "",
        description: initialData.description || "",
        discount_type: initialData.discount_type || "FIXED",
        discount_value: initialData.discount_value?.toString() || "",
        max_discount: initialData.max_discount?.toString() || "",
        min_purchase: initialData.min_purchase?.toString() || "0",
        usage_limit: initialData.usage_limit?.toString() || "",
        valid_until: initialData.valid_until
          ? new Date(initialData.valid_until).toISOString().split("T")[0]
          : "",
      });
    } else {
      // Reset form untuk mode create
      setFormData({
        code: "",
        description: "",
        discount_type: "FIXED" as VoucherType,
        discount_value: "",
        max_discount: "",
        min_purchase: "0",
        usage_limit: "",
        valid_until: "",
      });
    }
  }, [initialData, mode]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let payload: CreateVoucherDTO | UpdateVoucherDTO;

    if (mode === "create") {
      payload = {
        code: formData.code,
        description: formData.description,
        discount_type: formData.discount_type,
        discount_value: parseFloat(formData.discount_value),
        max_discount:
          formData.discount_type === "PERCENTAGE"
            ? parseFloat(formData.max_discount)
            : undefined,
        min_purchase: parseFloat(formData.min_purchase),
        usage_limit: parseInt(formData.usage_limit, 10),
        valid_until: new Date(formData.valid_until).toISOString(),
      };
    } else {
      // Untuk update, hanya kirim field yang diizinkan oleh skema validasi Joi
      payload = {
        description: formData.description,
        usage_limit: parseInt(formData.usage_limit, 10),
        valid_until: new Date(formData.valid_until).toISOString(),
      };
    }
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>
          {mode === "update"
            ? `Edit Voucher: ${initialData?.code}`
            : "Tambah Voucher Baru"}
        </DialogTitle>
        <DialogDescription>
          Lengkapi detail di bawah ini. Kode voucher harus unik.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-2">
        {/* Field yang tidak bisa diubah saat update */}
        <fieldset disabled={mode === "update"} className="contents">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="code" className="text-right">
              Kode
            </Label>
            <Input
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="discount_type" className="text-right">
              Tipe Diskon
            </Label>
            <select
              id="discount_type"
              name="discount_type"
              value={formData.discount_type}
              onChange={handleChange}
              className="col-span-3 p-2 border rounded-md dark:bg-neutral-800"
            >
              <option value="FIXED">Jumlah Tetap (Rp)</option>
              <option value="PERCENTAGE">Persentase (%)</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="discount_value" className="text-right">
              Nilai Diskon
            </Label>
            <Input
              id="discount_value"
              name="discount_value"
              type="number"
              value={formData.discount_value}
              onChange={handleChange}
              className="col-span-3"
              required
            />
          </div>
          {formData.discount_type === "PERCENTAGE" && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="max_discount" className="text-right">
                Maks. Diskon (Rp)
              </Label>
              <Input
                id="max_discount"
                name="max_discount"
                type="number"
                value={formData.max_discount}
                onChange={handleChange}
                className="col-span-3"
                placeholder="Contoh: 50000"
                required
              />
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="min_purchase" className="text-right">
              Min. Pembelian
            </Label>
            <Input
              id="min_purchase"
              name="min_purchase"
              type="number"
              value={formData.min_purchase}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
        </fieldset>

        {/* Field yang bisa diubah saat update */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Deskripsi
          </Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="usage_limit" className="text-right">
            Limit Penggunaan
          </Label>
          <Input
            id="usage_limit"
            name="usage_limit"
            type="number"
            value={formData.usage_limit}
            onChange={handleChange}
            className="col-span-3"
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="valid_until" className="text-right">
            Berlaku Hingga
          </Label>
          <Input
            id="valid_until"
            name="valid_until"
            type="date"
            value={formData.valid_until}
            onChange={handleChange}
            className="col-span-3"
            required
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline" onClick={onCancel}>
            Batal
          </Button>
        </DialogClose>
        <Button type="submit" disabled={isSaving}>
          {isSaving && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
          {mode === "update" ? "Update Voucher" : "Simpan Voucher"}
        </Button>
      </DialogFooter>
    </form>
  );
};

// =============================================================
// Komponen Utama Halaman Manajemen Voucher
// =============================================================
const DiscountVoucherManagement: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<"create" | "update">("create");
  const [editingVoucher, setEditingVoucher] = useState<Voucher | null>(null);
  const [voucherToDelete, setVoucherToDelete] = useState<Voucher | null>(null);

  const {
    data: vouchers = [],
    isLoading,
    isError,
    error,
  } = useQuery<Voucher[]>({
    queryKey: ["vouchers"],
    queryFn: getAllVouchers,
  });

  const saveMutation = useMutation({
    mutationFn: (data: {
      id?: number;
      payload: CreateVoucherDTO | UpdateVoucherDTO;
    }) => {
      if (data.id)
        return updateVoucher(data.id, data.payload as UpdateVoucherDTO);
      return createVoucher(data.payload as CreateVoucherDTO);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
      setIsFormOpen(false);
    },
    onError: (err) => {
      alert(`Gagal menyimpan: ${(err as Error).message}`);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (voucherId: number) => deleteVoucher(voucherId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
      setVoucherToDelete(null);
    },
    onError: (err) => {
      alert(`Gagal menghapus: ${(err as Error).message}`);
      setVoucherToDelete(null);
    },
  });

  const handleFormSubmit = (formData: CreateVoucherDTO | UpdateVoucherDTO) => {
    saveMutation.mutate({ id: editingVoucher?.id, payload: formData });
  };

  const openCreateForm = () => {
    setEditingVoucher(null);
    setFormMode("create");
    setIsFormOpen(true);
  };

  const openEditForm = (voucher: Voucher) => {
    setEditingVoucher(voucher);
    setFormMode("update");
    setIsFormOpen(true);
  };

  const confirmDelete = () => {
    if (voucherToDelete) deleteMutation.mutate(voucherToDelete.id);
  };

  const filteredVouchers = useMemo(() => {
    return vouchers.filter(
      (v) =>
        v.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [vouchers, searchQuery]);

  const formatCurrency = (value: number) =>
    `Rp${(value || 0).toLocaleString("id-ID")}`;
  const formatDiscountDisplay = (voucher: Voucher) => {
    if (voucher.discount_type === "PERCENTAGE")
      return `${voucher.discount_value}%`;
    return formatCurrency(voucher.discount_value);
  };

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 lg:p-8 w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Manajemen Diskon & Voucher
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Voucher</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 mb-4">
        <div className="relative flex items-center w-full md:max-w-sm">
          <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <Input
            type="search"
            placeholder="Cari voucher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateForm}>
              <IconPlus size={18} className="mr-2" /> Tambah Voucher
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DiscountVoucherFormFields
              mode={formMode}
              initialData={editingVoucher}
              isSaving={saveMutation.isPending}
              onSubmit={handleFormSubmit}
              onCancel={() => setIsFormOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ScrollArea className="h-[calc(100vh-450px)] w-full relative rounded-md border">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-background shadow-sm">
            <TableRow>
              <TableHead className="w-[150px]">Kode</TableHead>
              <TableHead>Deskripsi</TableHead>
              <TableHead className="w-[120px] text-right">Nilai</TableHead>
              <TableHead className="w-[140px] text-right">
                Maks. Diskon
              </TableHead>
              <TableHead className="w-[120px] text-center">
                Berlaku Hingga
              </TableHead>
              <TableHead className="w-[100px] text-center">Status</TableHead>
              <TableHead className="w-[120px] text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center h-24">
                  <LoaderCircle className="mx-auto h-8 w-8 animate-spin text-primary" />
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center h-24 text-destructive"
                >
                  <IconServerOff className="mx-auto h-8 w-8 mb-2" />
                  {(error as Error).message}
                </TableCell>
              </TableRow>
            ) : filteredVouchers.length > 0 ? (
              filteredVouchers.map((voucher) => {
                const isExpired = new Date(voucher.valid_until) < new Date();
                return (
                  <TableRow key={voucher.id}>
                    <TableCell className="font-mono">{voucher.code}</TableCell>
                    <TableCell>{voucher.description}</TableCell>
                    <TableCell className="text-right">
                      {formatDiscountDisplay(voucher)}
                    </TableCell>
                    <TableCell className="text-right">
                      {voucher.max_discount
                        ? formatCurrency(voucher.max_discount)
                        : "-"}
                    </TableCell>
                    <TableCell className="text-center">
                      {new Date(voucher.valid_until).toLocaleDateString(
                        "id-ID"
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${isExpired ? "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300" : "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"}`}
                      >
                        {isExpired ? "Expired" : "Active"}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => openEditForm(voucher)}
                        >
                          <IconPencil size={16} />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setVoucherToDelete(voucher)}
                        >
                          <IconTrash size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center h-24">
                  Tidak ada data.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      <Dialog
        open={!!voucherToDelete}
        onOpenChange={() => setVoucherToDelete(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <IconAlertTriangle className="text-red-500" />
              Konfirmasi Hapus
            </DialogTitle>
            <DialogDescription>
              Anda yakin ingin menghapus voucher{" "}
              <strong>"{voucherToDelete?.code}"</strong>? Tindakan ini tidak
              dapat dibatalkan.
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

export default DiscountVoucherManagement;
