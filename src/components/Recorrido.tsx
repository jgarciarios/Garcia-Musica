import { motion } from "motion/react";
import { TIMELINE } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

const ACCENT: Record<string, string> = {
  violet: "#7C3AED",
  orange: "#EA580C",
  green:  "#16A34A",
};

export default function Recorrido() {
  const { lang } = useLang();
  const rec = translations[lang].recorrido;

  return (
    <section id="recorrido" className="py-8 md:py-36 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-6 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500 block mb-3"
          >
            Sobre mí
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="h-px bg-white w-10 mb-4 opacity-20"
          />

          {/* Filosofía — grande y prominente */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-light text-white text-xl md:text-3xl lg:text-4xl leading-snug max-w-3xl"
          >
            "{rec.philosophy}"
          </motion.blockquote>
        </div>

        {/* Timeline grid */}
        <div
          className="flex gap-3 overflow-x-auto pb-1 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-px md:bg-white/5 md:overflow-visible md:pb-0"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              style={{ scrollSnapAlign: "start" }}
              className="flex-shrink-0 w-[80%] xs:w-64 border border-white/10 rounded md:w-auto md:border-0 md:rounded-none bg-black p-4 md:p-7 hover:bg-white/5 transition-colors group"
            >
              {/* Acento + label */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-4 h-px flex-shrink-0"
                  style={{ backgroundColor: ACCENT[item.accent] }}
                />
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.2em]"
                  style={{ color: ACCENT[item.accent] }}
                >
                  {item.label}
                </span>
              </div>

              <h3 className="font-display font-medium text-white text-base mb-3 leading-snug group-hover:text-neutral-200 transition-colors">
                {item.era}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
