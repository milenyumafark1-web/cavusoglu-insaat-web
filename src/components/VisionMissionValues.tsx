import { Eye, Target, Heart } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vizyon",
    text: "Türkiye'nin farklı şehirlerinde, yapı sektörünün ihtiyaç duyduğu disiplinli uygulama gücünü sürdürülebilir bir büyümeyle taşımak.",
  },
  {
    icon: Target,
    title: "Misyon",
    text: "Her projeye doğru kapsam tanımı, nitelikli malzeme seçimi ve titiz saha yönetimiyle yaklaşarak güvenilir sonuçlar üretmek.",
  },
  {
    icon: Heart,
    title: "Değerler",
    text: "Şeffaflık, söz tutma, işçilik kalitesi ve sahaya saygı — her projede tekrar eden dört temel ilke.",
  },
];

export default function VisionMissionValues() {
  return (
    <section className="scroll-reveal bg-[#1d201c] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <p className="eyebrow eyebrow-light">KURUMSAL YAKLAŞIM</p>
        <h2 className="mt-6 max-w-lg font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] sm:text-5xl">
          Yapıya yön veren{" "}
          <span className="italic text-[#d4b071]">ilkelerimiz.</span>
        </h2>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="bg-[#1d201c] p-8 transition-colors hover:bg-[#252822] sm:p-10"
            >
              <card.icon
                className="h-8 w-8 text-[#d4b071]"
                strokeWidth={1.5}
              />
              <h3 className="mt-10 font-display text-2xl font-semibold sm:text-3xl">
                {card.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-stone-400">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
