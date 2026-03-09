import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Jana Nováková",
      role: "Domácnost, Praha",
      text: "DOMIDOMI Energie nám pomohla ušetřit přes 8 000 Kč ročně na elektřině. Celý proces byl překvapivě jednoduchý — vyplnili jsme formulář a oni se postarali o zbytek.",
      stars: 5,
      avatar: "JN",
    },
    {
      name: "Petr Svoboda",
      role: "OSVČ, Brno",
      text: "Jako živnostník nemám čas složitě porovnávat tarify. DOMIDOMI to udělalo za mě a ještě mi vyjednalo lepší cenu, než jsem čekal. Doporučuji!",
      stars: 5,
      avatar: "PS",
    },
    {
      name: "Martin Kovář",
      role: "Jednatel, Pilsen s.r.o.",
      text: "Pro naši firmu připravili nabídku na 3 odběrná místa. Ušetřili jsme nejen na ceně energie, ale hlavně čas. Profesionální přístup.",
      stars: 5,
      avatar: "MK",
    },
  ];

  const stats = [
    { value: "23 000+", label: "Spokojených klientů" },
    { value: "15 let", label: "Zkušeností na trhu" },
    { value: "30 %", label: "Průměrná úspora" },
    { value: "24 hod", label: "Do připravené nabídky" },
  ];

  return (
    <section className="py-20 bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-8 bg-[#111928] rounded-2xl">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white mb-1" style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-white/60" style={{ fontSize: "14px" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <span
            className="inline-block bg-[#FEF2F2] text-[#E30A1A] rounded-full px-3 py-1 mb-4"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            Reference klientů
          </span>
          <h2
            className="text-[#111928] mb-3"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Co říkají naši klienti
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto" style={{ fontSize: "17px" }}>
            Přes 23 000 domácností a firem nám důvěřuje se svými energiemi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-[#F9FAFB] rounded-2xl p-6 border border-gray-100">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" className="text-[#F59E0B]" />
                ))}
              </div>

              <p className="text-[#374151] mb-5 leading-relaxed" style={{ fontSize: "15px" }}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-[#E30A1A] rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ fontSize: "13px", fontWeight: 700 }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#111928]" style={{ fontSize: "14px", fontWeight: 600 }}>{t.name}</p>
                  <p className="text-[#6B7280]" style={{ fontSize: "12px" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="mt-12 text-center">
          <p className="text-[#9CA3AF] mb-6" style={{ fontSize: "13px" }}>
            Spolupracujeme s předními dodavateli energií
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["ČEZ", "E.ON", "PRE", "Innogy", "EP Energy", "Centropol", "MND"].map((logo) => (
              <span
                key={logo}
                className="text-[#374151]"
                style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "0.08em" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
