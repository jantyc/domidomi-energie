import { ArrowRight, Clock, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenCalculator: () => void;
}

export function FinalCTA({ onOpenCalculator }: FinalCTAProps) {
  return (
    <section className="py-20 bg-[#E30A1A] relative overflow-hidden" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
        <span
          className="inline-block bg-white/20 text-white rounded-full px-3 py-1 mb-6"
          style={{ fontSize: "13px", fontWeight: 600 }}
        >
          Neztrácejte čas
        </span>
        <h2
          className="text-white mb-4"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15 }}
        >
          Zjistěte, kolik můžete ušetřit na energiích
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto" style={{ fontSize: "18px" }}>
          Připravíme vám nabídku na míru zcela zdarma. Bez závazků, bez zbytečné administrativy.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-2.5 bg-white hover:bg-gray-50 text-[#E30A1A] rounded-full px-8 py-4 transition-colors shadow-lg"
            style={{ fontSize: "17px", fontWeight: 700 }}
          >
            Získat nabídku zdarma
            <span className="bg-[#E30A1A] rounded-full p-1 flex items-center justify-center">
              <ArrowRight size={16} className="text-white" />
            </span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-white/80">
            <Clock size={16} />
            <span style={{ fontSize: "14px" }}>Zabere to 2 min</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <ShieldCheck size={16} />
            <span style={{ fontSize: "14px" }}>Bez spamu</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: "14px" }}>Ozveme se do 24 hodin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
