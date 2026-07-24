import { useState } from "react";
import { ArrowRight, Building2, Images, MapPin } from "lucide-react";
import BrandedProjectCover from "@/components/BrandedProjectCover";
import type { Project } from "@/data/projects";
import { statusLabels } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hasPhotos = project.photos.length > 0;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <article
      id={project.id}
      className="project-card group overflow-hidden border border-white/10 bg-[#22251f]"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block aspect-[4/3] w-full overflow-hidden text-left"
        aria-label={`${project.title} proje detayını aç`}
      >
        {/* Always show branded cover as background/placeholder */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            hasPhotos && imgLoaded && !imgError ? "opacity-0" : "opacity-100"
          }`}
        >
          <BrandedProjectCover project={project} />
        </div>

        {/* Actual photo on top */}
        {hasPhotos && !imgError && (
          <img
            src={project.photos[0].src}
            alt={project.photos[0].alt}
            className={`relative h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.035] ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}

        <span className="absolute left-5 top-5 bg-[#d4b071] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.13em] text-stone-950">
          {statusLabels[project.status]}
        </span>
        <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 bg-black/75 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          <Images className="h-4 w-4 text-[#d4b071]" />
          {hasPhotos
            ? (project.coverLabel ?? `${project.photos.length} fotoğraf`)
            : (project.coverLabel ?? "Proje bilgisi")}
        </span>
      </button>

      <div className="flex min-h-[25rem] flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#d4b071]">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-2 text-stone-400">
            <Building2 className="h-4 w-4" />
            {project.category}
          </span>
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold leading-tight">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-stone-400">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.facts.slice(0, 4).map(fact => (
            <span
              key={fact}
              className="border border-white/10 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-stone-300"
            >
              {fact}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-auto inline-flex items-center gap-3 pt-8 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white"
        >
          Projeyi İncele
          <ArrowRight className="h-4 w-4 text-[#d4b071] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </article>
  );
}
