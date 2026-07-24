import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailDialog from "@/components/ProjectDetailDialog";
import {
  projects,
  sectorLabels,
  type Project,
  type ProjectSector,
  type ProjectStatus,
} from "@/data/projects";

type StatusFilter = "all" | ProjectStatus;
type SectorFilter = "all" | ProjectSector;

const statusFilters: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "Tüm Durumlar" },
  { value: "ongoing", label: "Devam Eden" },
  { value: "completed", label: "Tamamlanan" },
];

const sectorFilters: { value: SectorFilter; label: string }[] = [
  { value: "all", label: "Tüm Alanlar" },
  ...Object.entries(sectorLabels).map(([value, label]) => ({
    value: value as ProjectSector,
    label,
  })),
];

const INITIAL_PROJECT_COUNT = 8;

export default function ProjectGallery() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [sectorFilter, setSectorFilter] = useState<SectorFilter>("all");
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        project =>
          (statusFilter === "all" || project.status === statusFilter) &&
          (sectorFilter === "all" || project.sector === sectorFilter)
      ),
    [sectorFilter, statusFilter]
  );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_PROJECT_COUNT);

  useEffect(() => {
    setShowAll(false);
  }, [sectorFilter, statusFilter]);

  useEffect(() => {
    const projectId = window.location.hash.slice(1);
    if (!projectId) return;

    const linkedProject = projects.find(project => project.id === projectId);
    if (!linkedProject) return;

    setStatusFilter("all");
    setSectorFilter("all");
    setShowAll(true);
    const scrollToProject = window.setTimeout(() => {
      const target = document.getElementById(linkedProject.id);
      if (!target) return;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - 112;
      window.scrollTo({ top: targetTop, behavior: "auto" });
    }, 150);

    return () => window.clearTimeout(scrollToProject);
  }, []);

  return (
    <section
      id="projeler"
      className="bg-[#191b18] py-24 text-white sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="eyebrow eyebrow-light">SEÇİLMİŞ PORTFÖY</p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[0.98] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              Konuttan kamu yapılarına{" "}
              <span className="italic text-[#d4b071]">uygulama deneyimi.</span>
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-stone-400">
              Türkiye’nin farklı şehirlerinde tamamlanan ve devam eden
              projelerimizi durum ve uygulama alanına göre inceleyin.
            </p>
            <p className="mt-5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#d4b071]">
              {filteredProjects.length} proje gösteriliyor
            </p>
          </div>
        </div>

        <div className="mt-12 border-y border-white/10 py-5">
          <div
            className="flex flex-wrap gap-2"
            aria-label="Projeleri duruma göre filtrele"
          >
            {statusFilters.map(item => (
              <button
                key={item.value}
                type="button"
                onClick={() => setStatusFilter(item.value)}
                aria-pressed={statusFilter === item.value}
                className={`min-h-11 px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.12em] transition-colors ${
                  statusFilter === item.value
                    ? "bg-[#d4b071] text-stone-950"
                    : "border border-white/15 text-stone-300 hover:border-[#d4b071] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            className="mt-3 flex gap-2 overflow-x-auto pb-1"
            aria-label="Projeleri uygulama alanına göre filtrele"
          >
            {sectorFilters.map(item => (
              <button
                key={item.value}
                type="button"
                onClick={() => setSectorFilter(item.value)}
                aria-pressed={sectorFilter === item.value}
                className={`min-h-11 shrink-0 px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.12em] transition-colors ${
                  sectorFilter === item.value
                    ? "border border-[#d4b071] text-[#d4b071]"
                    : "border border-white/10 text-stone-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visibleProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActiveProject}
            />
          ))}
        </div>

        {filteredProjects.length > INITIAL_PROJECT_COUNT ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(current => !current)}
              className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-6 py-4 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#d4b071] hover:text-[#d4b071]"
            >
              {showAll ? (
                <>
                  Portföyü Daralt
                  <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Tüm Portföyü Göster
                  <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        ) : null}

        <p className="mt-8 max-w-3xl text-xs leading-6 text-stone-500">
          Fotoğrafı bulunmayan arşiv kayıtları kurumsal proje kapağıyla
          sunulmuştur. Devam eden projelerde kesin kapsam ve teslim planı proje
          özelinde belirlenir.
        </p>
      </div>

      <ProjectDetailDialog
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
