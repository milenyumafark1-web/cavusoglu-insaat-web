import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-[#1d201c]/95 px-5 py-4 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-xl sm:border">
      <p className="text-xs leading-6 text-stone-300">
        Bu web sitesi, deneyiminizi iyileştirmek için çerezleri kullanmaktadır.
        Sitemizi kullanmaya devam ederek{" "}
        <a href="/kvkk" className="underline underline-offset-2 text-[#d4b071]">
          KVKK Aydınlatma Metni
        </a>{" "}
        ve{" "}
        <a href="/gizlilik" className="underline underline-offset-2 text-[#d4b071]">
          Gizlilik Politikası
        </a>
        'nı kabul etmiş sayılırsınız.
      </p>
      <div className="mt-3 flex gap-3">
        <button
          onClick={accept}
          className="rounded-md bg-[#d4b071] px-5 py-2 text-xs font-semibold text-[#1d201c] transition-colors hover:bg-[#c5a060]"
        >
          Kabul Et
        </button>
        <button
          onClick={accept}
          className="rounded-md border border-white/20 px-5 py-2 text-xs font-semibold text-stone-300 transition-colors hover:bg-white/5"
        >
          Kapat
        </button>
      </div>
    </div>
  );
}
