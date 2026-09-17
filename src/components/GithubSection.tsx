import { Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function GithubSection() {
  return (
    <section className="border-t border-ink-hair py-24 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-ink-border bg-ink-elevated/40 px-8 py-12 md:flex-row md:items-center md:px-12">
            <div>
              <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                Building in public.
              </h2>
              <p className="mt-3 max-w-md text-paper-muted">
                Most of what I write ends up as code before it ends up as anything else.
                {profile.githubHandle ? ` Follow along at ${profile.githubHandle}.` : ""}
              </p>
            </div>
            <Button href={profile.githubUrl} target="_blank" rel="noreferrer" variant="primary" icon={<Github size={16} />}>
              View GitHub
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
