import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  DraftingCompass,
  HardHat,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import ExperienceSection from "@/components/ExperienceSection";
import FaqSection from "@/components/FaqSection";
import ProjectGallery from "@/components/ProjectGallery";
import RealApplications from "@/components/RealApplications";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Konut Projeleri",
    description:
      "Çağdaş mimariyi, işlevsel planlamayı ve yaşam konforunu bir araya getiren nitelikli konut çözümleri.",
  },
  {
    number: "02",
    icon: HardHat,
    title: "Anahtar Teslim İnşaat",
    description:
      "Projelendirmeden saha uygulamasına, tüm süreci tek elden yöneten şeffaf ve koordineli çalışma modeli.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Renovasyon ve Onarım",
    description:
      "Mevcut yapıların ihtiyaçlarını doğru analiz eden, değer ve konfor kazandıran kapsamlı dönüşümler.",
  },
  {
    number: "04",
    icon: DraftingCompass,
    title: "Mekanik Tesisat ve İzolasyon",
    description:
      "Yurt, sağlık, eğitim ve konut projelerinde üstlenilen kapsama uygun teknik uygulamalar.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Kamu, Eğitim ve Sağlık",
    description:
      "Kurum yapılarında onarım, renovasyon, altyapı ve anahtar teslim uygulama deneyimi.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Yapı Malzemesi Temini",
    description:
      "Güneydoğu Anadolu Bölgesi’ndeki il ve ilçelere uzanan 8 yıllık ürün ve tedarik tecrübesi.",
  },
];

const process = [
  {
    step: "01",
    title: "İhtiyacı dinliyoruz",
    text: "Proje türünü, kullanım hedefini, konumu ve uygulama koşullarını birlikte değerlendiriyoruz.",
  },
  {
    step: "02",
    title: "Kapsamı netleştiriyoruz",
    text: "Teknik gereksinimleri, uygulama sınırlarını ve iş programını anlaşılır bir plana dönüştürüyoruz.",
  },
  {
    step: "03",
    title: "Sahayı yönetiyoruz",
    text: "Malzeme, ekip, imalat ve kalite kontrollerini disiplinli bir saha yönetimiyle takip ediyoruz.",
  },
  {
    step: "04",
    title: "Kontrol ederek teslim ediyoruz",
    text: "Tamamlanan işleri test, son kontrol ve proje kapsamına uygun teslim adımlarıyla sonuçlandırıyoruz.",
  },
];

const contactEmails = [
  {
    label: "Genel İletişim",
    address: "info@cavusogluinsaatmersin.com",
  },
  {
    label: "Proje ve Teklif",
    address: "teklif@cavusogluinsaatmersin.com",
  },
  {
    label: "Satın Alma",
    address: "satinalma@cavusogluinsaatmersin.com",
  },
  {
    label: "Muhasebe",
    address: "muhasebe@cavusogluinsaatmersin.com",
  },
  {
    label: "İletişim",
    address: "iletisim@cavusogluinsaatmersin.com",
  },
  {
    label: "Mehmet Çankara",
    address: "mehmet.cankara@cavusogluinsaatmersin.com",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    const syncContactProject = () => {
      const [hash, query = ""] = window.location.hash.split("?");
      const params = new URLSearchParams(query);
      setSelectedProject(params.get("proje") ?? "");
      if (hash !== "#iletisim") return;

      const scrollToContact = window.setTimeout(() => {
        const target = document.getElementById("iletisim");
        if (!target) return;
        const targetTop =
          target.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: targetTop, behavior: "auto" });
      }, 100);

      return () => window.clearTimeout(scrollToContact);
    };

    const initialCleanup = syncContactProject();
    const handleHashChange = () => {
      syncContactProject();
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      initialCleanup?.();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const readValue = (key: string) => String(formData.get(key) ?? "").trim();
    const area = readValue("area");
    const details = [
      `Ad Soyad: ${readValue("name")}`,
      `E-posta: ${readValue("email")}`,
      `Proje Türü: ${readValue("projectType")}`,
      `Proje Konumu: ${readValue("location")}`,
      ...(area ? [`Yaklaşık Alan: ${area} m²`] : []),
      ...(selectedProject ? [`İlgilenilen Proje: ${selectedProject}`] : []),
      "",
      "Proje hakkında:",
      readValue("message"),
    ];
    const subject = selectedProject
      ? `Proje Talebi — ${selectedProject}`
      : `Proje Talebi — ${readValue("name")}`;
    window.location.href = `mailto:teklif@cavusogluinsaatmersin.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details.join("\n"))}`;
  };

  return (
    <>
      <main id="icerik" className="overflow-hidden bg-stone-50 text-stone-950">
        <a
          href="#hakkimizda"
          className="sr-only z-[100] bg-[#d4b071] px-5 py-3 font-bold text-stone-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          İçeriğe geç
        </a>
        <SiteHeader />
        <section id="anasayfa" className="hero-section relative">
          <div className="absolute inset-0">
            <img
              src="/cavusoglum-hero.webp"
              alt="Akdeniz mimarisinden ilham alan çağdaş konut projesi"
              className="h-full w-full object-cover object-[68%_center]"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-20 pt-40 sm:px-8 sm:pb-24 lg:min-h-[850px] lg:px-14 lg:pb-28">
            <div className="max-w-4xl">
              <div className="reveal-up flex items-center gap-4">
                <span className="h-px w-12 bg-[#d4b071]" />
                <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-[#dfbf87] sm:text-xs">
                  MERSİN MERKEZLİ · TÜRKİYE GENELİ PROJE DENEYİMİ
                </p>
              </div>

              <h1 className="reveal-up reveal-delay-1 mt-7 max-w-4xl font-display text-[3.4rem] font-medium leading-[0.94] tracking-[-0.035em] text-stone-50 sm:text-7xl lg:text-[6.5rem]">
                Yapıya değer katan{" "}
                <span className="italic text-[#d4b071]">uygulama gücü.</span>
              </h1>

              <div className="reveal-up reveal-delay-2 mt-9 lg:max-w-3xl">
                <p className="max-w-xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
                  Konut, kamu, eğitim ve sağlık yapılarından mekanik tesisat,
                  izolasyon ve renovasyona uzanan disiplinli saha deneyimi.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projeler"
                    className="inline-flex min-h-12 items-center gap-3 bg-[#d4b071] px-6 py-4 text-[0.68rem] font-bold tracking-[0.15em] text-stone-950 transition-colors hover:bg-[#e2c38e]"
                  >
                    PROJELERİ İNCELE
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#iletisim"
                    className="inline-flex min-h-12 items-center gap-3 border border-white/30 px-6 py-4 text-[0.68rem] font-bold tracking-[0.15em] text-white transition-colors hover:border-white"
                  >
                    TEKLİF İSTE
                    <ArrowRight className="h-4 w-4 text-[#d4b071]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-20 hidden w-[48%] border-l border-t border-white/15 bg-[#161714]/90 backdrop-blur-md lg:block">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {[
                "2015 kuruluş",
                "8 yıl malzeme temini",
                "Türkiye geneli portföy",
              ].map(item => (
                <div key={item} className="flex items-center gap-3 px-5 py-6">
                  <Check className="h-4 w-4 shrink-0 text-[#d4b071]" />
                  <span className="text-[0.66rem] font-medium uppercase leading-4 tracking-[0.12em] text-stone-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="hakkimizda" className="relative py-24 sm:py-32 lg:py-40">
          <div className="pointer-events-none absolute right-[-2rem] top-8 font-display text-[12rem] font-semibold leading-none text-stone-100 sm:text-[18rem]">
            Ç
          </div>
          <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
            <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div>
                <p className="eyebrow">BİZİ TANIYIN</p>
                <h2 className="mt-6 max-w-sm font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl">
                  Temelinde güven, her detayında{" "}
                  <span className="italic text-[#9b6f2e]">özen.</span>
                </h2>
              </div>
              <div className="lg:pt-10">
                <p className="max-w-2xl text-xl leading-8 text-stone-600 sm:text-2xl sm:leading-10">
                  Mehmet Çankara tarafından 2015 yılında Mersin'de kurulan
                  Çavuşoğlu İnşaat; farklı şehir ve sektörlerde üstlendiği
                  yapım, renovasyon ve teknik uygulamaları disiplinli saha
                  yönetimiyle gerçekleştirir.
                </p>
                <div className="mt-8 grid gap-6 border-t border-stone-200 pt-8 sm:grid-cols-2">
                  <p className="text-sm leading-7 text-stone-500">
                    Her projeye; doğru ihtiyaç analizi, işlevsel tasarım ve
                    güçlü teknik altyapıyla başlıyor, sürecin her aşamasını
                    titizlikle yönetiyoruz.
                  </p>
                  <p className="text-sm leading-7 text-stone-500">
                    Güneydoğu Anadolu Bölgesi'ndeki il ve ilçelere 8 yıl boyunca
                    yapı malzemesi temininden edinilen ürün ve saha tecrübesini,
                    kurucumuz Mehmet Çankara'nın öncülüğünde nitelikli
                    uygulamalara dönüştürüyoruz.
                  </p>
                </div>
                <div className="mt-9 grid grid-cols-2 border-y border-stone-200 sm:grid-cols-3">
                  <div className="border-r border-stone-200 py-5 pr-5">
                    <CalendarDays
                      className="h-5 w-5 text-[#9b6f2e]"
                      strokeWidth={1.5}
                    />
                    <p className="mt-3 font-display text-3xl font-semibold">
                      2015
                    </p>
                    <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.15em] text-stone-500">
                      KURULUŞ
                    </p>
                  </div>
                  <div className="py-5 pl-5 sm:border-r sm:border-stone-200 sm:pr-5">
                    <UserRound
                      className="h-5 w-5 text-[#9b6f2e]"
                      strokeWidth={1.5}
                    />
                    <p className="mt-3 font-display text-xl font-semibold">
                      Mehmet Çankara
                    </p>
                    <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.15em] text-stone-500">
                      KURUCU
                    </p>
                  </div>
                  <div className="col-span-2 border-t border-stone-200 py-5 sm:col-span-1 sm:border-t-0 sm:pl-5">
                    <Building2
                      className="h-5 w-5 text-[#9b6f2e]"
                      strokeWidth={1.5}
                    />
                    <p className="mt-3 font-display text-3xl font-semibold">
                      8 Yıl
                    </p>
                    <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.15em] text-stone-500">
                      GÜNEYDOĞU ANADOLU · MALZEME TEMİNİ
                    </p>
                  </div>
                </div>
                <a
                  href="#iletisim"
                  className="mt-10 inline-flex items-center gap-3 border-b border-stone-900 pb-2 text-xs font-bold tracking-[0.16em] text-stone-900 transition-colors hover:border-[#9b6f2e] hover:text-[#9b6f2e]"
                >
                  BİZİMLE İLETİŞİME GEÇİN
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-20 grid gap-5 lg:mt-28 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="relative min-h-[430px] overflow-hidden sm:min-h-[560px]">
                <img
                  src="/cavusoglum-detail.webp"
                  alt="Çağdaş bir yapıda nitelikli cephe ve peyzaj detayları"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-stone-50 px-6 py-5 sm:px-8">
                  <p className="font-display text-xl font-semibold">
                    Akdeniz’in ruhuna uygun
                  </p>
                  <p className="mt-1 text-xs tracking-[0.12em] text-stone-500">
                    ZAMANSIZ MİMARİ · YAŞANABİLİR MEKANLAR
                  </p>
                </div>
              </div>
              <div className="flex min-h-[300px] flex-col justify-between bg-[#1d201c] p-8 text-white sm:p-10">
                <DraftingCompass className="h-10 w-10 text-[#d4b071]" />
                <div>
                  <p className="font-display text-3xl leading-tight sm:text-4xl">
                    Her çizgide işlev, her seçimde kalite.
                  </p>
                  <div className="mt-8 h-px w-full bg-white/15" />
                  <p className="mt-6 text-sm leading-7 text-stone-400">
                    Doğru planlama ve disiplinli uygulamayla, fikrinizi
                    güvenebileceğiniz bir yapıya dönüştürüyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectGallery />

        <ExperienceSection />

        <RealApplications />

        <section
          id="hizmetler"
          className="bg-[#eee9df] py-24 sm:py-32 lg:py-36"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">UZMANLIK ALANLARIMIZ</p>
                <h2 className="mt-6 font-display text-4xl font-medium tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                  İhtiyacınıza özel{" "}
                  <span className="italic text-[#9b6f2e]">çözümler.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-stone-600">
                Ölçeği ne olursa olsun, her projeye aynı özenle yaklaşıyor;
                estetik, sağlamlık ve işlevselliği dengede tutuyoruz.
              </p>
            </div>

            <div className="mt-16 grid border-l border-t border-stone-400/50 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="service-item group border-b border-r border-stone-400/50 p-8 md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <service.icon
                      className="h-8 w-8 text-[#9b6f2e]"
                      strokeWidth={1.5}
                    />
                    <span className="font-display text-sm italic text-stone-500">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-12 font-display text-2xl font-semibold sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-stone-600">
                    {service.description}
                  </p>
                  <a
                    href="#iletisim"
                    className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.16em] text-stone-800"
                  >
                    DETAYLI BİLGİ
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="yaklasim"
          className="bg-[#191b18] py-24 text-stone-50 sm:py-32 lg:py-36"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
              <div>
                <p className="eyebrow eyebrow-light">ÇALIŞMA YAKLAŞIMIMIZ</p>
                <h2 className="mt-6 max-w-md font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl">
                  Fikirden teslimata,{" "}
                  <span className="italic text-[#d4b071]">yanınızdayız.</span>
                </h2>
                <p className="mt-8 max-w-sm text-sm leading-7 text-stone-400">
                  Her proje için gerçek kapsamı tanımlıyor; taahhüt edilen işi
                  planlama, uygulama, kontrol ve teslim adımlarıyla yönetiyoruz.
                </p>
              </div>

              <div className="border-t border-white/15">
                {process.map(item => (
                  <article
                    key={item.step}
                    className="process-row grid gap-5 border-b border-white/15 py-7 sm:grid-cols-[4rem_0.65fr_1fr] sm:items-start sm:gap-8 sm:py-8"
                  >
                    <span className="font-display text-sm italic text-[#d4b071]">
                      {item.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-stone-400">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20 grid gap-px bg-white/10 sm:grid-cols-3 lg:mt-28">
              {[
                [
                  ShieldCheck,
                  "Güvenilir süreç",
                  "Her aşamada açık ve ulaşılabilir iletişim.",
                ],
                [
                  DraftingCompass,
                  "İşlevsel tasarım",
                  "İhtiyaca uygun, doğru planlanmış mekanlar.",
                ],
                [
                  Check,
                  "Nitelikli uygulama",
                  "Malzeme ve işçilikte tavizsiz kalite yaklaşımı.",
                ],
              ].map(([Icon, title, text]) => {
                const FeatureIcon = Icon as typeof ShieldCheck;
                return (
                  <div
                    key={title as string}
                    className="bg-[#191b18] p-7 sm:p-8"
                  >
                    <FeatureIcon
                      className="h-6 w-6 text-[#d4b071]"
                      strokeWidth={1.5}
                    />
                    <p className="mt-8 font-display text-xl font-semibold">
                      {title as string}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-stone-500">
                      {text as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <FaqSection />

        <section id="iletisim" className="bg-[#d8b477]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-between px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
              <div>
                <p className="text-[0.68rem] font-bold tracking-[0.22em] text-stone-700">
                  PROJENİZ İÇİN İLK ADIM
                </p>
                <h2 className="mt-6 max-w-xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-stone-950 sm:text-6xl lg:text-7xl">
                  Hayalinizdeki yapıyı birlikte{" "}
                  <span className="italic">konuşalım.</span>
                </h2>
                <p className="mt-8 max-w-md text-sm leading-7 text-stone-700">
                  Projeniz hakkında kısaca bilgi bırakın. Talebiniz kurumsal
                  teklif e-posta adresimize gönderilmek üzere hazırlanacaktır.
                </p>
                {selectedProject ? (
                  <div className="mt-7 border border-stone-900/20 bg-white/20 p-4">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.15em] text-stone-700">
                      İlgilenilen proje
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold">
                      {selectedProject}
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="mt-12 space-y-5 text-sm font-semibold text-stone-900 lg:mt-24">
                <div className="border-y border-stone-900/15 py-5">
                  <div className="mb-4 flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0" />
                    <p className="text-[0.65rem] font-bold tracking-[0.16em]">
                      KURUMSAL E-POSTALAR
                    </p>
                  </div>
                  <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {contactEmails.map(email => (
                      <a
                        key={email.address}
                        href={`mailto:${email.address}`}
                        className={`group min-w-0 transition-opacity hover:opacity-65 ${
                          email.address.startsWith("mehmet.cankara")
                            ? "sm:col-span-2 lg:col-span-1 xl:col-span-2"
                            : ""
                        }`}
                      >
                        <span className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-stone-700">
                          {email.label}
                        </span>
                        <span className="mt-0.5 block break-all text-xs font-semibold">
                          {email.address}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href="https://yandex.com.tr/maps/org/cavusoglu_insaat/100215510803/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 transition-opacity hover:opacity-65"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>
                    50. Yıl Mah. 2589. Sok. No:31
                    <br />
                    Yenişehir / Mersin
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-[#f5f1e9] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="form-label">
                    AD SOYAD
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Adınız ve soyadınız"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    E-POSTA
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="ornek@eposta.com"
                    className="form-input"
                  />
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="projectType" className="form-label">
                      PROJE TÜRÜ
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      className="form-input"
                    >
                      <option value="" disabled>
                        Seçiniz
                      </option>
                      <option value="Konut Projesi">Konut projesi</option>
                      <option value="Villa Projesi">Villa projesi</option>
                      <option value="Anahtar Teslim İnşaat">
                        Anahtar teslim inşaat
                      </option>
                      <option value="Tadilat ve Yenileme">
                        Tadilat ve yenileme
                      </option>
                      <option value="Mekanik Tesisat ve İzolasyon">
                        Mekanik tesisat ve izolasyon
                      </option>
                      <option value="Kamu Yapısı Uygulaması">
                        Kamu yapısı uygulaması
                      </option>
                      <option value="Yapı Malzemesi Temini">
                        Yapı malzemesi temini
                      </option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="form-label">
                      PROJE KONUMU
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      autoComplete="address-level2"
                      placeholder="İlçe / mahalle"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="area" className="form-label">
                    YAKLAŞIK ALAN{" "}
                    <span className="font-normal">(İSTEĞE BAĞLI)</span>
                  </label>
                  <div className="relative">
                    <input
                      id="area"
                      name="area"
                      type="number"
                      min="1"
                      inputMode="numeric"
                      placeholder="Örn. 250"
                      className="form-input pr-10"
                    />
                    <span className="pointer-events-none absolute bottom-3 right-0 text-sm text-stone-500">
                      m²
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="form-label">
                    PROJENİZ HAKKINDA
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Nasıl bir proje düşünüyorsunuz?"
                    className="form-input resize-none"
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-stone-600">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#9b6f2e]"
                  />
                  <span>
                    İletişim talebimin yanıtlanması için bilgilerimin
                    işlenmesini kabul ediyor,{" "}
                    <a href="/kvkk" className="font-semibold underline">
                      KVKK Aydınlatma Metni
                    </a>
                    ’ni okuduğumu onaylıyorum.
                  </span>
                </label>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-[#1b1d1a] px-6 py-5 text-xs font-bold tracking-[0.16em] text-white transition-colors hover:bg-[#9b6f2e] sm:px-8"
                >
                  E-POSTA İLE TALEP GÖNDER
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
