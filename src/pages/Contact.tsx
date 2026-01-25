import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Kp. Rawagebang 001/002 Jatibaru Cikarang timur kab. Bekasi",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "+62 896-7365-6192",
    link: "tel:+6289673656192",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Sabtu: 08.00 - 17.00 WIB",
  },
];

export default function Contact() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "6289673656192";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Halo Toko Dapur Bundara, saya ingin bertanya tentang..."
  )}`;

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Hubungi Kami
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Kami Siap Membantu Anda
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Punya pertanyaan tentang produk, ingin memesan dalam jumlah besar,
              atau butuh konsultasi menu? Jangan ragu untuk menghubungi kami!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl card-hover text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Pesan Langsung via WhatsApp
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Cara tercepat untuk memesan atau bertanya! Tim kami siap
                melayani Anda dengan ramah dan responsif.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*
  <section className="section-padding bg-secondary/30">
    <div className="container-custom">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          Lokasi Kami
        </h2>
        <p className="text-muted-foreground">
          Kunjungi dapur kami dan lihat langsung proses pembuatan kue
          tradisional
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-soft">
        <iframe
          src="https://www.google.com/maps/place/Kp+rawagebang+DS.jatibaru/@-6.2820085,107.2125526,18z/data=!4m6!3m5!1s0x2e69835cff0fe7bf:0xf8e6ad9667023ae0!8m2!3d-6.2822383!4d107.21407!16s%2Fg%2F11v0b_2cgs?entry=ttu&g_ep=EgoyMDI2MDEyMC4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Toko Dapur Bundara"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  </section>
*/}

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Pertanyaan Umum
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Berapa lama waktu pemesanan?",
                  a: "Untuk pesanan reguler, kami butuh waktu 2-3 hari kerja. Pesanan dalam jumlah besar minimal H-7.",
                },
                {
                  q: "Apakah bisa kirim ke luar kota?",
                  a: "Ya, kami melayani pengiriman ke seluruh Indonesia dengan packaging khusus untuk menjaga kualitas kue.",
                },
                {
                  q: "Bagaimana cara pembayaran?",
                  a: "Kami menerima transfer bank dan e-wallet. Pembayaran di muka untuk mengonfirmasi pesanan.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl">
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
