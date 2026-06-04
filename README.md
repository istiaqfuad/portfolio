# Istiaqur Rahman Fuad — Portfolio

A personal portfolio for a software engineer, AI engineer, and researcher. The concept is **"Latent Space"**: the page behaves like an embedding space, with a living vector-field background and an interactive map where skills and projects are positioned by **real cosine similarity** — a nod to the kind of AI work it showcases.

## Highlights

- **Interactive Semantic Space** — skills/projects rendered as nodes; hovering one computes its nearest neighbors live via cosine similarity and draws labeled edges. Software cluster on the left, AI/ML on the right, Python bridging.
- **Living neural field** — a DPR-aware canvas particle network that drifts and leans toward the pointer (static under `prefers-reduced-motion`).
- **Rotating discipline strap** — the hero cycles through the three pillars (Software · AI · Research), color-synced.
- **Custom cursor glow**, film grain, radial atmosphere, and staggered scroll reveals.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build/dev)
- **Tailwind CSS v4** — CSS-first config via `@theme` (`@tailwindcss/vite` plugin, no `tailwind.config.js`)
- **Framer Motion** — entrance and micro-interactions
- Fonts: **Fraunces** (display), **JetBrains Mono** (mono/data)

## Getting Started

```bash
pnpm install
pnpm dev        # start dev server (http://localhost:5173)
pnpm build      # type-check (tsc -b) + production build to dist/
pnpm preview    # serve the production build locally
pnpm lint       # eslint
```

## Project Structure

```
src/
  types.ts                 shared TypeScript interfaces
  lib/
    cosine.ts              cosine-similarity utility
  data/                    single source of truth for all content
    profile.ts             name, roles, tagline, about, pillars
    experience.ts          work history
    projects.ts            project cards
    education.ts           education, certifications, achievements
    space.ts               semantic-space nodes + embedding vectors
    index.ts               barrel re-export
  hooks/
    useScrolled.ts         nav scroll state
    useRotatingIndex.ts    timed cycling index for the hero strap
  components/
    effects/               NeuralField, CursorGlow
    ui/                    Reveal, Eyebrow, SectionTitle, Chip
    layout/                Nav, Footer
    sections/              Hero, About, SemanticSpace, Projects,
                           Experience, Education, Contact
  App.tsx                  page composition
  index.css                Tailwind import + theme tokens + base/components
public/
  Istiaqur_Rahman_Fuad_Resume.pdf   linked from the nav "Résumé" button
```

## Editing Content

All copy lives in `src/data/` — edit those files, not the components. The
semantic-space map is driven by `src/data/space.ts`: each node has a position
(`x`, `y` in 0–1), a radius, and a 5-dim embedding vector over
`[nlp, ml, web, systems, research]`. The hover edges are computed from those
vectors at runtime, so adding a node automatically wires up its similarities.

## Résumé

The résumé PDF in `public/` is built from a separate LaTeX source
(`../Frehser_CV`). After recompiling it, copy the output in:

```bash
cp ../Frehser_CV/main.pdf public/Istiaqur_Rahman_Fuad_Resume.pdf
```

## Deployment

Any static host works (the build output is plain static assets in `dist/`).
Vercel, Netlify, or GitHub Pages are all good fits.

## Accessibility & Performance

- Honors `prefers-reduced-motion` (animations and the canvas fall back to static).
- Semantic-space nodes are keyboard-focusable.
- Single web-font request; canvas is capped to ~90 nodes and 2× DPR.
