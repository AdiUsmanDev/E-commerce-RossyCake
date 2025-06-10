import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import { ShippingAddress } from "@/types/Checkout.type";

interface ShippingAddressFormProps {
  address: ShippingAddress;
  onAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShippingAddressForm: React.FC<ShippingAddressFormProps> = ({
  address,
  onAddressChange,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin size={20} /> Alamat Pengiriman
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="recipient">Nama Penerima</Label>
          <Input
            id="recipient"
            value={address.recipient}
            onChange={onAddressChange}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">No. Telepon</Label>
          <Input
            id="phone"
            type="tel"
            value={address.phone}
            onChange={onAddressChange}
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2 space-y-1.5">
          <Label htmlFor="street">Alamat Lengkap</Label>
          <Input
            id="street"
            placeholder="Nama jalan, nomor rumah, RT/RW..."
            value={address.street}
            onChange={onAddressChange}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="city">Kota/Kabupaten</Label>
          <Input
            id="city"
            value={address.city}
            onChange={onAddressChange}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="province">Provinsi</Label>
          <Input
            id="province"
            value={address.province}
            onChange={onAddressChange}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="postal_code">Kode Pos</Label>
          <Input
            id="postal_code"
            value={address.postal_code}
            onChange={onAddressChange}
            required
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ShippingAddressForm;
