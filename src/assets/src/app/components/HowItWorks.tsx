import { ClipboardList, FileText, ThumbsUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <ClipboardList size={28} className="text-[#E30A1A]" />,
      title: "Zadáte základní informace",
      desc: "Vyplníte typ odběru, přibližnou spotřebu a PSČ. Zabere to 2 minuty.",
    },
    {
      number: "02",
      icon: <FileText size={28} className="text-[#E30A1A]" />,
      title: "Připravíme nabídku",
      desc: "Naši specialisté porovnají nabídky ověřených dodavatelů a připraví vám nejlepší variantu.",
    },
    {
      number: "03",
      icon: <ThumbsUp size={28} className="text-[#E30A1A]" />,
      title: "Vyberete nejlepší řešení",
      desc: "Srozumitelně vám vše vysvětlíme a vy se svobodně rozhodnete. Bez tlaku, bez závazků.",
    },
  ];

  return (
    <section id="jak-to-funguje" className="py-20 bg-[#F9FAFB]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block bg-[#FEF2F2] text-[#E30A1A] rounded-full px-3 py-1 mb-4"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            Jednoduchý proces
          </span>
          <h2
            className="text-[#111928] mb-3"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Jak to funguje?
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto" style={{ fontSize: "17px" }}>
            Celý proces je navržen tak, aby byl co nejjednodušší a zabral co nejméně vašeho času.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-[#E30A1A]/30 via-[#E30A1A] to-[#E30A1A]/30 hidden md:block" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Number badge */}
              <div
                className="absolute -top-3 -right-3 bg-[#E30A1A] text-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm"
                style={{ fontSize: "13px", fontWeight: 700 }}
              >
                {step.number}
              </div>

              <div className="bg-[#FEF2F2] w-14 h-14 rounded-2xl flex items-center justify-center mb-5">
                {step.icon}
              </div>

              <h3 className="text-[#111928] mb-3" style={{ fontSize: "18px", fontWeight: 700 }}>
                {step.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed" style={{ fontSize: "15px" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
