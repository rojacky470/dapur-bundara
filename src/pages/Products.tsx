import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-secondary/30 py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Koleksi Kue Tradisional
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jelajahi berbagai pilihan kue tradisional Indonesia yang dibuat
            dengan cinta dan resep autentik turun-temurun.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-muted-foreground">
              Menampilkan <span className="font-semibold text-foreground">{products.length}</span> produk
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-primary/5 py-12">
        <div className="container-custom">
          <div className="bg-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 card-hover">
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-card-foreground mb-2">
                Butuh Pesanan Khusus?
              </h3>
              <p className="text-muted-foreground">
                Kami menerima pesanan untuk acara besar, hampers, dan customisasi.
              </p>
            </div>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || ""}?text=${encodeURIComponent("Halo, saya ingin menanyakan tentang pesanan khusus untuk acara.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent whitespace-nowrap"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
