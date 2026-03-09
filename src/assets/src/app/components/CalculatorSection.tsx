import { Calculator } from "./Calculator";

export function CalculatorSection() {
  return (
    <section
      id="kalkulacka"
      className="py-20 relative overflow-hidden"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        backgroundColor: "#111928",
      }}
    >
      {/* Background photo – very subtle */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1635258512486-f9e102e74248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBjaXR5JTIwbmlnaHQlMjBlbGVjdHJpY2l0eSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzI2MzY0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080')",
          opacity: 0.18,
        }}
      />
      {/* Dark overlay to keep legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111928]/80 via-[#111928]/60 to-[#111928]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <span
            className="inline-block bg-[#E30A1A]/20 text-[#E30A1A] rounded-full px-3 py-1 mb-4"
            style={{ fontSize: "13px", fontWeight: 600 }}
          >
            Kalkulačka energií
          </span>
          <h2
            className="text-white mb-3"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, lineHeight: 1.2 }}
          >
            Získejte nabídku na míru do 2 minut
          </h2>
          <p className="text-white/60 max-w-xl mx-auto" style={{ fontSize: "17px" }}>
            Zjistěte, kolik můžete ušetřit. Zdarma a bez závazků.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          <Calculator />
        </div>
      </div>
    </section>
  );
}