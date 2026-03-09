import { useState } from "react";

type ContactFormProps = {
  onSuccess: () => void;
};

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Vyplňte prosím všechna povinná pole.");
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      setError("Zadejte platnou e‑mailovou adresu.");
      return;
    }

    // ZATÍM: žádné volání API, jen simulace odeslání a přepnutí na děkovací stav
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccess();
    }, 500);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Jméno*</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vaše jméno"
        />
      </div>
      <div className="field">
        <label htmlFor="email">E‑mail*</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vas@email.cz"
        />
      </div>
      <div className="field">
        <label htmlFor="message">Zpráva*</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Jak vám můžeme pomoci?"
          rows={4}
        />
      </div>
      {error && <p className="error-text">{error}</p>}
      <button className="primary-button" type="submit" disabled={submitting}>
        {submitting ? "Odesílám…" : "Odeslat"}
      </button>
    </form>
  );
}
