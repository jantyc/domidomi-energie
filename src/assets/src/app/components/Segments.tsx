import { ArrowRight, Home, Briefcase, Building2 } from "lucide-react";

interface SegmentsProps {
  onOpenCalculator: () => void;
}

export function Segments({ onOpenCalculator }: SegmentsProps) {
  const segments = [
    {
      icon: <Home size={28} className="text-[#E30A1A]" />,
      tag: "FO",
      title: "Domácnosti",
      subtitle: "Fyzické osoby",
      desc: "Fixace energií pro byty a rodinné domy. Ušetřete na elektřině nebo plynu bez složité administrativy.",
      features: ["Elektřina a plyn", "Bez závazků", "Srozumitelné smlouvy"],
      cta: "Pro domácnost",
    },
    {
      icon: <Briefcase size={28} className="text-[#E30A1A]" />,
      tag: "FOP",
      title: "Podnikatelé",
      subtitle: "OSVČ a živnostníci",
      desc: "Výhodné energie pro živnostníky. Fixace cen pro vaše provozovny a kanceláře.",
      features: ["Oddělené měřiče", "Daňový doklad", "Flexibilní smlouvy"],
      cta: "Pro podnikatele",
      highlighted: true,
    },
    {
      icon: <Building2 size={28} className="text-[#E30A1A]" />,
      tag: "PO",
      title: "Firmy",
      subtitle: "Právnické osoby",
      desc: "Individuální nabídky pro společnosti. Vyjednáme podmínky přímo pro váš odběr.",
      features: ["Individuální nabídka", "Key account manager", "Hromadné smlouvy"],
      cta: "Pro firmy",
    },
  ];

  return (
    <section id="segmenty" className="py-20 bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block bg-[#FEF2F2] text-[#E30A1A] rounded-full px-3 py-1 mb-4"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            Pro koho
          </span>
          <h2
            className="text-[#111928] mb-3"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Pro každého ty správné energie
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto" style={{ fontSize: "17px" }}>
            Ať jste domácnost, živnostník nebo firma — máme pro vás řešení na míru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((seg) => (
            <div
              key={seg.tag}
              className={`rounded-2xl p-6 md:p-8 flex flex-col border transition-all hover:shadow-lg ${
                seg.highlighted
                  ? "bg-[#111928] border-[#111928] shadow-xl"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-5">
                <div className={`rounded-xl p-3 ${seg.highlighted ? "bg-white/10" : "bg-[#FEF2F2]"}`}>
                  <div className={seg.highlighted ? "[&>*]:text-[#E30A1A]" : ""}>{seg.icon}</div>
                </div>
                <span
                  className={`rounded-full px-3 py-1 ${
                    seg.highlighted
                      ? "bg-[#E30A1A] text-white"
                      : "bg-[#F3F4F6] text-[#374151]"
                  }`}
                  style={{ fontSize: "12px", fontWeight: 600 }}
                >
                  {seg.tag}
                </span>
              </div>

              <p
                className={`mb-0.5 ${seg.highlighted ? "text-white/60" : "text-[#6B7280]"}`}
                style={{ fontSize: "13px" }}
              >
                {seg.subtitle}
              </p>
              <h3
                className={`mb-3 ${seg.highlighted ? "text-white" : "text-[#111928]"}`}
                style={{ fontSize: "22px", fontWeight: 700 }}
              >
                {seg.title}
              </h3>
              <p
                className={`mb-5 leading-relaxed flex-1 ${seg.highlighted ? "text-white/75" : "text-[#6B7280]"}`}
                style={{ fontSize: "15px" }}
              >
                {seg.desc}
              </p>

              <ul className="flex flex-col gap-2 mb-6">
                {seg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        seg.highlighted ? "bg-[#E30A1A]" : "bg-[#E30A1A]"
                      }`}
                    >
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span
                      className={seg.highlighted ? "text-white/80" : "text-[#374151]"}
                      style={{ fontSize: "14px" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenCalculator}
                className={`flex items-center justify-center gap-2 rounded-xl py-3 transition-colors ${
                  seg.highlighted
                    ? "bg-[#E30A1A] hover:bg-[#c00817] text-white"
                    : "border border-[#E30A1A] text-[#E30A1A] hover:bg-[#FEF2F2]"
                }`}
                style={{ fontSize: "15px", fontWeight: 600 }}
              >
                {seg.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
