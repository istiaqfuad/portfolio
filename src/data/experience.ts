import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    org: "Advanced Machine Intelligence Research (AMIR) Lab",
    role: "Research Assistant Intern",
    mode: "Remote",
    period: "Feb 2026 – Jul 2026",
    current: false,
    points: [
      "Built bangla-english-banglish-pairs, a 2.4M-pair trilingual dataset (Bangla, Banglish and English), with custom data pipelines, and published it on Hugging Face for low-resource NLP research.",
      "Trained TriBne-e5-small on that data with PyTorch and Hugging Face, and open-sourced the model for retrieval over code-mixed Bengali text.",
    ],
  },
  {
    org: "Devcore Technologies",
    role: "Next.js Developer Intern",
    mode: "Remote",
    period: "Feb 2025 – Apr 2025",
    current: false,
    points: [
      "Built a modular admin dashboard for a 1,000+ product e-commerce platform with Next.js, tRPC, Prisma and TypeScript, with end-to-end type-safe APIs covering product and order CRUD.",
      "Built responsive, server-rendered storefront pages with the Next.js App Router.",
    ],
  },
];
