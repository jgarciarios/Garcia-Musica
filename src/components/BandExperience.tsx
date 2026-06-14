import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function BandExperience() {
  const { lang } = useLang();
  const band = translations[lang].bandExp;

  return (
    <section id="band-experience" className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 block mb-4">
              05 — {band.label}
            </span>
            <h2 className="font-display font-light text-black text-3xl md:text-4xl mb-3">
              {band.title}
            </h2>
            <p className="font-display text-[#EA580C] text-lg mb-8">
              {band.subtitle}
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed mb-8">
              {band.description}
            </p>
            <p className="font-display font-medium text-black text-base mb-8">
              {band.result}
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed">
              {band.collab}
            </p>
          </motion.div>

          {/* Right: objectives */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-px bg-neutral-200">
              {band.objectives.map((obj: string, i: number) => {
                const colors = ["#7C3AED", "#EA580C", "#16A34A", "#7C3AED", "#EA580C", "#16A34A"];
                const bgs    = ["#7C3AED14","#EA580C14","#16A34A14","#7C3AED14","#EA580C14","#16A34A14"];
                return (
                  <div key={obj} className="bg-white p-6">
                    <div
                      className="w-1 h-6 mb-4"
                      style={{ backgroundColor: colors[i % colors.length] }}
                    />
                    <p className="font-display font-medium text-black text-sm">
                      {obj}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
