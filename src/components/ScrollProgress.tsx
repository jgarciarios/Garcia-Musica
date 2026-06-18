import { useEffect, useState } from "react";

/** Thin violet progress bar fixed at the very top of the viewport */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[70] h-[2px] bg-transparent"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="h-full bg-[#7C3AED]"
        style={{ width: `${progress}%`, transition: "width 60ms linear" }}
      />
    </div>
  );
}
