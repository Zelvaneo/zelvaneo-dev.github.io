// ─────────────────────────────────────────────────────────────
// All personal content lives here. Edit this file only — the
// components read from it and need no other changes.
//
// Anything wrapped in [BRACKETS] is a placeholder. Replace it
// with real information before you deploy. Nothing here should
// ever be published with a placeholder still showing.
// ─────────────────────────────────────────────────────────────

export type Project = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string; // leave undefined until you have a real link
  githubUrl?: string; // leave undefined until you have a real link
  /** Path in /public, e.g. "/projects/my-app.png". Leave empty for a placeholder tile. */
  image?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type LearningItem = {
  title: string;
  description: string;
};

export const profile = {
  name: "[YOUR NAME]",
  role: "Web & App Developer",
  tagline:
    "I build modern web applications, useful digital products and clean user experiences.",
  about:
    "I'm a developer focused on building web applications and digital products. I enjoy turning ideas into functional, responsive and well-structured experiences.",
  location: "Dakar, Senegal",
  languages: ["French", "English"],
  available: true,
  email: "[YOUR EMAIL]",
  githubUrl: "https://github.com/[YOUR GITHUB USERNAME]",
  githubHandle: "@[YOUR GITHUB USERNAME]",
  linkedinUrl: "https://linkedin.com/in/[YOUR LINKEDIN USERNAME]",
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "APIs"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "VS Code"],
  },
];

// Replace name / description / links for each project. Keep the
// stack list honest — only what the project actually uses.
// Add more objects to this array for more projects; remove the
// ones you don't need.
export const projects: Project[] = [
  {
    id: "project-01",
    name: "[PROJECT NAME]",
    description:
      "[Add a short, honest description: what it does, what problem it solves, and why you built it.]",
    stack: ["React", "Node.js", "PostgreSQL"],
    // liveUrl: "https://your-project.com",
    // githubUrl: "https://github.com/you/project-one",
    // image: "/projects/project-01.png",
  },
  {
    id: "project-02",
    name: "[PROJECT NAME]",
    description:
      "[Add a short, honest description: what it does, what problem it solves, and why you built it.]",
    stack: ["Next.js", "TypeScript"],
    // liveUrl: "https://your-project.com",
    // githubUrl: "https://github.com/you/project-two",
    // image: "/projects/project-02.png",
  },
  {
    id: "project-03",
    name: "[PROJECT NAME]",
    description:
      "[Add a short, honest description: what it does, what problem it solves, and why you built it.]",
    stack: ["HTML", "CSS", "JavaScript"],
    // liveUrl: "https://your-project.com",
    // githubUrl: "https://github.com/you/project-three",
    // image: "/projects/project-03.png",
  },
];

// "Learning & Building" replaces a fabricated work-experience
// section. Edit freely — add what you're actually exploring,
// remove what you're not. Add a `certifications` entry only if
// you hold a real certificate.
export const learningItems: LearningItem[] = [
  {
    title: "[Framework, language, or concept you're currently learning]",
    description:
      "[One or two honest sentences on what you're exploring and why — a course, a book, a personal project.]",
  },
  {
    title: "[A personal project you're building or shipping]",
    description:
      "[What it is, what you're using it to practice, and what stage it's at.]",
  },
  {
    title: "[An experiment or a topic you've been digging into]",
    description:
      "[Anything hands-on: a small tool, a contribution, a proof of concept.]",
  },
  // {
  //   title: "Certification name",
  //   description: "Issuing organization — year. Only add real certificates here.",
  // },
];
