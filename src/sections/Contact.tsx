import { ContactForm } from "../components/ContactForm";
import { useInView } from "../useInView";

type ContactProps = {
  showThankYou: boolean;
  onThankYou: () => void;
};

export function Contact({ showThankYou, onThankYou }: ContactProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section ${
        inView ? "contact-visible" : "contact-hidden"
      }`}
    >
      {!showThankYou ? (
        <>
          <h2>Kontaktujte nás</h2>
          <p>Nechte nám na sebe kontakt a my se vám ozveme.</p>
          <ContactForm onSuccess={onThankYou} />
        </>
      ) : (
        <div className="thank-you-box">
          <h2>Děkujeme!</h2>
          <p>Vaše zpráva byla úspěšně odeslána (zatím jen lokálně).</p>
        </div>
      )}
    </section>
  );
}
