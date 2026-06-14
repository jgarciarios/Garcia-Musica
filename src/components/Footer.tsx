import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function Footer() {
  const { lang } = useLang();
  const footer = translations[lang].footer;

  return (
    <footer className="border-t border-neutral-100 bg-white py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
          {footer.copy} · García Música
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-[#16A34A] hover:underline transition-colors"
          >
            Spotify
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Accent dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
        </div>
      </div>
    </footer>
  );
}
