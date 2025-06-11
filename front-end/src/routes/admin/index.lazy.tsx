"use client";

import { createLazyFileRoute } from "@tanstack/react-router";
import Protected from "@/middleware/Protected";
import Admin from "@/modules/Admin";

export const Route = createLazyFileRoute("/admin/")({
  component: () => (
    <Protected roles={["ADMIN"]}>
      <Admin />
    </Protected>
  ),
});
