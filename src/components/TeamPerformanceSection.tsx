import iconRequirement from "@/assets/icon-requirement.png";
import iconPipeline from "@/assets/icon-pipeline.png";
import iconMetrics from "@/assets/icon-metrics.png";

const solutions = [
{ icon: iconRequirement, text: "Planejamento por hipóteses (PDCA)" },
{ icon: iconPipeline, text: "Estrutura de campanhas por intenção de compra" },
{ icon: iconMetrics, text: "Análise de métricas eliminando gargalos" }];


const TeamPerformanceSection = () => {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-surface-dark-secondary py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-dark leading-tight">
            Entramos com <span className="text-gradient-green">nosso time de performance e...</span>
          </h2>

          <div className="flex flex-col gap-5 mt-4">
            {solutions.map((item, i) =>
            <div key={i} className="flex items-center gap-4">
                <img src={item.icon} alt="" className="w-10 h-10 flex-shrink-0" />
                <h3 className="text-on-dark text-base md:text-lg font-medium">{item.text}</h3>
              </div>
            )}
          </div>

          <button
            onClick={scrollToForm}
            className="bg-cta-green shadow-green-glow text-primary-foreground font-bold text-base px-8 py-4 rounded-full w-fit hover:scale-105 transition-transform mt-4">

            Quero essa transformação também!
          </button>
        </div>

        <div className="flex justify-center">
          <div className="bg-surface-dark-card rounded-2xl overflow-hidden w-full max-w-md aspect-video flex items-center justify-center border border-green-accent/20">
            <video
              src="https://create.ssagencia.com.br/wp-content/uploads/2025/12/Screen-Recording-2025-12-03-at-1.40.40-PM.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover" />

          </div>
        </div>
      </div>
    </section>);

};

export default TeamPerformanceSection;