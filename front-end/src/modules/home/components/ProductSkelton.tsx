import { Card } from "@/components/ui/card";

const ProductCardSkeleton = () => (
  <Card className="overflow-hidden">
    <div className="aspect-square bg-gray-200 dark:bg-neutral-800 animate-pulse"></div>
    <div className="p-4">
      <div className="h-4 w-1/3 bg-gray-200 dark:bg-neutral-800 animate-pulse rounded"></div>
      <div className="h-6 w-3/4 bg-gray-200 dark:bg-neutral-800 animate-pulse rounded mt-2"></div>
      <div className="flex items-center justify-between mt-4">
        <div className="h-8 w-1/2 bg-gray-200 dark:bg-neutral-800 animate-pulse rounded"></div>
        <div className="h-9 w-1/3 bg-gray-200 dark:bg-neutral-800 animate-pulse rounded"></div>
      </div>
    </div>
  </Card>
);
export default ProductCardSkeleton;
