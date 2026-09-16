import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";
import SectionHeader from "./SectionHeader";

// Colaboraciones con categoría visual
const ITEMS = [
  { cat: "En vivo",      color: "#7C3AED", text: "Programación · Moby Dick Live Sessions 2025" },
  { cat: "En vivo",      color: "#7C3AED", text: "Programación · Muelle 3, Punta del Este, Uruguay" },
  { cat: "En vivo",      color: "#7C3AED", text: "En vivo junto al Zorrito Von Quintero y Jimmy Rip" },
  { cat: "Estudio",      color: "#EA580C", text: "Guitarras en el disco de Sergio Rotman — estudio de Mario Siperman" },
  { cat: "Estudio",      color: "#EA580C", text: "Guitarras en el disco de Ger Kalinscky, junto a Guillermo Vadalá" },
  { cat: "Sesionista",   color: "#EA580C", text: "Sesionista de Lado U, productora de espectáculos" },
  { cat: "Producción",   color: "#16A34A", text: "Palermo Vintage — Muestras y Producciones de Streaming" },
  { cat: "Audiovisual",  color: "#16A34A", text: "Música para documentales y publicidades" },
];

export default function Colaboraciones() {
  const { lang } = useLang();
  const col = translations[lang].colaboraciones;

  return (
    <section id="colaboraciones" className="py-8 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <SectionHeader title={col.title} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-100">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white p-5 md:p-6 flex flex-col gap-3 md:gap-4 group hover:bg-neutral-50 transition-colors"
            >
              {/* Línea de color + categoría */}
              <div className="flex items-center gap-2">
                <span
                  className="w-5 h-px flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.2em]"
                  style={{ color: item.color }}
                >
                  {item.cat}
                </span>
              </div>

              {/* Texto */}
              <p className="text-neutral-700 text-sm leading-relaxed flex-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
