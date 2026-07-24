import { ShieldCheck, HardHat, Leaf, Award } from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "İş Güvenliği",
    text: "Tüm şantiyelerimizde İSG mevzuatına uygun çalışma koşulları sağlanır; ekipman, eğitim ve denetim süreçleri eksiksiz yürütülür.",
  },
  {
    icon: Award,
    title: "Kalite Yönetimi",
    text: "Malzeme seçiminden uygulamaya kadar her aşamada kalite kontrol prosedürleri izlenir.",
  },
  {
    icon: Leaf,
    title: "Sürdürülebilirlik",
    text: "Enerji verimliliği yüksek malzemeler ve çevre dostu uygulama yöntemleri tercih edilir.",
  },
  {
    icon: HardHat,
    title: "Mesleki Yetkinlik",
    text: "Deneyimli teknik kadro ve sürekli eğitim programlarıyla sahada nitelikli uygulama gücü korunur.",
  },
];

export default function QualityCommitment() {
  return (
    <section className="scroll-reveal bg-[#eee9df] py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <p className="eyebrow">KALİTE VE TAAHHÜT</p>
        <h2 className="mt-6 max-w-lg font-display text-4xl font-medium tracking-[-0.025em] sm:text-5xl">
          Güvenli, kaliteli ve{" "}
          <span className="italic text-[#9b6f2e]">sorumlu çalışma.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-stone-600">
          Her projede iş güvenliği, kalite ve çevre standartlarına uygun çalışma
          taahhüdümüzü koruyoruz.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <article
              key={c.title}
              className="border border-stone-400/40 bg-white/60 p-7 transition-colors hover:bg-white"
            >
              <c.icon
                className="h-7 w-7 text-[#9b6f2e]"
                strokeWidth={1.5}
              />
              <h3 className="mt-8 font-display text-xl font-semibold">
                {c.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
