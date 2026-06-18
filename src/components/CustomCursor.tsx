import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Custom cursor — desktop only.
 * Small violet dot (instant) + lagging ring that expands on hover over interactive elements.
 * Adds/removes "custom-cursor-active" class on <html> to hide the system cursor.
 */
export default function CustomCursor() {
  const [active, setActive]   = useState(false);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);

  // Dot snaps almost immediately
  const dx = useSpring(mx, { stiffness: 900, damping: 38 });
  const dy = useSpring(my, { stiffness: 900, damping: 38 });

  // Ring follows with visible lag
  const rx = useSpring(mx, { stiffness: 160, damping: 20 });
  const ry = useSpring(my, { stiffness: 160, damping: 20 });

  useEffect(() => {
    // Touch devices keep their default cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!active) setActive(true);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove, { passive: true });

    // Tag interactive elements
    const tagAll = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    tagAll();

    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!active) return null;

  return (
    <>
      {/* ── Dot ── */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 rounded-full bg-[#7C3AED] pointer-events-none z-[9999]"
        style={{
          width: 8,
          height: 8,
          x: dx,
          y: dy,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* ── Ring ── */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9998]"
        animate={{
          width:           hovered ? 52 : 30,
          height:          hovered ? 52 : 30,
          opacity:         hovered ? 0.55 : 0.28,
          borderColor:     hovered ? "#7C3AED" : "#7C3AED",
          backgroundColor: hovered ? "rgba(124,58,237,0.07)" : "transparent",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{
          borderWidth: "1.5px",
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
