import { useState } from "react";

const ContactFormSection = () => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", site: "", instagram: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Me chamo ${form.nome}. Meu site: ${form.site}. Instagram: ${form.instagram}`;
    const phone = "5500000000000";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="form" className="bg-surface-dark py-20 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-8">
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-extrabold text-on-dark">
            Vamos escalar seus resultados?
          </h2>
          <p className="text-on-dark-muted text-sm">
            Marque uma conversa gratuita com o nosso especialista preenchendo seus dados abaixo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {[
            { key: "nome", label: "Nome", type: "text" },
            { key: "whatsapp", label: "Whatsapp", type: "tel" },
            { key: "site", label: "Site", type: "url" },
            { key: "instagram", label: "Instagram", type: "text" },
          ].map((field) => (
            <div key={field.key} className="flex flex-col gap-1">
              <label className="text-on-dark text-sm font-medium">{field.label}</label>
              <input
                type={field.type}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm((f) => ({ ...f, [field.key]: e.target.value }))}
                className="bg-surface-dark-card text-on-dark border border-green-accent/20 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
                required={field.key === "nome" || field.key === "whatsapp"}
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-cta-green shadow-green-glow text-primary-foreground font-bold text-base px-8 py-4 rounded-full hover:scale-105 transition-transform mt-2"
          >
            Quero participar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
