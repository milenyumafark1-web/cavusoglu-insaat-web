export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#191b18] px-5 text-center text-stone-50">
      <div>
        <p className="eyebrow eyebrow-light justify-center">SAYFA BULUNAMADI</p>
        <h1 className="mt-7 font-display text-8xl font-semibold text-[#d4b071]">
          404
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-stone-400">
          Aradığınız sayfa kaldırılmış, taşınmış veya hiç var olmamış olabilir.
        </p>
        <a
          href="/"
          className="mt-9 inline-flex border border-white/25 px-7 py-4 text-xs font-bold tracking-[0.16em] transition-colors hover:border-[#d4b071] hover:bg-[#d4b071] hover:text-stone-950"
        >
          ANA SAYFAYA DÖN
        </a>
      </div>
    </div>
  );
}
