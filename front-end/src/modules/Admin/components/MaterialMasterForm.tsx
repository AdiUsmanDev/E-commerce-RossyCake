// components/MaterialMasterForm.tsx
import React, { useState, useEffect } from "react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";


import { createMaterial } from "@/services/materials.service"; 
import { CreateMaterialPayload } from "@/types/materiasl";


const validUnits = ["kg", "gr", "liter", "pcs", "meter", "cm"];

interface MaterialMasterFormProps {
  initialBarcode: string;
  onSuccess: () => void;
  onCancel: () => void;
  isSaving: boolean;
}

const MaterialMasterForm: React.FC<MaterialMasterFormProps> = ({
  initialBarcode,
  onSuccess,
  onCancel,
  isSaving,
}) => {
  const [formData, setFormData] = useState<CreateMaterialPayload>({
    name: "",
    defaultStock: 0,
    unit: "",
    barcode: initialBarcode,
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, barcode: initialBarcode }));
  }, [initialBarcode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "defaultStock" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic validation based on your Joi schema (you might want a more robust client-side validation library)
    if (
      !formData.name ||
      formData.defaultStock < 0 ||
      !formData.unit ||
      !formData.barcode
    ) {
      alert("Harap lengkapi semua bidang yang wajib diisi.");
      return;
    }
    if (formData.unit && !validUnits.includes(formData.unit.toLowerCase())) {
      alert(
        `Satuan tidak valid. Satuan yang diizinkan: ${validUnits.join(", ")}`
      );
      return;
    }

    try {
      await createMaterial(formData); // Call your create material master service
      onSuccess();
    } catch (error) {
      console.error("Failed to create material master:", error);
      alert(
        `Gagal membuat material master: ${(error as Error).message || "Terjadi kesalahan"}`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>Buat Material Baru (Master)</DialogTitle>
        <DialogDescription>
          Barcode yang dipindai tidak cocok dengan material yang sudah ada.
          Harap buat material master baru untuk barcode ini.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="barcode" className="text-right">
            Barcode
          </Label>
          <Input
            id="barcode"
            name="barcode"
            value={formData.barcode}
            className="col-span-3 bg-gray-100"
            readOnly // Barcode should not be editable after scanning
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nama Material
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
          <Label htmlFor="defaultStock" className="text-right">
            Stok Awal Default
          </Label>
          <Input
            id="defaultStock"
            name="defaultStock"
            type="number"
            step="any"
            value={formData.defaultStock}
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
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline" onClick={onCancel}>
            Batal
          </Button>
        </DialogClose>
        <Button type="submit" disabled={isSaving}>
          {isSaving && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
          Simpan Material
        </Button>
      </DialogFooter>
    </form>
  );
};

export default MaterialMasterForm;
