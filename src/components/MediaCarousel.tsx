import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, Play, Image } from "lucide-react";

// ─── MEDIA ITEMS ────────────────────────────────────────────────────────────
// type: "photo" → agregar photoSrc con la URL de la foto
// type: "youtube" → youtubeId del video
interface MediaItem {
  id: string;
  type: "photo" | "youtube";
  photoSrc?: string;      // URL de foto real — dejar undefined para placeholder
  youtubeId?: string;
  caption: string;
}

const MEDIA_ITEMS: MediaItem[] = [
  // ── Fotos (agregar photoSrc cuando tengas las URLs) ──
  { id: "ph-1", type: "photo", caption: "En vivo" },
  { id: "ph-2", type: "photo", caption: "Estudio" },
  // ── Videos ──
  { id: "yt-1", type: "youtube", youtubeId: "srsOWfnUIrM", caption: "Live session" },
  { id: "yt-2", type: "youtube", youtubeId: "VFmbN1U4h6c", caption: "Sesión" },
  // ── Más fotos ──
  { id: "ph-3", type: "photo", caption: "Portastudio" },
  // ── Más videos ──
  { id: "yt-3", type: "youtube", youtubeId: "M73R2JyjYI0", caption: "Producción" },
  { id: "yt-4", type: "youtube", youtubeId: "CXLTQdEWM",   caption: "Colaboración" },
  { id: "ph-4", type: "photo", caption: "Band Experience" },
  { id: "yt-5", type: "youtube", youtubeId: "MXfbqAlSUaw",  caption: "Acoustic set" },
];

export default function MediaCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null); // youtubeId abierto

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400">
            Fotos & Videos
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 flex items-center justify-center border border-neutral-200 hover:border-black transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 flex items-center justify-center border border-neutral-200 hover:border-black transition-colors cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {MEDIA_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{ scrollSnapAlign: "start" }}
              className="flex-shrink-0 w-64 md:w-72"
            >
              {item.type === "youtube" && item.youtubeId ? (
                // ── Video card ──
                <button
                  onClick={() => setLightbox(item.youtubeId!)}
                  className="w-full group cursor-pointer"
                >
                  <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden rounded">
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={item.caption}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-[#7C3AED]/80 transition-colors duration-200">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-2 text-left">
                    {item.caption}
                  </p>
                </button>
              ) : (
                // ── Photo card ──
                <div className="w-full">
                  {item.photoSrc ? (
                    <img
                      src={item.photoSrc}
                      alt={item.caption}
                      className="w-full aspect-video object-cover rounded"
                    />
                  ) : (
                    <div className="w-full aspect-video bg-neutral-50 border border-dashed border-neutral-200 rounded flex flex-col items-center justify-center gap-2">
                      <Image className="w-5 h-5 text-neutral-300" />
                      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-300 text-center px-4">
                        Foto próximamente
                      </span>
                    </div>
                  )}
                  <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-2">
                    {item.caption}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox YouTube ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-[80] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${lightbox}?autoplay=1`}
                title="Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full rounded"
                style={{ border: "none" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
