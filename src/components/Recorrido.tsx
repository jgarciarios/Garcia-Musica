import { motion } from "motion/react";
import { TIMELINE } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

const ACCENT: Record<string, string> = {
  violet: "#7C3AED",
  orange: "#EA580C",
  green: "#16A34A",
};

const ACCENT_BG: Record<string, string> = {
  violet: "#7C3AED14",
  orange: "#EA580C14",
  green: "#16A34A14",
};

export default function Recorrido() {
  const { lang } = useLang();
  const rec = translations[lang].recorrido;

  return (
    <section id="recorrido" className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 block mb-4">
            01 — {rec.label}
          </span>
          <h2 className="font-display font-light text-black text-3xl md:text-4xl mb-6">
            {rec.title}
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">
            {rec.philosophy}
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 ml-0 hidden md:block" />

          <div className="space-y-0">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="md:pl-12 py-6 border-b border-neutral-100 last:border-0 group"
              >
                <div className="flex items-start gap-4">
                  {/* Dot */}
                  <div
                    className="hidden md:block absolute left-[-4px] w-2 h-2 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: ACCENT[item.accent] }}
                  />

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{
                          color: ACCENT[item.accent],
                          backgroundColor: ACCENT_BG[item.accent],
                        }}
                      >
                        {item.type === "education" ? "Formación" : item.type === "professional" ? "Profesional" : "Certificación"}
                      </span>
                    </div>
                    <h3 className="font-display font-medium text-black text-base mb-1.5">
                      {item.era}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
