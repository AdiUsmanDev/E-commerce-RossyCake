import React, { useState, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { updateUserProfile } from "@/lib/redux/slices/authSlice";
import { LoaderCircle } from "lucide-react";
import { UpdateProfilePayload } from "@/services/profile.service";
import toast from "react-hot-toast";

const DisplayEditProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, status, error } = useSelector((state: RootState) => state.auth);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name ?? "",
        phone: user.phone ?? "",
        email: user.email ?? "",
        password: "",
      });
    }
  }, [user]);

  // Efek untuk mendeteksi perubahan pada form dan mengaktifkan/menonaktifkan tombol simpan
  useEffect(() => {
    if (!user || !isEditing) {
      setHasChanges(false);
      return;
    }
    // Bandingkan data di form dengan data asli dari user
    const isDataChanged =
      formData.name !== user.name ||
      formData.phone !== user.phone ||
      formData.email !== user.email ||
      !!formData.password; // Cek juga jika password baru diisi

    setHasChanges(isDataChanged);
  }, [formData, user, isEditing]);

  // === HANDLERS ===
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSaveChanges = async (e: FormEvent) => {
    e.preventDefault();

    const promise = dispatch(updateUserProfile(formData));

    toast.promise(promise, {
      loading: "Menyimpan perubahan...",
      success: () => {
        setIsEditing(false); 
        return "Profil berhasil diperbarui!";
      },
      error: (err) => err.message || "Gagal memperbarui profil.",
    });

    await promise;
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Kembalikan data form ke data user semula
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        email: user.email || "",
        password: "",
      });
    }
  };

  // === RENDER LOGIC ===
  const isLoading = status === "loading";

  if (!user) {
    return (
      <div className="flex justify-center items-center h-40">
        <LoaderCircle className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <CardHeader>
        <CardTitle>Profil Saya</CardTitle>
        <CardDescription>
          Kelola informasi profil Anda untuk mengontrol, melindungi dan
          mengamankan akun.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSaveChanges} className="space-y-4 px-4 pt-2">
          {/* ... Input fields (tidak berubah) ... */}
          <div>
            <Label className="font-bold" htmlFor="name">
              Nama Lengkap
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              disabled={!isEditing || isLoading}
              className="mt-2"
            />
          </div>
          <div>
            <Label className="font-bold" htmlFor="phone">
              Nomor Telepon
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone || ""}
              onChange={handleInputChange}
              disabled={!isEditing || isLoading}
              className="mt-2"
            />
          </div>
          <div>
            <Label className="font-bold" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing || isLoading}
              className="mt-2"
            />
          </div>

          {isEditing && (
            <div>
              <Label className="font-bold" htmlFor="password">
                Password Baru (Opsional)
              </Label>
              <Input
                id="password"
                type="text"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Isi untuk mengubah password"
                className="mt-2"
                disabled={isLoading}
              />
            </div>
          )}
          {status === "failed" && error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          {/* Tombol Aksi yang Disempurnakan */}
          <div className="pt-4 flex gap-2">
            {!isEditing ? (
              <Button type="button" onClick={() => setIsEditing(true)}>
                Edit Profil
              </Button>
            ) : (
              <>
                <Button type="submit" disabled={isLoading || !hasChanges}>
                  {isLoading && (
                    <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Simpan Perubahan
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={handleCancelEdit}
                  disabled={isLoading}
                >
                  Batal
                </Button>
              </>
            )}
          </div>
        </form>
      </CardContent>
    </>
  );
};

export default DisplayEditProfile;
