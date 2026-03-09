import { CheckCircle2, TrendingDown, FileCheck, HeadphonesIcon, Users } from "lucide-react";

export function ValueProposition() {
  const bullets = [
    {
      icon: <TrendingDown size={20} className="text-[#E30A1A]" />,
      title: "Výhodné fixované ceny",
      desc: "Zajistíme vám ceny, které vás ochrání před výkyvy trhu",
    },
    {
      icon: <CheckCircle2 size={20} className="text-[#E30A1A]" />,
      title: "Spolupráce s ověřenými dodavateli",
      desc: "Všichni naši partneři prošli důkladným prověřením",
    },
    {
      icon: <FileCheck size={20} className="text-[#E30A1A]" />,
      title: "Přehledné nabídky",
      desc: "Srozumitelně vám vysvětlíme každou nabídku bez zbytečného žargonu",
    },
    {
      icon: <HeadphonesIcon size={20} className="text-[#E30A1A]" />,
      title: "Odborné poradenství",
      desc: "Naši specialisté vám poradí s výběrem nejvhodnějšího tarifu",
    },
    {
      icon: <Users size={20} className="text-[#E30A1A]" />,
      title: "Minimum administrativy",
      desc: "Vyřídíme veškerou administrativu za vás — od A do Z",
    },
  ];

  return (
    <section id="vyhody" className="py-20 bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span
              className="inline-block bg-[#FEF2F2] text-[#E30A1A] rounded-full px-3 py-1 mb-4"
              style={{ fontSize: "13px", fontWeight: 600 }}
            >
              Proč DOMIDOMI Energie
            </span>
            <h2
              className="text-[#111928] mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Výhodné energie bez složitého hledání
            </h2>
            <p className="text-[#6B7280] mb-8 leading-relaxed" style={{ fontSize: "17px" }}>
              Trh s energiemi je nepřehledný. My pro vás vyjednáme výhodné podmínky a pomůžeme vám vybrat nabídku, která dává smysl.
            </p>

            <div className="flex flex-col gap-4">
              {bullets.map((b) => (
                <div key={b.title} className="flex gap-3 items-start">
                  <div className="shrink-0 mt-0.5 bg-[#FEF2F2] rounded-lg p-1.5">{b.icon}</div>
                  <div>
                    <p className="text-[#111928] mb-0.5" style={{ fontSize: "15px", fontWeight: 600 }}>{b.title}</p>
                    <p className="text-[#6B7280]" style={{ fontSize: "14px" }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1720351320133-a9bb8fd0b500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2l0eSUyMHBvd2VyJTIwZ3JpZCUyMGVuZXJneSUyMHRyYW5zbWlzc2lvbnxlbnwxfHx8fDE3NzI2MzU3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Electricity power grid and energy transmission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111928]/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-5 border border-gray-100">
              <div className="text-[#E30A1A] mb-1" style={{ fontSize: "28px", fontWeight: 700 }}>
                Až 30 %
              </div>
              <div className="text-[#374151]" style={{ fontSize: "14px" }}>úspora oproti</div>
              <div className="text-[#374151]" style={{ fontSize: "14px" }}>spotové ceně</div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#E30A1A] text-white rounded-2xl shadow-lg p-4">
              <div style={{ fontSize: "13px", fontWeight: 600 }}>Bez závazků</div>
              <div style={{ fontSize: "11px" }}>Nabídka zdarma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}