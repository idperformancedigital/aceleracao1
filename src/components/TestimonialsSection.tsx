import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { text: "Resultado. É o que todo gestor procura, RESULTADOS!", name: "Diego", company: "Onlysurf" },
  { text: "Atendimento próximo, muito pro ativos, preocupação com o cliente e com o crescimento da empresa trazendo soluções e sugestões além do tráfego pago, se envolvendo no 360.", name: "Carol", company: "Greenish" },
  { text: "Crescimento nas vendas, super atenção com o cliente, estratégias.", name: "Ana Carolina", company: "Alma Catarina" },
  { text: "Trabalho desenvolvido e crescimento conjunto.", name: "Vivaldi", company: "Soulsun" },
  { text: "Atendimento excelente e muito conhecimento. Sempre nos trouxeram bons resultados e tudo isso hoje reflete no nosso faturamento. Estamos muito satisfeitos.", name: "Aline", company: "Onlysurf" },
  { text: "Nesse momento a melhora da performance, mas o todo é muito bom: atendimento, prontidão, proatividade. Estou satisfeita.", name: "Carol", company: "Auravie" },
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-surface-dark-secondary py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-on-dark text-center">
          O que dizem nossos clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {visible.map((t, i) => (
            <div key={i} className="bg-surface-dark-card rounded-xl p-6 flex flex-col gap-4 border border-green-accent/10">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-on-dark text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div>
                <p className="text-on-dark font-semibold text-sm">{t.name}</p>
                <p className="text-on-dark-muted text-xs">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="text-on-dark disabled:opacity-30 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i === page ? "bg-primary" : "bg-surface-dark-card"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="text-on-dark disabled:opacity-30 hover:text-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
