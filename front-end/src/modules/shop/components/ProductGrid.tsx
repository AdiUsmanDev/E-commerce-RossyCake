import { Product } from "@/types/product.types";
import ProductCard from "./ProductCard";

const ProductGrid: React.FC<{
  products: Product[];
  onAddToCart: (product: Product) => void;
}> = ({ products, onAddToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
);

export default ProductGrid;
