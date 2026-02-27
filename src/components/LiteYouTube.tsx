import { useState, useCallback } from "react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  enableJsApi?: boolean;
}

const LiteYouTube = ({ videoId, title, className = "", enableJsApi = false }: LiteYouTubeProps) => {
  const [activated, setActivated] = useState(false);

  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const activate = useCallback(() => {
    setActivated(true);
  }, []);

  if (activated) {
    const params = enableJsApi ? "?autoplay=1&enablejsapi=1" : "?autoplay=1";
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}${params}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`w-full h-full ${className}`}
      />
    );
  }

  return (
    <button
      onClick={activate}
      className={`relative w-full h-full cursor-pointer bg-black group border-0 p-0 ${className}`}
      aria-label={`Reproduzir: ${title}`}
      type="button"
    >
      <img
        src={thumbUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-lg"
          viewBox="0 0 68 48"
          fill="none"
        >
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="red"
          />
          <path d="M45 24L27 14v20" fill="white" />
        </svg>
      </div>
    </button>
  );
};

export default LiteYouTube;
