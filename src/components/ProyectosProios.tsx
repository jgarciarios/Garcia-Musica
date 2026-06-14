import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { PROYECTOS } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

const TYPE_COLOR: Record<string, string> = {
  "Álbum":  "#7C3AED",
  "EP":     "#EA580C",
  "Single": "#16A34A",
  "Demo":   "#6b7280",
};

export default function ProyectosProios() {
  const { lang } = useLang();
  const disc = translations[lang].discografia;

  const [openId, setOpenId] = useState<string | null>("falsos-clones");

  return (
    <section id="discografia" className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 block mb-4">
            03 — {disc.label}
          </span>
          <h2 className="font-display font-light text-black text-3xl md:text-4xl">
            {disc.title}
          </h2>
        </motion.div>

        <div className="space-y-px bg-neutral-100">
          {PROYECTOS.map((proyecto) => {
            const isOpen = openId === proyecto.id;
            return (
              <div key={proyecto.id} className="bg-white">
                {/* Accordion header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : proyecto.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <div>
                    <h3 className="font-display font-medium text-black text-lg">
                      {proyecto.name}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-0.5">
                      {proyecto.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    {proyecto.spotifyUrl && (
                      <a
                        href={proyecto.spotifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-[10px] uppercase tracking-widest text-[#16A34A] hover:underline flex items-center gap-1"
                      >
                        Spotify <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                          {proyecto.releases.map((release) => (
                            <div
                              key={release.id}
                              className="border border-neutral-100 rounded p-4 hover:border-neutral-200 transition-colors group"
                            >
                              {/* Cover placeholder or image */}
                              {release.coverImage ? (
                                <img
                                  src={release.coverImage}
                                  alt={release.title}
                                  className="w-full aspect-square object-cover rounded mb-3 bg-neutral-100"
                                />
                              ) : (
                                <div className="w-full aspect-square bg-neutral-50 rounded mb-3 flex items-center justify-center">
                                  <span className="font-mono text-[9px] text-neutral-300 uppercase tracking-widest">
                                    {release.type}
                                  </span>
                                </div>
                              )}
                              <div className="flex items-center justify-between mb-1">
                                <span
                                  className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded"
                                  style={{
                                    color: TYPE_COLOR[release.type] || "#6b7280",
                                    backgroundColor: (TYPE_COLOR[release.type] || "#6b7280") + "18",
                                  }}
                                >
                                  {release.type}
                                </span>
                                <span className="font-mono text-[10px] text-neutral-400">
                                  {release.year}
                                </span>
                              </div>
                              <h4 className="font-display font-medium text-black text-sm mb-2">
                                {release.title}
                              </h4>
                              <div className="flex flex-wrap gap-1 mb-3">
                                {release.roles.slice(0, 3).map(r => (
                                  <span key={r} className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">
                                    {r}
                                  </span>
                                ))}
                                {release.roles.length > 3 && (
                                  <span className="font-mono text-[8px] text-neutral-300 uppercase tracking-widest">
                                    +{release.roles.length - 3}
                                  </span>
                                )}
                              </div>
                              {release.spotifyUrl && (
                                <a
                                  href={release.spotifyUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="font-mono text-[9px] uppercase tracking-widest text-[#16A34A] hover:underline flex items-center gap-1"
                                >
                                  {disc.listen} <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
