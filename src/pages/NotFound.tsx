import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center animate-fade-in">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto">
          <span className="text-8xl mb-6 block">🍰</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground mb-8">
            Maaf, halaman yang Anda cari tidak ada. Mungkin kue-nya sudah habis
            dimakan?
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
