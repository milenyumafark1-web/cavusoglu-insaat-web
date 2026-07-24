import { useState } from "react";

const interiorPhotos = [
  {
    src: "/proje-gercek-mutfak.jpg",
    alt: "Çavuşoğlu İnşaat tarafından tamamlanan mutfak uygulaması",
    title: "Mutfak Uygulaması",
    category: "İç Mekân",
  },
  {
    src: "/proje-gercek-koridor.jpg",
    alt: "Çavuşoğlu İnşaat tarafından tamamlanan koridor uygulaması",
    title: "İç Mekân Detayı",
    category: "İç Mekân",
  },
] as const;

const mechanicalPhotos = [
  {
    src: "/mekanik-tesisat-6.jpg",
    alt: "Kazan dairesi — 4 adet yoğuşmalı kazan, paslanmaz çelik baca toplama hattı ve gaz besleme sistemi",
    title: "Yoğuşmalı Kazan Sistemi",
    category: "Kazan Dairesi",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-1.jpg",
    alt: "Bina dış cephesinde dikey paslanmaz çelik baca hattı montajı",
    title: "Dış Cephe Baca Hattı",
    category: "Baca Sistemi",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-2.jpg",
    alt: "Kazan dairesi pompa grubu, mavi kelebek vanalar ve genleşme tankı",
    title: "Pompa ve Vana Grubu",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-3.jpg",
    alt: "Kazan dairesi sirkülasyon hattı, pompalar ve boru tesisatı",
    title: "Sirkülasyon Hattı",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-4.jpg",
    alt: "Kazan dairesi vana detayı, basınç göstergeleri ve genleşme tankı",
    title: "Vana ve Basınç Grubu",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-5.jpg",
    alt: "Bina zemin seviyesinde paslanmaz çelik baca bağlantı noktası",
    title: "Baca Zemin Bağlantısı",
    category: "Baca Sistemi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-7.jpg",
    alt: "Kazan dairesi genel görünüm — pompa grubu, genleşme tankı ve boru tesisatı",
    title: "Kazan Dairesi Genel Görünüm",
    category: "Kazan Dairesi",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-8.jpg",
    alt: "5 adet yoğuşmalı kazan ve izolasyonlu boru hattı bağlantıları",
    title: "Kazan Bağlantı ve İzolasyon",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-9.jpg",
    alt: "Sirkülasyon pompaları, gaz hattı ve izolasyonlu kollektör bağlantıları",
    title: "Pompa ve Gaz Hattı",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-10.jpg",
    alt: "İzolasyonlu boru hattı detayı, vanalar ve genleşme tankı",
    title: "İzolasyon Detayı",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-11.jpg",
    alt: "Tavan kablo taşıma sistemi ve tesisat altyapısı",
    title: "Tesisat Altyapısı",
    category: "Altyapı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-12.jpeg",
    alt: "Su deposu, hidrofor grubu ve paslanmaz çelik dağıtım hatlarının genel görünümü",
    title: "Hidrofor ve Su Deposu Sistemi",
    category: "Mekanik Tesisat",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-13.jpeg",
    alt: "Yangın pompa grubu ve kırmızı boyalı yangın tesisatı dağıtım hatları",
    title: "Yangın Pompa Grubu",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-14.jpeg",
    alt: "Mekanik tesisat kollektörleri, vanalar ve saha montajının panoramik görünümü",
    title: "Mekanik Tesisat Dağıtım Merkezi",
    category: "Saha Uygulaması",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-15.jpeg",
    alt: "Kırmızı boyalı yangın tesisatı kollektörleri, vanalar ve basınç göstergeleri",
    title: "Yangın Kollektör Sistemi",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-16.jpeg",
    alt: "Yangın tesisatı dağıtım boruları, kontrol vanaları ve bağlantı grupları",
    title: "Yangın Dağıtım Hatları",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-17.jpeg",
    alt: "Kırmızı yangın boru hatları, vana grupları ve kollektör bağlantıları",
    title: "Vana ve Kollektör Detayı",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-18.jpeg",
    alt: "Kırmızı yangın kollektörü, dağıtım boruları, kontrol vanaları ve basınç göstergeleri",
    title: "Yangın Kollektörü Genel Görünüm",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-19.jpeg",
    alt: "Yangın tesisatı kollektörü, galvaniz bağlantı hatları ve kontrol vanaları",
    title: "Yangın Tesisatı Kontrol Grubu",
    category: "Yangın Tesisatı",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-20.jpeg",
    alt: "Mekanik pompa grupları, pislik tutucular, vanalar ve dağıtım boruları",
    title: "Mekanik Pompa ve Filtre Grubu",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-21.jpeg",
    alt: "Dış ortam mekanik tesisatında büyük çaplı boru, vana, basınç göstergesi ve soğutma ekipmanları",
    title: "Dış Alan Mekanik Hatları",
    category: "Saha Uygulaması",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-22.jpeg",
    alt: "Dış ortamda sac kaplamalı izolasyonlu mekanik boru hatları ve vana bağlantıları",
    title: "Sac Kaplamalı Boru İzolasyonu",
    category: "İzolasyon",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-23.jpeg",
    alt: "Yangın kollektörü, dikey dağıtım hatları, vanalar ve basınç göstergeleri",
    title: "Yangın Dağıtım Kollektörü",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-24.jpeg",
    alt: "Teknik hacimde tavan boru hatları, yangın tesisatı ve dağıtım kollektörünün genel görünümü",
    title: "Teknik Hacim Boru Dağıtımı",
    category: "Saha Uygulaması",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-25.jpeg",
    alt: "Mekanik tesisat pompa, vana, kompansatör ve dağıtım kollektörü grupları",
    title: "Pompa ve Kollektör Grubu",
    category: "Mekanik Tesisat",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-26.jpeg",
    alt: "Plakalı eşanjörler, pislik tutucular ve bağlantı vanalarının saha montajı",
    title: "Plakalı Eşanjör Grubu",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-27.jpeg",
    alt: "Yangın pompa istasyonu, kırmızı boru hatları ve tavan dağıtım sistemi",
    title: "Yangın Pompa İstasyonu",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-28.jpeg",
    alt: "Kazan bağlantısında galvaniz borular, kontrol vanaları, emniyet ventili ve manometre",
    title: "Kazan Emniyet ve Kontrol Hattı",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-29.jpeg",
    alt: "Bina dışında açılan kanalda yer altı mekanik boru hatlarının döşenmesi",
    title: "Yer Altı Mekanik Hatları",
    category: "Altyapı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-30.jpeg",
    alt: "Bina girişinde çoklu yer altı mekanik boru hatlarının dirsek ve kolon bağlantıları",
    title: "Bina Giriş Hatları",
    category: "Altyapı",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-31.jpeg",
    alt: "Açık kanalda farklı çaplarda yer altı mekanik boru hatlarının döşenmesi",
    title: "Yer Altı Hat Güzergâhı",
    category: "Altyapı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-32.jpeg",
    alt: "Bina bağlantı noktasında çoklu mekanik boru hatları ve dikey çıkışlar",
    title: "Mekanik Hat Bağlantıları",
    category: "Altyapı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-33.jpeg",
    alt: "Uzun mesafeli açık kanalda metal kaplamalı yer altı mekanik boru hatları",
    title: "Ana Dağıtım Güzergâhı",
    category: "Altyapı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-34.jpeg",
    alt: "Açık kanalda metal kaplamalı borular, dirsekler ve saha bağlantıları",
    title: "İzolasyonlu Altyapı Hatları",
    category: "İzolasyon",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-35.jpeg",
    alt: "Binalar arasındaki açık kanalda yer altı mekanik hatlarının saha uygulaması",
    title: "Binalar Arası Hat Uygulaması",
    category: "Saha Uygulaması",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-36.jpeg",
    alt: "Betonarme yapıda tavan altı atık su boruları, branşmanlar ve askı elemanları",
    title: "Tavan Altı Atık Su Tesisatı",
    category: "Sıhhi Tesisat",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-37.jpeg",
    alt: "İnşaat halindeki yapıda tavan altı sıhhi tesisat boruları ve çoklu branşman bağlantıları",
    title: "Sıhhi Tesisat Branşmanları",
    category: "Sıhhi Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-38.jpeg",
    alt: "Büyük çaplı çelik kollektör üzerinde flanşlı branşmanların saha imalatı",
    title: "Çelik Kollektör İmalatı",
    category: "Atölye İmalatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-39.jpeg",
    alt: "Mekanik tesisat hacminde büyük çaplı çelik borular, pompalar ve montaj hazırlığı",
    title: "Pompa Hattı Montaj Hazırlığı",
    category: "Saha Uygulaması",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-40.jpeg",
    alt: "Çelik dağıtım kollektörü üzerinde flanşlı branşman bağlantılarının kaynak imalatı",
    title: "Flanşlı Kollektör Kaynağı",
    category: "Atölye İmalatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-41.jpeg",
    alt: "Endüstriyel yapıda yangın kollektörü, kontrol vanaları ve dikey dağıtım hatlarının saha uygulaması",
    title: "Yangın Kollektörü Saha Uygulaması",
    category: "Yangın Tesisatı",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-42.jpeg",
    alt: "Yangın kollektörü üzerinde dikey dağıtım boruları, vana grupları ve basınç göstergeleri",
    title: "Yangın Hatları ve Kontrol Vanaları",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-43.jpeg",
    alt: "Açık kanalda farklı çaplarda ön izolasyonlu yer altı mekanik borularının paralel döşenmesi",
    title: "Ön İzolasyonlu Yer Altı Hatları",
    category: "İzolasyon",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-44.jpeg",
    alt: "Yangın kollektörü, dikey hatlar, alarm vana grupları ve manometrelerin yakın görünümü",
    title: "Alarm Vana ve Manometre Grubu",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-45.jpeg",
    alt: "Yangın pompası, çelik boru hattı ve vana bağlantılarının montaj çalışması",
    title: "Yangın Pompası Montajı",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-46.jpeg",
    alt: "Modüler su deposu önünde yangın pompa sistemi, boru hatları ve saha ekipmanları",
    title: "Yangın Pompa Sistemi Genel Görünüm",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-47.jpeg",
    alt: "Tamamlanmış yangın kollektörü üzerinde alarm vanaları, kontrol ekipmanları ve dikey dağıtım hatları",
    title: "Yangın Alarm Vana İstasyonu",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-48.jpeg",
    alt: "Plakalı eşanjörler, genleşme tankı ve sac kaplamalı izolasyonlu mekanik boru hatları",
    title: "Eşanjör ve İzolasyon Uygulaması",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-49.jpeg",
    alt: "Modüler paslanmaz su deposu, hidrofor pompası, genleşme tankı ve bağlantı boruları",
    title: "Su Deposu ve Hidrofor Bağlantısı",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-50.jpeg",
    alt: "Banyo hacminde sürgülü cam duşakabin ve sıhhi tesisat uygulaması",
    title: "Duşakabin ve Banyo Uygulaması",
    category: "Sıhhi Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-51.jpeg",
    alt: "Duvar tipi yangın dolabı ve düşey besleme hattı montajı",
    title: "Yangın Dolabı Uygulaması",
    category: "Yangın Tesisatı",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-52.jpeg",
    alt: "Banyo hacminde klozet, havlupan ve sıhhi tesisat montajı",
    title: "Banyo Sıhhi Tesisat Montajı",
    category: "Sıhhi Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-53.jpeg",
    alt: "Mekanik tesisat dağıtım kollektörleri, kelebek vanalar, kompansatörler ve manometreler",
    title: "Mekanik Dağıtım Kollektörü",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-54.jpeg",
    alt: "Sıcak ve soğuk kullanım suyu hatlarına ait çok çıkışlı kollektör, vanalar ve boru bağlantıları",
    title: "Kullanım Suyu Dağıtım Kollektörü",
    category: "Sıhhi Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-55.jpeg",
    alt: "Sıcak ve soğuk su sayaçları, kontrol vanaları ve elektronik okuma ekipmanlarının tesisat bağlantısı",
    title: "Su Sayaç ve Kontrol Grubu",
    category: "Sıhhi Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-56.jpeg",
    alt: "Duvar tipi yoğuşmalı kazanlar, baca bağlantıları ve ısıtma dağıtım boruları",
    title: "Yoğuşmalı Kazan Grubu",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-57.jpeg",
    alt: "Teknik hacimde kullanım suyu kollektörleri, plakalı eşanjör ve bağlantı borularının genel görünümü",
    title: "Kullanım Suyu ve Eşanjör Hatları",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-58.jpeg",
    alt: "Teknik hacimde iki kullanım suyu kollektörü, vana grupları ve duvar üstü boru tesisatı",
    title: "Teknik Hacim Kollektörleri",
    category: "Sıhhi Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-59.jpeg",
    alt: "Dik tip sıcak su tankı, genleşme tankı, vanalar ve kullanım suyu boru bağlantıları",
    title: "Sıcak Su Tankı ve Genleşme Grubu",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-60.jpeg",
    alt: "Dik tip sıcak su tankları arasında vana, emniyet ve boru bağlantılarının yakından görünümü",
    title: "Tank Bağlantı ve Emniyet Grubu",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-61.jpeg",
    alt: "Teknik hacimde kullanım suyu kollektörü, vanalar ve duvar üstü boru dağıtım hattı",
    title: "Duvar Üstü Su Dağıtım Hattı",
    category: "Sıhhi Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-62.jpeg",
    alt: "Dik tip sıcak su tankının giriş çıkış vanaları ve sıhhi tesisat bağlantıları",
    title: "Sıcak Su Tankı Bağlantıları",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-63.jpeg",
    alt: "Betonarme pompa odasında büyük çaplı çelik borular, pompalar, vanalar ve saha montaj çalışması",
    title: "Pompa Odası Saha Uygulaması",
    category: "Saha Uygulaması",
    featured: true,
  },
  {
    src: "/mekanik-tesisat-64.jpeg",
    alt: "Tavan altı atık su ve sıhhi tesisat boru hattı, dirsekler ve askı elemanları",
    title: "Tavan Altı Atık Su Hattı",
    category: "Sıhhi Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-65.jpeg",
    alt: "Dış cephe duvar tipi çift pompa grubu, kollektör ve kontrol vanaları",
    title: "Dış Cephe Pompa Grubu",
    category: "Mekanik Tesisat",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-66.jpeg",
    alt: "Kazan dairesinde çoklu pompa istasyonu, baca hattı, lavabo ve duvar üstü tesisat",
    title: "Kazan Dairesi Pompa İstasyonu",
    category: "Kazan Dairesi",
    featured: false,
  },
  {
    src: "/mekanik-tesisat-67.jpeg",
    alt: "Geniş açılı kazan dairesi görünümü, kaynak işçisi, büyük çaplı boru hatları ve depo",
    title: "Kazan Dairesi Genel Görünüm",
    category: "Kazan Dairesi",
    featured: true,
  },
] as const;

export default function RealApplications() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const allMechanical = mechanicalPhotos;
  const spotlightSources = [
    "/mekanik-tesisat-42.jpeg",
    "/mekanik-tesisat-47.jpeg",
    "/mekanik-tesisat-48.jpeg",
  ];
  const spotlightPhotos = spotlightSources.flatMap(src => {
    const photo = allMechanical.find(item => item.src === src);
    return photo ? [photo] : [];
  });
  const archiveMechanical = allMechanical.filter(
    photo => !spotlightSources.includes(photo.src)
  );

  return (
    <>
      <section
        id="gercek-uygulamalar"
        className="bg-[#11130f] py-24 text-white sm:py-32 lg:py-36"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow eyebrow-light">GERÇEK UYGULAMALAR</p>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                Tamamlanmış işlerden{" "}
                <span className="italic text-[#d4b071]">gerçek kareler.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-400 lg:justify-self-end">
              Uygulama kalitesini, malzeme uyumunu ve iç mekân işçiliğini
              gösteren tamamlanmış projelerimizden seçilmiş fotoğraflar.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {interiorPhotos.map(photo => (
              <figure
                key={photo.src}
                className="group relative min-h-[320px] cursor-pointer overflow-hidden sm:min-h-[420px]"
                onClick={() => setLightbox(photo)}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightbox(photo);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${photo.title} fotoğrafını büyüt`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 overflow-hidden p-6 sm:p-8">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#d4b071]">
                      TAMAMLANMIŞ UYGULAMA
                    </p>
                    <h3 className="mt-2 break-words font-display text-2xl font-semibold sm:text-3xl">
                      {photo.title}
                    </h3>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        id="emek-verdigimiz-isler"
        className="bg-[#161814] py-24 text-white sm:py-32 lg:py-36"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow eyebrow-light">EMEK VERDİĞİMİZ İŞLER</p>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                Mekanik tesisat{" "}
                <span className="italic text-[#d4b071]">uygulamaları.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-400 lg:justify-self-end">
              Kazan dairesi kurulumu, baca hattı montajı, pompa ve vana
              grupları, sirkülasyon hatları — sahada gerçekleştirdiğimiz mekanik
              tesisat uygulamalarından kareler.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {spotlightPhotos.map((photo, index) => (
              <figure
                key={photo.src}
                className="group grid cursor-pointer overflow-hidden border border-white/10 bg-[#11130f] md:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]"
                onClick={() => setLightbox(photo)}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightbox(photo);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${photo.title} fotoğrafını büyüt`}
              >
                <div
                  className={`relative min-h-[420px] overflow-hidden bg-black/30 sm:min-h-[560px] ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="lazy"
                  />
                </div>
                <figcaption
                  className={`flex min-h-[210px] flex-col justify-end p-7 sm:p-10 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#d4b071]">
                    ÖNE ÇIKAN UYGULAMA · {photo.category}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    {photo.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-stone-400">
                    Sahadaki uygulama detaylarını tam kadraj ve özgün görüntü
                    kalitesiyle inceleyin.
                  </p>
                  <span className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    Fotoğrafı büyüt
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            {archiveMechanical
              .filter(p => p.featured)
              .slice(0, 2)
              .map(photo => (
                <figure
                  key={photo.src}
                  className="group relative min-h-[340px] cursor-pointer overflow-hidden sm:min-h-[480px]"
                  onClick={() => setLightbox(photo)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightbox(photo);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${photo.title} fotoğrafını büyüt`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#d4b071]">
                      {photo.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                      {photo.title}
                    </h3>
                  </figcaption>
                </figure>
              ))}
          </div>

          {/* Additional featured applications */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {archiveMechanical
              .filter(p => p.featured)
              .slice(2)
              .map(photo => (
                <figure
                  key={photo.src}
                  className={`group relative min-h-[320px] cursor-pointer overflow-hidden sm:min-h-[400px] ${
                    photo.src === "/mekanik-tesisat-14.jpeg"
                      ? "md:col-span-2 md:min-h-[300px]"
                      : ""
                  }`}
                  onClick={() => setLightbox(photo)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightbox(photo);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${photo.title} fotoğrafını büyüt`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#d4b071]">
                      {photo.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                      {photo.title}
                    </h3>
                  </figcaption>
                </figure>
              ))}
          </div>

          {/* Rest: smaller images in grid */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {archiveMechanical
              .filter(p => !p.featured)
              .map(photo => (
                <figure
                  key={photo.src}
                  className="group relative min-h-[260px] cursor-pointer overflow-hidden sm:min-h-[320px]"
                  onClick={() => setLightbox(photo)}
                  onKeyDown={e => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightbox(photo);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${photo.title} fotoğrafını büyüt`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-[#d4b071]">
                      {photo.category}
                    </p>
                    <h3 className="mt-1.5 font-display text-base font-semibold sm:text-lg">
                      {photo.title}
                    </h3>
                  </figcaption>
                </figure>
              ))}
          </div>

          <figure
            className="group relative mt-16 cursor-pointer overflow-hidden border border-white/10 bg-[#11130f] sm:mt-20"
            onClick={() =>
              setLightbox({
                src: "/sahadaki-ekibimiz.jpeg",
                alt: "Çavuşoğlu İnşaat saha ekibinin çalışma alanındaki toplu fotoğrafı",
                title: "Sahadaki Ekibimiz",
              })
            }
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightbox({
                  src: "/sahadaki-ekibimiz.jpeg",
                  alt: "Çavuşoğlu İnşaat saha ekibinin çalışma alanındaki toplu fotoğrafı",
                  title: "Sahadaki Ekibimiz",
                });
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Sahadaki Ekibimiz fotoğrafını büyüt"
          >
            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[620px] lg:min-h-[760px]">
              <img
                src="/sahadaki-ekibimiz.jpeg"
                alt="Çavuşoğlu İnşaat saha ekibinin çalışma alanındaki toplu fotoğrafı"
                className="absolute inset-0 h-full w-full object-cover object-[center_43%] transition-transform duration-700 group-hover:scale-[1.015]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d4b071]">
                SAHADAKİ GÜCÜMÜZ
              </p>
              <h3 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-5xl">
                Emek, tecrübe ve ekip ruhu.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300">
                Uygulamanın her aşamasında sahada birlikte çalışan ekibimiz.
              </p>
            </figcaption>
          </figure>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-center text-xs leading-6 text-stone-500">
              Fotoğraflar, Çavuşoğlu İnşaat ekibinin sahada gerçekleştirdiği
              mekanik tesisat uygulamalarına aittir.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          onKeyDown={e => {
            if (e.key === "Escape") setLightbox(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-2xl text-white/70 transition-colors hover:text-white"
            aria-label="Kapat"
          >
            &times;
          </button>
          <div
            className="relative max-h-[85vh] max-w-5xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[80vh] w-auto object-contain"
            />
            <p className="mt-3 text-center text-sm text-stone-300">
              {lightbox.title}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
