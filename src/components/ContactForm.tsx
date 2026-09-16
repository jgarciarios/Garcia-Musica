import React, { useState } from "react";
import { motion } from "motion/react";
import { useLang } from "../context/LangContext";
import { translations } from "../utils/i18n";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqeenly";

export default function ContactForm() {
  const { lang } = useLang();
  const c = translations[lang].contacto;

  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
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

  const labelClass =
    "font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 block mb-2";

  const inputClass =
    "w-full bg-white/[0.07] border border-white/20 px-4 py-3.5 text-sm text-white placeholder-neutral-500 rounded-sm focus:outline-none focus:border-[#7C3AED] focus:bg-white/[0.1] focus:ring-1 focus:ring-[#7C3AED]/40 transition-all";

  return (
    <section id="contacto" className="py-8 md:py-36 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left — texto */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500 block mb-5"
            >
              {c.label}
            </motion.span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="h-px bg-white w-8 mb-6 opacity-20"
            />

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-light text-white text-2xl md:text-4xl mb-5 md:mb-8"
            >
              {c.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {[
                { color: "#7C3AED", label: "Producción musical" },
                { color: "#EA580C", label: "Clases y mentorías" },
                { color: "#16A34A", label: "Band Experience" },
              ].map(({ color, label }) => (
                <p key={label} className="flex items-center gap-3 text-sm text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                  {label}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Right — formulario */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {status === "done" ? (
              <div className="flex items-center gap-3 py-10">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <p className="font-display font-medium text-white">{c.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    {c.namePlaceholder}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder={c.namePlaceholder}
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    {c.emailPlaceholder}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder={c.emailPlaceholder}
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    {c.msgPlaceholder}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    placeholder={c.msgPlaceholder}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full font-mono text-[11px] uppercase tracking-[0.2em] text-white bg-[#7C3AED] py-4 hover:bg-[#6D28D9] transition-colors cursor-pointer disabled:opacity-50"
                >
                  {status === "sending" ? c.sending : c.send}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
