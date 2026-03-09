import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "Jak funguje fixace energií?",
      a: "Fixace energií znamená, že si sjednáte smlouvu s dodavatelem za pevnou cenu na určité období (typicky 1–3 roky). Díky tomu víte dopředu, kolik zaplatíte za kWh elektřiny nebo m³ plynu, bez ohledu na výkyvy trhu. My vám pomůžeme najít nejvýhodnější podmínky od ověřených dodavatelů.",
    },
    {
      q: "Kolik mě služba stojí?",
      a: "Naše zprostředkovatelská služba je pro vás zcela zdarma. Jsme odměňováni provizí od dodavatelů energie, takže vám nenabídneme nic, co by nebylo ve vašem zájmu.",
    },
    {
      q: "Jak rychle dostanu nabídku?",
      a: "Po vyplnění formuláře se vám náš specialista ozve do 24 hodin v pracovní dny. Celý proces od poptávky po podpis smlouvy obvykle trvá 2–5 pracovních dní.",
    },
    {
      q: "S jakými dodavateli spolupracujete?",
      a: "Spolupracujeme s předními energetickými společnostmi na českém trhu — ČEZ, E.ON, PRE, Innogy, EP Energy, Centropol, MND a dalšími. Všichni naši partneři prošli důkladným prověřením.",
    },
    {
      q: "Mohu zrušit stávající smlouvu s dodavatelem?",
      a: "Ano, pomůžeme vám i s přechodem od stávajícího dodavatele. Změna dodavatele je obvykle bezplatná a my za vás vyřídíme veškerou administrativu.",
    },
    {
      q: "Je to vhodné i pro firmy?",
      a: "Absolutně. Nabízíme řešení pro fyzické osoby, OSVČ i právnické osoby. Pro firmy připravujeme individuální nabídky, které berou v úvahu jejich specifické odběrové profily.",
    },
    {
      q: "Co je DOMIDOMI a jaký má vztah k DOMIDOMI Energie?",
      a: "DOMIDOMI je partner pro bezstarostnou domácnost — marketplace řešení pro udržitelné bydlení (fotovoltaika, tepelná čerpadla, zateplení a další). DOMIDOMI Energie je specializovaná odnož zaměřená na zprostředkování výhodných energetických fixací.",
    },
    {
      q: "Jak chráníte moje osobní údaje?",
      a: "Vaše osobní údaje zpracováváme v souladu s GDPR. Používáme je výhradně pro přípravu nabídky a kontaktování. Svůj souhlas můžete kdykoli odvolat. Více informací najdete v našich zásadách ochrany osobních údajů.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#F9FAFB]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block bg-[#FEF2F2] text-[#E30A1A] rounded-full px-3 py-1 mb-4"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            Časté dotazy
          </span>
          <h2
            className="text-[#111928] mb-3"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Odpovědi na vaše otázky
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-[#111928] pr-4"
                  style={{ fontSize: "16px", fontWeight: 600 }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#E30A1A] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#6B7280] leading-relaxed" style={{ fontSize: "15px" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
