import CheckoutConfirmationPage from "@/modules/order";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shop/checkout/$id")({
  component: CheckoutConfirmationPage,
});
