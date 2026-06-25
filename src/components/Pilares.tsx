import { motion } from "motion/react";
import { PILARES } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";
import SectionHeader from "./SectionHeader";

const ACCENT: Record<string, string> = {
  violet: "#7C3AED",
  orange: "#EA580C",
  green:  "#16A34A",
};
const ACCENT_BG: Record<string, string> = {
  violet: "#7C3AED12",
  orange: "#EA580C12",
  green:  "#16A34A12",
};

export default function Pilares() {
  const { lang } = useLang();
  const pil = translations[lang].pilares;

  return (
    <section id="pilares" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <SectionHeader title={pil.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
          {PILARES.map((pilar, i) => (
            <motion.div
              key={pilar.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white p-8 hover:bg-neutral-50 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] text-neutral-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="h-px flex-1 max-w-[24px] group-hover:max-w-[40px] transition-all duration-300"
                  style={{ backgroundColor: ACCENT[pilar.accent] }}
                />
              </div>

              <h3 className="font-display font-medium text-black text-lg mb-3 leading-snug">
                {pilar.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                {pilar.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {pilar.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{
                      color: ACCENT[pilar.accent],
                      backgroundColor: ACCENT_BG[pilar.accent],
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
