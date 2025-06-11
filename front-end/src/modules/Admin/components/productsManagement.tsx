"use client";

import React, { useMemo, useState } from "react";

// Mengimpor komponen UI dari shadcn/ui
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

// Mengimpor ikon dari @tabler/icons-react
import {
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
  IconAlertTriangle,
  IconServerOff,
} from "@tabler/icons-react";

// Komponen Form terpisah (seperti yang Anda miliki)
import { ProductFormFields } from "./ProductFormFields";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CreateProductPayload,
  Product,
  UpdateProductPayload,
} from "@/types/product.types";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "@/services/product.service";
import { LoaderCircle } from "lucide-react";

// Komponen Skeleton untuk tabel
const TableSkeleton = () => (
  <TableBody>
    {Array.from({ length: 8 }).map((_, index) => (
      <TableRow key={`skeleton-${index}`}>
        <TableCell className="w-[60px]">
          <div className="h-6 bg-muted animate-pulse rounded-md"></div>
        </TableCell>
        <TableCell className="w-[100px] p-1">
          <div className="h-14 w-14 bg-muted animate-pulse rounded-md"></div>
        </TableCell>
        <TableCell>
          <div className="h-6 bg-muted animate-pulse rounded-md"></div>
        </TableCell>
        <TableCell className="w-[150px]">
          <div className="h-6 bg-muted animate-pulse rounded-md"></div>
        </TableCell>
        <TableCell className="w-[100px]">
          <div className="h-6 bg-muted animate-pulse rounded-md"></div>
        </TableCell>
        <TableCell className="w-[120px]">
          <div className="flex justify-center gap-2">
            <div className="h-8 w-8 bg-muted animate-pulse rounded-md"></div>
            <div className="h-8 w-8 bg-muted animate-pulse rounded-md"></div>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
);

const ProductsPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<string>("");

  // State untuk dialog
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<"create" | "update">("create");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  // 1. Fetching data produk dengan useQuery
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["adminProducts"],
    queryFn: getProducts,
  });

  // 2. Mutation untuk Create & Update produk
  const { mutate: saveProduct, isPending: isSaving } = useMutation({
    mutationFn: (data: {
      id?: number;
      payload: CreateProductPayload | UpdateProductPayload;
    }) => {
      if (data.id) {
        return updateProduct(data.id, data.payload as UpdateProductPayload);
      }
      return createProduct(data.payload as CreateProductPayload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminProducts"] });
      setIsFormOpen(false);
      setEditingProduct(null);
    },
  });

  // 3. Mutation untuk Delete produk
  const { mutate: removeProduct, isPending: isDeleting } = useMutation({
    mutationFn: (productId: number) => deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminProducts"] });
      setProductToDelete(null);
    },
    onError: (err) => {
      alert(`Gagal menghapus produk: ${(err as Error).message}`);
      setProductToDelete(null);
    },
  });

  // --- LOGIKA UTAMA ---
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.id.toString().toLowerCase().includes(searchQuery)
    );
  }, [products, searchQuery]);

  const openCreateForm = () => {
    setEditingProduct(null);
    setFormMode("create");
    setIsFormOpen(true);
  };

  const openEditForm = (product: Product) => {
    setEditingProduct(product);
    setFormMode("update");
    setIsFormOpen(true);
  };

  const handleFormSubmit = (
    formData: CreateProductPayload | UpdateProductPayload
  ) => {
    if (formMode === "update" && editingProduct) {
      saveProduct({ id: editingProduct.id, payload: formData });
    } else {
      saveProduct({ payload: formData });
    }
  };

  const confirmDeleteProduct = () => {
    if (!productToDelete) return;
    removeProduct(productToDelete.id);
  };

  const totalProductValue = useMemo(() => {
    if (!filteredProducts) return 0;
    return filteredProducts.reduce((sum, product) => {
      return sum + (product.price || 0) * (product.stock || 0);
    }, 0);
  }, [filteredProducts]);

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 lg:p-8 w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Manajemen Produk
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Produk</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <div className="relative flex items-center w-full md:max-w-sm">
          <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <Input
            type="search"
            placeholder="Cari produk (ID, Nama)..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10"
            aria-label="Cari Produk"
          />
        </div>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateForm} className="w-full md:w-auto">
              <IconPlus size={18} className="mr-2" />
              Tambah Produk
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <ProductFormFields
              mode={formMode}
              initialData={editingProduct}
              onSubmit={handleFormSubmit}
              onCancel={() => setIsFormOpen(false)}
              isSaving={isSaving}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ScrollArea className="w-full border rounded-md">
        <div className="h-[calc(100vh-420px)]">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-background shadow-sm">
              <TableRow>
                <TableHead className="w-[60px] text-center">No</TableHead>
                <TableHead className="w-[100px]">Gambar</TableHead>
                <TableHead>Nama Produk</TableHead>
                <TableHead className="w-[150px] text-right">Harga</TableHead>
                <TableHead className="w-[100px] text-right">Stok</TableHead>
                <TableHead className="w-[120px] text-center">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            {isLoading ? (
              <TableSkeleton />
            ) : isError ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6} className="text-center h-48">
                    <IconServerOff className="mx-auto h-12 w-12 text-destructive" />
                    <p className="mt-2 font-semibold text-destructive">
                      Gagal memuat data
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {(error as Error).message}
                    </p>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, idx) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium text-center">
                        {idx + 1}
                      </TableCell>
                      <TableCell className="p-1">
                        <img
                          src={
                            product.image_url ||
                            "https://placehold.co/100x100/e2e8f0/e2e8f0?text=."
                          }
                          alt={product.name}
                          className="h-14 w-14 object-cover rounded-md"
                        />
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell className="text-right">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(product.price)}
                      </TableCell>
                      <TableCell className="text-right">
                        {product.stock} pcs
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-center gap-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => openEditForm(product)}
                            title="Edit"
                          >
                            <IconPencil size={16} />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => setProductToDelete(product)}
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
                    <TableCell colSpan={6} className="text-center h-24">
                      {searchQuery
                        ? "Produk tidak ditemukan."
                        : "Belum ada produk."}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            )}
          </Table>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
      <div className="flex justify-end font-semibold p-4 border-t">
        Total Estimasi Nilai Produk:{" "}
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(totalProductValue)}
      </div>

      <Dialog
        open={!!productToDelete}
        onOpenChange={() => setProductToDelete(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <IconAlertTriangle className="text-red-500" />
              Konfirmasi Hapus
            </DialogTitle>
            <DialogDescription>
              Anda yakin ingin menghapus produk{" "}
              <strong>"{productToDelete?.name}"</strong>? Tindakan ini tidak
              dapat dibatalkan.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Batal</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={confirmDeleteProduct}
              disabled={isDeleting}
            >
              {isDeleting && (
                <LoaderCircle className="animate-spin mr-2 h-4 w-4" />
              )}
              Ya, Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
