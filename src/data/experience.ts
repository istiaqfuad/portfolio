import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    org: "Advanced Machine Intelligence Research (AMIR) Lab",
    role: "Research Assistant Intern",
    mode: "Remote",
    period: "Feb 2026 — Present",
    current: true,
    points: [
      "Building and curating large-scale Bengali-language datasets for low-resource NLP research, improving data quality for downstream model training.",
      "Researching and fine-tuning transformer-based language models to make AI more accessible and useful for the Bangladeshi community.",
    ],
  },
  {
    org: "Devcore Technologies",
    role: "Next.js Developer Intern",
    mode: "Remote",
    period: "Feb 2025 — Apr 2025",
    current: false,
    points: [
      "Built a modular admin dashboard with end-to-end type-safe APIs (Next.js, tRPC, Prisma, TypeScript) for an e-commerce platform managing a 1,000+ product catalog, delivering full product and order CRUD as part of a small engineering team.",
      "Developed responsive, server-rendered storefront pages, improving cross-device usability and perceived load performance.",
    ],
  },
];
