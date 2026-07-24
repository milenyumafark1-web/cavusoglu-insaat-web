import { useEffect, useState } from "react";

const sections = [
  { id: "hakkimizda", label: "Hakkımızda" },
  { id: "projeler", label: "Projeler" },
  { id: "deneyim", label: "Deneyim" },
  { id: "hizmetler", label: "Hizmetler" },
  { id: "yaklasim", label: "Yaklaşım" },
  { id: "sss", label: "SSS" },
  { id: "iletisim", label: "İletişim" },
];

export default function SectionDots() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);

      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) current = s.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
      aria-label="Bölüm navigasyonu"
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group relative flex h-3 w-3 items-center justify-center"
          aria-label={s.label}
        >
          <span
            className={`block h-2 w-2 rounded-full border transition-all duration-300 ${
              active === s.id
                ? "scale-125 border-[#d4b071] bg-[#d4b071]"
                : "border-stone-400/50 bg-transparent hover:border-[#d4b071]/60"
            }`}
          />
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded bg-[#191b18] px-2.5 py-1 text-[0.6rem] font-bold tracking-wider text-[#d4b071] opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
