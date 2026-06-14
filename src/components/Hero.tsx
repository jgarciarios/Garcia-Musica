import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function Hero() {
  const { lang } = useLang();
  const hero = translations[lang].hero;

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-24 md:py-32">

        {/* Accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="origin-left w-12 h-0.5 bg-[#7C3AED] mb-10"
        />

        {/* Roles */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-6"
        >
          {hero.roles}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-light text-black leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
        >
          Christian<br />
          <span className="font-semibold">García Ríos</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-lg mb-12"
        >
          {hero.tagline}
          <span className="block mt-1 font-mono text-[11px] uppercase tracking-widest text-neutral-300">
            {hero.location}
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-6"
        >
          <button
            onClick={() => go("pilares")}
            className="font-mono text-[11px] uppercase tracking-widest text-white bg-black px-6 py-3 hover:bg-[#7C3AED] transition-colors cursor-pointer"
          >
            {hero.cta}
          </button>
          <button
            onClick={() => go("contacto")}
            className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors cursor-pointer"
          >
            Contacto →
          </button>
        </motion.div>

        {/* Language accent dots */}
        <div className="flex items-center gap-2 mt-16">
          <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
          <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
        </div>
      </div>
    </section>
  );
}
