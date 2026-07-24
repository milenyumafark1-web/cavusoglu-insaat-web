import { Mail, MapPin } from "lucide-react";

const footerNavigation = [
  ["Hakkımızda", "#hakkimizda"],
  ["Projeler", "#projeler"],
  ["Kamu Deneyimi", "#kurumsal-deneyim"],
  ["Hizmetler", "#hizmetler"],
  ["Yaklaşım", "#yaklasim"],
  ["SSS", "#sss"],
] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-[#0d0f0c] text-white">
      <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-14 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <a href="/#anasayfa" aria-label="Çavuşoğlu İnşaat ana sayfa">
              <img
                src="/logo-cavusoglu-premium-light.svg"
                alt="Çavuşoğlu İnşaat"
                className="h-16 w-auto max-w-full"
              />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-stone-400">
              Mersin merkezli; konut, kamu, eğitim, sağlık, mekanik tesisat,
              izolasyon ve renovasyon alanlarında uygulama deneyimi.
            </p>
            <a
              href="mailto:teklif@cavusogluinsaatmersin.com"
              className="mt-7 inline-flex items-center gap-3 text-[0.67rem] font-bold uppercase tracking-[0.14em] text-[#d4b071]"
            >
              Projenizi e-posta ile iletin
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#d4b071]">
                Hızlı Bağlantılar
              </p>
              <nav className="mt-5 grid gap-3 text-xs font-semibold tracking-[0.1em] text-stone-400">
                {footerNavigation.map(([label, href]) => (
                  <a key={href} href={href} className="hover:text-white">
                    {label.toLocaleUpperCase("tr-TR")}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#d4b071]">
                İletişim
              </p>
              <div className="mt-5 grid gap-4 text-sm text-stone-400">
                <a
                  href="mailto:info@cavusogluinsaatmersin.com"
                  className="flex min-w-0 items-start gap-3 hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d4b071]" />
                  <span className="break-all">
                    info@cavusogluinsaatmersin.com
                  </span>
                </a>
                <a
                  href="mailto:teklif@cavusogluinsaatmersin.com"
                  className="flex min-w-0 items-start gap-3 hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d4b071]" />
                  <span className="break-all">
                    teklif@cavusogluinsaatmersin.com
                  </span>
                </a>
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#d4b071]">
                Merkez Ofis
              </p>
              <a
                href="https://yandex.com.tr/maps/org/cavusoglu_insaat/100215510803/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-start gap-3 text-sm leading-7 text-stone-400 hover:text-white"
              >
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#d4b071]" />
                50. Yıl Mah. 2589. Sok. No:31
                <br />
                Yenişehir / Mersin
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-[0.67rem] text-stone-500 sm:flex-row">
          <p>© 2026 Çavuşoğlu İnşaat. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-5">
            <a className="transition-colors hover:text-white" href="/kvkk">
              KVKK
            </a>
            <a className="transition-colors hover:text-white" href="/gizlilik">
              Gizlilik
            </a>
            <p>Mersin merkezli · Türkiye geneli proje deneyimi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
