import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { TIMELINE } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

const ACCENT: Record<string, string> = {
  violet: "#7C3AED",
  orange: "#EA580C",
  green:  "#16A34A",
};
const ACCENT_BG: Record<string, string> = {
  violet: "#7C3AED14",
  orange: "#EA580C14",
  green:  "#16A34A14",
};

export default function Recorrido() {
  const { lang } = useLang();
  const rec = translations[lang].recorrido;
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="recorrido" className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-display font-light text-black text-3xl md:text-4xl mb-6">
            {rec.title}
          </h2>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl mb-8">
            {rec.philosophy}
          </p>

          {/* Toggle button */}
          <button
            onClick={() => setExpanded(v => !v)}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors cursor-pointer group"
          >
            <span>{expanded ? rec.collapse : rec.expand}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </motion.div>

        {/* Collapsible timeline */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 hidden md:block" />

                <div className="space-y-0">
                  {TIMELINE.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="md:pl-12 py-6 border-b border-neutral-100 last:border-0"
                    >
                      <div className="relative flex items-start gap-4">
                        {/* Dot on the line */}
                        <div
                          className="hidden md:block absolute left-[-16px] w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: ACCENT[item.accent] }}
                        />

                        <div className="flex-1">
                          {/* Custom label tag (no "Formación" repetition) */}
                          <span
                            className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded inline-block mb-2"
                            style={{
                              color: ACCENT[item.accent],
                              backgroundColor: ACCENT_BG[item.accent],
                            }}
                          >
                            {item.label}
                          </span>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
