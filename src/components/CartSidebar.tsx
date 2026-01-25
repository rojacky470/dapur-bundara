import { X, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    const phone = import.meta.env.VITE_WHATSAPP_NUMBER || "6289673656192";
    
    const itemsList = items
      .map(
        (item) =>
          `• ${item.product.name} x${item.quantity} = ${formatPrice(
            item.product.price * item.quantity
          )}`
      )
      .join("\n");

    const message = `🛒 *Pesanan Baru dari Toko Dapur Bundara*

${itemsList}

*Total: ${formatPrice(totalPrice)}*

Mohon konfirmasi ketersediaan dan proses pesanan saya. Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-semibold">
              Keranjang Belanja
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-secondary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg mb-2">
                Keranjang kosong
              </p>
              <p className="text-sm text-muted-foreground">
                Yuk, pilih kue tradisional favoritmu!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-card rounded-xl"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-card-foreground truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-secondary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-secondary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-xs text-destructive hover:underline"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 md:p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total</span>
              <span className="text-2xl font-bold text-primary">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full btn-accent flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Checkout via WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full py-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              Kosongkan Keranjang
            </button>
          </div>
        )}
      </div>
    </>
  );
}
