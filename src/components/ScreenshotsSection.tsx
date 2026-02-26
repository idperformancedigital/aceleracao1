import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  "https://www.youtube.com/embed/LVC1UgBSE5Y",
  "https://www.youtube.com/embed/U-aOdvt3kCk",
  "https://www.youtube.com/embed/u107xSMItns",
  "https://www.youtube.com/embed/fTrKnibv-4g",
  "https://www.youtube.com/embed/qC7dIrCs_fM",
  "https://www.youtube.com/embed/c5a3DJPnCP4",
];

const ScreenshotsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-surface-dark py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-on-dark text-center">
          Como somos vistos pelos nossos clientes
        </h2>
        <div className="relative w-full">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          )}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {videos.map((url, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[220px] md:w-[260px] rounded-xl overflow-hidden border border-green-accent/10 aspect-[9/16]"
              >
                <iframe
                  src={url}
                  title={`Depoimento cliente ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
