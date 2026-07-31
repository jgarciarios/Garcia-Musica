import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";
import type { Lang } from "../utils/i18n";

const LANG_LABELS: Record<Lang, string> = { es: "ES", fr: "FR", en: "EN" };

export default function Nav() {
  const { lang, setLang } = useLang();
  const nav = translations[lang].nav;

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [
    { id: "pilares",   label: nav.trabajo },
    { id: "shows",     label: nav.shows },
    { id: "recorrido", label: nav.sobreMi },
    { id: "blog",      label: nav.blog },
    { id: "contacto",  label: nav.contacto },
  ];
  // Orden en página: Pilares (Trabajo) → Shows → Recorrido (Sobre Mí) → Blog → Contacto ✓

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-sm border-b border-neutral-150 shadow-[0_1px_16px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-display font-bold text-base tracking-[0.08em] uppercase cursor-pointer select-none transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          García Música
        </button>

        {/* Links desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer group ${
                scrolled
                  ? "text-neutral-500 hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
              {/* underline on hover */}
              <span
                className={`absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${
                  scrolled ? "bg-black" : "bg-white"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Right side: lang + hamburger */}
        <div className="flex items-center gap-5">
          <div className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                scrolled
                  ? "text-neutral-500 hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {LANG_LABELS[lang]}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-8 bg-white border border-neutral-100 shadow-lg rounded-sm py-1 min-w-[64px]"
                >
                  {(["es", "fr", "en"] as Lang[]).map(l => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                        l === lang ? "text-black" : "text-neutral-400 hover:text-black"
                      }`}
                    >
                      {LANG_LABELS[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setOpen(v => !v)}
            className={`lg:hidden transition-colors duration-300 cursor-pointer p-1 ${
              scrolled ? "text-neutral-600 hover:text-black" : "text-white/80 hover:text-white"
            }`}
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-black/92 backdrop-blur-sm border-t border-white/10"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="text-left py-3 text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer border-b border-white/8 last:border-0"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
