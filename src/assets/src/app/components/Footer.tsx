import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontakt" className="bg-[#111928] text-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-white" style={{ fontSize: "20px", fontWeight: 700 }}>DOMIDOMI</span>
              <span className="text-[#E30A1A] ml-1" style={{ fontSize: "20px", fontWeight: 700 }}>Energie</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-5" style={{ fontSize: "14px" }}>
              Zprostředkovatel výhodných fixovaných cen energií pro domácnosti, podnikatele a firmy.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/60">
                <Mail size={15} className="shrink-0" />
                <a href="mailto:energie@domidomi.cz" className="hover:text-white transition-colors" style={{ fontSize: "14px" }}>
                  energie@domidomi.cz
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <Phone size={15} className="shrink-0" />
                <a href="tel:+420226223819" className="hover:text-white transition-colors" style={{ fontSize: "14px" }}>
                  226 223 819
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={15} className="shrink-0" />
                <span style={{ fontSize: "14px" }}>Kaprova 42/14, Staré Město, 110 00 Praha</span>
              </div>
            </div>
          </div>

          {/* O DOMIDOMI Energie */}
          <div>
            <p className="text-white mb-4" style={{ fontSize: "15px", fontWeight: 600 }}>O DOMIDOMI Energie</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "O nás", href: "#" },
                { label: "Jak to funguje", href: "#jak-to-funguje" },
                { label: "Pro koho jsme", href: "#segmenty" },
                { label: "Výhody", href: "#vyhody" },
                { label: "Reference", href: "#" },
                { label: "Kariéra", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: "14px" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DOMIDOMI Ekosystém */}
          <div>
            <p className="text-white mb-4" style={{ fontSize: "15px", fontWeight: 600 }}>DOMIDOMI ekosystém</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "domidomi.cz", href: "https://domidomi.cz" },
                { label: "Fotovoltaika", href: "#" },
                { label: "Tepelná čerpadla", href: "#" },
                { label: "Rekonstrukce", href: "#" },
                { label: "Dotační poradenství", href: "#" },
                { label: "Financování", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: "14px" }}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Povinné dokumenty */}
          <div>
            <p className="text-white mb-4" style={{ fontSize: "15px", fontWeight: 600 }}>Dokumenty</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "GDPR — Ochrana osobních údajů", href: "/energie/legal/gdpr.pdf" },
                { label: "Etický kodex", href: "/energie/legal/eticky-kodex.pdf" },
                { label: "Informace o zprostředkovateli", href: "/energie/legal/informace-o-zprostredkovateli.pdf" },
                { label: "Reklamační řád", href: "/energie/legal/reklamacni-rad.pdf" },
                { label: "Licence ERU — registr zprostředkovatelů", href: "https://eru.gov.cz/registr-zprostredkovatelu/742644369" },
                { label: "Doklad o licenci ERU", href: "/energie/legal/licence-eru.pdf" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontSize: "14px" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40" style={{ fontSize: "13px" }}>
            © {currentYear} DOMIDOMI Energie, s.r.o. Všechna práva vyhrazena.
          </p>
          <p className="text-white/40" style={{ fontSize: "13px" }}>
            DOMIDOMI Energie je součástí ekosystému{" "}
            <a href="https://domidomi.cz" className="text-white/60 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              domidomi.cz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
