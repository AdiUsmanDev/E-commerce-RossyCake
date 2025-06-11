"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  IconLoader2,
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
} from "@tabler/icons-react";
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
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  // Asumsikan DiscountVoucherFormFields akan mengimpor DialogHeader, Footer, dll.
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  createVoucher,
  deleteVoucher,
  getAllVouchers,
  updateVoucher,
} from "@/services/vocher.service";

// Impor form yang sudah disesuaikan untuk Diskon/Voucher
// import DiscountVoucherFormFields from "./DiscountVoucherFormFields"; // Buat file ini

// --- Placeholder untuk DiscountVoucherFormFields ---
// (Implementasi sebenarnya akan mirip ProductFormFields, tapi dengan field diskon/voucher)
const DiscountVoucherFormFields = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
  isSubmitting,
}) => {
  // State to track the current discount type to conditionally show max_discount
  const [discountType, setDiscountType] = useState(
    initialData?.discount_type ?? "PERCENTAGE"
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      code: formData.get("code") as string,
      name: formData.get("name") as string, // Name is not in schema, but good for UI
      description: (formData.get("description") as string) || "",
      discount_type: formData.get("discount_type") as
        | "PERCENTAGE"
        | "FIXED"
        | "FREE_SHIPING",
      discount_value: parseFloat(formData.get("discount_value") as string),
      max_discount: formData.get("max_discount")
        ? parseFloat(formData.get("max_discount") as string)
        : undefined,
      min_purchase: formData.get("min_purchase")
        ? parseFloat(formData.get("min_purchase") as string)
        : 0,
      valid_until: formData.get("valid_until") as string,
      usage_limit: parseInt(formData.get("usage_limit") as string, 10),
    };
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>
          {mode === "update"
            ? "Edit Diskon/Voucher"
            : "Tambah Diskon/Voucher Baru"}
        </DialogTitle>
        <DialogDescription>
          Lengkapi detail di bawah ini sesuai skema data yang baru.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="code" className="text-right">
            Kode
          </Label>
          <Input
            id="code"
            name="code"
            defaultValue={initialData?.code ?? ""}
            className="col-span-3"
            readOnly={mode === "update"}
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Deskripsi
          </Label>
          <Textarea
            id="description"
            name="description"
            defaultValue={initialData?.description ?? ""}
            className="col-span-3"
            placeholder="Deskripsi singkat voucher..."
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="discount_type" className="text-right">
            Tipe Diskon
          </Label>
          <select
            id="discount_type"
            name="discount_type"
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}
            className="col-span-3 p-2 border rounded-md dark:bg-neutral-800"
          >
            <option value="PERCENTAGE">Persentase (%)</option>
            <option value="FIXED">Jumlah Tetap (Rp)</option>
            <option value="FREE_SHIPING">Gratis Ongkir</option>
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
            step="any"
            defaultValue={initialData?.discount_value ?? 0}
            className="col-span-3"
            required
          />
        </div>
        {discountType === "PERCENTAGE" && (
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="max_discount" className="text-right">
              Maks. Diskon (Rp)
            </Label>
            <Input
              id="max_discount"
              name="max_discount"
              type="number"
              step="any"
              defaultValue={initialData?.max_discount ?? ""}
              className="col-span-3"
              placeholder="Contoh: 50000"
              required
            />
          </div>
        )}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="min_purchase" className="text-right">
            Min. Pembelian (Rp)
          </Label>
          <Input
            id="min_purchase"
            name="min_purchase"
            type="number"
            step="any"
            defaultValue={initialData?.min_purchase ?? 0}
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
            defaultValue={initialData?.usage_limit ?? ""}
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
            defaultValue={initialData?.valid_until ?? ""}
            className="col-span-3"
            required
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Batal
          </Button>
        </DialogClose>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && (
            <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          {mode === "update" ? "Update" : "Simpan"}
        </Button>
      </DialogFooter>
    </form>
  );
};
// --- Akhir Placeholder ---

interface DiscountVoucher {
  apiId: number;
  code: string;
  name: string; // Keep name for UI display purposes
  description?: string;
  discount_type: "PERCENTAGE" | "FIXED" | "FREE_SHIPING";
  discount_value: number;
  max_discount?: number;
  min_purchase?: number;
  valid_until: string; // formatted as YYYY-MM-DD
  usage_limit: number;
  status: "active" | "inactive" | "expired";
}

const DiscountVoucherManagement: React.FC = () => {
  const [vouchers, setVouchers] = useState<DiscountVoucher[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<"create" | "update">("create");
  const [editingDiscount, setEditingDiscount] =
    useState<DiscountVoucher | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const mapApiToComponent = (apiVoucher: ApiVoucher): DiscountVoucher => ({
    apiId: apiVoucher.id,
    code: apiVoucher.code,
    name: apiVoucher.code, // Use code as name if name field doesn't exist in API response
    description: apiVoucher.description,
    discount_type: apiVoucher.discount_type,
    discount_value: apiVoucher.discount_value,
    max_discount: apiVoucher.max_discount,
    min_purchase: apiVoucher.min_purchase,
    valid_until: new Date(apiVoucher.valid_until).toISOString().split("T")[0],
    usage_limit: apiVoucher.usage_limit,
    status: apiVoucher.status,
  });

  const mapComponentToApi = (
    voucher: Partial<DiscountVoucher>
  ): CreateVoucherDTO | UpdateVoucherDTO => ({
    code: voucher.code,
    description: voucher.description,
    discount_type: voucher.discount_type,
    discount_value: voucher.discount_value,
    max_discount: voucher.max_discount,
    min_purchase: voucher.min_purchase,
    valid_until: voucher.valid_until,
    usage_limit: voucher.usage_limit,
  });

  const fetchVouchers = useCallback(async () => {
    setIsFetching(true);
    setError(null);
    try {
      const apiVouchers = await getAllVouchers();
      setVouchers(apiVouchers.map(mapApiToComponent));
    } catch (err) {
      setError(err.message || "Gagal memuat data voucher. Silakan coba lagi.");
      console.error(err);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchVouchers();
  }, [fetchVouchers]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const openCreateForm = () => {
    setEditingDiscount(null);
    setFormMode("create");
    setIsFormOpen(true);
  };

  const openEditForm = (discount: DiscountVoucher) => {
    setEditingDiscount(discount);
    setFormMode("update");
    setIsFormOpen(true);
  };

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);
    const payload = mapComponentToApi(formData);
    try {
      if (formMode === "create") {
        await createVoucher(payload as CreateVoucherDTO);
      } else if (formMode === "update" && editingDiscount) {
        // For update, we only send fields that can be changed
        const updatePayload: UpdateVoucherDTO = {
          description: payload.description,
          valid_until: payload.valid_until,
          usage_limit: payload.usage_limit,
        };
        await updateVoucher(editingDiscount.apiId, updatePayload);
      }
      setIsFormOpen(false);
      setEditingDiscount(null);
      await fetchVouchers();
    } catch (err) {
      const action = formMode === "create" ? "menyimpan" : "memperbarui";
      setError(
        err.message || `Gagal ${action} voucher. Periksa kembali data Anda.`
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteDiscount = async (
    voucherApiId: number,
    voucherCode: string
  ) => {
    if (
      window.confirm(
        `Yakin ingin menghapus voucher dengan kode: ${voucherCode}?`
      )
    ) {
      setError(null);
      try {
        await deleteVoucher(voucherApiId);
        await fetchVouchers();
      } catch (err) {
        setError(err.message || "Gagal menghapus voucher.");
        console.error(err);
      }
    }
  };

  const filteredDiscounts = vouchers.filter(
    (discount) =>
      discount.name.toLowerCase().includes(searchQuery) ||
      discount.code.toLowerCase().includes(searchQuery) ||
      discount.discount_type.toLowerCase().includes(searchQuery)
  );

  const formatCurrency = (value) => `Rp${(value || 0).toLocaleString("id-ID")}`;

  const formatDiscountDisplay = (voucher: DiscountVoucher) => {
    if (voucher.discount_type === "PERCENTAGE")
      return `${voucher.discount_value}%`;
    if (voucher.discount_type === "FIXED")
      return formatCurrency(voucher.discount_value);
    if (voucher.discount_type === "FREE_SHIPING") return "Gratis";
    return voucher.discount_value;
  };

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 lg:p-8 w-full">
      <div className="flex flex-col gap-3">
        <h1 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-200 dark:to-neutral-400 text-2xl md:text-3xl lg:text-4xl font-sans py-2 md:py-3 relative z-20 font-bold tracking-tight">
          Manajemen Diskon & Voucher
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Diskon & Voucher</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 mb-4">
        <div className="relative flex items-center w-full md:max-w-sm">
          <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <Input
            type="search"
            placeholder="Cari (Kode, Nama, Tipe)..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateForm}>
              <IconPlus size={18} strokeWidth={2.5} className="mr-2" />
              Tambah Baru
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg md:max-w-xl">
            <DiscountVoucherFormFields
              mode={formMode}
              initialData={editingDiscount}
              isSubmitting={isSubmitting}
              onSubmit={handleFormSubmit}
              onCancel={() => setIsFormOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      {error && (
        <div className="text-red-600 text-center p-3 bg-red-100 dark:bg-red-900/20 dark:text-red-400 rounded-md border border-red-200 dark:border-red-800/50">
          {error}
        </div>
      )}

      <ScrollArea className="h-[calc(100vh-450px)] w-full relative rounded-md border">
        <Table>
          <TableCaption>Daftar diskon dan voucher yang tersedia.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] sticky top-0 z-10 bg-background dark:bg-neutral-900 shadow-sm">
                Kode
              </TableHead>
              <TableHead className="sticky top-0 z-10 bg-background dark:bg-neutral-900 shadow-sm">
                Deskripsi
              </TableHead>
              <TableHead className="w-[120px] text-right sticky top-0 z-10 bg-background dark:bg-neutral-900 shadow-sm">
                Nilai
              </TableHead>
              <TableHead className="w-[140px] text-right sticky top-0 z-10 bg-background dark:bg-neutral-900 shadow-sm">
                Maks. Diskon
              </TableHead>
              <TableHead className="w-[120px] text-center sticky top-0 z-10 bg-background dark:bg-neutral-900 shadow-sm">
                Berlaku Hingga
              </TableHead>
              <TableHead className="w-[100px] text-center sticky top-0 z-10 bg-background dark:bg-neutral-900 shadow-sm">
                Status
              </TableHead>
              <TableHead className="w-[120px] text-right sticky top-0 z-10 bg-background dark:bg-neutral-900 shadow-sm">
                Aksi
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center h-24">
                  <IconLoader2 className="mx-auto h-8 w-8 animate-spin text-sky-500" />
                </TableCell>
              </TableRow>
            ) : filteredDiscounts.length > 0 ? (
              filteredDiscounts.map((voucher) => (
                <TableRow key={voucher.apiId}>
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
                    {voucher.valid_until}
                  </TableCell>
                  <TableCell className="text-center">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        voucher.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                          : voucher.status === "inactive"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300"
                      }`}
                    >
                      {voucher.status.charAt(0).toUpperCase() +
                        voucher.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => openEditForm(voucher)}
                        title="Edit"
                      >
                        <IconPencil size={16} />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          handleDeleteDiscount(voucher.apiId, voucher.code)
                        }
                        title="Hapus"
                      >
                        <IconTrash size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center h-24">
                  {searchQuery
                    ? "Voucher tidak ditemukan."
                    : "Belum ada voucher."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={6} className="font-semibold text-right">
                Total Voucher Aktif
              </TableCell>
              <TableCell className="text-right font-semibold">
                {vouchers.filter((d) => d.status === "active").length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <ScrollBar orientation="vertical" />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default DiscountVoucherManagement;
