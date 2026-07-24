import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t1 = setTimeout(() => setFadeOut(true), 1200);
    const t2 = setTimeout(() => setVisible(false), 1800);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#191b18] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <img
          src="/logo-cavusoglu.svg"
          alt=""
          className="h-20 w-auto animate-pulse sm:h-24"
        />
        <div className="relative h-0.5 w-24 overflow-hidden rounded-full bg-white/10">
          <div className="preloader-bar h-full bg-[#d4b071]" />
        </div>
        <span className="text-xs font-bold tracking-[0.2em] text-[#d4b071]/60">
          {progress}%
        </span>
      </div>
    </div>
  );
}
