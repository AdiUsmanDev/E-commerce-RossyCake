// src/components/checkout/ShippingAddressForm.tsx

"use client";

import React, { useMemo } from "react";

// UI Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin } from "lucide-react";

// Hook & Data
import { useCheckout } from "@/hooks/useCheckoutState"; // <-- Menggunakan Context
import { ShippingAddress } from "@/types/Checkout.type";
import { INDONESIAN_REGIONS } from "@/data/regions";

/**
 * Komponen Form Alamat Pengiriman yang sudah terintegrasi dengan state management terpusat.
 * Tidak lagi memerlukan props untuk state dan handler.
 */
const ShippingAddressForm: React.FC = () => {
  // 1. Mengambil state dan dispatch dari context
  const { state, dispatch } = useCheckout();
  const { shippingAddress } = state;

  // 2. Handler perubahan yang kini memanggil dispatch
  const handleFieldChange = (field: keyof ShippingAddress, value: string) => {
    dispatch({ type: "UPDATE_ADDRESS_FIELD", payload: { field, value } });
  };

  // Handler khusus untuk provinsi, yang juga mereset kota
  const handleProvinceChange = (provinceName: string) => {
    handleFieldChange("province", provinceName);
    handleFieldChange("city", ""); // Reset pilihan kota saat provinsi berubah
  };

  // 3. Memo-isasi daftar kota berdasarkan provinsi yang dipilih
  const availableCities = useMemo(() => {
    const selectedProvince = INDONESIAN_REGIONS.find(
      (p) => p.name === shippingAddress.province
    );
    return selectedProvince ? selectedProvince.cities : [];
  }, [shippingAddress.province]);

  return (
    <Card className="bg-white dark:bg-neutral-800/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2.5 text-stone-800 dark:text-stone-100">
          <MapPin size={22} className="text-rose-500" />
          Alamat Pengiriman
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {/* Nama Penerima */}
        <div className="space-y-2">
          <Label htmlFor="recipient">Nama Penerima</Label>
          <Input
            id="recipient"
            value={shippingAddress.recipient}
            onChange={(e) => handleFieldChange("recipient", e.target.value)}
            required
          />
        </div>

        {/* No. Telepon */}
        <div className="space-y-2">
          <Label htmlFor="phone">No. Telepon</Label>
          <Input
            id="phone"
            type="tel"
            value={shippingAddress.phone}
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            required
          />
        </div>

        {/* Alamat Lengkap */}
        <div className="md:col-span-2 space-y-2">
          <Label htmlFor="street">Alamat Lengkap</Label>
          <Input
            id="street"
            placeholder="Nama jalan, nomor rumah, RT/RW..."
            value={shippingAddress.street}
            onChange={(e) => handleFieldChange("street", e.target.value)}
            required
          />
        </div>

        {/* Dropdown Provinsi */}
        <div className="space-y-2">
          <Label htmlFor="province">Provinsi</Label>
          <Select
            value={shippingAddress.province}
            onValueChange={handleProvinceChange}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Provinsi" />
            </SelectTrigger>
            <SelectContent>
              {INDONESIAN_REGIONS.map((province) => (
                <SelectItem key={province.id} value={province.name}>
                  {province.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dropdown Kota/Kabupaten (Dinamis) */}
        <div className="space-y-2">
          <Label htmlFor="city">Kota/Kabupaten</Label>
          <Select
            value={shippingAddress.city}
            onValueChange={(value) => handleFieldChange("city", value)}
            disabled={!shippingAddress.province || availableCities.length === 0}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih Kota/Kab." />
            </SelectTrigger>
            <SelectContent>
              {availableCities.map((city) => (
                <SelectItem key={city.id} value={city.name}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Kode Pos */}
        <div className="space-y-2">
          <Label htmlFor="postal_code">Kode Pos</Label>
          <Input
            id="postal_code"
            value={shippingAddress.postal_code}
            onChange={(e) => handleFieldChange("postal_code", e.target.value)}
            required
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ShippingAddressForm;
