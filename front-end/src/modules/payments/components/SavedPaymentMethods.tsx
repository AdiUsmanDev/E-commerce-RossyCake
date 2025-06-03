// src/features/user-account/payments/components/SavedPaymentMethods.tsx
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
  onSetDefault?: (methodId: string) => void; // Opsional
  onAddMethod: () => void;
}

export const SavedPaymentMethods: React.FC<SavedPaymentMethodsProps> = ({
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
          Kelola metode pembayaran Anda untuk transaksi yang lebih cepat dan
          mudah.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {methods.length > 0 ? (
          methods.map((method) => (
            <div
              key={method.id}
              className={cn(
                "flex items-center justify-between p-3 rounded-md border dark:border-neutral-600",
                method.isDefault
                  ? "bg-sky-50 dark:bg-sky-900/30 border-sky-200 dark:border-sky-700"
                  : "bg-background dark:bg-neutral-800 hover:bg-muted/50 dark:hover:bg-neutral-700/50"
              )}
            >
              <div className="flex items-center gap-3">
                <PaymentMethodIcon
                  method={method.providerName || method.type}
                  size={20}
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
              <div className="flex items-center gap-1.5">
                {method.isDefault && (
                  <Star
                    className="h-4 w-4 text-yellow-500 fill-yellow-500"
                    title="Metode Utama"
                  />
                )}
                {onSetDefault && !method.isDefault && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-sky-500"
                    onClick={() => onSetDefault(method.id)}
                    title="Jadikan Utama"
                  >
                    <Star className="h-4 w-4" />
                  </Button>
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
        {/* Tombol ini akan memicu AddPaymentMethodDialog */}
      </CardFooter>
    </Card>
  );
};
