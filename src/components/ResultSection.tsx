import { useEffect, useRef } from "react";

const ResultSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const command = entry.isIntersecting ? "playVideo" : "pauseVideo";
        iframe.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: command, args: [] }),
          "*"
        );
      },
      { threshold: 0.5 }
    );

    observer.observe(iframe);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface-dark py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <p className="font-bold tracking-widest uppercase text-on-dark-muted text-lg text-primary">RESULTADO:</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-dark leading-tight">
            <span className="text-gradient-green">Superamos R$100 mil/mês</span>{" "}
            com estabilidade operacional e previsibilidade de mídia.
          </h2>

          <button
            onClick={scrollToForm}
            className="bg-cta-green shadow-green-glow text-primary-foreground font-bold text-base px-8 py-4 rounded-full w-fit hover:scale-105 transition-transform">
            Quero bater R$100k mensal
          </button>
        </div>

        <div className="flex justify-center">
          <div className="bg-surface-dark-card rounded-2xl overflow-hidden w-full max-w-xs aspect-[9/16] border border-green-accent/20">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/H1-7HEscc9w?enablejsapi=1"
              title="Depoimento"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;