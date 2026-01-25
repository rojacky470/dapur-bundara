import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Award, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const features = [
  {
    icon: Star,
    title: "Kualitas Premium",
    description: "Bahan pilihan terbaik untuk cita rasa autentik",
  },
  {
    icon: Heart,
    title: "Resep Turun-Temurun",
    description: "Warisan kuliner Indonesia dari generasi ke generasi",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    description: "Dikemas rapi dan dikirim dalam kondisi segar",
  },
  {
    icon: Award,
    title: "Tanpa Pengawet",
    description: "100% homemade tanpa bahan pengawet buatan",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/prf.png"
            alt="Kue Tradisional Indonesia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              🍰 Kue Tradisional Premium
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Cita Rasa Autentik{" "}
              <span className="text-primary">Toko Dapur Bundara</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Nikmati kelezatan kue tradisional Indonesia yang dibuat dengan
              resep warisan keluarga dan bahan berkualitas tinggi. Sempurna
              untuk momen spesialmu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary inline-flex items-center justify-center gap-2">
                Lihat Produk
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-outline inline-flex items-center justify-center">
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami berkomitmen menghadirkan kue tradisional terbaik dengan
              standar kualitas tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl card-hover text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Produk Unggulan
              </h2>
              <p className="text-muted-foreground">
                Pilihan terbaik kue tradisional untuk Anda
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Lihat Semua
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Siap Memesan Kue Tradisional?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Hubungi kami via WhatsApp untuk pemesanan khusus, paket hampers, dan
            konsultasi menu untuk acara spesial Anda.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
          >
            Hubungi Kami
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
