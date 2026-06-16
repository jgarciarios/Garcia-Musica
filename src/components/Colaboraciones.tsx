import { motion } from "motion/react";
import { COLABORACIONES } from "../data";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

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
      </div>
    </section>
  );
}
