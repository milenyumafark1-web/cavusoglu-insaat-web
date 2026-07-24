const milestones = [
  {
    year: "2015",
    title: "Kuruluş",
    text: "Çavuşoğlu İnşaat, Mehmet Çankara tarafından Mersin'de kuruldu.",
  },
  {
    year: "2015–2023",
    title: "Güneydoğu Anadolu Malzeme Temini",
    text: "Bölgedeki il ve ilçelere 8 yıl boyunca yapı malzemesi temin edildi.",
  },
  {
    year: "2017",
    title: "İlk Büyük Mekanik Tesisat Projesi",
    text: "Düzce Kaynaşlı KYK Öğrenci Yurdu mekanik tesisat ve izolasyon uygulaması tamamlandı.",
  },
  {
    year: "2018",
    title: "Çanakkale Yurt Projesi",
    text: "750 kişilik öğrenci yurdu mekanik tesisat uygulaması başlatıldı.",
  },
  {
    year: "2020",
    title: "Adana 1.000 Kişilik Yurt",
    text: "Adana Sarıçam'da 1.000 kişilik öğrenci yurdu mekanik tesisat ve izolasyon uygulaması teslim edildi.",
  },
  {
    year: "2023",
    title: "Sağlık Yapıları Deneyimi",
    text: "Diyarbakır Araştırma Hastanesi renovasyon uygulaması anahtar teslim olarak gerçekleştirildi.",
  },
  {
    year: "2024",
    title: "Portföy Genişlemesi",
    text: "Tıp Fakültesi renovasyonu, olimpik yüzme havuzu ve Amasya konut projesi portföye eklendi.",
  },
  {
    year: "2025–2026",
    title: "Günümüz",
    text: "Konut, kamu, eğitim ve sağlık yapılarında aktif proje yönetimi devam ediyor.",
  },
];

export default function Timeline() {
  return (
    <section className="scroll-reveal bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <p className="eyebrow">YOLCULUĞUMUZ</p>
        <h2 className="mt-6 font-display text-4xl font-medium tracking-[-0.025em] sm:text-5xl">
          2015'ten bugüne{" "}
          <span className="italic text-[#9b6f2e]">kilometre taşları.</span>
        </h2>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-stone-300 sm:left-1/2" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex flex-col sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 z-10 -translate-x-1/2 sm:left-1/2">
                  <div className="h-3 w-3 border-2 border-[#d4b071] bg-stone-50" />
                </div>

                {/* Content */}
                <div
                  className={`ml-10 sm:ml-0 sm:w-1/2 ${
                    i % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:pl-12 sm:text-left"
                  }`}
                >
                  <span className="text-[0.68rem] font-bold tracking-[0.15em] text-[#9b6f2e]">
                    {m.year}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-500">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
