import { useState } from "react";
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

  const LINKS = [
    { id: "pilares",         label: nav.trabajo },
    { id: "shows",           label: nav.shows },
    { id: "recorrido",       label: nav.sobreMi },
    { id: "blog",            label: nav.blog },
    { id: "contacto",        label: nav.contacto },
  ];

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-semibold text-sm tracking-[0.12em] text-black uppercase cursor-pointer select-none"
        >
          García Música
        </button>

        <nav className="hidden lg:flex items-center gap-6">
          {LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 hover:text-black transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors cursor-pointer"
            >
              {LANG_LABELS[lang]}
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-7 bg-white border border-neutral-100 shadow-sm rounded py-1 min-w-[60px]"
                >
                  {(["es", "fr", "en"] as Lang[]).map(l => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full text-left px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors cursor-pointer ${l === lang ? "text-black font-medium" : "text-neutral-400 hover:text-black"}`}
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
            className="lg:hidden text-neutral-500 hover:text-black transition-colors cursor-pointer"
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="text-left py-2.5 font-mono text-[11px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors cursor-pointer border-b border-neutral-50 last:border-0"
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
