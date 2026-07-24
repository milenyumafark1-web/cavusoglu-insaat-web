import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Accessibility() {
  return (
    <>
      <SiteHeader />
      <main className="bg-stone-50 text-stone-950">
        <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
          <p className="eyebrow">ERİŞİLEBİLİRLİK</p>
          <h1 className="mt-6 font-display text-4xl font-semibold sm:text-5xl">
            Erişilebilirlik Beyanı
          </h1>

          <div className="mt-12 space-y-8 text-sm leading-7 text-stone-600">
            <p>
              Çavuşoğlu İnşaat olarak web sitemizin engelli bireyler dahil tüm
              kullanıcılar tarafından erişilebilir olmasını önemsiyoruz. Web
              İçeriği Erişilebilirlik Yönergeleri (WCAG) 2.1 standartlarına
              uygun bir deneyim sunmayı hedefliyoruz.
            </p>

            <h2 className="font-display text-xl font-semibold text-stone-900">
              Erişilebilirlik Özellikleri
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>Tüm görseller için açıklayıcı alt metinler</li>
              <li>Klavye ile tam navigasyon desteği</li>
              <li>Ekran okuyucu uyumlu semantik HTML yapısı</li>
              <li>Yeterli renk kontrastı (WCAG AA)</li>
              <li>
                Yazı boyutu ayarlama paneli (masaüstünde sağ alt köşe)
              </li>
              <li>Azaltılmış hareket tercihi desteği</li>
              <li>Odak halkaları ile görünür klavye navigasyonu</li>
              <li>Duyarlı tasarım (mobil, tablet, masaüstü)</li>
              <li>İçeriğe geç bağlantısı</li>
              <li>Klavye kısayolları (? tuşu ile görüntüleyin)</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-stone-900">
              Klavye Kısayolları
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li><kbd className="rounded bg-stone-200 px-1.5 py-0.5 font-mono text-xs">?</kbd> — Kısayol listesi</li>
              <li><kbd className="rounded bg-stone-200 px-1.5 py-0.5 font-mono text-xs">H</kbd> — Ana sayfaya dön</li>
              <li><kbd className="rounded bg-stone-200 px-1.5 py-0.5 font-mono text-xs">T</kbd> — Sayfa başına git</li>
              <li><kbd className="rounded bg-stone-200 px-1.5 py-0.5 font-mono text-xs">Esc</kbd> — Açık pencereyi kapat</li>
            </ul>

            <h2 className="font-display text-xl font-semibold text-stone-900">
              İletişim
            </h2>
            <p>
              Erişilebilirlik konusunda bir sorunla karşılaşırsanız veya
              önerileriniz varsa, lütfen bizimle iletişime geçin:
            </p>
            <p>
              <strong>E-posta:</strong>{" "}
              <a
                href="mailto:info@cavusogluinsaatmersin.com"
                className="text-[#9b6f2e] underline underline-offset-4"
              >
                info@cavusogluinsaatmersin.com
              </a>
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a
                href="tel:+905382320433"
                className="text-[#9b6f2e] underline underline-offset-4"
              >
                +90 538 232 04 33
              </a>
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
