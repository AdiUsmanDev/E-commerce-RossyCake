import { createLazyFileRoute } from "@tanstack/react-router";

import shop from "@/modules/shop";

export const Route = createLazyFileRoute("/shop/")({
  component: shop,
});
