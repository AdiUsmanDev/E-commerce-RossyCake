import Protected from "@/middleware/Protected";
import NewCheckoutPage from "@/modules/checkout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shop/checkout/")({
  component: () => (
    <Protected roles={["ADMIN", "CUSTOMER"]}>
      <NewCheckoutPage />
    </Protected>
  ),
});
