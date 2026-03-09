import { useEffect } from "react";
import { X } from "lucide-react";
import { Calculator } from "./Calculator";

interface CalculatorModalProps {
  open: boolean;
  onClose: () => void;
}

export function CalculatorModal({ open, onClose }: CalculatorModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#111928] rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#111928] border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
          <div>
            <p className="text-white" style={{ fontSize: "17px", fontWeight: 700 }}>
              Kalkulačka energií
            </p>
            <p className="text-white/50" style={{ fontSize: "13px" }}>
              Získejte nabídku zdarma
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors p-1"
          >
            <X size={22} />
          </button>
        </div>

        <Calculator isModal onClose={onClose} />
      </div>
    </div>
  );
}
