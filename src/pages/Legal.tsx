import { useEffect } from "react";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { useLocation } from "wouter";
import SiteFooter from "@/components/SiteFooter";

const privacySections = [
  {
    title: "Toplanan bilgiler",
    text: "İletişim formu üzerinden ad, soyad, e-posta adresi ve tarafınızca yazılan proje bilgileri işlenebilir. Form gönderildiğinde bilgiler, kurumsal teklif e-posta adresimize iletilmek üzere hazırlanır.",
  },
  {
    title: "Kullanım amacı",
    text: "Bilgileriniz taleplerinizi yanıtlamak, proje ihtiyaçlarınızı değerlendirmek, teklif hazırlamak ve sizinle iletişim kurmak amacıyla kullanılır.",
  },
  {
    title: "Bilgi güvenliği",
    text: "Kişisel bilgileriniz yetkisiz erişime karşı korunur; yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz ve reklam amacıyla satılmaz.",
  },
  {
    title: "İletişim",
    text: "Gizlilik uygulamalarımızla ilgili sorularınızı mehmet.cankara@cavusogluinsaatmersin.com adresine iletebilirsiniz.",
  },
];

const kvkkSections = [
  {
    title: "Veri sorumlusu",
    text: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu Çavuşoğlu İnşaat’tır.",
  },
  {
    title: "İşlenen kişisel veriler",
    text: "Kimlik ve iletişim bilgileriniz ile proje talebiniz kapsamında kendi isteğinizle paylaştığınız bilgiler işlenebilir.",
  },
  {
    title: "İşleme amacı ve hukuki sebep",
    text: "Verileriniz iletişim talebinizi yanıtlamak, hizmet ve teklif süreçlerini yürütmek, sözleşme öncesi işlemleri gerçekleştirmek ve hukuki yükümlülükleri yerine getirmek amacıyla işlenir.",
  },
  {
    title: "Haklarınız",
    text: "KVKK’nın 11. maddesi kapsamında verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme veya yok etme ve kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme haklarına sahipsiniz.",
  },
];

export default function Legal() {
  const [location] = useLocation();
  const isKvkk = location === "/kvkk";
  const sections = isKvkk ? kvkkSections : privacySections;

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://cavusogluinsaatmersin.com/" },
        { "@type": "ListItem", "position": 2, "name": isKvkk ? "KVKK Aydınlatma" : "Gizlilik Politikası", "item": `https://cavusogluinsaatmersin.com${isKvkk ? "/kvkk" : "/gizlilik"}` }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [isKvkk]);

  return (
    <main className="min-h-screen bg-[#f5f1e9] text-stone-950">
      <header className="bg-[#191b18] px-5 py-6 text-white sm:px-8 lg:px-14">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <a href="/" aria-label="Çavuşoğlu İnşaat ana sayfa">
            <img
              src="/logo-cavusoglu.svg"
              alt="Çavuşoğlu İnşaat"
              className="h-12 w-auto sm:h-14"
            />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.14em] text-stone-300"
          >
            <ArrowLeft className="h-4 w-4" />
            ANA SAYFA
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">{isKvkk ? "YASAL BİLGİLENDİRME" : "GİZLİLİK"}</p>
        <h1 className="mt-7 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-6xl">
          {isKvkk
            ? "Kişisel Verilerin Korunması Aydınlatma Metni"
            : "Gizlilik Politikası"}
        </h1>
        <p className="mt-6 text-sm text-stone-500">
          Son güncelleme: 20 Temmuz 2026
        </p>

        <div className="mt-14 divide-y divide-stone-300 border-y border-stone-300">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="grid gap-5 py-8 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:gap-8"
            >
              <span className="font-display text-sm italic text-[#9b6f2e]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-xl font-semibold">
                {section.title}
              </h2>
              <p className="text-sm leading-7 text-stone-600">{section.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 bg-[#e8e0d2] p-7 text-sm sm:grid-cols-2 sm:p-9">
          <a
            href="mailto:mehmet.cankara@cavusogluinsaatmersin.com"
            className="flex items-center gap-3"
          >
            <Mail className="h-5 w-5 shrink-0 text-[#9b6f2e]" />
            <span className="break-all">
              mehmet.cankara@cavusogluinsaatmersin.com
            </span>
          </a>
          <p className="flex items-start gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-[#9b6f2e]" />
            50. Yıl Mah. 2589. Sok. No:31, Yenişehir / Mersin
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
