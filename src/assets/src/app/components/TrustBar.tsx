import { ShieldCheck, Clock, Gift } from "lucide-react";

const usp = [
  {
    icon: ShieldCheck,
    accent: "#E30A1A",
    bg: "rgba(227,10,26,0.07)",
    title: "Ověření dodavatelé",
    desc: "Spolupracujeme pouze s prověřenými energetickými společnostmi na trhu",
  },
  {
    icon: Clock,
    accent: "#0066CC",
    bg: "rgba(0,102,204,0.07)",
    title: "Nabídka do 24 hodin",
    desc: "Ozveme se vám nejpozději do jednoho pracovního dne s konkrétní nabídkou",
  },
  {
    icon: Gift,
    accent: "#16A34A",
    bg: "rgba(22,163,74,0.07)",
    title: "Zdarma a nezávazně",
    desc: "Příprava nabídky je pro vás zcela zdarma bez jakýchkoli závazků",
  },
];

const partners = [
  { name: "ČEZ", color: "#E30A1A" },
  { name: "E.ON", color: "#E30A1A" },
  { name: "PRE", color: "#0066CC" },
  { name: "Innogy", color: "#E30A1A" },
  { name: "EP Energy", color: "#F59E0B" },
  { name: "Centropol", color: "#374151" },
];

export function TrustBar() {
  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }}>

      {/* ── 1. USP SEKCE ── */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <span
              className="inline-block px-3 py-1 rounded-full bg-[#FEF2F2] text-[#E30A1A] mb-3"
              style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Proč DOMIDOMI Energie
            </span>
            <h2 className="text-[#111928]" style={{ fontSize: "22px", fontWeight: 700 }}>
              Tři důvody, proč se na nás spoléhá přes 12 000 domácností
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {usp.map(({ icon: Icon, accent, bg, title, desc }) => (
              <div
                key={title}
                className="relative rounded-2xl p-6 border border-gray-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-200"
                style={{ background: "#fff", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="absolute top-0 right-0 w-28 h-28 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"
                  style={{ background: bg }}
                />
                <div
                  className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: bg }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <p className="relative z-10 text-[#111928] mb-2" style={{ fontSize: "16px", fontWeight: 700 }}>
                  {title}
                </p>
                <p className="relative z-10 text-[#6B7280]" style={{ fontSize: "13px", lineHeight: 1.6 }}>
                  {desc}
                </p>
                <div
                  className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${accent}55, ${accent}00)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. PARTNEŘI ── */}
      <section className="bg-[#F9FAFB] border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="shrink-0 text-center md:text-left">
              <p className="text-[#111928]" style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Naši partneři
              </p>
              <p className="text-[#6B7280] mt-0.5" style={{ fontSize: "12px" }}>
                Porovnáváme nabídky od těchto dodavatelů
              </p>
            </div>

            <div className="hidden md:block w-px h-10 bg-gray-200" />

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-4 flex-1">
              {partners.map(({ name, color }) => (
                <div key={name} className="flex items-center gap-1.5 group">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: color, opacity: 0.7 }}
                  />
                  <span
                    className="transition-colors duration-150 group-hover:text-[#111928]"
                    style={{ fontSize: "14px", fontWeight: 700, color: "#374151", letterSpacing: "0.04em" }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <div className="shrink-0">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(22,163,74,0.1)",
                  color: "#16A34A",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                Průběžně rozšiřujeme
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
