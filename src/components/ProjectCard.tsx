import { ExternalLink, Github, ImageOff } from "lucide-react";
import type { Project } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

function LinkOrDisabled({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm text-paper-dim"
        title="Add this link in src/data/portfolio.ts"
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-paper transition-colors duration-200 hover:text-brass"
    >
      {children}
    </a>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group overflow-hidden rounded-lg border border-ink-border bg-ink-elevated/40 transition-colors duration-300 hover:border-brass/40">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-border">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
            />
          ) : (
            <div
              className="flex h-full w-full flex-col items-center justify-center gap-2 text-paper-dim"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(201,160,99,0.06) 0px, rgba(201,160,99,0.06) 1px, transparent 1px, transparent 14px)",
              }}
            >
              <ImageOff size={20} />
              <span className="text-xs">Screenshot placeholder — add an image</span>
            </div>
          )}
          <span className="absolute left-4 top-4 font-mono text-xs text-paper-dim">
            {number}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display text-lg font-medium text-paper">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-paper-muted">{project.description}</p>

          <p className="mt-4 font-mono text-xs text-paper-dim">{project.stack.join(" · ")}</p>

          <div className="mt-6 flex items-center gap-5">
            <LinkOrDisabled href={project.liveUrl}>
              <ExternalLink size={14} />
              Live Demo
            </LinkOrDisabled>
            <LinkOrDisabled href={project.githubUrl}>
              <Github size={14} />
              GitHub
            </LinkOrDisabled>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
