import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function Hero() {
  const { lang } = useLang();
  const hero = translations[lang].hero;

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 80]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Video de fondo con parallax ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-16 -bottom-16"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-studio.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback: foto si el browser no soporta video */}
          <img src="/hero-studio.jpg" alt="Estudio de grabación" className="w-full h-full object-cover" />
        </video>
      </motion.div>

      {/* ── Overlay oscuro ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.20) 30%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.96) 100%)",
        }}
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end">
        <div className="max-w-6xl mx-auto px-8 md:px-14 w-full pb-16 md:pb-24">

          {/* Nombre */}
          <h1
            className="font-display font-light text-white leading-[0.95] mb-6"
            style={{
              fontSize: "clamp(3.5rem, 8.5vw, 8rem)",
              textShadow: "0 2px 40px rgba(0,0,0,0.5)",
            }}
          >
            <span className="block overflow-hidden">
              {"Christian".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: "1em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
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
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="text-neutral-300 text-base md:text-lg leading-snug max-w-md mb-10"
          >
            {hero.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex items-center gap-6"
          >
            <motion.button
              onClick={() => go("contacto")}
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(124,58,237,0.45)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-white bg-[#7C3AED] px-8 py-4 hover:bg-[#6D28D9] transition-colors cursor-pointer"
            >
              {hero.cta}
            </motion.button>

            <motion.button
              onClick={() => go("pilares")}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              {hero.ctaSecondary} →
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-10 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
