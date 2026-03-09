import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenCalculator: () => void;
}

export function Header({ onOpenCalculator }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Jak to funguje", href: "#jak-to-funguje" },
    { label: "Pro koho", href: "#segmenty" },
    { label: "Výhody", href: "#vyhody" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="flex items-center">
            <span
              className="text-[#111928] tracking-tight"
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "20px" }}
            >
              DOMIDOMI
            </span>
            <span
              className="ml-1"
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: "20px", color: "#E30A1A" }}
            >
              Energie
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#374151] hover:text-[#E30A1A] transition-colors"
              style={{ fontSize: "15px" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={onOpenCalculator}
            className="flex items-center gap-2 bg-[#E30A1A] hover:bg-[#c00817] text-white rounded-full px-6 py-2.5 transition-colors shadow-sm"
            style={{ fontSize: "15px", fontWeight: 600 }}
          >
            Získat nabídku
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#111928]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#374151] hover:text-[#E30A1A] transition-colors"
              style={{ fontSize: "16px" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onOpenCalculator(); }}
            className="flex items-center justify-center gap-2 bg-[#E30A1A] hover:bg-[#c00817] text-white rounded-full px-6 py-3 transition-colors"
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            Získat nabídku
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
