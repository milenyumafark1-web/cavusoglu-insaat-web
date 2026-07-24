import { ClipboardCheck, Compass, HardHat, Handshake, KeyRound } from "lucide-react";

const steps = [
  {
    icon: Handshake,
    step: "01",
    title: "İhtiyaç Analizi",
    text: "Projenizin kapsamını, beklentilerinizi ve teknik gereksinimleri birlikte belirliyoruz.",
  },
  {
    icon: Compass,
    step: "02",
    title: "Planlama ve Teklif",
    text: "Uygulama planı, maliyet analizi ve iş programını şeffaf biçimde sunuyoruz.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Saha Uygulaması",
    text: "Deneyimli ekibimizle imalat, malzeme ve kalite kontrollerini disiplinli yönetiyoruz.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Kontrol ve Test",
    text: "Her aşamada kalite denetimleri yaparak standartlara uygunluğu garantiliyoruz.",
  },
  {
    icon: KeyRound,
    step: "05",
    title: "Teslim",
    text: "Projeyi son kontrol ve teslim prosedürleriyle eksiksiz tamamlıyoruz.",
  },
];

export default function ConstructionProcess() {
  return (
    <section className="scroll-reveal bg-[#191b18] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <p className="eyebrow eyebrow-light">PROJE SÜRECİ</p>
        <h2 className="mt-6 max-w-xl font-display text-4xl font-medium leading-tight sm:text-5xl">
          Teklif'ten teslime,{" "}
          <span className="italic text-[#d4b071]">adım adım.</span>
        </h2>

        <div className="mt-16 grid gap-0 sm:mt-20 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.step} className="group relative flex flex-col items-center text-center">
              {/* Connector line - hidden on first item and on mobile */}
              {i > 0 && (
                <div className="absolute left-0 top-7 hidden h-px w-full bg-gradient-to-r from-[#d4b071]/40 to-transparent lg:block" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-[#d4b071]/30 bg-[#1b1d1a] transition-colors group-hover:border-[#d4b071]">
                <s.icon className="h-6 w-6 text-[#d4b071]" strokeWidth={1.5} />
              </div>

              {/* Step number */}
              <span className="mt-5 text-[0.6rem] font-bold tracking-[0.25em] text-[#d4b071]/50">
                ADIM {s.step}
              </span>

              {/* Title */}
              <h3 className="mt-3 font-display text-lg font-semibold">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[220px] text-xs leading-6 text-stone-400">
                {s.text}
              </p>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="my-6 h-8 w-px bg-gradient-to-b from-[#d4b071]/30 to-transparent lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
