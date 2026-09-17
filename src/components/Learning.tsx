import { learningItems } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Learning() {
  return (
    <section id="learning" className="border-t border-ink-hair py-24 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Learning &amp; Building
          </h2>
          <p className="mt-3 max-w-prose text-paper-muted">
            I&apos;m early in my career and still building my track record in the open —
            here&apos;s what I&apos;m currently working through.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col">
          {learningItems.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.06}>
              <div className="flex flex-col gap-1.5 border-t border-ink-hair py-6 first:border-t-0 sm:flex-row sm:gap-10 sm:py-7">
                <h3 className="font-display text-base font-medium text-paper sm:w-80 sm:shrink-0">
                  {entry.title}
                </h3>
                <p className="text-sm leading-relaxed text-paper-muted">{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
