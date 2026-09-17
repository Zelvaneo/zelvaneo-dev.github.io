"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const variants = reduceMotion ? undefined : container;
  const child = reduceMotion ? undefined : item;

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto grid max-w-content gap-14 px-6 md:grid-cols-[1.3fr_0.9fr] md:gap-10 md:px-10">
        <motion.div variants={variants} initial="hidden" animate="show">
          {profile.available && (
            <motion.div
              variants={child}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-elevated px-3 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sage" />
              </span>
              <span className="text-xs text-paper-muted">Available for opportunities</span>
            </motion.div>
          )}

          <motion.p variants={child} className="mb-3 font-display text-lg text-paper-muted">
            {profile.name}
          </motion.p>

          <motion.h1
            variants={child}
            className="max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-5xl md:text-6xl"
          >
            {profile.role}
          </motion.h1>

          <motion.p variants={child} className="mt-6 max-w-md text-base leading-relaxed text-paper-muted md:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={child} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary" icon={<ArrowUpRight size={16} />}>
              View Projects
            </Button>
            <Button href={profile.githubUrl} target="_blank" rel="noreferrer" variant="ghost" icon={<Github size={16} />}>
              GitHub
            </Button>
            <Button href="#contact" variant="ghost" icon={<Mail size={16} />}>
              Contact
            </Button>
          </motion.div>
        </motion.div>

        <motion.aside
          variants={variants}
          initial="hidden"
          animate="show"
          className="self-start rounded-lg border border-ink-border bg-ink-elevated/60 p-6 md:mt-2"
        >
          <motion.div variants={child} className="flex items-center gap-2 text-sm text-paper-muted">
            <MapPin size={15} />
            <span>{profile.location}</span>
          </motion.div>

          <motion.div variants={child} className="mt-4 h-px w-full bg-ink-border" />

          <motion.div variants={child} className="mt-4">
            <p className="section-label mb-2">Languages</p>
            <p className="text-sm text-paper">{profile.languages.join(" · ")}</p>
          </motion.div>

          <motion.div variants={child} className="mt-4 h-px w-full bg-ink-border" />

          <motion.div variants={child} className="mt-4 font-mono text-sm text-paper-muted">
            <span className="text-sage">$</span> whoami
            <br />
            <span className="text-paper">
              {profile.role.toLowerCase()}
              <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] animate-blink bg-brass align-middle" />
            </span>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  );
}
