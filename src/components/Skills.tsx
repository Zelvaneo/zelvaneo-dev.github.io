import { skills } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-hair py-24 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <h3 className="font-display text-sm font-medium text-paper">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((skill) => (
                  <li key={skill} className="text-sm text-paper-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
