import { Boxes, Building2, HeartPulse, Landmark, School } from "lucide-react";

const experienceAreas = [
  {
    icon: School,
    title: "Eğitim Yapıları",
    detail: "Okul, fakülte ve öğrenci yurdu uygulamaları",
  },
  {
    icon: HeartPulse,
    title: "Sağlık Yapıları",
    detail: "Hastane, klinik ve teknik altyapı yenilemeleri",
  },
  {
    icon: Landmark,
    title: "Kamu Yapıları",
    detail: "Kurum binaları, onarım ve renovasyon işleri",
  },
  {
    icon: Building2,
    title: "Konut ve Ticari Mekân",
    detail: "Anahtar teslim yapım ve iç mekân uygulamaları",
  },
  {
    icon: Boxes,
    title: "Malzeme Temini",
    detail: "Güneydoğu Anadolu il ve ilçelerinde 8 yıllık deneyim",
  },
] as const;

const institutions = [
  "T.C. Millî Eğitim Bakanlığı yapıları",
  "T.C. Sağlık Bakanlığı yapıları",
  "T.C. Millî Savunma Bakanlığı yapıları",
  "T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı projeleri",
  "Diğer kamu kurum ve kuruluşları",
] as const;

export default function ExperienceSection() {
  return (
    <section
      id="kurumsal-deneyim"
      className="border-y border-stone-200 bg-[#f1ede5] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">UYGULAMA DENEYİMİ</p>
            <h2 className="mt-6 max-w-lg font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] sm:text-5xl">
              Farklı sektörlerde{" "}
              <span className="italic text-[#9b6f2e]">
                aynı çalışma disiplini.
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-stone-600">
              Konuttan kamu yapılarına, mekanik tesisattan renovasyona kadar
              üstlenilen her işte kapsamı doğru tanımlayan ve sahayı titizlikle
              yöneten bir uygulama yaklaşımı.
            </p>
          </div>

          <div className="grid border-l border-t border-stone-300 sm:grid-cols-2">
            {experienceAreas.map((area, index) => (
              <article
                key={area.title}
                className={`border-b border-r border-stone-300 p-6 sm:p-8 ${
                  index === experienceAreas.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <area.icon
                  className="h-6 w-6 text-[#9b6f2e]"
                  strokeWidth={1.5}
                />
                <h3 className="mt-8 font-display text-2xl font-semibold">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {area.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-stone-300">
          <p className="py-5 text-[0.62rem] font-bold uppercase tracking-[0.17em] text-stone-500">
            Proje portföyünde yer alan kamu kurumu yapı türleri
          </p>
          <div className="grid border-l border-t border-stone-300 sm:grid-cols-2 lg:grid-cols-5">
            {institutions.map((institution, index) => (
              <div
                key={institution}
                className="border-b border-r border-stone-300 p-5 lg:min-h-40"
              >
                <span className="font-display text-sm italic text-[#9b6f2e]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 font-display text-lg font-semibold leading-snug">
                  {institution}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-7 max-w-4xl text-xs leading-6 text-stone-500">
          Kurum adları, portföyde bulunan yapı ve uygulama türlerini ifade eder;
          resmî çözüm ortaklığı, sürekli tedarikçilik veya kurum onayı anlamına
          gelmez.
        </p>
      </div>
    </section>
  );
}
