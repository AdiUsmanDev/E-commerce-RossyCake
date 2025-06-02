"use client";

import { createFileRoute } from "@tanstack/react-router";
import Admin from "@/modules/Admin";

export const Route = createFileRoute("/admin/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Admin />;
}
