import { motion } from "motion/react";
import { PRODUCCIONES, OTROS_PROYECTOS } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function Producciones() {
  const { lang } = useLang();
  const prod = translations[lang].producciones;

  return (
    <section id="producciones" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 block mb-4">
            04 — {prod.label}
          </span>
          <h2 className="font-display font-light text-black text-3xl md:text-4xl">
            {prod.title}
          </h2>
        </motion.div>

        {/* Main productions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 mb-16">
          {PRODUCCIONES.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white p-6 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#EA580C] block mb-1">
                    {p.artist}
                  </span>
                  <h3 className="font-display font-medium text-black text-base">
                    {p.title}
                  </h3>
                </div>
                {p.year && (
                  <span className="font-mono text-[10px] text-neutral-300 flex-shrink-0 ml-4">
                    {p.year}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.roles.map(r => (
                  <span key={r} className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                    {r}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-neutral-100 pt-10"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-300 mb-6">
            Otros proyectos
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {OTROS_PROYECTOS.map((name) => (
              <span key={name} className="text-sm text-neutral-500">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
