import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function Hero() {
  const { lang } = useLang();
  const hero = translations[lang].hero;

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 100]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Foto de fondo con parallax ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-16 -bottom-16"
      >
        <img
          src="/hero-studio.jpg"
          alt="Estudio de grabación"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* ── Gradiente: oscuro arriba (nav), luz en el medio, muy oscuro abajo ── */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(to bottom,",
            "  rgba(0,0,0,0.70) 0%,",
            "  rgba(0,0,0,0.30) 20%,",
            "  rgba(0,0,0,0.10) 40%,",
            "  rgba(0,0,0,0.55) 65%,",
            "  rgba(0,0,0,0.92) 100%",
            ")",
          ].join(" "),
        }}
      />

      {/* ── Contenido: pegado al fondo ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pb-14 md:pb-20">

          {/* Accent bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="origin-left w-8 h-px bg-[#7C3AED] mb-7"
          />

          {/* Roles */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-5"
          >
            {hero.roles}
          </motion.p>

          {/* Nombre */}
          <h1
            className="font-display font-light text-white leading-[1.0] mb-5"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
          >
            <span className="block overflow-hidden">
              {"Christian".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: "1em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.035, ease: "easeOut" }}
                  className="inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden font-semibold">
              {"García Ríos".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: "1em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.48 + i * 0.035, ease: "easeOut" }}
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
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-lg mb-8"
          >
            {hero.tagline}
          </motion.p>

          {/* Fila inferior: servicios + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            {/* Servicios */}
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

            {/* Separador vertical */}
            <span className="hidden md:block w-px h-5 bg-white/20 mx-1" />

            {/* CTA principal */}
            <motion.button
              onClick={() => go("contacto")}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="font-mono text-[11px] uppercase tracking-widest text-white bg-black/80 backdrop-blur-sm px-6 py-2 hover:bg-[#7C3AED] transition-colors cursor-pointer border border-white/10"
            >
              {hero.cta}
            </motion.button>

            <motion.button
              onClick={() => go("pilares")}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              {hero.ctaSecondary} →
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-8 pt-5 border-t border-white/10"
          >
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-display font-semibold text-white text-lg">{stat.value}</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
