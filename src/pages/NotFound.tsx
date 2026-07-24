import { ArrowRight, Home, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-[#191b18] px-5 text-center text-stone-50">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,176,113,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,176,113,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className={`relative transition-all duration-700 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <a href="/" aria-label="Ana sayfa">
          <img
            src="/logo-cavusoglu.svg"
            alt="Çavuşoğlu İnşaat"
            className="mx-auto h-16 w-auto sm:h-20"
          />
        </a>
        <p className="eyebrow eyebrow-light mt-12 justify-center">
          SAYFA BULUNAMADI
        </p>
        <h1 className="mt-7 font-display text-8xl font-semibold text-[#d4b071] sm:text-9xl">
          404
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-stone-400">
          Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış olabilir.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="inline-flex min-h-12 items-center gap-3 bg-[#d4b071] px-7 py-4 text-xs font-bold tracking-[0.16em] text-stone-950 transition-colors hover:bg-[#e2c38e]"
          >
            <Home className="h-4 w-4" />
            ANA SAYFAYA DÖN
          </a>
          <a
            href="/#iletisim"
            className="inline-flex min-h-12 items-center gap-3 border border-white/25 px-7 py-4 text-xs font-bold tracking-[0.16em] transition-colors hover:border-[#d4b071]"
          >
            <Phone className="h-4 w-4 text-[#d4b071]" />
            İLETİŞİM
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-16 text-[0.6rem] tracking-[0.15em] text-stone-600">
          ÇAVUŞOĞLU İNŞAAT · MERSİN
        </p>
      </div>
    </div>
  );
}
