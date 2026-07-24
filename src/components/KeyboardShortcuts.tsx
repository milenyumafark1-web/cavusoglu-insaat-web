import { useEffect, useState } from "react";

const shortcuts = [
  { key: "↑", desc: "Sayfa başına dön" },
  { key: "← / →", desc: "Fotoğraf galerisinde gezin" },
  { key: "Esc", desc: "Açık pencereyi kapat" },
  { key: "?", desc: "Bu paneli göster / gizle" },
];

export default function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "?" || e.key === "/") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-sm border border-white/10 bg-[#1d201c] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#d4b071]">
          Klavye Kısayolları
        </h3>
        <ul className="mt-5 space-y-3">
          {shortcuts.map((s) => (
            <li key={s.key} className="flex items-center justify-between">
              <span className="text-sm text-stone-300">{s.desc}</span>
              <kbd className="ml-4 shrink-0 border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-mono text-stone-400">
                {s.key}
              </kbd>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.62rem] text-stone-500">
          Kısayollar yalnızca form alanları dışında çalışır.
        </p>
      </div>
    </div>
  );
}
