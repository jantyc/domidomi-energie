import { ArrowRight, Zap, Thermometer, Home, PiggyBank, Wrench, CreditCard } from "lucide-react";

export function Ecosystem() {
  const services = [
    {
      icon: <Zap size={22} className="text-[#E30A1A]" />,
      title: "Fotovoltaika",
      desc: "Solární elektrárny na klíč s dotací",
    },
    {
      icon: <Thermometer size={22} className="text-[#E30A1A]" />,
      title: "Tepelná čerpadla",
      desc: "Efektivní vytápění a chlazení s dotací",
    },
    {
      icon: <Home size={22} className="text-[#E30A1A]" />,
      title: "Rekonstrukce",
      desc: "Zateplení, okna, dveře, rekonstrukce",
    },
    {
      icon: <PiggyBank size={22} className="text-[#E30A1A]" />,
      title: "Dotace",
      desc: "Dotační poradenství a administrace",
    },
    {
      icon: <Wrench size={22} className="text-[#E30A1A]" />,
      title: "Servis",
      desc: "Pravidelný servis a záruční opravy",
    },
    {
      icon: <CreditCard size={22} className="text-[#E30A1A]" />,
      title: "Financování",
      desc: "Výhodné financování projektů",
    },
  ];

  return (
    <section id="ekosystem" className="py-20 bg-[#F9FAFB]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block bg-[#FEF2F2] text-[#E30A1A] rounded-full px-3 py-1 mb-4"
              style={{ fontSize: "13px", fontWeight: 600 }}
            >
              DOMIDOMI ekosystém
            </span>
            <h2
              className="text-[#111928] mb-4"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Partner pro bezstarostnou domácnost
            </h2>
            <p className="text-[#6B7280] mb-8 leading-relaxed" style={{ fontSize: "17px" }}>
              DOMIDOMI propojuje služby, které vám pomohou vytvořit moderní a udržitelnou domácnost. Energie jsou jen začátek — my jdeme dál.
            </p>

            <a
              href="https://domidomi.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111928] hover:bg-[#1f2937] text-white rounded-xl px-6 py-3 transition-colors"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              Prozkoumat domidomi.cz
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="bg-[#FEF2F2] w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                  {s.icon}
                </div>
                <p className="text-[#111928] mb-1" style={{ fontSize: "15px", fontWeight: 600 }}>{s.title}</p>
                <p className="text-[#6B7280]" style={{ fontSize: "13px" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
