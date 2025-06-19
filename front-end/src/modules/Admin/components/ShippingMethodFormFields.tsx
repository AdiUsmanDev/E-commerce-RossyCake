import {
  CreateShippingMethodPayload,
  ShippingMethod,
  UpdateShippingMethodPayload,
} from "@/types/shipping.type";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

const ShippingMethodFormFields = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
  isSaving,
}: {
  mode: "create" | "update";
  initialData?: ShippingMethod | null;
  onSubmit: (
    data: CreateShippingMethodPayload | UpdateShippingMethodPayload
  ) => void;
  onCancel: () => void;
  isSaving: boolean;
}) => {
  // Gunakan state untuk mengelola form (Controlled Component)
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
    estimated_delivery_time: "",
  });

  // Isi form dengan data awal saat mode update
  useEffect(() => {
    if (mode === "update" && initialData) {
      setFormData({
        name: initialData.name || "",
        cost: initialData.cost?.toString() || "",
        estimated_delivery_time: initialData.estimated_delivery_time || "",
      });
    } else {
      // Reset form saat membuka dialog create
      setFormData({
        name: "",
        cost: "",
        estimated_delivery_time: "",
      });
    }
  }, [initialData, mode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Siapkan payload yang bersih sesuai tipe data
    const payload: CreateShippingMethodPayload | UpdateShippingMethodPayload = {
      name: formData.name,
      cost: parseFloat(formData.cost) || 0,
      estimated_delivery_time: formData.estimated_delivery_time,
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Dialog>
        <DialogHeader>
          <DialogTitle>
            {mode === "update"
              ? `Edit Metode Pengiriman: ${initialData?.name || ""}`
              : "Tambah Metode Pengiriman Baru"}
          </DialogTitle>
          <DialogDescription>
            Lengkapi detail metode pengiriman di bawah ini. Pastikan semua
            informasi sudah benar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Nama Metode */}
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
              placeholder="Contoh: JNE Reguler"
              required
            />
          </div>
          {/* Biaya */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="cost" className="text-right">
              Biaya (Rp)
            </Label>
            <Input
              id="cost"
              name="cost"
              type="number"
              min="0"
              step="0.01" // Mengizinkan desimal
              value={formData.cost}
              onChange={handleChange}
              className="col-span-3"
              placeholder="Contoh: 15000.50"
              required
            />
          </div>
          {/* Estimasi Waktu Pengiriman */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="estimated_delivery_time" className="text-right">
              Estimasi Waktu
            </Label>
            <Input
              id="estimated_delivery_time"
              name="estimated_delivery_time"
              value={formData.estimated_delivery_time}
              onChange={handleChange}
              className="col-span-3"
              placeholder="Contoh: 2-3 hari kerja"
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
            {mode === "update" ? "Update Metode" : "Simpan Metode"}
          </Button>
        </DialogFooter>
      </Dialog>
    </form>
  );
};

export default ShippingMethodFormFields;
