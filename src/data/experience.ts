import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    org: "Advanced Machine Intelligence Research (AMIR) Lab",
    role: "Research Assistant Intern",
    mode: "Remote",
    period: "Feb 2026 — Jul 2026",
    current: false,
    points: [
      "Curated bangla-english-banglish-pairs using custom data pipelines to achieve a 2.4M-pair trilingual contrastive dataset (Bangla / Banglish / English) published on Hugging Face for low-resource NLP research.",
      "Trained TriBne-e5-small using PyTorch and Hugging Face to achieve an open-sourced trilingual sentence-embedding model for retrieval over code-mixed Bengali text.",
    ],
  },
  {
    org: "Devcore Technologies",
    role: "Next.js Developer Intern",
    mode: "Remote",
    period: "Feb 2025 — Apr 2025",
    current: false,
    points: [
      "Developed a modular admin dashboard using Next.js, tRPC, Prisma, and TypeScript to achieve end-to-end type-safe APIs for a 1,000+ product e-commerce platform, delivering full product and order CRUD.",
      "Implemented responsive, server-rendered storefront pages using Next.js App Router to achieve improved cross-device usability.",
    ],
  },
];
