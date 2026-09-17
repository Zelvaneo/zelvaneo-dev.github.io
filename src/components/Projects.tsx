import { projects } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-ink-hair py-24 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Featured Projects
            </h2>
            <p className="hidden text-sm text-paper-dim sm:block">
              {projects.length} project{projects.length !== 1 ? "s" : ""}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
