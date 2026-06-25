import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";
import { SHOWS_EN_VIVO } from "../data";
import SectionHeader from "./SectionHeader";

const ACCENT_COLORS: Record<string, string> = {
  violet: "#7C3AED",
  orange: "#EA580C",
  green:  "#16A34A",
};

export default function ShowsEnVivo() {
  const { lang } = useLang();
  const t = translations[lang].showsEnVivo;
  const [openId, setOpenId] = useState<string | null>(null);

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="shows" className="py-24 md:py-36 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <SectionHeader label={t.label} title={t.title} />

        <div className="divide-y divide-neutral-100">
          {SHOWS_EN_VIVO.map((show, i) => {
            const isOpen = openId === show.id;
            const color = ACCENT_COLORS[show.accent];

            return (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group cursor-pointer"
                  onClick={() => setOpenId(isOpen ? null : show.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    {/* Accent dot */}
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-transform group-hover:scale-125"
                      style={{ backgroundColor: color }}
                    />
                    <div>
                      <p className="font-display font-semibold text-black text-base group-hover:text-[#7C3AED] transition-colors">
                        {show.name}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mt-0.5">
                        {show.genre}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-neutral-300 group-hover:text-neutral-500 transition-colors flex-shrink-0 mt-1"
                  >
                    →
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key={`detail-${show.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-6 space-y-6">
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-xl">
                          {show.description}
                        </p>

                        {/* Media placeholder */}
                        <div className="flex items-center gap-2 py-3 px-4 border border-dashed border-neutral-200 rounded w-fit">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-300">
                            {t.media}
                          </p>
                        </div>

                        {/* CTA */}
                        <button
                          onClick={scrollToContact}
                          className="font-mono text-[11px] uppercase tracking-widest text-white px-5 py-2.5 transition-colors cursor-pointer"
                          style={{ backgroundColor: color }}
                        >
                          {t.consult} →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
