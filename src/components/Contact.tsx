import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-hair py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
            Let&apos;s build something.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={`mailto:${profile.email}`} variant="primary" icon={<Mail size={16} />}>
              Get in touch
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-paper-muted transition-colors duration-200 hover:text-paper"
              >
                <Mail size={15} />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-paper-muted transition-colors duration-200 hover:text-paper"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-paper-muted transition-colors duration-200 hover:text-paper"
              >
                <Github size={15} />
                GitHub
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
