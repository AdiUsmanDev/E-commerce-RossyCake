// src/features/user-account/payments/components/PaymentStatusBadge.tsx
import React from "react";
import {
  CheckCircle2,
  XCircle,
  LoaderCircle,
  Undo2,
  AlertCircle,
} from "lucide-react";
import { PaymentHistoryItem } from "../types";
import { cn } from "@/lib/utils";

interface PaymentStatusBadgeProps {
  status: PaymentHistoryItem["status"];
}

export const PaymentStatusBadge: React.FC<PaymentStatusBadgeProps> = ({
  status,
}) => {
  let IconComponent = CheckCircle2;
  let colorClasses =
    "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-300";
  let text = status;

  switch (status) {
    case "Success":
      text = "Berhasil";
      break;
    case "Failed":
      IconComponent = XCircle;
      colorClasses =
        "bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-300";
      text = "Gagal";
      break;
    case "Pending":
      IconComponent = LoaderCircle;
      colorClasses =
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-300";
      text = "Menunggu";
      break;
    case "Refunded":
      IconComponent = Undo2;
      colorClasses =
        "bg-blue-100 text-blue-700 dark:bg-blue-800/30 dark:text-blue-300";
      text = "Dikembalikan";
      break;
    default:
      IconComponent = AlertCircle;
      colorClasses =
        "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300";
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
        colorClasses
      )}
    >
      <IconComponent
        className={`h-3.5 w-3.5 ${status === "Pending" ? "animate-spin" : ""}`}
      />
      {text}
    </span>
  );
};
