import { useEffect, useRef, useState } from "react";
import { Building2, FolderKanban, MapPin, CalendarDays } from "lucide-react";

const stats = [
  { icon: CalendarDays, value: 2015, label: "KURULUŞ YILI", suffix: "", isYear: true },
  { icon: FolderKanban, value: 24, label: "TAMAMLANAN PROJE", suffix: "+", isYear: false },
  { icon: MapPin, value: 10, label: "FARKLI ŞEHİR", suffix: "+", isYear: false },
  { icon: Building2, value: 11, label: "YIL DENEYİM", suffix: "", isYear: false },
];

function AnimatedNumber({ target, isYear }: { target: number; isYear: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const from = isYear ? target - 10 : 0;

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(from + (target - from) * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, isYear]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsCounter() {
  return (
    <section className="scroll-reveal border-y border-stone-200 bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon
                className="mx-auto h-6 w-6 text-[#9b6f2e]"
                strokeWidth={1.5}
              />
              <p className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                <AnimatedNumber target={stat.value} isYear={stat.isYear} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-[0.62rem] font-bold tracking-[0.18em] text-stone-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
