const videos = [
  "https://www.youtube.com/embed/LVC1UgBSE5Y",
  "https://www.youtube.com/embed/U-aOdvt3kCk",
  "https://www.youtube.com/embed/u107xSMItns",
  "https://www.youtube.com/embed/fTrKnibv-4g",
  "https://www.youtube.com/embed/qC7dIrCs_fM",
  "https://www.youtube.com/embed/c5a3DJPnCP4",
];

const ScreenshotsSection = () => {
  return (
    <section className="bg-surface-dark py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-on-dark text-center">
          Como somos vistos pelos nossos clientes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {videos.map((url, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-green-accent/10 aspect-[9/16]">
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
    </section>
  );
};

export default ScreenshotsSection;
