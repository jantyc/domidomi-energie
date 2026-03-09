import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

interface StickyBarProps {
  onOpenCalculator: () => void;
}

export function StickyBar({ onOpenCalculator }: StickyBarProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <>
      {/* Desktop sticky bar */}
      <div
        className="hidden md:flex fixed bottom-0 left-0 right-0 z-40 items-center justify-between bg-[#111928]/95 backdrop-blur-md border-t border-white/10 px-6 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-white" style={{ fontSize: "15px", fontWeight: 600 }}>
            Fixované ceny energií bez starostí
          </span>
          <span className="text-white/50 hidden lg:inline" style={{ fontSize: "13px" }}>
            Zdarma a nezávazně • Ozveme se do 24 hodin
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-2 bg-[#E30A1A] hover:bg-[#c00817] text-white rounded-full px-5 py-2 transition-colors"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            Získat nabídku
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-white/40 hover:text-white/70 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Mobile sticky bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#111928]/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        <button
          onClick={onOpenCalculator}
          className="w-full flex items-center justify-center gap-2 bg-[#E30A1A] hover:bg-[#c00817] text-white rounded-xl py-3.5 transition-colors"
          style={{ fontSize: "16px", fontWeight: 700 }}
        >
          Získat nabídku zdarma
          <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}
