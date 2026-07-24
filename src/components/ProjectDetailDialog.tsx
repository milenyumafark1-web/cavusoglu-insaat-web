import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, Share2, Check } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import BrandedProjectCover from "@/components/BrandedProjectCover";
import type { Project } from "@/data/projects";
import { statusLabels } from "@/data/projects";

type ProjectDetailDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetailDialog({
  project,
  onClose,
}: ProjectDetailDialogProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const hasPhotos = Boolean(project?.photos.length);
  const activeImage = project?.photos[activeImageIndex];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  const showPreviousImage = useCallback(() => {
    if (!project?.photos.length) return;
    setActiveImageIndex(current =>
      current === 0 ? project.photos.length - 1 : current - 1
    );
  }, [project]);

  const showNextImage = useCallback(() => {
    if (!project?.photos.length) return;
    setActiveImageIndex(current =>
      current === project.photos.length - 1 ? 0 : current + 1
    );
  }, [project]);

  useEffect(() => {
    if (!project || project.photos.length < 2) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, showNextImage, showPreviousImage]);

  const openContact = () => {
    if (!project) return;
    onClose();
    window.location.hash = `iletisim?proje=${encodeURIComponent(project.title)}`;
  };

  return (
    <Dialog
      open={Boolean(project)}
      onOpenChange={open => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="h-[calc(100svh-7rem)] w-[calc(100vw-1rem)] max-w-6xl gap-0 overflow-hidden border-white/15 bg-[#11130f] p-0 text-white sm:h-[92svh] sm:w-[calc(100vw-2rem)] sm:rounded-none">
        {project ? (
          <div className="flex h-full min-h-0 flex-col xl:grid xl:grid-cols-[1.4fr_0.6fr]">
            <div className="relative flex h-[36svh] min-h-[13rem] shrink-0 items-center justify-center overflow-hidden bg-black sm:h-[43svh] sm:min-h-[16rem] xl:h-full xl:min-h-0">
              {activeImage ? (
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="h-full w-full object-contain"
                />
              ) : (
                <BrandedProjectCover project={project} />
              )}
              {hasPhotos ? (
                <span className="absolute left-4 top-4 bg-black/70 px-3 py-2 text-[0.65rem] font-bold tracking-[0.12em] backdrop-blur-sm">
                  {activeImageIndex + 1} / {project.photos.length}
                </span>
              ) : null}
              {project.photos.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 bg-black/65 text-white transition-colors hover:border-[#d4b071] hover:bg-[#d4b071] hover:text-stone-950"
                    aria-label="Önceki fotoğraf"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 bg-black/65 text-white transition-colors hover:border-[#d4b071] hover:bg-[#d4b071] hover:text-stone-950"
                    aria-label="Sonraki fotoğraf"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto p-5 pb-24 sm:p-8 sm:pb-24 xl:p-10">
              <DialogHeader>
                <p className="text-left text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#d4b071]">
                  {statusLabels[project.status]} · {project.location}
                </p>
                <DialogTitle className="pt-2 text-left font-display text-2xl font-semibold leading-tight sm:pt-3 sm:text-3xl">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="pt-2 text-left text-sm leading-6 text-stone-400 sm:pt-3 sm:leading-7">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-5 border-l-2 border-[#d4b071] pl-4">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-stone-500">
                  Uygulama kapsamı
                </p>
                <p className="mt-1 text-sm font-semibold text-stone-200">
                  {project.category}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-7">
                {project.facts.map(fact => (
                  <span
                    key={fact}
                    className="border border-white/10 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-stone-300"
                  >
                    {fact}
                  </span>
                ))}
              </div>

              {project.photos.length > 1 ? (
                <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8">
                  {project.photos.map((photo, index) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      aria-label={`${index + 1}. fotoğrafı görüntüle`}
                      aria-current={activeImageIndex === index}
                      className={`aspect-square overflow-hidden border-2 ${
                        activeImageIndex === index
                          ? "border-[#d4b071]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                onClick={openContact}
                className="mt-6 flex items-center justify-between bg-[#d4b071] px-5 py-4 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-stone-950 sm:mt-8"
              >
                Benzer Bir Projeyi Konuşalım
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const url = `${window.location.origin}/#projeler?proje=${project.id}`;
                  if (navigator.share) {
                    navigator.share({ title: project.title, url }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(url).then(() => {
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }).catch(() => {});
                  }
                }}
                className="mt-3 flex w-full items-center justify-center gap-2 border border-white/15 px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-stone-400 transition-colors hover:text-[#d4b071]"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
                {copied ? "Link kopyalandı" : "Projeyi Paylaş"}
              </button>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
