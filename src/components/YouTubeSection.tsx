import { useMemo } from "react";
import { motion } from "motion/react";
import { YOUTUBE_VIDEO_IDS } from "../data";

// Shuffles an array using Fisher-Yates and returns a new array (pure)
function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function YouTubeSection() {
  // Shuffle once per mount/refresh — different order every visit
  const videos = useMemo(() => shuffleArray(YOUTUBE_VIDEO_IDS).slice(0, 3), []);

  // Don't render if no real IDs are configured yet
  const hasRealIds = videos.some(id => id !== "VIDEO_ID_1" && id !== "VIDEO_ID_2" && id !== "VIDEO_ID_3");
  if (!hasRealIds) {
    return (
      <section id="videos" className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 block mb-4">
              Videos
            </span>
            <h2 className="font-display font-light text-black text-3xl md:text-4xl">
              En YouTube
            </h2>
          </motion.div>
          <div className="border border-dashed border-neutral-200 rounded p-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-300 mb-2">
              Sección de videos
            </p>
            <p className="text-neutral-400 text-sm">
              Agregá los IDs de tus videos en <code className="text-neutral-600">src/data.ts</code> → <code className="text-neutral-600">YOUTUBE_VIDEO_IDS</code>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="videos" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 block mb-4">
            Videos
          </span>
          <h2 className="font-display font-light text-black text-3xl md:text-4xl">
            En YouTube
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((videoId, i) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-video rounded overflow-hidden border border-neutral-100"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={`García Música video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ border: "none" }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://youtube.com/@garciamusicaYT"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
          >
            Ver canal completo →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
