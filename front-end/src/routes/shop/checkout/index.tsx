import DisplayPayments from "@/modules/payments";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shop/checkout/")({
  component: DisplayPayments,
});
