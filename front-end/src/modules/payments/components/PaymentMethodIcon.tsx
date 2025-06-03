// src/features/user-account/payments/components/PaymentMethodIcon.tsx
import React from "react";
import { CreditCard, Landmark, Wallet, HelpCircle } from "lucide-react";
import {
  PaymentMethodType,
  SavedPaymentMethodType,
  CardProviderType,
  EWalletProviderType,
} from "../types";

interface PaymentMethodIconProps {
  methodOrProvider:
    | PaymentMethodType
    | SavedPaymentMethodType
    | CardProviderType
    | EWalletProviderType
    | undefined;
  size?: number;
  className?: string;
}

export const PaymentMethodIcon: React.FC<PaymentMethodIconProps> = ({
  methodOrProvider,
  size = 18,
  className = "",
}) => {
  const effectiveClassName = `shrink-0 ${className}`;
  const methodStr = String(methodOrProvider).toLowerCase();

  if (
    methodStr.includes("card") ||
    methodStr.includes("visa") ||
    methodStr.includes("mastercard")
  ) {
    return (
      <CreditCard
        size={size}
        className={effectiveClassName || "text-blue-500"}
      />
    );
  }
  if (methodStr.includes("bank") || methodStr.includes("transfer")) {
    return (
      <Landmark
        size={size}
        className={effectiveClassName || "text-green-500"}
      />
    );
  }
  if (
    methodStr.includes("gopay") ||
    methodStr.includes("ovo") ||
    methodStr.includes("paypal") ||
    methodStr.includes("e-wallet") ||
    methodStr.includes("dana")
  ) {
    return (
      <Wallet size={size} className={effectiveClassName || "text-purple-500"} />
    );
  }
  return (
    <HelpCircle size={size} className={effectiveClassName || "text-gray-400"} />
  );
};
