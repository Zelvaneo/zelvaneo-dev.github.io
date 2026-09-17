# Developer Portfolio

A personal portfolio built with Next.js (App Router), TypeScript, and Tailwind
CSS. Static, fast, and structured so the only file you need to touch for
content is `src/data/portfolio.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    layout.tsx     – root layout, page <head> metadata
    page.tsx        – assembles all sections
    globals.css      – design tokens, fonts, base styles
  components/
    Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx,
    Projects.tsx, ProjectCard.tsx, Learning.tsx,
    GithubSection.tsx, Contact.tsx, Footer.tsx
    ui/              – Button, Reveal (scroll-reveal wrapper)
  data/
    portfolio.ts     – ALL editable content lives here
public/
  projects/          – put project screenshots here
```

## Editing your content

Open `src/data/portfolio.ts`. Everything wrapped in `[BRACKETS]` is a
placeholder — replace it with real information:

- `profile` — name, role, tagline, about text, location, languages,
  email, GitHub and LinkedIn URLs, availability flag.
- `skills` — grouped by category. Only list what you can genuinely use.
- `projects` — add one object per project. Leave `liveUrl` / `githubUrl`
  commented out until you have a real link — the button will show as
  disabled rather than pointing nowhere. Drop a screenshot in
  `public/projects/` and set `image: "/projects/your-file.png"` to
  replace the placeholder tile.
- `learningItems` — personal projects, things you're learning,
  experiments. Add a certification only if it's real.

No other file needs to change for a standard content update.

## Deployment

### Vercel (recommended)

Push this repository to GitHub and [import it on Vercel](https://vercel.com/new).
No configuration needed — it will detect Next.js automatically.

### GitHub Pages

The project is already configured for static export (`output: "export"` in
`next.config.mjs`), and a ready-to-use workflow lives at
`.github/workflows/deploy.yml` — it builds and publishes the site on every
push to `main`.

**One-time setup:**

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages → Source** and select
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
   Your site will be live at the URL shown in that workflow run.

That's it — no manual editing needed. `next.config.mjs` detects at build
time, from the repository name GitHub Actions provides, whether this is a
**user/org page** (`your-username.github.io`, served at the root) or a
**project page** (`your-username.github.io/repo-name`, served under
`/repo-name`) and sets the base path automatically. Building locally
(`npm run dev` / `npm run build`) is unaffected and always uses no base
path.

If your default branch is called something other than `main`, update the
`branches` value in `.github/workflows/deploy.yml`.

**Manual alternative:** run `npm run build` to generate a static site in
`/out`, then publish that folder's contents yourself (e.g. to a `gh-pages`
branch).

## Notes

- Colors, type, and spacing are defined as tokens in
  `tailwind.config.ts` and `src/app/globals.css` — change them there to
  re-theme the whole site.
- Section reveal-on-scroll and reduced-motion handling live in
  `src/components/ui/Reveal.tsx`.
