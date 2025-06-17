import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CreateRawMaterialPayload,
  RawMaterial,
  UpdateRawMaterialPayload,
} from "@/types/RawMaterials";
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

const MaterialFormFields = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
  isSaving,
}: {
  mode: "create" | "update";
  initialData?: RawMaterial | null;
  onSubmit: (data: CreateRawMaterialPayload | UpdateRawMaterialPayload) => void;
  onCancel: () => void;
  isSaving: boolean;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    stock: "",
    unit: "",
    reorder_level: "",
  });

  useEffect(() => {
    if (mode === "update" && initialData) {
      setFormData({
        name: initialData.material.name || "",
        stock: initialData.stock?.toString() || "0",
        unit: initialData.material.unit || "",
        reorder_level: initialData.reorder_level?.toString() || "0",
      });
    } else {
      setFormData({
        name: "",
        stock: "",
        unit: "",
        reorder_level: "0",
      });
    }
  }, [initialData, mode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: CreateRawMaterialPayload | UpdateRawMaterialPayload = {
      name: formData.name,
      stock: parseFloat(formData.stock) || 0,
      unit: formData.unit,
      reorder_level: parseFloat(formData.reorder_level) || 0,
    };
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>
          {mode === "update"
            ? `Edit Bahan: ${initialData?.material.name}` // Tampilkan nama dari material master
            : "Tambah Bahan Baku Baru"}
        </DialogTitle>
        <DialogDescription>
          Lengkapi detail bahan baku di bawah ini.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nama Bahan
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
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="stock" className="text-right">
            Stok Awal
          </Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            step="any"
            value={formData.stock}
            onChange={handleChange}
            className="col-span-3"
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="unit" className="text-right">
            Satuan
          </Label>
          <Input
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="col-span-3"
            required
            placeholder="kg, gr, liter, pcs"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="reorder_level" className="text-right">
            Batas Stok Min.
          </Label>
          <Input
            id="reorder_level"
            name="reorder_level"
            type="number"
            step="any"
            value={formData.reorder_level}
            onChange={handleChange}
            className="col-span-3"
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
          {mode === "update" ? "Update Bahan" : "Simpan Bahan"}
        </Button>
      </DialogFooter>
    </form>
  );
};

export default MaterialFormFields;
