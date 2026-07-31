import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function Hero() {
  const { lang } = useLang();
  const hero = translations[lang].hero;

  // Parallax: foto de fondo sube levemente al scrollear
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 80]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      {/* ── Foto de fondo con parallax ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-12 -bottom-12"
      >
        <img
          src="/hero-studio.jpg"
          alt="Estudio de grabación"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Gradiente oscuro para legibilidad ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-28 pb-16 md:pb-24">

        {/* Accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="origin-left w-10 h-px bg-[#7C3AED] mb-8 opacity-80"
        />

        {/* Roles */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-300 mb-6"
        >
          {hero.roles}
        </motion.p>

        {/* Name — staggered character reveal */}
        <h1
          className="font-display font-light text-white leading-[1.05] mb-6 overflow-hidden"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
        >
          <span className="block overflow-hidden">
            {"Christian".split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: "1em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.04, ease: "easeOut" }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden font-semibold">
            {["G","a","r","c","ía"," ","R","íos"].join("").split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: "1em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.04, ease: "easeOut" }}
                className="inline-block"
              >
                {ch === " " ? " " : ch}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl mb-10"
        >
          {hero.tagline}
        </motion.p>

        {/* 3 puertas de entrada */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {(
            [
              { label: hero.service1, id: "pilares", color: "#7C3AED" },
              { label: hero.service2, id: "pilares", color: "#EA580C" },
              { label: hero.service3, id: "shows",   color: "#16A34A" },
            ] as const
          ).map(({ label, id, color }) => (
            <motion.button
              key={label}
              onClick={() => go(id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 border transition-colors cursor-pointer"
              style={{ borderColor: color + "66", color, backgroundColor: color + "22" }}
            >
              {label} →
            </motion.button>
          ))}
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-6 mb-16"
        >
          <motion.button
            onClick={() => go("contacto")}
            whileHover={{ scale: 1.03, boxShadow: "0 0 22px rgba(124,58,237,0.4)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="font-mono text-[11px] uppercase tracking-widest text-white bg-black px-7 py-3.5 hover:bg-[#7C3AED] transition-colors cursor-pointer btn-primary"
          >
            {hero.cta}
          </motion.button>
          <motion.button
            onClick={() => go("pilares")}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="font-mono text-[11px] uppercase tracking-widest text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            {hero.ctaSecondary} →
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-wrap gap-8"
        >
          {hero.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="font-display font-semibold text-white text-xl">{stat.value}</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
