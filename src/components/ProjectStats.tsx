import { projects, sectorLabels } from "@/data/projects";

export default function ProjectStats() {
  const sectorCounts = projects.reduce(
    (acc, p) => {
      acc[p.sector] = (acc[p.sector] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const cityCounts = projects.reduce(
    (acc, p) => {
      const city = p.location.split("·").pop()?.trim() || p.location;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const topCities = Object.entries(cityCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const maxSectorCount = Math.max(...Object.values(sectorCounts));
  const maxCityCount = Math.max(...topCities.map(([, c]) => c));

  const sectorColors: Record<string, string> = {
    residential: "#d4b071",
    public: "#8b9a6e",
    technical: "#6e8b9a",
    commercial: "#9a6e8b",
  };

  return (
    <section className="scroll-reveal border-y border-stone-200 bg-stone-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <p className="eyebrow">PROJE ANALİZİ</p>
        <h2 className="mt-6 max-w-lg font-display text-4xl font-medium leading-tight sm:text-5xl">
          Portföy <span className="italic text-[#9b6f2e]">özeti</span>
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Sector breakdown */}
          <div>
            <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-stone-500">
              Sektöre Göre Dağılım
            </h3>
            <div className="mt-6 space-y-5">
              {Object.entries(sectorCounts).map(([sector, count]) => (
                <div key={sector}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold">
                      {sectorLabels[sector as keyof typeof sectorLabels] || sector}
                    </span>
                    <span className="font-display text-lg font-semibold text-[#9b6f2e]">
                      {count}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-stone-200">
                    <div
                      className="h-full transition-all duration-700"
                      style={{
                        width: `${(count / maxSectorCount) * 100}%`,
                        backgroundColor: sectorColors[sector] || "#d4b071",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* City breakdown */}
          <div>
            <h3 className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-stone-500">
              Şehre Göre Dağılım
            </h3>
            <div className="mt-6 space-y-5">
              {topCities.map(([city, count]) => (
                <div key={city}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold">{city}</span>
                    <span className="font-display text-lg font-semibold text-[#9b6f2e]">
                      {count}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-stone-200">
                    <div
                      className="h-full bg-[#d4b071] transition-all duration-700"
                      style={{
                        width: `${(count / maxCityCount) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-stone-400">
          Toplam {projects.length} proje · {Object.keys(cityCounts).length} farklı şehir
        </p>
      </div>
    </section>
  );
}
