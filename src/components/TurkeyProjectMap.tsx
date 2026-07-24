const cities: { name: string; cx: number; cy: number; count: number }[] = [
  { name: "Mersin", cx: 394, cy: 298, count: 8 },
  { name: "Adana", cx: 410, cy: 282, count: 2 },
  { name: "Diyarbakır", cx: 502, cy: 240, count: 2 },
  { name: "Malatya", cx: 462, cy: 240, count: 1 },
  { name: "Amasya", cx: 416, cy: 188, count: 1 },
  { name: "Kastamonu", cx: 384, cy: 170, count: 1 },
  { name: "Düzce", cx: 350, cy: 185, count: 1 },
  { name: "Çanakkale", cx: 280, cy: 200, count: 1 },
  { name: "Tekirdağ", cx: 296, cy: 184, count: 1 },
  { name: "İstanbul", cx: 316, cy: 188, count: 3 },
];

export default function TurkeyProjectMap() {
  return (
    <section className="scroll-reveal bg-[#1d201c] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <p className="eyebrow eyebrow-light">PROJE HARİTASI</p>
        <h2 className="mt-6 max-w-lg font-display text-4xl font-medium tracking-[-0.025em] sm:text-5xl">
          Türkiye genelinde{" "}
          <span className="italic text-[#d4b071]">proje ayak izi.</span>
        </h2>

        <div className="mt-14">
          <svg
            viewBox="220 140 360 200"
            className="mx-auto w-full max-w-3xl"
            role="img"
            aria-label="Türkiye haritası üzerinde proje konumları"
          >
            {/* Simplified Turkey outline */}
            <path
              d="M240,210 C250,195 265,188 280,185 L295,182 L310,178 L330,180 L350,182 L365,178 L380,172 L400,170 L420,175 L440,180 L460,178 L480,182 L500,188 L520,195 L540,200 L555,210 L560,225 L555,240 L548,255 L535,268 L520,278 L505,288 L490,295 L475,298 L460,295 L445,292 L430,298 L415,305 L400,308 L385,305 L370,300 L355,298 L340,295 L325,290 L310,285 L295,278 L280,268 L265,255 L255,240 L245,225 Z"
              fill="none"
              stroke="#d4b071"
              strokeWidth="0.8"
              opacity="0.25"
            />

            {/* City dots and labels */}
            {cities.map((city) => (
              <g key={city.name}>
                {/* Pulse ring */}
                <circle
                  cx={city.cx}
                  cy={city.cy}
                  r={city.name === "Mersin" ? 8 : 5}
                  fill="#d4b071"
                  opacity="0.15"
                >
                  <animate
                    attributeName="r"
                    from={city.name === "Mersin" ? "8" : "5"}
                    to={city.name === "Mersin" ? "14" : "10"}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.2"
                    to="0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Dot */}
                <circle
                  cx={city.cx}
                  cy={city.cy}
                  r={city.name === "Mersin" ? 4 : 2.5}
                  fill="#d4b071"
                />
                {/* Label */}
                <text
                  x={city.cx}
                  y={city.cy - (city.name === "Mersin" ? 10 : 7)}
                  textAnchor="middle"
                  className="fill-stone-400 text-[5px] font-semibold uppercase tracking-widest"
                >
                  {city.name}
                </text>
                {/* Count */}
                <text
                  x={city.cx + (city.name === "Mersin" ? 9 : 6)}
                  y={city.cy + 2}
                  className="fill-[#d4b071] text-[4px] font-bold"
                >
                  {city.count}
                </text>
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#d4b071]" />
              <span className="text-xs text-stone-400">Merkez (Mersin)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#d4b071]" />
              <span className="text-xs text-stone-400">Proje konumu</span>
            </div>
            <span className="text-xs font-semibold text-[#d4b071]">
              {cities.reduce((s, c) => s + c.count, 0)}+ proje ·{" "}
              {cities.length} şehir
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
