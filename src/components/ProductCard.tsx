import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 500);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="group bg-card rounded-2xl overflow-hidden card-hover">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.category && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
            {product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-display text-lg md:text-xl font-semibold text-card-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <p className="text-lg md:text-xl font-bold text-primary mb-4">
          {formatPrice(product.price)}
        </p>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center gap-3">
          {/* Quantity Selector */}
          <div className="flex items-center border border-border rounded-xl overflow-hidden">
            <button
              onClick={decrementQuantity}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-medium">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium transition-all duration-200 ${
              isAdding
                ? "bg-accent text-accent-foreground scale-95"
                : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">
              {isAdding ? "Ditambahkan!" : "Tambah"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
