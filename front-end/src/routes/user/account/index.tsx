import { createFileRoute } from "@tanstack/react-router";
import Users from "@/modules/user";
import Protected from "@/middleware/Protected";
export const Route = createFileRoute("/user/account/")({
  component: () => (
    <Protected roles={["ADMIN", "CUSTOMER"]}>
      <Users />
    </Protected>
  ),
});
