import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";


// Portastudio — Tascam-style 4-track cassette recorder
function Cassette() {
  const CH_X  = [10, 52, 94, 136] as const;
  const CH_COLORS = ["#7C3AED", "#EA580C", "#16A34A", "#7C3AED"] as const;
  const FADER_Y   = [108, 122, 114, 128] as const;

  return (
    <div className="relative select-none" aria-hidden="true">
      <svg
        viewBox="0 0 278 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-56 md:w-80 opacity-75"
      >
        {/* ── BODY ── */}
        <rect x="2" y="2" width="274" height="164" rx="10" fill="#0a0a0a" />
        <rect x="7" y="7" width="264" height="154" rx="7" fill="#181818" />

        {/* ── VU METER STRIP ── */}
        <rect x="9" y="10" width="172" height="26" rx="3" fill="#111" />
        {/* L row */}
        {[9,9,9,9,9,7,7,7,5,5,3,3,2,2,1,1].map((h, i) => (
          <rect key={`vul${i}`} x={13 + i * 10} y={14} width={7} height={h} rx={1}
            fill={i < 9 ? "#16A34A" : i < 13 ? "#EA580C" : "#dc2626"}
            opacity={Math.max(0.12, 1 - i * 0.052)} />
        ))}
        {/* R row */}
        {[9,9,9,9,9,9,7,7,7,5,3,2,1,1].map((h, i) => (
          <rect key={`vur${i}`} x={13 + i * 10} y={25} width={7} height={h} rx={1}
            fill={i < 10 ? "#16A34A" : "#EA580C"}
            opacity={Math.max(0.12, 1 - i * 0.055)} />
        ))}

        {/* ── 4 CHANNEL STRIPS ── */}
        {CH_X.map((cx, ch) => (
          <g key={`ch${ch}`}>
            <rect x={cx} y={40} width="39" height="118" rx="3" fill="#141414" />

            {/* Channel label bar */}
            <rect x={cx + 11} y={43} width={17} height={5} rx={1} fill="#1e1e1e" />

            {/* Gain knob */}
            <circle cx={cx + 11} cy={59} r={7} fill="#202020" stroke="#3a3a3a" strokeWidth={1.5} />
            <circle cx={cx + 11} cy={59} r={2.5} fill="#3a3a3a" />
            <line x1={cx + 11} y1={52} x2={cx + 11} y2={56.5} stroke="#777" strokeWidth={1.5} strokeLinecap="round" />

            {/* Pan knob */}
            <circle cx={cx + 27} cy={59} r={5} fill="#202020" stroke="#333" strokeWidth={1.2} />
            <circle cx={cx + 27} cy={59} r={1.8} fill="#3a3a3a" />

            {/* EQ section — 3 tiny knobs on track lines */}
            {[72, 79, 86].map((y, qi) => (
              <g key={qi}>
                <rect x={cx + 5} y={y} width={29} height={1.5} rx={0.75} fill="#262626" />
                <circle cx={cx + 19} cy={y + 0.75} r={3.5} fill="#1c1c1c" stroke="#2e2e2e" strokeWidth={1} />
              </g>
            ))}

            {/* Fader track */}
            <rect x={cx + 17} y={92} width={5} height={56} rx={2.5} fill="#0c0c0c" />

            {/* Fader handle */}
            <rect x={cx + 10} y={FADER_Y[ch]} width={19} height={10} rx={2.5} fill={CH_COLORS[ch]} />
            <line
              x1={cx + 10} y1={FADER_Y[ch] + 5}
              x2={cx + 29} y2={FADER_Y[ch] + 5}
              stroke="rgba(255,255,255,0.12)" strokeWidth={0.8}
            />
          </g>
        ))}

        {/* ── MASTER SECTION (right panel) ── */}
        <rect x="183" y="10" width="90" height="148" rx="4" fill="#141414" />

        {/* Cassette window */}
        <rect x="187" y="14" width="82" height="60" rx="4" fill="#0a0a0a" />
        <rect x="190" y="17" width="76" height="54" rx="2" fill="#0d0d0d" stroke="#222" strokeWidth={1} />

        {/* Left reel */}
        <circle cx="213" cy="44" r="17" fill="#191919" stroke="#2c2c2c" strokeWidth={1.5} />
        <circle cx="213" cy="44" r="7"  fill="#111" stroke="#393939" strokeWidth={1.2} />
        <circle cx="213" cy="44" r="3"  fill="#444" />
        <line x1="213" y1="27" x2="213" y2="37" stroke="#383838" strokeWidth={2} strokeLinecap="round" />
        <line x1="213" y1="51" x2="213" y2="61" stroke="#383838" strokeWidth={2} strokeLinecap="round" />
        <line x1="196" y1="44" x2="206" y2="44" stroke="#383838" strokeWidth={2} strokeLinecap="round" />
        <line x1="220" y1="44" x2="230" y2="44" stroke="#383838" strokeWidth={2} strokeLinecap="round" />

        {/* Right reel */}
        <circle cx="251" cy="44" r="17" fill="#191919" stroke="#2c2c2c" strokeWidth={1.5} />
        <circle cx="251" cy="44" r="7"  fill="#111" stroke="#393939" strokeWidth={1.2} />
        <circle cx="251" cy="44" r="3"  fill="#444" />
        <line x1="251" y1="27" x2="251" y2="37" stroke="#383838" strokeWidth={2} strokeLinecap="round" />
        <line x1="251" y1="51" x2="251" y2="61" stroke="#383838" strokeWidth={2} strokeLinecap="round" />
        <line x1="234" y1="44" x2="244" y2="44" stroke="#383838" strokeWidth={2} strokeLinecap="round" />
        <line x1="258" y1="44" x2="268" y2="44" stroke="#383838" strokeWidth={2} strokeLinecap="round" />

        {/* Tape path between reels */}
        <path d="M213 61 Q232 66 251 61" fill="none" stroke="#2c2c2c" strokeWidth={1.2} />

        {/* Transport buttons */}
        {/* REW */}
        <rect x="187" y="80" width="13" height="9" rx="2" fill="#282828" />
        <path d="M196 84.5 L192 82 L192 87 Z" fill="#555" />
        <path d="M193 84.5 L189.5 82 L189.5 87 Z" fill="#555" />
        {/* PLAY */}
        <rect x="203" y="80" width="13" height="9" rx="2" fill="#16A34A" opacity={0.75} />
        <path d="M207 82.5 L207 87.5 L213 85 Z" fill="rgba(255,255,255,0.6)" />
        {/* REC */}
        <rect x="219" y="80" width="13" height="9" rx="2" fill="#dc2626" opacity={0.8} />
        <circle cx="225.5" cy="84.5" r="2.5" fill="rgba(255,255,255,0.5)" />
        {/* STOP */}
        <rect x="235" y="80" width="13" height="9" rx="2" fill="#282828" />
        <rect x="238.5" y="82.5" width="6" height="5" rx="1" fill="#555" />
        {/* FF */}
        <rect x="251" y="80" width="13" height="9" rx="2" fill="#282828" />
        <path d="M254 84.5 L258 82 L258 87 Z" fill="#555" />
        <path d="M257 84.5 L261 82 L261 87 Z" fill="#555" />

        {/* Master volume / aux knobs */}
        <circle cx="197" cy="101" r="9" fill="#1e1e1e" stroke="#333" strokeWidth={1.5} />
        <circle cx="197" cy="101" r="3.5" fill="#333" />
        <line x1="197" y1="92" x2="197" y2="97.5" stroke="#666" strokeWidth={1.5} strokeLinecap="round" />

        <circle cx="197" cy="122" r="6.5" fill="#1e1e1e" stroke="#2e2e2e" strokeWidth={1.2} />
        <circle cx="197" cy="122" r="2"  fill="#333" />

        <circle cx="197" cy="138" r="5"   fill="#1e1e1e" stroke="#2e2e2e" strokeWidth={1} />

        {/* Master fader track */}
        <rect x="227" y="96" width="5" height="56" rx="2.5" fill="#0c0c0c" />
        {/* Master fader handle */}
        <rect x="219" y="115" width="21" height="12" rx="3" fill="#555" />
        <line x1="219" y1="121" x2="240" y2="121" stroke="rgba(255,255,255,0.1)" strokeWidth={0.8} />

        {/* Bottom label strip */}
        <rect x="9" y="158" width="172" height="5" rx="1.5" fill="#111" />
        <rect x="13" y="159" width="22" height="3" rx="1" fill="#1e1e1e" />
        <rect x="39" y="159" width="16" height="3" rx="1" fill="#1e1e1e" />
        <rect x="59" y="159" width="10" height="3" rx="1" fill="#1e1e1e" />
      </svg>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const hero = translations[lang].hero;

  // Parallax: portastudio drifts upward as user scrolls down
  const { scrollY } = useScroll();
  const portastudioY = useTransform(scrollY, [0, 600], [0, -45]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-24 md:py-32">

        {/* Portastudio + accent bar row */}
        <div className="flex items-end gap-8 mb-10">
          {/* Outer div carries scroll parallax; inner div carries entrance + hover */}
          <motion.div style={{ y: portastudioY }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.025, transition: { duration: 0.4 } }}
            >
              <Cassette />
            </motion.div>
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

        {/* Name — staggered word reveal */}
        <h1
          className="font-display font-light text-black leading-[1.05] mb-6 overflow-hidden"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
        >
          {/* Line 1: "Christian" — characters stagger in */}
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
          {/* Line 2: "García Ríos" — slightly offset stagger */}
          <span className="block overflow-hidden font-semibold">
            {"García Ríos".split("").map((ch, i) => (
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
          <motion.button
            onClick={() => go("pilares")}
            whileHover={{ scale: 1.03, boxShadow: "0 0 22px rgba(124,58,237,0.28)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="font-mono text-[11px] uppercase tracking-widest text-white bg-black px-6 py-3 hover:bg-[#7C3AED] transition-colors cursor-pointer btn-primary"
          >
            {hero.cta}
          </motion.button>
          <motion.button
            onClick={() => go("contacto")}
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors cursor-pointer"
          >
            Contacto →
          </motion.button>
        </motion.div>

        {/* Accent dots — staggered pulse */}
        <div className="flex items-center gap-2 mt-16">
          {(["#7C3AED","#EA580C","#16A34A"] as const).map((color, i) => (
            <motion.span
              key={color}
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1, type: "spring" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
