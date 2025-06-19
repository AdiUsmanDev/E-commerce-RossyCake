import ProductDetailPage from '@/modules/Product'
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/product/$productId")({
  component: ProductDetailPage,
});
