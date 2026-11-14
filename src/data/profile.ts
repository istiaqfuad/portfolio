import type { Pillar, Profile } from "../types";

export const profile: Profile = {
  name: "Istiaqur Rahman Fuad",
  roles: ["Software Engineer", "AI Engineer", "Researcher"],
  location: "Jamalpur, Bangladesh",
  email: "istiaqurrahmanfuad@gmail.com",
  phone: "+880 1865-863271",
  linkedin: "https://www.linkedin.com/in/istiaqfuad",
  github: "https://github.com/istiaqfuad",
  linkedinHandle: "istiaqfuad",
  githubHandle: "istiaqfuad",
  resume: "Istiaqur_Rahman_Fuad_Resume.pdf",
  status: "Computer Science Graduate · University of Rajshahi",
  tagline:
    "I build full-stack apps and the AI systems inside them, plus the research behind both.",
  about: [
    "I graduated in Computer Science and Engineering from the University of Rajshahi. I work across the whole stack: full-stack web apps I build and deploy myself, and the AI systems that go inside them.",
    "Most days I'm building with Next.js, Prisma and Postgres, or typed Python backends with FastAPI. I also fine-tune and ship transformer models (TriBne-e5-small is mine, a multilingual embedding model) and LLM apps like LegalBuddy, a legal assistant that answers from real statute text. Most of it is deployed, so you can click through and try it.",
    "At AMIR Lab I researched low-resource Bengali NLP, building datasets and models for languages the big labs overlook. That work is now a first-author paper under review at Language Resources and Evaluation (Springer). What ties it together for me is simple: I like turning hard problems into things that actually run.",
  ],
};

// The three pillars the portfolio is built around. The hero strap rotates
// through their one-line descriptors, color-synced to each accent.
export const pillars: Pillar[] = [
  {
    label: "Software",
    accent: "var(--color-coral)",
    blurb: "Full-stack apps I build and ship myself.",
  },
  {
    label: "AI",
    accent: "var(--color-violet)",
    blurb: "Models I fine-tune and put up as live demos.",
  },
  {
    label: "Research",
    accent: "var(--color-amber)",
    blurb: "NLP research for languages the big labs overlook.",
  },
];
