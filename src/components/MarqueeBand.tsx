const items = [
  "MERSİN", "MALATYA", "AMASYA", "İSTANBUL", "TEKİRDAĞ", "KASTAMONU",
  "KONUT", "KAMU", "EĞİTİM", "SAĞLIK", "MEKANİK TESİSAT", "İZOLASYON",
  "RENOVASYON", "ANAHTAR TESLİM", "YAPI MALZEMESİ",
];

export default function MarqueeBand() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[#d4b071]/15 bg-[#191b18] py-4">
      <div className="marquee-track flex w-max gap-8">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-[0.65rem] font-bold tracking-[0.2em] text-[#d4b071]/40"
          >
            {item}
            <span className="ml-8 text-[#d4b071]/20">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
