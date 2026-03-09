import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import imgHeroBg from "figma:asset/14f5828638d41ddac80427dcec1ecfa442a5533b.png";

interface HeroProps {
  onOpenCalculator: () => void;
}

export function Hero({ onOpenCalculator }: HeroProps) {
  const [segment, setSegment] = useState<"FO" | "FOP" | "PO">("FO");
  const [energy, setEnergy] = useState<"elektrina" | "plyn" | "oboji" | null>(null);
  const [psc, setPsc] = useState("");
  const [noConsumption, setNoConsumption] = useState(false);
  const [consumption, setConsumption] = useState("");

  const segmentLabels: Record<string, string> = {
    FO: "Domácnosti",
    FOP: "Podnikatelé",
    PO: "Firmy",
  };

  const segmentSubtitles: Record<string, string> = {
    FO: "Pro byty a rodinné domy",
    FOP: "Pro živnostníky a OSVČ",
    PO: "Individuální nabídky pro společnosti",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenCalculator();
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={imgHeroBg}
          alt="Moderní dům"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(255deg, rgba(17,25,40,0) 30%, rgba(17,25,40,0.95) 80%)" }} />
        <div className="absolute inset-0 bg-[#111928]/50" />
      </div>

      {/* Floating labels on image */}
      <div className="absolute top-[38%] right-[22%] hidden lg:flex items-center gap-2 backdrop-blur-md bg-black/44 rounded-full px-3 py-2 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F7D52C] shrink-0" />
        <span className="text-white text-sm">Fotovoltaika</span>
      </div>
      <div className="absolute top-[52%] right-[32%] hidden lg:flex items-center gap-2 backdrop-blur-md bg-black/44 rounded-full px-3 py-2 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F7D52C] shrink-0" />
        <span className="text-white text-sm">Tepelná čerpadla</span>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline */}
          <div className="flex flex-col gap-6">
            {/* Segment tabs */}
            

            <div>
              <h1
                className="text-white leading-tight mb-3"
                style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, letterSpacing: "-0.5px", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
              >
                Fixované ceny energií bez starostí
              </h1>
              <p className="text-white/85 leading-relaxed" style={{ fontSize: "18px" }}>
                Pomůžeme vám získat výhodnou fixaci elektřiny nebo plynu. Jednoduše, přehledně a bez zbytečné administrativy.
              </p>
              <p className="text-white/60 mt-1" style={{ fontSize: "14px" }}>
                {segmentSubtitles[segment]}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenCalculator}
                className="flex items-center gap-2.5 bg-[#E30A1A] hover:bg-[#c00817] text-white rounded-full px-7 py-3.5 transition-colors shadow-lg"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                Získat nabídku
                <span className="bg-white rounded-full p-1 flex items-center justify-center">
                  <ArrowRight size={16} className="text-[#111928]" />
                </span>
              </button>
              <a
                href="#jak-to-funguje"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full px-7 py-3.5 transition-colors"
                style={{ fontSize: "16px" }}
              >
                Jak to funguje
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              {["Zdarma a nezávazně", "Nabídka do 24 hodin", "Ověření partneři"].map((pill) => (
                <span
                  key={pill}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-3 py-1"
                  style={{ fontSize: "13px" }}
                >
                  ✓ {pill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-3 mt-2">
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                <div className="text-white flex items-center gap-2" style={{ fontSize: "24px", fontWeight: 700 }}>
                  23 000+
                </div>
                <div className="text-white/70" style={{ fontSize: "13px" }}>Spokojených klientů</div>
              </div>
              <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-lg px-4 py-3">
                <div className="text-white" style={{ fontSize: "24px", fontWeight: 700 }}>15 let</div>
                <div className="text-white/70" style={{ fontSize: "13px" }}>na českém trhu</div>
              </div>
            </div>
          </div>

          {/* Right: mini calculator card */}
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 md:p-8">
            <div className="mb-5">
              <h2 className="text-[#111928] mb-1" style={{ fontSize: "20px", fontWeight: 700 }}>
                Zjistěte svou nabídku
              </h2>
              <p className="text-[#6B7280]" style={{ fontSize: "14px" }}>Zabere to ~2 min. Zdarma a nezávazně.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Segment */}
              <div>
                <label className="block text-[#374151] mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Typ zákazníka
                </label>
                <div className="flex gap-2">
                  {(["FO", "FOP", "PO"] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSegment(s)}
                      className={`flex-1 py-2 rounded-lg border text-sm transition-all ${
                        segment === s
                          ? "bg-[#E30A1A] border-[#E30A1A] text-white"
                          : "border-gray-200 text-[#374151] hover:border-[#E30A1A]"
                      }`}
                      style={{ fontWeight: 500 }}
                    >
                      <span className="hidden sm:inline">{segmentLabels[s]}</span>
                      <span className="sm:hidden">{s}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Energy type */}
              <div>
                <label className="block text-[#374151] mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Co chcete zafixovat?
                </label>
                <div className="flex gap-2">
                  {[
                    { value: "elektrina", label: "⚡ Elektřina" },
                    { value: "plyn", label: "🔥 Plyn" },
                    { value: "oboji", label: "🏠 Obojí" },
                  ].map((e) => (
                    <button
                      key={e.value}
                      type="button"
                      onClick={() => setEnergy(e.value as typeof energy)}
                      className={`flex-1 py-2 rounded-lg border text-sm transition-all ${
                        energy === e.value
                          ? "bg-[#E30A1A] border-[#E30A1A] text-white"
                          : "border-gray-200 text-[#374151] hover:border-[#E30A1A]"
                      }`}
                      style={{ fontWeight: 500 }}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* PSC */}
              <div>
                <label className="block text-[#374151] mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                  PSČ
                </label>
                <input
                  type="text"
                  value={psc}
                  onChange={(e) => setPsc(e.target.value)}
                  placeholder="např. 110 00"
                  maxLength={6}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111928] focus:outline-none focus:border-[#E30A1A] focus:ring-2 focus:ring-[#E30A1A]/20 transition-all"
                  style={{ fontSize: "15px" }}
                />
              </div>

              {/* Consumption */}
              <div>
                <label className="block text-[#374151] mb-2" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Roční spotřeba (kWh)
                  <span className="text-[#9CA3AF] ml-1" style={{ fontWeight: 400 }}>(nepovinné)</span>
                </label>
                {!noConsumption ? (
                  <input
                    type="number"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    placeholder="např. 4500"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#111928] focus:outline-none focus:border-[#E30A1A] focus:ring-2 focus:ring-[#E30A1A]/20 transition-all"
                    style={{ fontSize: "15px" }}
                  />
                ) : (
                  <div className="border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 text-[#6B7280]" style={{ fontSize: "14px" }}>
                    Bez spotřeby — připravíme orientační nabídku
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setNoConsumption(!noConsumption)}
                  className="mt-1.5 text-[#E30A1A] hover:underline"
                  style={{ fontSize: "13px" }}
                >
                  {noConsumption ? "Zadat spotřebu" : "Nevím spotřebu"}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E30A1A] hover:bg-[#c00817] text-white rounded-xl py-4 flex items-center justify-center gap-2 transition-colors shadow-sm mt-1"
                style={{ fontSize: "16px", fontWeight: 700 }}
              >
                Zjistit nabídku
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-[#9CA3AF]" style={{ fontSize: "12px" }}>
                🔒 Bez spamu. Ozveme se do 24 hodin.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 z-10">
        <span style={{ fontSize: "12px" }}>Pokračovat dolů</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}
