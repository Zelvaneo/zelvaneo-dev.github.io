import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-hair py-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-10">
        <div>
          <p className="font-display text-sm font-medium text-paper">{profile.name}</p>
          <p className="mt-1 text-xs text-paper-dim">
            © {year} {profile.name}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-paper-muted transition-colors duration-200 hover:text-paper"
          >
            <Github size={17} />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-paper-muted transition-colors duration-200 hover:text-paper"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-paper-muted transition-colors duration-200 hover:text-paper"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
