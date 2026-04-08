import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ContactFormSection = () => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", site: "", instagram: "" });
  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const currentUrl = window.location.origin + window.location.pathname + window.location.search;
      const { error } = await supabase.from("leads").insert({
        nome: form.nome.trim(),
        whatsapp: form.whatsapp.trim(),
        site: form.site.trim() || null,
        instagram: form.instagram.trim() || null,
        origem: currentUrl,
      } as any);

      if (error) throw error;

      setSubmitted(true);
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("trackCustom", "Lead");
      }
    } catch {
      toast({ title: "Erro ao salvar dados. Tente novamente.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form" className="bg-surface-dark py-20 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-8">
        {submitted ? (
          <div className="text-center flex flex-col gap-4 py-8">
            <div className="text-5xl">✅</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-on-dark">
              Dados enviados com sucesso!
            </h2>
            <p className="text-on-dark-muted text-sm leading-relaxed max-w-md">
              Nosso time irá avaliar se o perfil da sua marca é válido para receber a consultoria gratuita. Entraremos em contato pelo WhatsApp informado.
            </p>
          </div>
        ) : (
          <>
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
                { key: "site", label: "Site", type: "text" },
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
                disabled={loading}
                className="bg-cta-green shadow-green-glow text-primary-foreground font-bold text-base px-8 py-4 rounded-full hover:scale-105 transition-transform mt-2 disabled:opacity-50"
              >
                {loading ? "Enviando..." : "Quero participar"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default ContactFormSection;
