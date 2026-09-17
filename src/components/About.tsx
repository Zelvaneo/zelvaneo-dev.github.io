import { profile } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-ink-hair py-24 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              About
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-prose text-lg leading-relaxed text-paper-muted">
              {profile.about}
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div className="flex gap-2">
                <dt className="text-paper-dim">Based in</dt>
                <dd className="text-paper">{profile.location}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-paper-dim">Languages</dt>
                <dd className="text-paper">{profile.languages.join(", ")}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
