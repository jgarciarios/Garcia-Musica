import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean; // for dark bg sections
}

export default function SectionHeader({ label, title, subtitle, light = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const words = title.split(" ");
  const textColor = light ? "text-white" : "text-black";
  const labelColor = light ? "text-neutral-400" : "text-neutral-400";
  const lineColor = light ? "bg-white" : "bg-black";
  const subtitleColor = light ? "text-neutral-400" : "text-neutral-500";

  return (
    <div ref={ref} className="mb-16">
      {/* Label */}
      {label && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`font-mono text-[10px] uppercase tracking-[0.35em] ${labelColor} block mb-5`}
        >
          {label}
        </motion.span>
      )}

      {/* Growing accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.55, delay: label ? 0.08 : 0, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
        className={`h-px ${lineColor} w-10 mb-6 opacity-60`}
      />

      {/* Title — each word clips up individually */}
      <h2 className={`font-display font-light ${textColor} text-3xl md:text-4xl`}>
        <span className="flex flex-wrap" style={{ gap: "0 0.28em" }}>
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                initial={{ y: "105%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: (label ? 0.12 : 0) + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: (label ? 0.12 : 0) + words.length * 0.08 + 0.1 }}
          className={`${subtitleColor} text-sm leading-relaxed max-w-2xl mt-5`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
