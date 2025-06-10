import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/product.types";
import { Plus } from "lucide-react";

const ProductCard: React.FC<{
  product: Product;
  onAddToCart: (product: Product) => void;
}> = ({ product, onAddToCart }) => (
  <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <CardContent className="p-0">
      <div className="aspect-square overflow-hidden">
        <img
          src={
            product.imageUrl ||
            "https://placehold.co/400x400/f3f4f6/9ca3af?text=Produk"
          }
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 border-t">
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <h3
          className="font-semibold text-lg truncate mt-1"
          title={product.name}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-4">
          <p className="font-bold text-xl text-amber-600">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(product.price)}
          </p>
          <Button size="sm" onClick={() => onAddToCart(product)}>
            <Plus className="h-4 w-4 mr-1.5" /> Tambah
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ProductCard;
