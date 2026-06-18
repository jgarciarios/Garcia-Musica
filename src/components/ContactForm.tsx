import React, { useState } from "react";
import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

export default function ContactForm() {
  const { lang } = useLang();
  const c = translations[lang].contacto;

  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // ⚠️  Reemplazá FORMSPREE_FORM_ID con el ID de tu formulario en formspree.io
  // Pasos: 1) Crear cuenta en formspree.io  2) New Form → apuntar a garciarios@gmail.com
  //         3) Copiar el ID (formato: xxxxxabc) y pegarlo aquí abajo
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqeenly";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("done");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("idle");
        alert("Error al enviar. Por favor intentá de nuevo.");
      }
    } catch {
      setStatus("idle");
      alert("Error de conexión. Por favor intentá de nuevo.");
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-400 block mb-4">
              07 — {c.label}
            </span>
            <h2 className="font-display font-light text-black text-3xl md:text-4xl mb-6">
              {c.title}
            </h2>
            <div className="space-y-4 text-sm text-neutral-500">
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] flex-shrink-0" />
                Producción musical
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                Clases y mentorías
              </p>
              <p className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] flex-shrink-0" />
                Band Experience
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "done" ? (
              <div className="flex items-center gap-3 py-8">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <p className="font-display font-medium text-black">{c.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  required
                  placeholder={c.namePlaceholder}
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder={c.emailPlaceholder}
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                />
                <textarea
                  required
                  rows={5}
                  placeholder={c.msgPlaceholder}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-mono text-[11px] uppercase tracking-widest text-white bg-black px-8 py-3 hover:bg-[#7C3AED] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {status === "sending" ? c.sending : c.send}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
