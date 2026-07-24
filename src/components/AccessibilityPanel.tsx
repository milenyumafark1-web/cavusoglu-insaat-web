import { Minus, Plus, RotateCcw, Type } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [fontSize]);

  const increase = useCallback(() => setFontSize((p) => Math.min(p + 10, 130)), []);
  const decrease = useCallback(() => setFontSize((p) => Math.max(p - 10, 80)), []);
  const reset = useCallback(() => setFontSize(100), []);

  return (
    <div className="fixed bottom-24 right-4 z-50 hidden lg:block">
      {open && (
        <div className="mb-2 flex flex-col gap-1.5 rounded-lg border border-stone-800 bg-[#191b18] p-2 shadow-xl">
          <button
            onClick={increase}
            className="flex h-8 w-8 items-center justify-center rounded text-[#d4b071] transition-colors hover:bg-white/10"
            aria-label="Yazı boyutunu büyüt"
            title="A+"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={decrease}
            className="flex h-8 w-8 items-center justify-center rounded text-[#d4b071] transition-colors hover:bg-white/10"
            aria-label="Yazı boyutunu küçült"
            title="A-"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={reset}
            className="flex h-8 w-8 items-center justify-center rounded text-stone-400 transition-colors hover:bg-white/10"
            aria-label="Varsayılan boyut"
            title="Sıfırla"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
          <span className="text-center text-[0.55rem] font-bold tracking-wider text-stone-500">
            {fontSize}%
          </span>
        </div>
      )}
      <button
        onClick={() => setOpen((p) => !p)}
        className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-lg transition-colors ${
          open
            ? "border-[#d4b071] bg-[#d4b071] text-[#191b18]"
            : "border-stone-700 bg-[#191b18] text-[#d4b071] hover:border-[#d4b071]"
        }`}
        aria-label="Erişilebilirlik ayarları"
        title="Yazı boyutu"
      >
        <Type className="h-4 w-4" />
      </button>
    </div>
  );
}
