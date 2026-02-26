import c1 from "@/assets/clients/1.png";
import c2 from "@/assets/clients/2.png";
import c3 from "@/assets/clients/3.png";
import c4 from "@/assets/clients/4.png";
import c5 from "@/assets/clients/5.png";
import c6 from "@/assets/clients/6.png";
import c7 from "@/assets/clients/7.png";
import c9 from "@/assets/clients/9.png";
import c11 from "@/assets/clients/11.png";
import c13 from "@/assets/clients/13.png";
import c14 from "@/assets/clients/14.png";
import c15 from "@/assets/clients/15.png";
import c16 from "@/assets/clients/16.png";
import c18 from "@/assets/clients/18.png";

const clients = [c1, c2, c3, c4, c5, c6, c7, c9, c11, c13, c14, c15, c16, c18];

const ClientsCarousel = () => {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center">
          Clientes que trabalhamos
        </h2>
        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll-left" style={{ width: `${clients.length * 2 * 140}px` }}>
            {[...clients, ...clients].map((src, i) => (
              <div key={i} className="flex-shrink-0 w-[120px] mx-[10px]">
                <img
                  src={src}
                  alt={`Cliente ${(i % clients.length) + 1}`}
                  className="w-full rounded-lg"
                  loading="lazy"
                  width={120}
                  height={120}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
