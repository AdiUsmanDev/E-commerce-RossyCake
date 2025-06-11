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
import {
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
  IconAlertTriangle,
  IconUserShield,
  IconUser,
  IconServerOff,
} from "@tabler/icons-react";
import { LoaderCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { CreateUserPayload, UpdateUserPayload, User } from "@/types/user.types";
import { createUser, deleteUser, getAllUsers, updateUser } from "@/services/users.service";

// Import services dan tipe data yang benar

// =============================================================
// Komponen Form yang Diperbaiki
// =============================================================
const UserFormFields = ({
  mode,
  initialData,
  onSubmit,
  onCancel,
  isSaving,
}: {
  mode: "create" | "update";
  initialData?: User | null;
  onSubmit: (data: CreateUserPayload | UpdateUserPayload) => void;
  onCancel: () => void;
  isSaving: boolean;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "CUSTOMER" as "ADMIN" | "CUSTOMER",
  });

  useEffect(() => {
    if (mode === "update" && initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        password: "", // Password tidak diisi ulang untuk keamanan
        role: initialData.role || "CUSTOMER",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "CUSTOMER",
      });
    }
  }, [initialData, mode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let payload: CreateUserPayload | UpdateUserPayload;

    if (mode === "create") {
      payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: formData.role,
      };
    } else {
      // Untuk update, hanya kirim field yang diubah. Password opsional.
      payload = {
        name: formData.name,
        phone: formData.phone,
        role: formData.role,
        ...(formData.password && { password: formData.password }), // Hanya tambahkan password jika diisi
      };
    }
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogHeader>
        <DialogTitle>
          {mode === "update"
            ? `Edit Pengguna: ${initialData?.name}`
            : "Tambah Pengguna Baru"}
        </DialogTitle>
        <DialogDescription>
          Lengkapi detail pengguna di bawah ini. Email harus unik.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-2">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nama Lengkap
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
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="col-span-3"
            required
            readOnly={mode === "update"}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="phone" className="text-right">
            No. Telepon
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="col-span-3"
            placeholder={
              mode === "update" ? "Isi untuk ganti password" : "Wajib diisi"
            }
            required={mode === "create"}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="role" className="text-right">
            Peran
          </Label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="col-span-3 p-2 border rounded-md dark:bg-neutral-800"
          >
            <option value="CUSTOMER">Customer</option>
            <option value="ADMIN">Admin</option>
          </select>
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
          {mode === "update" ? "Update Pengguna" : "Simpan Pengguna"}
        </Button>
      </DialogFooter>
    </form>
  );
};

// Komponen Skeleton untuk tabel
const TableSkeleton = () => (
  <TableBody>
    {Array.from({ length: 8 }).map((_, index) => (
      <TableRow key={`skeleton-user-${index}`}>
        {Array.from({ length: 6 }).map((_, cellIndex) => (
          <TableCell key={cellIndex}>
            <div className="h-6 bg-muted animate-pulse rounded-md"></div>
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
);

// Komponen utama
const UserManagementPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<"create" | "update">("create");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const saveMutation = useMutation({
    mutationFn: (data: {
      id?: number;
      payload: CreateUserPayload | UpdateUserPayload;
    }) => {
      if (data.id)
        return updateUser(data.id, data.payload as UpdateUserPayload);
      return createUser(data.payload as CreateUserPayload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setIsFormOpen(false);
    },
    onError: (err) => alert(`Gagal: ${err.message || "Terjadi kesalahan"}`),
  });

  const deleteMutation = useMutation({
    mutationFn: (userId: number) => deleteUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setUserToDelete(null);
    },
    onError: (err) => {
      alert(`Gagal menghapus: ${err.message}`);
      setUserToDelete(null);
    },
  });

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery) ||
        user.role.toLowerCase().includes(searchQuery)
    );
  }, [users, searchQuery]);

  const handleFormSubmit = (
    formData: CreateUserPayload | UpdateUserPayload
  ) => {
    saveMutation.mutate({ id: editingUser?.id, payload: formData });
  };

  const openCreateForm = () => {
    setEditingUser(null);
    setFormMode("create");
    setIsFormOpen(true);
  };

  const openEditForm = (user: User) => {
    setEditingUser(user);
    setFormMode("update");
    setIsFormOpen(true);
  };

  const confirmDelete = () => {
    if (userToDelete) deleteMutation.mutate(userToDelete.id);
  };

  const RoleIcon = ({ role }: { role: string }) => {
    if (role === "ADMIN")
      return <IconUserShield className="h-5 w-5 text-purple-500" />;
    return <IconUser className="h-5 w-5 text-gray-500" />;
  };

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 lg:p-8 w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
          Manajemen Pengguna
        </h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Pengguna</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 mb-4">
        <div className="relative flex items-center w-full md:max-w-sm">
          <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
          <Input
            type="search"
            placeholder="Cari (Nama, Email, Peran)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
            className="pl-10"
          />
        </div>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreateForm}>
              <IconPlus size={18} className="mr-2" /> Tambah Pengguna
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <UserFormFields
              mode={formMode}
              initialData={editingUser}
              isSaving={saveMutation.isPending}
              onSubmit={handleFormSubmit}
              onCancel={() => setIsFormOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <ScrollArea className="h-[calc(100vh-420px)] w-full relative rounded-md border">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-background shadow-sm">
            <TableRow>
              <TableHead>Nama Pengguna</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="w-[120px] text-center">Peran</TableHead>
              <TableHead className="w-[150px]">Bergabung Sejak</TableHead>
              <TableHead className="w-[100px] text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          {isLoading ? (
            <TableSkeleton />
          ) : isError ? (
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center h-48 text-destructive"
                >
                  <IconServerOff className="mx-auto h-12 w-12 mb-2" />
                  {(error as Error).message}
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <RoleIcon role={user.role} />
                        <div className="font-medium">{user.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${user.role === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"}`}
                      >
                        {user.role.toLowerCase()}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(user.created_at).toLocaleDateString("id-ID")}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => openEditForm(user)}
                        >
                          <IconPencil size={16} />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => setUserToDelete(user)}
                        >
                          <IconTrash size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center h-24">
                    Tidak ada data pengguna.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      <Dialog open={!!userToDelete} onOpenChange={() => setUserToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <IconAlertTriangle className="text-red-500" />
              Konfirmasi Hapus
            </DialogTitle>
            <DialogDescription>
              Anda yakin ingin menghapus pengguna{" "}
              <strong>"{userToDelete?.name}"</strong>? Tindakan ini tidak dapat
              dibatalkan.
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

export default UserManagementPage;
