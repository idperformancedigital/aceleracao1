import screenshot12 from "@/assets/screenshot-12.png";
import screenshot10 from "@/assets/screenshot-10.png";
import screenshot8 from "@/assets/screenshot-8.png";
import screenshot17 from "@/assets/screenshot-17.png";

const screenshots = [screenshot12, screenshot10, screenshot8, screenshot17];

const ScreenshotsSection = () => {
  return (
    <section className="bg-surface-dark py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-on-dark text-center">
          Como somos vistos pelos nossos clientes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {screenshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="rounded-xl w-full aspect-square object-cover border border-green-accent/10"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
