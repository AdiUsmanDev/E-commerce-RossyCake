import Protected from "@/middleware/Protected";
import CheckoutConfirmationPage from "@/modules/order";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/shop/checkout/$id")({
   component: () => (
      <Protected roles={["ADMIN", "CUSTOMER"]}>
        <CheckoutConfirmationPage />
      </Protected>
    ),
});
