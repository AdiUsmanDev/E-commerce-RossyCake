import {
  CreateProductPayload,
  Product,
  UpdateProductPayload,
} from "@/types/product.types";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const ProductFormFields = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
  isSaving,
}: {
  mode: "create" | "update";
  initialData?: Product | null;
  onSubmit: (data: CreateProductPayload | UpdateProductPayload) => void;
  onCancel: () => void;
  isSaving: boolean;
}) => {
  // Gunakan state untuk mengelola form (Controlled Component)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image_url: "",
  });

  // Isi form dengan data awal saat mode update
  useEffect(() => {
    if (mode === "update" && initialData) {
      setFormData({
        name: initialData.name || "",
        price: initialData.price?.toString() || "",
        stock: initialData.stock?.toString() || "",
        category: initialData.category || "",
        description: initialData.description || "",
        image_url: initialData.image_url || "",
      });
    } else {
      // Reset form saat membuka dialog create
      setFormData({
        name: "",
        price: "",
        stock: "",
        category: "",
        description: "",
        image_url: "",
      });
    }
  }, [initialData, mode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Siapkan payload yang bersih sesuai tipe data
    const payload: CreateProductPayload | UpdateProductPayload = {
      name: formData.name,
      price: parseFloat(formData.price) || 0,
      stock: parseInt(formData.stock, 10) || 0,
      category: formData.category,
      description: formData.description,
      image_url: formData.image_url,
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>
          {mode === "update"
            ? `Edit Produk: ${initialData?.name || ""}`
            : "Tambah Produk Baru"}
        </DialogTitle>
        <DialogDescription>
          Lengkapi detail produk di bawah ini. Pastikan semua informasi sudah
          benar.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        {/* Nama Produk */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nama
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="col-span-3"
            required
          />
        </div>
        {/* Kategori */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="category" className="text-right">
            Kategori
          </Label>
          <Input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="col-span-3"
            required
          />
        </div>
        {/* Harga */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Harga (Rp)
          </Label>
          <Input
            id="price"
            name="price"
            type="number"
            min="0"
            value={formData.price}
            onChange={handleChange}
            className="col-span-3"
            required
          />
        </div>
        {/* Stok */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stock" className="text-right">
            Stok (pcs)
          </Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            min="0"
            value={formData.stock}
            onChange={handleChange}
            className="col-span-3"
            required
          />
        </div>
        {/* URL Gambar */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="image_url" className="text-right">
            URL Gambar
          </Label>
          <Input
            id="image_url"
            name="image_url"
            type="url"
            value={formData.image_url}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        {/* Deskripsi */}
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
            rows={3}
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
          {isSaving && <LoaderCircle className="animate-spin mr-2 h-4 w-4" />}
          {mode === "update" ? "Update Produk" : "Simpan Produk"}
        </Button>
      </DialogFooter>
    </form>
  );
};
