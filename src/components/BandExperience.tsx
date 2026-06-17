import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

// Set this to the public URL of the PDF once uploaded
const BAND_EXP_PDF_URL: string | null = null;

const TEAM = [
  {
    name: "Leo Gozar",
    role: { es: "Director de Palermo Vintage desde 1999", fr: "Directeur de Palermo Vintage depuis 1999", en: "Director of Palermo Vintage since 1999" },
    accent: "#7C3AED",
  },
  {
    name: "Christian García Ríos",
    role: { es: "Músico · Productor · Coach Ontológico · 20 años en gestión educativa", fr: "Musicien · Producteur · Coach Ontologique · 20 ans en gestion éducative", en: "Musician · Producer · Ontological Coach · 20 years in educational management" },
    accent: "#EA580C",
  },
  {
    name: "Verónica Vera",
    role: { es: "Cantante · Coach Vocal · Máster Coaching con PNL", fr: "Chanteuse · Coach Vocale · Master Coaching avec PNL", en: "Singer · Vocal Coach · Master Coaching with NLP" },
    accent: "#16A34A",
  },
];

export default function BandExperience() {
  const { lang } = useLang();
  const band = translations[lang].bandExp;
  const [expanded, setExpanded] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="band-experience" className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Header — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 block mb-4">
            {band.label}
          </span>
          <h2 className="font-display font-light text-black text-3xl md:text-4xl mb-3">
            {band.title}
          </h2>
          <p className="font-display text-[#EA580C] text-lg mb-6">
            {band.subtitle}
          </p>

          {/* Mirror quote */}
          <div className="border-l-2 border-[#7C3AED] pl-5 mb-8">
            <p className="font-display text-xl font-medium text-black italic">
              "{band.mirror}"
            </p>
          </div>

          <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl mb-8">
            {band.description}
          </p>

          {/* Toggle button */}
          <button
            onClick={() => setExpanded(v => !v)}
            className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors flex items-center gap-2 cursor-pointer"
          >
            <motion.span
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              →
            </motion.span>
            {expanded ? band.collapse : band.expand}
          </button>
        </motion.div>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="band-detail"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-16">

                {/* Habilidades */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-6">
                    {band.skillsTitle}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200">
                    {band.skills.map((skill: string, i: number) => {
                      const colors = ["#7C3AED", "#EA580C", "#16A34A", "#7C3AED", "#EA580C", "#16A34A", "#7C3AED", "#EA580C"];
                      return (
                        <div key={skill} className="bg-white p-5">
                          <div
                            className="w-1 h-5 mb-3"
                            style={{ backgroundColor: colors[i % colors.length] }}
                          />
                          <p className="font-display font-medium text-black text-sm leading-snug">
                            {skill}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Formato */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-6">
                    {band.formatTitle}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-neutral-100 p-6 rounded">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                        {band.duration}
                      </p>
                      <p className="font-display font-medium text-black text-base">
                        {band.durationVal}
                      </p>
                    </div>
                    <div className="border border-neutral-100 p-6 rounded">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                        {band.participants}
                      </p>
                      <p className="font-display font-medium text-black text-base">
                        {band.participantsVal}
                      </p>
                    </div>
                    <div className="border border-neutral-100 p-6 rounded">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
                        {band.closing}
                      </p>
                      <p className="font-display font-medium text-black text-base">
                        {band.closingDesc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Equipo facilitador */}
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-6">
                    {band.teamTitle}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TEAM.map(({ name, role, accent }) => (
                      <div
                        key={name}
                        className="p-6 bg-white"
                        style={{ borderLeft: `3px solid ${accent}` }}
                      >
                        <p className="font-display font-semibold text-black text-base mb-1">
                          {name}
                        </p>
                        <p className="text-neutral-500 text-xs leading-relaxed">
                          {role[lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collab note */}
                <p className="text-neutral-400 text-xs">
                  {band.collab}
                </p>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={scrollToContact}
                    className="font-mono text-[11px] uppercase tracking-widest text-white bg-black px-6 py-3 hover:bg-[#7C3AED] transition-colors cursor-pointer"
                  >
                    {band.ctaText}
                  </button>
                  {BAND_EXP_PDF_URL && (
                    <a
                      href={BAND_EXP_PDF_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
                    >
                      {band.downloadPdf} →
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
