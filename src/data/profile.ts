import type { Pillar, Profile } from "../types";

export const profile: Profile = {
  name: "Istiaqur Rahman Fuad",
  roles: ["Software Engineer", "AI Engineer", "Researcher"],
  location: "Jamalpur, Bangladesh",
  email: "istiaqurrahmanfuad@gmail.com",
  phone: "+880 1865-863271",
  linkedin: "https://www.linkedin.com/in/istiaqfuad",
  github: "https://www.github.com/istiaqfuad",
  linkedinHandle: "istiaqfuad",
  githubHandle: "istiaqfuad",
  resume: "Istiaqur_Rahman_Fuad_Resume.pdf",
  status: "Research Assistant Intern @ AMIR Lab",
  tagline:
    "I build full-stack software end-to-end, engineer the AI systems behind it, and do the research that pushes both forward.",
  about: [
    "I'm a Computer Science & Engineering undergrad at the University of Rajshahi who works across the whole stack — building and deploying full-stack web apps and engineering the AI systems behind them.",
    "On the engineering side I build type-safe, responsive full-stack apps with Next.js, Prisma, and Postgres. On the AI side I fine-tune and deploy transformer models — like TriBne-e5, my multilingual embedding model — and ship them as working, live demos.",
    "My research, at AMIR Lab, focuses on low-resource Bengali NLP: building the datasets and models that make AI work for languages the big labs overlook. Software, models, research — I care about the same thing across all three: turning hard problems into things that actually run.",
  ],
};

// The three pillars the portfolio is built around. The hero strap rotates
// through their one-line descriptors, color-synced to each accent.
export const pillars: Pillar[] = [
  {
    label: "Software",
    accent: "var(--color-coral)",
    blurb: "Full-stack apps, built and deployed live — type-safe and responsive.",
  },
  {
    label: "AI",
    accent: "var(--color-violet)",
    blurb: "Transformer models fine-tuned and deployed as working live demos.",
  },
  {
    label: "Research",
    accent: "var(--color-amber)",
    blurb: "Low-resource NLP research for the languages big labs overlook.",
  },
];
