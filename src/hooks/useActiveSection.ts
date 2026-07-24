import { useEffect } from "react";

const sectionTitles: Record<string, string> = {
  hakkimizda: "Hakkımızda",
  projeler: "Projeler",
  deneyim: "Deneyim",
  hizmetler: "Hizmetler",
  yaklasim: "Yaklaşım",
  sss: "SSS",
  iletisim: "İletişim",
};

const baseTitle = "Çavuşoğlu İnşaat | Mersin Merkezli Yapım ve Uygulama";

export function useActiveSection() {
  useEffect(() => {
    const ids = Object.keys(sectionTitles);

    const onScroll = () => {
      if (window.scrollY < 300) {
        document.title = baseTitle;
        return;
      }

      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) current = id;
        }
      }

      if (current && sectionTitles[current]) {
        document.title = `${sectionTitles[current]} · Çavuşoğlu İnşaat`;
      } else {
        document.title = baseTitle;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.title = baseTitle;
    };
  }, []);
}
