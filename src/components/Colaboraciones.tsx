import { motion } from "motion/react";
import { COLABORACIONES } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

// ⚠️  Reemplazá con la URL de tu playlist de Spotify
// Ejemplo: https://open.spotify.com/playlist/XXXXXX
// El iframe acepta formato: https://open.spotify.com/embed/playlist/XXXXXX
const SPOTIFY_PLAYLIST_URL: string | null = null;
// const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/embed/playlist/TU_PLAYLIST_ID?utm_source=generator&theme=0";

export default function Colaboraciones() {
  const { lang } = useLang();
  const col = translations[lang].colaboraciones;

  return (
    <section id="colaboraciones" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-light text-black text-3xl md:text-4xl">
            {col.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Collaborations list */}
          <div className="space-y-0">
            {COLABORACIONES.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 py-4 border-b border-neutral-100 last:border-0 group"
              >
                {/* Accent dot cycles violet/orange/green */}
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{
                    backgroundColor: ["#7C3AED", "#EA580C", "#16A34A"][i % 3],
                  }}
                />
                <p className="text-neutral-600 text-sm leading-relaxed group-hover:text-black transition-colors">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Spotify playlist player */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {SPOTIFY_PLAYLIST_URL ? (
              <div className="rounded overflow-hidden border border-neutral-100">
                <iframe
                  src={SPOTIFY_PLAYLIST_URL}
                  width="100%"
                  height="380"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ border: "none" }}
                  title="García Música — Playlist"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 border border-dashed border-neutral-200 rounded text-center px-6 gap-3">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-300">
                  Player de Spotify
                </p>
                <p className="text-neutral-300 text-xs">
                  Agregá tu playlist URL en Colaboraciones.tsx
                </p>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
