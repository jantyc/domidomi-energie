import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, X, Zap, Flame, Home, Briefcase, Building2 } from "lucide-react";

interface CalculatorProps {
  isModal?: boolean;
  onClose?: () => void;
}

type Segment = "FO" | "FOP" | "PO";
type EnergyType = "elektrina" | "plyn" | "oboji";
type HouseholdSize = "1+0" | "2+1" | "3+1" | "4+1" | "5+";

interface FormData {
  segment: Segment | null;
  energy: EnergyType | null;
  consumption: string;
  noConsumption: boolean;
  householdSize: HouseholdSize | null;
  breaker: string;
  psc: string;
  email: string;
  phone: string;
  gdprConsent: boolean;
}

const TOTAL_STEPS = 5;

export function Calculator({ isModal = false, onClose }: CalculatorProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    segment: null,
    energy: null,
    consumption: "",
    noConsumption: false,
    householdSize: null,
    breaker: "",
    psc: "",
    email: "",
    phone: "",
    gdprConsent: false,
  });

  const progress = (step / TOTAL_STEPS) * 100;

  const canProceed = () => {
    switch (step) {
      case 1: return form.segment !== null;
      case 2: return form.energy !== null;
      case 3: return form.noConsumption || form.consumption !== "" || form.householdSize !== null;
      case 4: return form.psc.length >= 3;
      case 5: return form.email !== "" && form.phone !== "" && form.gdprConsent;
      default: return false;
    }
  };

  const next = () => { if (canProceed() && step < TOTAL_STEPS) setStep(step + 1); };
  const prev = () => { if (step > 1) setStep(step - 1); };
  const handleSubmit = () => { if (canProceed()) setSubmitted(true); };

  const estimatedSaving = form.consumption
    ? Math.round(parseInt(form.consumption) * 0.05)
    : form.householdSize
    ? { "1+0": 2400, "2+1": 4800, "3+1": 6200, "4+1": 8000, "5+": 10000 }[form.householdSize]
    : 5000;

  if (submitted) {
    return (
      <div className={`${isModal ? "" : "bg-[#111928]"}`} style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <div className="max-w-xl mx-auto text-center py-12 px-6">
          {/* Success icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={36} className="text-green-600" />
          </div>
          <h2 className="text-white mb-3" style={{ fontSize: "28px", fontWeight: 700 }}>
            Děkujeme — ozveme se do 24 hodin!
          </h2>
          <p className="text-white/70 mb-8" style={{ fontSize: "16px" }}>
            Vaše poptávka byla přijata. Náš specialista vás brzy kontaktuje s připravenou nabídkou.
          </p>

          {/* What's next */}
          <div className="bg-white/10 rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-white mb-4" style={{ fontSize: "16px", fontWeight: 600 }}>Co bude dál:</h3>
            <div className="flex flex-col gap-4">
              {[
                { n: "1", t: "Přezkoumáme vaši poptávku", d: "Specialista vyhodnotí vaše potřeby" },
                { n: "2", t: "Připravíme nabídky", d: "Porovnáme dostupné tarify od ověřených dodavatelů" },
                { n: "3", t: "Kontaktujeme vás", d: "Zavoláme nebo napíšeme do 24 hodin" },
              ].map((item) => (
                <div key={item.n} className="flex gap-3 items-start">
                  <div className="w-6 h-6 bg-[#E30A1A] text-white rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ fontSize: "12px", fontWeight: 700 }}>
                    {item.n}
                  </div>
                  <div>
                    <p className="text-white" style={{ fontSize: "14px", fontWeight: 600 }}>{item.t}</p>
                    <p className="text-white/60" style={{ fontSize: "13px" }}>{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#ekosystem"
            onClick={onClose}
            className="inline-flex items-center gap-2 border border-white/30 text-white rounded-xl px-6 py-3 hover:bg-white/10 transition-colors"
            style={{ fontSize: "15px" }}
          >
            Prozkoumat ekosystém DOMIDOMI
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isModal ? "" : "bg-[#111928]"}`} style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <div className="max-w-2xl mx-auto py-10 px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-2xl px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#9CA3AF]" style={{ fontSize: "13px" }}>
            Krok {step} z {TOTAL_STEPS}
          </p>
          {isModal && onClose && (
            <button onClick={onClose} className="text-[#9CA3AF] hover:text-[#111928]">
              <X size={20} />
            </button>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-gray-100 rounded-full mb-6">
          <div
            className="h-1.5 bg-[#E30A1A] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[#9CA3AF] mb-2" style={{ fontSize: "12px" }}>Zabere to ~2 min</p>

        {/* Step 1: Segment */}
        {step === 1 && (
          <div>
            <h2 className="text-[#111928] mb-2" style={{ fontSize: "24px", fontWeight: 700 }}>
              Kdo jste?
            </h2>
            <p className="text-[#6B7280] mb-6" style={{ fontSize: "15px" }}>
              Vyberte, pro koho chcete sjednat energii.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: "FO", label: "Domácnost", sublabel: "Fyzická osoba — byt nebo rodinný dům", icon: <Home size={24} /> },
                { value: "FOP", label: "Podnikatel / OSVČ", sublabel: "Živnostník nebo OSVČ", icon: <Briefcase size={24} /> },
                { value: "PO", label: "Firma", sublabel: "Právnická osoba — s.r.o., a.s. aj.", icon: <Building2 size={24} /> },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setForm({ ...form, segment: opt.value as Segment });
                    setTimeout(() => setStep(2), 160);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all active:scale-[0.98] ${
                    form.segment === opt.value
                      ? "border-[#E30A1A] bg-[#E30A1A]/5"
                      : "border-gray-200 bg-gray-50 hover:border-[#E30A1A]/40 hover:bg-[#E30A1A]/[0.02]"
                  }`}
                >
                  <div className={`rounded-xl p-2.5 ${form.segment === opt.value ? "bg-[#E30A1A] text-white" : "bg-gray-100 text-[#6B7280]"}`}>
                    {opt.icon}
                  </div>
                  <div>
                    <p className="text-[#111928]" style={{ fontSize: "16px", fontWeight: 600 }}>{opt.label}</p>
                    <p className="text-[#9CA3AF]" style={{ fontSize: "13px" }}>{opt.sublabel}</p>
                  </div>
                  <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    form.segment === opt.value ? "bg-[#E30A1A] border-[#E30A1A]" : "border-gray-200"
                  }`}>
                    {form.segment === opt.value && <Check size={12} className="text-white" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Energy */}
        {step === 2 && (
          <div>
            <h2 className="text-[#111928] mb-2" style={{ fontSize: "24px", fontWeight: 700 }}>
              Co chcete zafixovat?
            </h2>
            <p className="text-[#6B7280] mb-6" style={{ fontSize: "15px" }}>
              Vyberte druh energie, která vás zajímá.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: "elektrina", label: "Elektřina", sublabel: "Fixace ceny za kWh elektřiny", icon: <Zap size={24} /> },
                { value: "plyn", label: "Plyn", sublabel: "Fixace ceny za m³ zemního plynu", icon: <Flame size={24} /> },
                { value: "oboji", label: "Elektřina i plyn", sublabel: "Kompletní balíček pro domácnost", icon: (
                  <span className="flex">
                    <Zap size={20} />
                    <Flame size={20} />
                  </span>
                ) },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setForm({ ...form, energy: opt.value as EnergyType });
                    setTimeout(() => setStep(3), 160);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all active:scale-[0.98] ${
                    form.energy === opt.value
                      ? "border-[#E30A1A] bg-[#E30A1A]/5"
                      : "border-gray-200 bg-gray-50 hover:border-[#E30A1A]/40 hover:bg-[#E30A1A]/[0.02]"
                  }`}
                >
                  <div className={`rounded-xl p-2.5 ${form.energy === opt.value ? "bg-[#E30A1A] text-white" : "bg-gray-100 text-[#6B7280]"}`}>
                    {opt.icon}
                  </div>
                  <div>
                    <p className="text-[#111928]" style={{ fontSize: "16px", fontWeight: 600 }}>{opt.label}</p>
                    <p className="text-[#9CA3AF]" style={{ fontSize: "13px" }}>{opt.sublabel}</p>
                  </div>
                  <div className={`ml-auto w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    form.energy === opt.value ? "bg-[#E30A1A] border-[#E30A1A]" : "border-gray-200"
                  }`}>
                    {form.energy === opt.value && <Check size={12} className="text-white" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Consumption */}
        {step === 3 && (
          <div>
            <h2 className="text-[#111928] mb-2" style={{ fontSize: "24px", fontWeight: 700 }}>
              Jaká je vaše spotřeba?
            </h2>
            <p className="text-[#6B7280] mb-6" style={{ fontSize: "15px" }}>
              Pomůže nám připravit přesnější nabídku. Hodnoty najdete na vyúčtování.
            </p>

            {!form.noConsumption ? (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[#4B5563] mb-2" style={{ fontSize: "14px" }}>
                    Roční spotřeba (kWh nebo m³)
                  </label>
                  <input
                    type="number"
                    value={form.consumption}
                    onChange={(e) => setForm({ ...form, consumption: e.target.value, householdSize: null })}
                    placeholder="např. 4 500"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#111928] placeholder-gray-300 focus:outline-none focus:border-[#E30A1A] transition-all"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <button
                  onClick={() => setForm({ ...form, noConsumption: true, consumption: "" })}
                  className="text-[#E30A1A] text-left hover:underline"
                  style={{ fontSize: "14px" }}
                >
                  Nevím spotřebu — chci alternativní dotaz
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[#4B5563] mb-3" style={{ fontSize: "14px" }}>
                    Velikost domácnosti
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {(["1+0", "2+1", "3+1", "4+1", "5+"] as HouseholdSize[]).map((size) => (
                      <button
                        key={size}
                        onClick={() => setForm({ ...form, householdSize: size })}
                        className={`py-3 rounded-xl border transition-all ${
                          form.householdSize === size
                            ? "border-[#E30A1A] bg-[#E30A1A] text-white"
                            : "border-gray-200 bg-gray-50 text-[#4B5563] hover:border-gray-400"
                        }`}
                        style={{ fontSize: "14px", fontWeight: 600 }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[#4B5563] mb-2" style={{ fontSize: "14px" }}>
                    Velikost jističe (A)
                  </label>
                  <input
                    type="number"
                    value={form.breaker}
                    onChange={(e) => setForm({ ...form, breaker: e.target.value })}
                    placeholder="např. 25"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#111928] placeholder-gray-300 focus:outline-none focus:border-[#E30A1A] transition-all"
                    style={{ fontSize: "16px" }}
                  />
                </div>
                <button
                  onClick={() => setForm({ ...form, noConsumption: false })}
                  className="text-[#E30A1A] text-left hover:underline"
                  style={{ fontSize: "14px" }}
                >
                  Znám spotřebu — zadat kWh
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 4: PSC + estimated saving */}
        {step === 4 && (
          <div>
            <h2 className="text-[#111928] mb-2" style={{ fontSize: "24px", fontWeight: 700 }}>
              Kde odebíráte energii?
            </h2>
            <p className="text-[#6B7280] mb-6" style={{ fontSize: "15px" }}>
              PSČ potřebujeme pro přiřazení ke správné distribuční oblasti.
            </p>

            {/* Saving estimate motivator */}
            <div className="bg-gradient-to-r from-[#E30A1A]/10 to-[#E30A1A]/5 border border-[#E30A1A]/20 rounded-2xl p-5 mb-6">
              <p className="text-[#E30A1A]" style={{ fontSize: "13px", fontWeight: 600 }}>
                💡 Odhadovaná úspora
              </p>
              <p className="text-[#111928] mt-1" style={{ fontSize: "28px", fontWeight: 700 }}>
                až {estimatedSaving?.toLocaleString("cs-CZ")} Kč / rok
              </p>
              <p className="text-[#9CA3AF] mt-1" style={{ fontSize: "13px" }}>
                Pro přesnou nabídku doplňte zbývající informace.
              </p>
            </div>

            <div>
              <label className="block text-[#4B5563] mb-2" style={{ fontSize: "14px" }}>
                PSČ odběrného místa
              </label>
              <input
                type="text"
                value={form.psc}
                onChange={(e) => setForm({ ...form, psc: e.target.value })}
                placeholder="např. 110 00"
                maxLength={6}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#111928] placeholder-gray-300 focus:outline-none focus:border-[#E30A1A] transition-all"
                style={{ fontSize: "16px" }}
              />
            </div>
          </div>
        )}

        {/* Step 5: Contact */}
        {step === 5 && (
          <div>
            <h2 className="text-[#111928] mb-2" style={{ fontSize: "24px", fontWeight: 700 }}>
              Kam vám nabídku pošleme?
            </h2>
            <p className="text-[#6B7280] mb-6" style={{ fontSize: "15px" }}>
              Ozveme se do 24 hodin. Žádný spam, žádné závazky.
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-[#4B5563] mb-2" style={{ fontSize: "14px" }}>
                  E-mail *
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="vas@email.cz"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#111928] placeholder-gray-300 focus:outline-none focus:border-[#E30A1A] transition-all"
                  style={{ fontSize: "16px" }}
                />
              </div>
              <div>
                <label className="block text-[#4B5563] mb-2" style={{ fontSize: "14px" }}>
                  Telefon *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+420 777 000 000"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#111928] placeholder-gray-300 focus:outline-none focus:border-[#E30A1A] transition-all"
                  style={{ fontSize: "16px" }}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                    form.gdprConsent ? "bg-[#E30A1A] border-[#E30A1A]" : "border-gray-300"
                  }`}
                  onClick={() => setForm({ ...form, gdprConsent: !form.gdprConsent })}
                >
                  {form.gdprConsent && <Check size={12} className="text-white" />}
                </div>
                <span className="text-[#6B7280]" style={{ fontSize: "13px" }}>
                  Souhlasím se{" "}
                  <a href="#gdpr" className="text-[#E30A1A] hover:underline">zpracováním osobních údajů</a>
                  {" "}(GDPR) a zasíláním obchodních sdělení. Svůj souhlas mohu kdykoli odvolat.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 gap-4">
          {/* Back button — always visible from step 2 */}
          {step > 1 ? (
            <button
              onClick={prev}
              className="flex items-center gap-1.5 text-[#6B7280] hover:text-[#111928] transition-colors"
              style={{ fontSize: "15px" }}
            >
              <ArrowLeft size={16} />
              Zpět
            </button>
          ) : (
            <div />
          )}

          {/* Steps 1 & 2: hint instead of button (auto-advance on click) */}
          {(step === 1 || step === 2) && (
            <p className="text-[#D1D5DB] flex items-center gap-1.5" style={{ fontSize: "13px" }}>
              Kliknutím vyberete a přejdete dál
              <ArrowRight size={13} />
            </p>
          )}

          {/* Steps 3 & 4: Continue button */}
          {step >= 3 && step < TOTAL_STEPS && (
            <button
              onClick={next}
              disabled={!canProceed()}
              className={`flex items-center gap-2 rounded-xl px-8 py-3.5 transition-all ${
                canProceed()
                  ? "bg-[#E30A1A] hover:bg-[#c00817] text-white"
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              style={{ fontSize: "16px", fontWeight: 600 }}
            >
              Pokračovat
              <ArrowRight size={16} />
            </button>
          )}

          {/* Step 5: Submit */}
          {step === TOTAL_STEPS && (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className={`flex items-center gap-2 rounded-xl px-8 py-3.5 transition-all ${
                canProceed()
                  ? "bg-[#E30A1A] hover:bg-[#c00817] text-white"
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
              }`}
              style={{ fontSize: "16px", fontWeight: 700 }}
            >
              Nechat si připravit nabídku
              <ArrowRight size={16} />
            </button>
          )}
        </div>

        <p className="text-center text-[#9CA3AF] mt-4" style={{ fontSize: "12px" }}>
          🔒 Zdarma a nezávazně. Bez spamu.
        </p>
        </div>
      </div>
    </div>
  );
}