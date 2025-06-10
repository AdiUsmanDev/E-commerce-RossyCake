import NewCheckoutPage from "@/modules/checkout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shop/checkout/")({
  component: NewCheckoutPage,
});
