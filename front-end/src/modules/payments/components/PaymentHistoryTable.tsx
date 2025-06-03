// src/features/user-account/payments/components/PaymentHistoryTable.tsx
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { PaymentHistoryItem } from "../types";
import { PaymentMethodIcon } from "./PaymentMethodIcon";
import { PaymentStatusBadge } from "./PaymentStatusBadge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface PaymentHistoryTableProps {
  payments: PaymentHistoryItem[];
}

export const PaymentHistoryTable: React.FC<PaymentHistoryTableProps> = ({
  payments,
}) => {
  return (
    <ScrollArea className="h-[300px] w-full relative rounded-md border dark:border-neutral-700">
      <Table>
        <TableCaption>Daftar riwayat pembayaran Anda.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[130px] sticky top-0 z-10 bg-background dark:bg-neutral-800/90 shadow-sm">
              Tanggal
            </TableHead>
            <TableHead className="sticky top-0 z-10 bg-background dark:bg-neutral-800/90 shadow-sm">
              ID Pembayaran
            </TableHead>
            <TableHead className="sticky top-0 z-10 bg-background dark:bg-neutral-800/90 shadow-sm">
              Deskripsi
            </TableHead>
            <TableHead className="w-[160px] sticky top-0 z-10 bg-background dark:bg-neutral-800/90 shadow-sm">
              Metode
            </TableHead>
            <TableHead className="w-[150px] text-right sticky top-0 z-10 bg-background dark:bg-neutral-800/90 shadow-sm">
              Jumlah
            </TableHead>
            <TableHead className="w-[130px] text-center sticky top-0 z-10 bg-background dark:bg-neutral-800/90 shadow-sm">
              Status
            </TableHead>
            <TableHead className="w-[80px] text-center sticky top-0 z-10 bg-background dark:bg-neutral-800/90 shadow-sm">
              Aksi
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.length > 0 ? (
            payments.map((payment) => (
              <TableRow key={payment.paymentId}>
                <TableCell>
                  <div className="text-sm">{payment.date}</div>
                  <div className="text-xs text-muted-foreground">
                    {payment.time}
                  </div>
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {payment.paymentId}
                </TableCell>
                <TableCell className="text-sm">
                  {payment.description || payment.orderId}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-sm">
                    <PaymentMethodIcon method={payment.method} size={16} />
                    {payment.method}
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  Rp{payment.amount.toLocaleString("id-ID")}
                </TableCell>
                <TableCell className="text-center">
                  <PaymentStatusBadge status={payment.status} />
                </TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    title="Lihat Detail"
                  >
                    <Eye size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center h-24 text-muted-foreground"
              >
                Tidak ada riwayat pembayaran yang cocok.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
