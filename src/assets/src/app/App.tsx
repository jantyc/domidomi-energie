import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ValueProposition } from "./components/ValueProposition";
import { HowItWorks } from "./components/HowItWorks";
import { Segments } from "./components/Segments";
import { CalculatorSection } from "./components/CalculatorSection";
import { Ecosystem } from "./components/Ecosystem";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { StickyBar } from "./components/StickyBar";
import { CalculatorModal } from "./components/CalculatorModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openCalculator = () => setModalOpen(true);
  const closeCalculator = () => setModalOpen(false);

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <Header onOpenCalculator={openCalculator} />
      <Hero onOpenCalculator={openCalculator} />
      <TrustBar />
      <ValueProposition />
      <HowItWorks />
      <Segments onOpenCalculator={openCalculator} />
      <CalculatorSection />
      <Ecosystem />
      <Testimonials />
      <FAQ />
      <FinalCTA onOpenCalculator={openCalculator} />
      <div className="pb-16 md:pb-0">
        <Footer />
      </div>
      <StickyBar onOpenCalculator={openCalculator} />
      <CalculatorModal open={modalOpen} onClose={closeCalculator} />
    </div>
  );
}