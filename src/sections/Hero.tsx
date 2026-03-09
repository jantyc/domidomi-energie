import { useInView } from "../useInView";

export function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`hero-section ${inView ? "hero-visible" : "hero-hidden"}`}
    >
      <div className="hero-content">
        <h1>Domidomi Energie</h1>
        <p>Moderní energie pro váš domov – rychle, přehledně a férově.</p>
        <a href="#contact" className="primary-button">
          Poptat nabídku
        </a>
      </div>
    </section>
  );
}
