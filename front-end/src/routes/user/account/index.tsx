import { createFileRoute } from "@tanstack/react-router";
import Users from "@/modules/user";
export const Route = createFileRoute("/user/account/")({
  component: Users,
});
