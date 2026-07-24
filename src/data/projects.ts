export type ProjectStatus = "ongoing" | "completed";

export type ProjectSector =
  "residential" | "public" | "technical" | "commercial";

export type ProjectPhoto = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  location: string;
  status: ProjectStatus;
  sector: ProjectSector;
  category: string;
  description: string;
  facts: string[];
  year?: string;
  coverLabel?: string;
  featured?: boolean;
  photos: ProjectPhoto[];
};

export const projects: Project[] = [
  {
    id: "kuyuluk-tripleks-villalari",
    title: "Kuyuluk Tripleks Villaları",
    location: "Kuyuluk · Mezitli",
    status: "ongoing",
    sector: "residential",
    category: "Villa Projesi",
    description:
      "1.500 m² arsa üzerinde planlanan 5 adet tripleks villadan oluşan çağdaş konut projesi.",
    facts: ["5 villa", "1.500 m² arsa", "Tripleks yaşam"],
    year: "Devam ediyor",
    featured: true,
    photos: [
      {
        src: "/kuyuluk-villa-havadan.jpg",
        alt: "Kuyuluk Tripleks Villaları projesinin havadan görünümü",
      },
      {
        src: "/kuyuluk-villa-cephe.jpg",
        alt: "Kuyuluk Tripleks Villaları projesinin cephe görünümü",
      },
    ],
  },
  {
    id: "cavusoglu-gold",
    title: "Çavuşoğlu Gold",
    location: "Mersin",
    status: "completed",
    sector: "residential",
    category: "Referans Konut Projesi",
    description:
      "3+1, 4+1 ve 5+1 konut seçenekleriyle planlanan projenin ortak alan ve iç mekân uygulamalarından seçilmiş detaylar.",
    facts: ["2015", "3+1, 4+1 ve 5+1", "İç mekân uygulaması"],
    year: "2015",
    featured: true,
    photos: [
      {
        src: "/proje-gercek-koridor.jpg",
        alt: "Çavuşoğlu Gold projesinin tamamlanmış koridor uygulaması",
      },
      {
        src: "/proje-gercek-mutfak.jpg",
        alt: "Çavuşoğlu Gold projesinin tamamlanmış mutfak uygulaması",
      },
    ],
  },
  {
    id: "adana-1000-kisilik-ogrenci-yurdu",
    title: "Adana 1.000 Kişilik Öğrenci Yurdu",
    location: "Sarıçam · Adana",
    status: "completed",
    sector: "technical",
    category: "Mekanik Tesisat ve İzolasyon",
    description:
      "1.000 kişilik öğrenci yurdu projesinin mekanik tesisat ve izolasyon uygulamaları anahtar teslim olarak gerçekleştirildi. Çavuşoğlu İnşaat’ın kapsamı bina yapımı değil, yalnızca bu teknik uygulamalardır.",
    facts: [
      "1.000 kişi kapasite",
      "Mekanik tesisat",
      "İzolasyon",
      "2020 teslim",
    ],
    year: "2020",
    featured: true,
    photos: [
      {
        src: "/adana-balcali-yurt-1.jpg",
        alt: "Adana 1.000 kişilik öğrenci yurdu yerleşkesinin havadan görünümü",
      },
      {
        src: "/adana-balcali-yurt-2.jpg",
        alt: "Adana 1.000 kişilik öğrenci yurdu yerleşkesinin gece görünümü",
      },
      {
        src: "/adana-balcali-yurt-3.jpg",
        alt: "Adana 1.000 kişilik öğrenci yurdu blokları ve peyzaj alanı",
      },
      {
        src: "/adana-balcali-yurt-4.jpg",
        alt: "Adana 1.000 kişilik öğrenci yurdu yerleşkesinin genel görünümü",
      },
    ],
  },
  {
    id: "canakkale-750-kisilik-ogrenci-yurdu",
    title: "Çanakkale 750 Kişilik Öğrenci Yurdu",
    location: "Çanakkale",
    status: "completed",
    sector: "technical",
    category: "Mekanik Tesisat ve İzolasyon",
    description:
      "Yeni Fidan İnşaat yüklenimindeki 750 kişilik öğrenci yurdu projesinin mekanik tesisat ve izolasyon uygulamaları anahtar teslim olarak gerçekleştirildi. Çavuşoğlu İnşaat’ın kapsamı bina yapımı değil, yalnızca bu teknik uygulamalardır.",
    facts: [
      "750 kişi kapasite",
      "Mekanik tesisat",
      "İzolasyon",
      "2018 başlangıç",
    ],
    year: "2018",
    featured: true,
    photos: [
      {
        src: "/canakkale-750-yurt-1.jpg",
        alt: "Çanakkale 750 kişilik öğrenci yurdunun tamamlanmış ön cephesi",
      },
      {
        src: "/canakkale-750-yurt-2.jpg",
        alt: "Çanakkale 750 kişilik öğrenci yurdunun tamamlanmış yan cephesi",
      },
      {
        src: "/canakkale-750-yurt-3.jpg",
        alt: "Çanakkale 750 kişilik öğrenci yurdunun açık alanı",
      },
      {
        src: "/canakkale-750-yurt-4.jpg",
        alt: "Çanakkale 750 kişilik öğrenci yurdunun konferans salonu",
      },
    ],
  },
  {
    id: "duzce-kaynasli-ogrenci-yurdu",
    title: "Düzce Kaynaşlı KYK Öğrenci Yurdu",
    location: "Kaynaşlı · Düzce",
    status: "completed",
    sector: "technical",
    category: "Mekanik Tesisat ve İzolasyon",
    description:
      "Kaynaşlı KYK Öğrenci Yurdu’nun mekanik tesisat ve izolasyon uygulamaları 2017 yılında anahtar teslim olarak gerçekleştirildi. Çavuşoğlu İnşaat’ın kapsamı bina yapımı değil, yalnızca bu teknik uygulamalardır.",
    facts: ["2017 tamamlandı", "Mekanik tesisat", "İzolasyon", "Kaynaşlı"],
    year: "2017",
    photos: [
      {
        src: "/duzce-kaynasli-yurt-1.jpg",
        alt: "Düzce Kaynaşlı KYK Öğrenci Yurdu binasının tamamlanmış dış cephesi",
      },
    ],
  },
  {
    id: "diyarbakir-arastirma-hastanesi-renovasyon",
    title: "Diyarbakır Araştırma Hastanesi Renovasyonu",
    location: "Diyarbakır",
    status: "completed",
    sector: "public",
    category: "Anahtar Teslim Renovasyon",
    description:
      "Araştırma hastanesinin yoğun bakım birimlerinde mekanik tesisat, izolasyon ve yenileme uygulamaları 2023 yılında anahtar teslim olarak gerçekleştirildi.",
    facts: [
      "2023 tamamlandı",
      "Anahtar teslim",
      "Mekanik tesisat",
      "İzolasyon",
    ],
    year: "2023",
    featured: true,
    photos: [
      {
        src: "/diyarbakir-arastirma-hastanesi-renovasyon-1.jpg",
        alt: "Diyarbakır araştırma hastanesinde yenilenen yoğun bakım biriminin iç görünümü",
      },
      {
        src: "/diyarbakir-arastirma-hastanesi-renovasyon-2.jpg",
        alt: "Diyarbakır araştırma hastanesi renovasyonu tamamlanan yoğun bakım alanı",
      },
      {
        src: "/diyarbakir-arastirma-hastanesi-renovasyon-3.jpg",
        alt: "Diyarbakır araştırma hastanesinin yenilenen yoğun bakım ünitesi",
      },
    ],
  },
  {
    id: "diyarbakir-tip-fakultesi-renovasyon",
    title: "Diyarbakır Tıp Fakültesi Renovasyonu",
    location: "Sur · Diyarbakır",
    status: "completed",
    sector: "public",
    category: "Anahtar Teslim Renovasyon",
    description:
      "Dicle Üniversitesi Tıp Fakültesi Hastanesi Üroloji Kliniği’nin dekorasyon, altyapı ve renovasyon uygulamaları 2024 yılında anahtar teslim olarak tamamlandı.",
    facts: [
      "2024 tamamlandı",
      "675 m² klinik",
      "Altyapı yenileme",
      "Anahtar teslim",
    ],
    year: "2024",
    featured: true,
    photos: [
      {
        src: "/diyarbakir-tip-fakultesi-renovasyon-1.jpg",
        alt: "Diyarbakır Tıp Fakültesi Hastanesi renovasyonu tamamlanan klinik alanı",
      },
      {
        src: "/diyarbakir-tip-fakultesi-renovasyon-2.jpg",
        alt: "Diyarbakır Tıp Fakültesi Hastanesi yenilenen hasta odası",
      },
      {
        src: "/diyarbakir-tip-fakultesi-renovasyon-3.jpg",
        alt: "Diyarbakır Tıp Fakültesi Hastanesi yenilenen erişilebilir banyo alanı",
      },
      {
        src: "/diyarbakir-tip-fakultesi-renovasyon-4.jpg",
        alt: "Diyarbakır Tıp Fakültesi Hastanesi renovasyonu tamamlanan hasta odası",
      },
    ],
  },
  {
    id: "diyarbakir-meb-muhtelif-okul-renovasyonlari",
    title: "Diyarbakır MEB Muhtelif Okul Renovasyonları",
    location: "Diyarbakır",
    status: "completed",
    sector: "public",
    category: "Eğitim Yapıları Renovasyonu",
    description:
      "Diyarbakır İl Millî Eğitim Müdürlüğüne bağlı muhtelif eğitim yapılarında dekorasyon ve renovasyon uygulamaları gerçekleştirildi.",
    coverLabel: "Toplu proje arşivi",
    facts: ["Muhtelif okullar", "Dekorasyon", "Renovasyon", "Eğitim yapıları"],
    photos: [
      { src: "/mekanik-tesisat-2.jpg", alt: "Okul kazan dairesi mekanik tesisat uygulaması" },
      { src: "/mekanik-tesisat-6.jpg", alt: "Eğitim yapısı yoğuşmalı kazan sistemi" },
      { src: "/mekanik-tesisat-3.jpg", alt: "Okul sirkülasyon pompa grubu" },
    ],
  },
  {
    id: "diyarbakir-gaffar-okkan-anadolu-lisesi-renovasyon",
    title: "Diyarbakır Gaffar Okkan Anadolu Lisesi Renovasyonu",
    location: "Yenişehir · Diyarbakır",
    status: "completed",
    sector: "public",
    category: "Eğitim Yapıları Renovasyonu",
    description:
      "Gaffar Okkan Anadolu Lisesi’nde dekorasyon ve renovasyon uygulamaları 2023 yılında tamamlandı.",
    coverLabel: "2023 uygulaması",
    facts: ["2023 tamamlandı", "Dekorasyon", "Renovasyon", "Eğitim yapısı"],
    year: "2023",
    photos: [
      { src: "/mekanik-tesisat-1.jpg", alt: "Lise binası baca tesisatı dış görünüm" },
      { src: "/mekanik-tesisat-4.jpg", alt: "Okul mekanik oda tesisat uygulaması" },
    ],
  },
  {
    id: "diyarbakir-gelisim-enstitusu",
    title: "Diyarbakır Gelişim Enstitüsü",
    location: "Diyarbakır",
    status: "completed",
    sector: "public",
    category: "Kurumsal Yapı Uygulaması",
    description:
      "Diyarbakır Gelişim Enstitüsü projesi, 2024 yılı uygulama portföyümüzde yer almaktadır.",
    coverLabel: "2024 uygulaması",
    facts: [
      "2024 tamamlandı",
      "Gelişim Enstitüsü",
      "Kurumsal yapı",
      "Diyarbakır",
    ],
    year: "2024",
    photos: [
      { src: "/mekanik-tesisat-5.jpg", alt: "Enstitü binası baca tesisatı montajı" },
      { src: "/mekanik-tesisat-14.jpeg", alt: "Kurumsal yapı kazan dairesi uygulaması" },
      { src: "/mekanik-tesisat-15.jpeg", alt: "Enstitü mekanik tesisat pompa grubu" },
    ],
  },
  {
    id: "diyarbakir-kaymakamlik-projesi",
    title: "Diyarbakır Kaymakamlık Projesi",
    location: "Diyarbakır",
    status: "ongoing",
    sector: "public",
    category: "Kamu Yapısı Uygulaması",
    description:
      "Diyarbakır Kaymakamlık projesi, 2026 yılı çalışma portföyümüzde yer almaktadır.",
    coverLabel: "2026 projesi",
    facts: ["2026 projesi", "Kaymakamlık", "Kamu yapısı", "Diyarbakır"],
    year: "2026",
    photos: [
      { src: "/mekanik-tesisat-20.jpeg", alt: "Kaymakamlık binası yangın tesisatı" },
      { src: "/mekanik-tesisat-21.jpeg", alt: "Kamu yapısı mekanik tesisat uygulaması" },
      { src: "/mekanik-tesisat-22.jpeg", alt: "Kaymakamlık mekanik oda genel görünüm" },
    ],
  },
  {
    id: "diyarbakir-silvan-koy-okullari-renovasyonu",
    title: "Diyarbakır Silvan Köy Okulları Renovasyonu",
    location: "Silvan · Diyarbakır",
    status: "completed",
    sector: "public",
    category: "Eğitim Yapıları Renovasyonu",
    description:
      "Silvan ilçesindeki köy okullarında dekorasyon ve renovasyon uygulamaları 2025 yılında tamamlandı.",
    coverLabel: "2025 uygulaması",
    facts: ["2025 tamamlandı", "Köy okulları", "Dekorasyon", "Renovasyon"],
    year: "2025",
    photos: [
      { src: "/mekanik-tesisat-25.jpeg", alt: "Köy okulu yangın söndürme boru hattı" },
      { src: "/mekanik-tesisat-26.jpeg", alt: "Okul renovasyon mekanik tesisat" },
      { src: "/mekanik-tesisat-27.jpeg", alt: "Eğitim yapısı tesisat uygulaması" },
    ],
  },
  {
    id: "diyarbakir-adli-tip-onarimi",
    title: "Diyarbakır Adli Tıp Kurumu Onarımı",
    location: "Yenişehir · Diyarbakır",
    status: "ongoing",
    sector: "public",
    category: "Kamu Yapısı Onarımı",
    description:
      "Diyarbakır Adli Tıp Kurumu’ndaki onarım uygulamaları, 2026 yılı çalışma portföyümüzde yer almaktadır.",
    coverLabel: "2026 onarım",
    facts: ["2026 devam ediyor", "Adli Tıp Kurumu", "Onarım", "Kamu yapısı"],
    year: "2026",
    photos: [
      { src: "/mekanik-tesisat-30.jpeg", alt: "Adli Tıp Kurumu mekanik tesisat onarımı" },
      { src: "/mekanik-tesisat-31.jpeg", alt: "Kamu binası yangın tesisatı uygulaması" },
      { src: "/mekanik-tesisat-32.jpeg", alt: "Onarım projesi boru hattı montajı" },
    ],
  },
  {
    id: "diyarbakir-cinar-yari-olimpik-yuzme-havuzu",
    title: "Diyarbakır Çınar Yarı Olimpik Kapalı Yüzme Havuzu",
    location: "Çınar · Diyarbakır",
    status: "completed",
    sector: "public",
    category: "Anahtar Teslim Spor Tesisi",
    description:
      "Çınar ilçesindeki yarı olimpik kapalı yüzme havuzunun yapım ve uygulama işleri 2023 yılında anahtar teslim olarak gerçekleştirildi.",
    facts: [
      "2023 tamamlandı",
      "Anahtar teslim",
      "Yarı olimpik",
      "Kapalı yüzme havuzu",
    ],
    year: "2023",
    featured: true,
    photos: [
      {
        src: "/diyarbakir-cinar-yuzme-havuzu-1.jpg",
        alt: "Diyarbakır Çınar yarı olimpik kapalı yüzme havuzunun tamamlanmış dış cephesi",
      },
      {
        src: "/diyarbakir-cinar-yuzme-havuzu-2.jpg",
        alt: "Diyarbakır Çınar yarı olimpik kapalı yüzme havuzunun kullanımdaki iç görünümü",
      },
      {
        src: "/diyarbakir-cinar-yuzme-havuzu-3.jpg",
        alt: "Diyarbakır Çınar yarı olimpik kapalı yüzme havuzunun kulvarları",
      },
    ],
  },
  {
    id: "kastamonu-1000-kisilik-ogrenci-yurdu",
    title: "Kastamonu 1.000 Kişilik Öğrenci Yurdu",
    location: "Merkez · Kastamonu",
    status: "completed",
    sector: "technical",
    category: "Mekanik Tesisat ve İzolasyon",
    description:
      "Yeni Fidan İnşaat yüklenimindeki 1.000 kişilik öğrenci yurdu projesinin mekanik tesisat ve izolasyon uygulamaları anahtar teslim olarak gerçekleştirildi. Çavuşoğlu İnşaat’ın kapsamı bina yapımı değil, yalnızca bu teknik uygulamalardır.",
    facts: [
      "1.000 kişi kapasite",
      "Mekanik tesisat",
      "İzolasyon",
      "2019 başlangıç",
    ],
    year: "2019",
    photos: [
      {
        src: "/kastamonu-1000-yurt-1.jpg",
        alt: "Kastamonu 1.000 kişilik öğrenci yurdu yerleşkesinin resmî proje görünümü",
      },
      {
        src: "/kastamonu-1000-yurt-2.jpg",
        alt: "Kastamonu 1.000 kişilik öğrenci yurdu sosyal tesisinin resmî proje görünümü",
      },
      {
        src: "/kastamonu-1000-yurt-3.jpg",
        alt: "Kastamonu 1.000 kişilik öğrenci yurdu blokları ve yönetim merkezinin resmî proje görünümü",
      },
    ],
  },
  {
    id: "istanbul-besiktas-2000-kisilik-ogrenci-yurdu",
    title: "İstanbul Beşiktaş 2.000 Kişilik Öğrenci Yurdu",
    location: "Maçka · Beşiktaş · İstanbul",
    status: "completed",
    sector: "technical",
    category: "Mekanik Tesisat ve İzolasyon",
    description:
      "Yeni Fidan İnşaat ve Azizcan iş ortaklığındaki 2.000 kişilik öğrenci yurdu projesinin mekanik tesisat ve izolasyon uygulamaları anahtar teslim olarak gerçekleştirildi. Çavuşoğlu İnşaat’ın kapsamı bina yapımı değil, yalnızca bu teknik uygulamalardır.",
    facts: [
      "2.000 kişi kapasite",
      "Mekanik tesisat",
      "İzolasyon",
      "2019 başlangıç",
    ],
    year: "2019",
    featured: true,
    photos: [
      {
        src: "/istanbul-besiktas-yurt-1.jpg",
        alt: "İstanbul Beşiktaş 2.000 kişilik öğrenci yurdu bloklarının yapım aşaması",
      },
      {
        src: "/istanbul-besiktas-yurt-2.jpg",
        alt: "İstanbul Beşiktaş öğrenci yurdu mekanik uygulamalarının sürdüğü yapım aşaması",
      },
      {
        src: "/istanbul-besiktas-yurt-3.jpg",
        alt: "İstanbul Beşiktaş 2.000 kişilik öğrenci yurdunun resmî proje görünümü",
      },
      {
        src: "/istanbul-besiktas-yurt-4.jpg",
        alt: "İstanbul Beşiktaş öğrenci yurdu blokları arasındaki sosyal alanın resmî proje görünümü",
      },
    ],
  },
  {
    id: "tekirdag-1500-kisilik-ogrenci-yurdu",
    title: "Tekirdağ 1.500 Kişilik Öğrenci Yurdu",
    location: "Süleymanpaşa · Tekirdağ",
    status: "completed",
    sector: "technical",
    category: "Mekanik Tesisat ve İzolasyon",
    description:
      "Yeni Fidan İnşaat yüklenimindeki 1.500 kişilik öğrenci yurdu projesinin mekanik tesisat ve izolasyon uygulamaları anahtar teslim olarak gerçekleştirildi. Çavuşoğlu İnşaat’ın kapsamı bina yapımı değil, yalnızca bu teknik uygulamalardır.",
    facts: [
      "1.500 kişi kapasite",
      "Mekanik tesisat",
      "İzolasyon",
      "Süleymanpaşa",
    ],
    photos: [
      {
        src: "/tekirdag-1500-yurt-1.jpg",
        alt: "Tekirdağ 1.500 kişilik öğrenci yurdunun resmî proje görünümü",
      },
      {
        src: "/tekirdag-1500-yurt-2.jpg",
        alt: "Tekirdağ 1.500 kişilik öğrenci yurdu bloklarının resmî proje görünümü",
      },
      {
        src: "/tekirdag-1500-yurt-3.jpg",
        alt: "Tekirdağ öğrenci yurdu spor ve sosyal alanlarının resmî proje görünümü",
      },
      {
        src: "/tekirdag-1500-yurt-4.jpg",
        alt: "Tekirdağ 1.500 kişilik öğrenci yurdu yerleşkesinin resmî proje görünümü",
      },
    ],
  },
  {
    id: "malatya-hekimhan-553-konut",
    title: "Malatya Hekimhan 553 Konut",
    location: "Fatih Mahallesi · Hekimhan · Malatya",
    status: "completed",
    sector: "residential",
    category: "Anahtar Teslim Renovasyon",
    description:
      "TOKİ Hekimhan 553 Konut Projesi kapsamındaki dekorasyon ve renovasyon uygulamaları 2025 yılında anahtar teslim olarak tamamlandı.",
    facts: [
      "553 konut",
      "2025 tamamlandı",
      "Anahtar teslim",
      "Dekorasyon ve renovasyon",
    ],
    year: "2025",
    featured: true,
    photos: [
      {
        src: "/malatya-hekimhan-553-konut-1.png",
        alt: "Malatya Hekimhan 553 Konut Projesi'nin tamamlanmış yerleşke görünümü",
      },
      {
        src: "/malatya-hekimhan-553-konut-2.jpg",
        alt: "Malatya Hekimhan 553 Konut Projesi bloklarının yapım aşaması",
      },
      {
        src: "/malatya-hekimhan-553-konut-3.jpg",
        alt: "Malatya Hekimhan 553 Konut Projesi'nin havadan görünümü",
      },
      {
        src: "/malatya-hekimhan-553-konut-4.jpg",
        alt: "Malatya Hekimhan 553 Konut Projesi bloklarının genel görünümü",
      },
    ],
  },
  {
    id: "diyarbakir-5n1k-kat-karsiligi-konut",
    title: "Diyarbakır 5N1K Kat Karşılığı Konut",
    location: "Diyarbakır",
    status: "completed",
    sector: "residential",
    category: "Kat Karşılığı Yap-Sat",
    description:
      "5N1K İnşaat ile daire karşılığı yap-sat modeliyle gerçekleştirilen konut projesi 2024 yılında tamamlandı.",
    coverLabel: "Proje arşivi",
    facts: ["2024 tamamlandı", "Daire karşılığı", "Yap-sat", "Konut projesi"],
    year: "2024",
    photos: [
      { src: "/mekanik-tesisat-55.jpeg", alt: "Konut projesi banyo uygulaması" },
      { src: "/mekanik-tesisat-56.jpeg", alt: "Daire iç mekan tesisat detayı" },
      { src: "/mekanik-tesisat-57.jpeg", alt: "Konut ısıtma kollektör montajı" },
    ],
  },
  {
    id: "diyarbakir-muhtelif-yapsat-konut-projeleri",
    title: "Diyarbakır Muhtelif Yap-Sat Konut Projeleri",
    location: "Diyarbakır",
    status: "completed",
    sector: "residential",
    category: "Anahtar Teslim Yap-Sat",
    description:
      "Diyarbakır’ın farklı bölgelerinde kat ve daire karşılığı yap-sat modeliyle muhtelif konut projeleri anahtar teslim olarak gerçekleştirildi.",
    coverLabel: "Toplu proje arşivi",
    facts: ["Muhtelif projeler", "Yap-sat", "Kat karşılığı", "Anahtar teslim"],
    photos: [
      { src: "/mekanik-tesisat-58.jpeg", alt: "Konut projesi sıhhi tesisat uygulaması" },
      { src: "/mekanik-tesisat-59.jpeg", alt: "Anahtar teslim konut mekanik tesisat" },
      { src: "/mekanik-tesisat-60.jpeg", alt: "Yap-sat konut iç mekan detayı" },
    ],
  },
  {
    id: "amasya-suluova-256-konut",
    title: "Amasya Suluova 256 Konut",
    location: "Borsa Mahallesi · Suluova · Amasya",
    status: "ongoing",
    sector: "residential",
    category: "Anahtar Teslim Konut Uygulamaları",
    description:
      "Suluova 4. Etap TOKİ Projesi kapsamındaki 256 konut ve 6 dükkânda anahtar teslim uygulamalar devam ediyor. Proje 2026 yılında test ve devreye alma aşamasındadır.",
    facts: ["256 konut", "6 dükkân", "Test aşaması", "Anahtar teslim"],
    year: "2026",
    featured: true,
    photos: [
      {
        src: "/amasya-suluova-256-konut-1.webp",
        alt: "Amasya Suluova 4. Etap TOKİ 256 Konut Projesi bloklarının yapım aşaması",
      },
      {
        src: "/amasya-suluova-256-konut-2.jpg",
        alt: "Amasya Suluova 4. Etap TOKİ 256 Konut Projesi blok görünümü",
      },
    ],
  },
  {
    id: "diyarbakir-nevada-coffee-central",
    title: "Diyarbakır Nevada Coffee Central",
    location: "Kayapınar · Diyarbakır",
    status: "completed",
    sector: "commercial",
    category: "Anahtar Teslim Ticari Mekân",
    description:
      "Nevada Coffee Central Diyarbakır şubesinin ticari mekân uygulamaları 2024 yılında anahtar teslim olarak tamamlandı.",
    facts: [
      "2024 tamamlandı",
      "Anahtar teslim",
      "Ticari mekân",
      "Kafe uygulaması",
    ],
    year: "2024",
    featured: true,
    photos: [
      {
        src: "/diyarbakir-nevada-coffee-1.jpg",
        alt: "Diyarbakır Nevada Coffee Central şubesinin dış cephe ve açık alan görünümü",
      },
      {
        src: "/diyarbakir-nevada-coffee-2.jpg",
        alt: "Diyarbakır Nevada Coffee Central şubesinin tamamlanmış girişi",
      },
      {
        src: "/diyarbakir-nevada-coffee-3.jpg",
        alt: "Diyarbakır Nevada Coffee Central şubesinin iç mekân görünümü",
      },
    ],
  },
  {
    id: "cavusoglu-21",
    title: "Çavuşoğlu 21",
    location: "Tece · Mersin",
    status: "completed",
    sector: "residential",
    category: "Konut Projesi",
    description:
      "Tece sahilinde gerçekleştirilen ve yapım aşamalarının ardından oturuma hazır hâle getirilen konut projesi.",
    facts: ["Tamamlandı", "Tece sahili", "Konut"],
    featured: true,
    photos: [
      {
        src: "/tece-projesi-1.jpg",
        alt: "Çavuşoğlu 21 projesinin tamamlanmış ön cephesi",
      },
      {
        src: "/tece-projesi-2.jpg",
        alt: "Çavuşoğlu 21 projesinin tamamlanmış giriş cephesi",
      },
      {
        src: "/tece-projesi-3.jpg",
        alt: "Çavuşoğlu 21 projesinin tamamlanmış yan cephesi",
      },
    ],
  },
  {
    id: "tece-havuzlu-konut-projesi",
    title: "Tece Havuzlu Konut Projesi",
    location: "Mezitli · Tece",
    status: "completed",
    sector: "residential",
    category: "Sosyal Donatılı Konut",
    description:
      "Yüzme havuzu, çocuk oyun alanı, açık otopark, jeneratör ve çift asansör özellikleriyle tamamlanan konut projesi.",
    facts: ["Yüzme havuzu", "Çocuk oyun alanı", "Açık otopark"],
    featured: true,
    photos: [
      {
        src: "/tece-havuzlu-proje-1.jpg",
        alt: "Tece havuzlu konut projesinin giriş cephesi",
      },
      {
        src: "/tece-havuzlu-proje-2.jpg",
        alt: "Tece havuzlu konut projesinin ön cephesi",
      },
      {
        src: "/tece-havuzlu-proje-3.jpg",
        alt: "Tece havuzlu konut projesinin yan cephesi",
      },
      {
        src: "/tece-havuzlu-proje-4.jpg",
        alt: "Tece havuzlu konut projesinin yüzme havuzu",
      },
      {
        src: "/tece-havuzlu-proje-5.jpg",
        alt: "Tece havuzlu konut projesinin çocuk oyun alanı",
      },
    ],
  },
];

export const statusLabels: Record<ProjectStatus, string> = {
  ongoing: "Devam Ediyor",
  completed: "Tamamlandı",
};

export const sectorLabels: Record<ProjectSector, string> = {
  residential: "Konut",
  public: "Kamu · Eğitim · Sağlık",
  technical: "Yurt · Mekanik",
  commercial: "Ticari Mekân",
};
