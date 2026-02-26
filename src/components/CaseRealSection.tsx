import iconGraph from "@/assets/icon-graph.png";
import iconLanding from "@/assets/icon-landing.png";
import iconLine from "@/assets/icon-line.png";
import caseCollage from "@/assets/case-real-collage.png";

const problems = [
{ icon: iconGraph, text: "Tráfego pulverizado e criativos sem hipótese clara." },
{ icon: iconLanding, text: "Página com boa proposta, mas sem prova estruturada." },
{ icon: iconLine, text: "WhatsApp ativo, porém sem estratégia de comunicação por etapa de compra." }];


const CaseRealSection = () => {
  return (
    <section className="bg-surface-dark py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-bold tracking-widest uppercase">
            <span className="text-gradient-green text-lg">PROBLEMAS ENCONTRADOS:</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-dark leading-tight">
            Um e-commerce promissor, faturando{" "}
            <span className="text-gradient-green">menos de R$20 mil/mês</span>
          </h2>

          <div className="flex flex-col gap-5 mt-4">
            {problems.map((item, i) =>
            <div key={i} className="flex items-center gap-4">
                <img src={item.icon} alt="" className="w-12 h-12 flex-shrink-0" />
                <h3 className="text-on-dark text-base md:text-lg font-medium">{item.text}</h3>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <img
              src={caseCollage}
              alt="Case real Auravie - WhatsApp, anúncios e página de produto"
              className="w-full h-auto object-contain"
              loading="lazy" />

          </div>
        </div>
      </div>
    </section>);

};

export default CaseRealSection;