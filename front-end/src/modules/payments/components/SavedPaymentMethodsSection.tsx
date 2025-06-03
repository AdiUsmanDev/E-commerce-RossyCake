// src/features/user-account/payments/components/SavedPaymentMethodsSection.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SavedPaymentMethod } from "../types";
import { PaymentMethodIcon } from "./PaymentMethodIcon";
import { PlusCircle, Trash2, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface SavedPaymentMethodsProps {
  methods: SavedPaymentMethod[];
  onDeleteMethod: (methodId: string) => void;
  onSetDefault?: (methodId: string) => void;
  onAddMethod: () => void; // Fungsi untuk memicu dialog tambah metode
}

export const SavedPaymentMethodsSection: React.FC<SavedPaymentMethodsProps> = ({
  methods,
  onDeleteMethod,
  onSetDefault,
  onAddMethod,
}) => {
  return (
    <Card className="dark:border-neutral-700">
      <CardHeader>
        <CardTitle>Metode Pembayaran Tersimpan</CardTitle>
        <CardDescription>
          Kelola metode pembayaran Anda untuk transaksi yang lebih cepat.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {methods.length > 0 ? (
          methods.map((method) => (
            <div
              key={method.id}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg border dark:border-neutral-600 transition-colors",
                method.isDefault
                  ? "bg-sky-50 dark:bg-sky-900/40 border-sky-300 dark:border-sky-700 ring-1 ring-sky-500"
                  : "bg-background dark:bg-neutral-800 hover:bg-muted/50 dark:hover:bg-neutral-700/60"
              )}
            >
              <div className="flex items-center gap-3">
                <PaymentMethodIcon
                  methodOrProvider={method.providerName || method.type}
                  size={22}
                />
                <div>
                  <p className="font-medium text-sm text-foreground">
                    {method.providerName ? `${method.providerName} • ` : ""}
                    {method.details}
                  </p>
                  {method.expiryDate && (
                    <p className="text-xs text-muted-foreground">
                      Berlaku s/d: {method.expiryDate}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                {method.isDefault ? (
                  <Star
                    className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    title="Metode Utama"
                  />
                ) : (
                  onSetDefault && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-yellow-500"
                      onClick={() => onSetDefault(method.id)}
                      title="Jadikan Utama"
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                  )
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  onClick={() => onDeleteMethod(method.id)}
                  title="Hapus"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-center text-muted-foreground py-4">
            Anda belum menyimpan metode pembayaran.
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" onClick={onAddMethod}>
          <PlusCircle className="mr-2 h-4 w-4" /> Tambah Metode Baru
        </Button>
      </CardFooter>
    </Card>
  );
};
