import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { PRODUCCIONES } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function Producciones() {
  const { lang } = useLang();
  const prod = translations[lang].producciones;
  const disc = translations[lang].discografia;

  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="producciones" className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-light text-black text-3xl md:text-4xl">
            {prod.title}
          </h2>
        </motion.div>

        <div className="space-y-px bg-neutral-100">
          {PRODUCCIONES.map((p) => {
            const isOpen = openId === p.id;
            return (
              <div key={p.id} className="bg-white">
                <button
                  onClick={() => setOpenId(isOpen ? null : p.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <h3 className="font-display font-medium text-black text-lg">
                    {p.artist}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
                      {p.releases.length} {p.releases.length === 1 ? "producción" : "producciones"}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                          {p.releases.map((release, ri) => (
                            <div
                              key={ri}
                              className="border border-neutral-100 rounded p-4 hover:border-neutral-200 transition-colors"
                            >
                              {release.coverImage ? (
                                <img
                                  src={release.coverImage}
                                  alt={release.title}
                                  className="w-full aspect-square object-cover rounded mb-3 bg-neutral-100"
                                />
                              ) : (
                                <div className="w-full aspect-square bg-neutral-50 rounded mb-3 flex items-center justify-center">
                                  <span className="font-mono text-[9px] text-neutral-300 uppercase tracking-widest text-center px-2">
                                    {p.artist}
                                  </span>
                                </div>
                              )}
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-display font-medium text-black text-sm">
                                  {release.title}
                                </h4>
                                {release.year && (
                                  <span className="font-mono text-[10px] text-neutral-400 flex-shrink-0 ml-2">
                                    {release.year}
                                  </span>
                                )}
                              </div>
                              <div className="flex flex-wrap gap-1 mb-3">
                                {release.roles.map(r => (
                                  <span key={r} className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">
                                    {r}
                                  </span>
                                ))}
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
