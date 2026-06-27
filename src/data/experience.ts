import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    org: "Advanced Machine Intelligence Research (AMIR) Lab",
    role: "Research Assistant Intern",
    mode: "Remote",
    period: "Feb 2026 — Present",
    current: true,
    points: [
      "Curated and published bangla-english-banglish-pairs, a 2.4M-pair trilingual contrastive dataset (Bangla / Banglish / English) on Hugging Face for low-resource NLP research.",
      "Trained and open-sourced TriBne-e5-small, a trilingual sentence-embedding model for retrieval over code-mixed Bengali text — now a first-author paper under review at Language Resources and Evaluation (Springer Nature).",
    ],
  },
  {
    org: "Devcore Technologies",
    role: "Next.js Developer Intern",
    mode: "Remote",
    period: "Feb 2025 — Apr 2025",
    current: false,
    points: [
      "Built a modular admin dashboard with end-to-end type-safe APIs (Next.js, tRPC, Prisma, TypeScript) for an e-commerce platform with a 1,000+ product catalog, delivering full product and order CRUD.",
      "Developed responsive, server-rendered storefront pages with Next.js App Router, improving cross-device usability.",
    ],
  },
];
