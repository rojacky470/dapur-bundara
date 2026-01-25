import { Heart, Users, Award, Leaf } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Dibuat dengan Cinta",
    description:
      "Setiap kue kami buat dengan sepenuh hati, menggunakan resep yang telah diwariskan selama puluhan tahun.",
  },
  {
    icon: Users,
    title: "Warisan Keluarga",
    description:
      "Resep autentik dari nenek moyang kami yang terus dijaga dan disempurnakan dari generasi ke generasi.",
  },
  {
    icon: Award,
    title: "Kualitas Terjamin",
    description:
      "Kami hanya menggunakan bahan-bahan premium berkualitas tinggi untuk menghasilkan cita rasa terbaik.",
  },
  {
    icon: Leaf,
    title: "Alami & Sehat",
    description:
      "Tanpa pengawet buatan, tanpa pewarna sintetis. 100% bahan alami untuk kesehatan keluarga Anda.",
  },
];

const team = [
  {
    name: "Ibu Sari",
    role: "Founder & Head Baker",
    description: "30 tahun pengalaman membuat kue tradisional",
  },
  {
    name: "Dewi",
    role: "Pastry Chef",
    description: "Spesialis kue kering dan lapis legit",
  },
  {
    name: "Rina",
    role: "Customer Relations",
    description: "Melayani pesanan dan konsultasi menu",
  },
];

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Tentang Kami
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Melestarikan Cita Rasa{" "}
              <span className="text-primary">Tradisional Indonesia</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Toko Dapur Bundara hadir untuk membawa kembali kenangan manis akan
              kelezatan kue tradisional Indonesia yang autentik. Setiap gigitan
              adalah perjalanan ke masa lalu yang penuh cinta.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dapur Bundara adalah UMKM yang menghadirkan aneka kue Lebaran dan
                   kue tradisional dengan cita rasa autentik dan kualitas terbaik. Dibuat dari bahan pilihan dan resep rumahan, 
                  setiap kue menghadirkan rasa khas yang cocok untuk momen spesial bersama keluarga.
                </p>
                <p>
                  Dengan resep yang diwariskan dari nenek buyut, kami berkomitmen
                  untuk menjaga keaslian rasa sambil menghadirkan kemasan modern
                  yang cocok untuk berbagai momen spesial Anda.
                </p>
                
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/images/kue.png"
                  alt="Proses pembuatan kue"
                  className="w-full h-full object-cover"
                />
              </div>
    
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prinsip yang kami pegang teguh dalam setiap produk yang kami
              hasilkan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl card-hover text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section }
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tim Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Orang-orang berdedikasi di balik kelezatan Toko Dapur Bundara
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl card-hover text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍🍳</span>
                </div>
                <h3 className="font-semibold text-lg text-card-foreground">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Vision Mission */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Visi</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Menjadi merek kue tradisional Indonesia terdepan yang dikenal
                karena kualitas, keaslian rasa, dan inovasi dalam menghadirkan
                kelezatan warisan nusantara ke meja makan keluarga Indonesia
                modern.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Misi</h3>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  Melestarikan resep tradisional dengan standar kualitas tinggi
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  Menggunakan bahan-bahan alami tanpa pengawet
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  Memberikan pelayanan terbaik kepada pelanggan
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  Memberdayakan komunitas pembuat kue lokal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
