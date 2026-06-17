import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";


// Cassette SVG with animated reels
function Cassette() {
  return (
    <div className="relative select-none" aria-hidden="true">
      <svg
        viewBox="0 0 200 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 md:w-64 opacity-60"
      >
        {/* Body */}
        <rect x="4" y="10" width="192" height="110" rx="10" fill="#0f0f0f" />
        <rect x="12" y="18" width="176" height="94" rx="7" fill="#1a1a1a" />

        {/* Label area */}
        <rect x="36" y="22" width="128" height="56" rx="4" fill="#f5f5f5" />

        {/* Label text lines */}
        <rect x="52" y="34" width="96" height="3" rx="1.5" fill="#7C3AED" opacity="0.7" />
        <rect x="60" y="42" width="80" height="2" rx="1" fill="#EA580C" opacity="0.5" />
        <rect x="64" y="49" width="72" height="2" rx="1" fill="#16A34A" opacity="0.5" />
        <rect x="68" y="56" width="64" height="2" rx="1" fill="#999" opacity="0.4" />
        <rect x="72" y="63" width="56" height="2" rx="1" fill="#999" opacity="0.3" />

        {/* Window cutout */}
        <rect x="60" y="84" width="80" height="24" rx="3" fill="#0f0f0f" />

        {/* Tape */}
        <rect x="68" y="89" width="64" height="14" rx="1" fill="#2a2a2a" />
        <path d="M68 96 Q100 92 132 96" stroke="#444" strokeWidth="1" fill="none" />

        {/* Left reel hub — static */}
        <g style={{ transformOrigin: "82px 96px" }}>
          <circle cx="82" cy="96" r="10" fill="#333" />
          <circle cx="82" cy="96" r="4" fill="#555" />
          <line x1="82" y1="86" x2="82" y2="92" stroke="#666" strokeWidth="1.5" />
          <line x1="82" y1="100" x2="82" y2="106" stroke="#666" strokeWidth="1.5" />
          <line x1="72" y1="96" x2="78" y2="96" stroke="#666" strokeWidth="1.5" />
          <line x1="86" y1="96" x2="92" y2="96" stroke="#666" strokeWidth="1.5" />
        </g>

        {/* Right reel hub — static */}
        <g style={{ transformOrigin: "118px 96px" }}>
          <circle cx="118" cy="96" r="10" fill="#333" />
          <circle cx="118" cy="96" r="4" fill="#555" />
          <line x1="118" y1="86" x2="118" y2="92" stroke="#666" strokeWidth="1.5" />
          <line x1="118" y1="100" x2="118" y2="106" stroke="#666" strokeWidth="1.5" />
          <line x1="108" y1="96" x2="114" y2="96" stroke="#666" strokeWidth="1.5" />
          <line x1="122" y1="96" x2="128" y2="96" stroke="#666" strokeWidth="1.5" />
        </g>

        {/* Side holes */}
        <circle cx="22" cy="96" r="6" fill="#0f0f0f" />
        <circle cx="178" cy="96" r="6" fill="#0f0f0f" />
        <circle cx="22" cy="96" r="3" fill="#333" />
        <circle cx="178" cy="96" r="3" fill="#333" />

        {/* Bottom notches */}
        <rect x="40" y="112" width="12" height="5" rx="1" fill="#0a0a0a" />
        <rect x="74" y="112" width="12" height="5" rx="1" fill="#0a0a0a" />
        <rect x="114" y="112" width="12" height="5" rx="1" fill="#0a0a0a" />
        <rect x="148" y="112" width="12" height="5" rx="1" fill="#0a0a0a" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const hero = translations[lang].hero;

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-24 md:py-32">

        {/* Cassette + accent bar row */}
        <div className="flex items-end gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Cassette />
          </motion.div>

          {/* Accent bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="origin-left w-12 h-0.5 bg-[#7C3AED] mb-2"
          />
        </div>

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

        {/* Accent dots */}
        <div className="flex items-center gap-2 mt-16">
          <span className="w-2 h-2 rounded-full bg-[#7C3AED]" />
          <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
          <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
        </div>
      </div>
    </section>
  );
}
