import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function Footer() {
  const { lang } = useLang();
  const footer = translations[lang].footer;

  const SOCIALS = [
    { label: "Instagram", href: "https://instagram.com/garcia.musica", color: "#7C3AED" },
    { label: "YouTube",   href: "https://youtube.com/@garciamusicaYT", color: "#EA580C" },
    { label: "Spotify",   href: "https://open.spotify.com/artist/garciarios", color: "#16A34A" },
  ];

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

        {/* Logo */}
        <span className="font-display font-semibold text-sm tracking-[0.1em] uppercase text-white">
          García Música
        </span>

        {/* Redes */}
        <div className="flex items-center gap-6">
          {SOCIALS.map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
              style={{ ["--c" as string]: color }}
              onMouseEnter={e => (e.currentTarget.style.color = color)}
              onMouseLeave={e => (e.currentTarget.style.color = "")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
          {footer.copy} · García Música
        </p>
      </div>
    </footer>
  );
}
