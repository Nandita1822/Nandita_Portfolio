# Nandita Shukla — Resume & Portfolio

**This is my personal resume and portfolio site.** I built it from the ground up to showcase my experience, projects, and writing in one place.

[![GitHub](https://img.shields.io/badge/GitHub-Nandita1822-181717?logo=github)](https://github.com/Nandita1822) [![LinkedIn](https://img.shields.io/badge/LinkedIn-nandita--shukla22-0A66C2?logo=linkedin)](https://linkedin.com/in/nandita-shukla22)

## What this is

- **My resume, live** — Work experience, education, projects, skills, and achievements in a single site.
- **Built by me** — Designed and implemented from scratch (no template clone). Custom layout, content, and styling.
- **Blog included** — I use it to share what I’m learning (web dev, APIs, design systems, Git, etc.).

## Tech stack

- **Next.js** (App Router) — React framework
- **TypeScript** — Typed JavaScript
- **Tailwind CSS** — Styling
- **shadcn/ui** — UI components
- **Content Collections** — Blog content (MDX)
- **Vercel** — Deployment (optional)

## Features

- Single source of truth: [resume data](./src/data/resume.tsx) drives the whole site
- Responsive layout for mobile and desktop
- Blog with MDX (code blocks, frontmatter)
- Fast, static-friendly setup with Next.js

## Run it locally

1. Clone the repo:

   ```bash
   git clone https://github.com/Nandita1822/Nandita-Shukla
   cd Nandita-Shukla
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000). Edit [src/data/resume.tsx](./src/data/resume.tsx) to update your resume content.

## Project structure

- `src/app/` — Pages and layout
- `src/components/` — Reusable UI
- `src/data/resume.tsx` — **Resume content (name, work, education, projects, skills, etc.)**
- `content/` — Blog posts (MDX)

## License

MIT — use or adapt it for your own portfolio.
