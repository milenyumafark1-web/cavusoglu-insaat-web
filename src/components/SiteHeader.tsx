import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  ["Hakkımızda", "#hakkimizda"],
  ["Projeler", "#projeler"],
  ["Deneyim", "#kurumsal-deneyim"],
  ["Hizmetler", "#hizmetler"],
  ["Yaklaşım", "#yaklasim"],
  ["SSS", "#sss"],
] as const;

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="/#anasayfa"
      className="inline-flex shrink-0 items-center"
      aria-label="Çavuşoğlu İnşaat ana sayfa"
    >
      <img
        src="/logo-cavusoglu-premium-light.svg"
        alt="Çavuşoğlu İnşaat"
        className={
          compact ? "h-11 w-auto sm:h-12" : "h-12 w-auto sm:h-14 lg:h-16"
        }
      />
    </a>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 32);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-white/10 bg-[#11130f]/95 shadow-2xl backdrop-blur-xl"
          : "border-white/15 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
        <BrandMark compact={scrolled} />

        <nav
          className="hidden items-center gap-6 text-[0.67rem] font-semibold tracking-[0.14em] text-stone-200 xl:flex"
          aria-label="Ana menü"
        >
          {navigation.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>
              {label.toLocaleUpperCase("tr-TR")}
            </a>
          ))}
          <a
            className="inline-flex min-h-11 items-center gap-3 border-l border-white/20 pl-7 text-[#d4b071] transition-colors hover:text-white"
            href="#iletisim"
          >
            TEKLİF İSTE
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            className="grid h-11 w-11 place-items-center border border-white/25 text-white"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-[#11130f] px-5 xl:hidden"
        >
          <nav
            className="mx-auto flex max-w-[1440px] flex-col py-4 text-sm font-semibold tracking-[0.12em] text-stone-200"
            aria-label="Mobil menü"
          >
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center justify-between border-b border-white/10 py-3"
              >
                {label}
                <ArrowRight className="h-4 w-4 text-[#d4b071]" />
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex min-h-12 items-center justify-between bg-[#d4b071] px-5 py-3 font-bold text-stone-950"
            >
              TEKLİF İSTE
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
