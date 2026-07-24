import { Building2, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

type BrandedProjectCoverProps = {
  project: Project;
  compact?: boolean;
};

export default function BrandedProjectCover({
  project,
  compact = false,
}: BrandedProjectCoverProps) {
  return (
    <div
      className={`branded-project-cover relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#e8e0d2] text-[#171916] ${
        compact ? "p-5" : "p-7 sm:p-9"
      }`}
    >
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[34px] border-[#1c9ddd]/20" />
      <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border-[42px] border-[#171916]/8" />
      <div className="absolute inset-y-0 right-[16%] w-px bg-[#9b6f2e]/25" />

      <div className="relative flex items-start justify-between gap-5">
        <span className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8d642a]">
          <Building2 className="h-4 w-4" />
          Proje Arşivi
        </span>
        <span className="font-display text-sm italic text-stone-500">
          {project.year ?? "Çavuşoğlu"}
        </span>
      </div>

      <div className="relative">
        <p
          className={`max-w-[90%] font-display font-semibold leading-[1.03] tracking-[-0.025em] ${
            compact ? "text-2xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {project.title}
        </p>
        <p className="mt-4 inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-stone-600">
          <MapPin className="h-4 w-4 text-[#9b6f2e]" />
          {project.location}
        </p>
      </div>
    </div>
  );
}
