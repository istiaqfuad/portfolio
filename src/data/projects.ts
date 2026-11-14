import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "TriBne-e5-small",
    tag: "Multilingual Sentence Embeddings",
    note: "Built solo at AMIR Lab · First-author paper under review",
    blurb:
      "A sentence-embedding model for Bangla, English and Banglish (romanized Bengali). It matches spelling variants across scripts, which is where standard multilingual encoders fall short.",
    detail:
      "I fine-tuned multilingual-e5-small with LoRA (1% of parameters, MNRL loss) on a 2.4M-pair trilingual corpus. Deltas are absolute MRR@10 gains over the base model.",
    stack: ["Python", "PyTorch", "sentence-transformers", "Hugging Face", "LoRA"],
    metrics: [
      { value: "0.890", label: "MRR@10 · Banglish", delta: "+0.27" },
      { value: "0.981", label: "Cross-script retrieval", delta: "+0.48" },
      { value: "2.4M", label: "Training pairs", delta: null },
    ],
    links: [
      { label: "Demo", href: "https://huggingface.co/spaces/istiaqfuad/triBne-e5-small-demo" },
      { label: "GitHub", href: "https://github.com/istiaqfuad/triBne-e5" },
    ],
    accent: "var(--color-teal)",
  },
  {
    name: "LegalBuddy",
    tag: "RAG · Legal Q&A over Bangladesh Law",
    note: "Self-built · Deployed live",
    blurb:
      "A chatbot that answers questions about Bangladesh's legal acts. It pulls the real statute sections and cites them, instead of making things up.",
    detail:
      "FastAPI backend, Qdrant for retrieval, Gemini/Groq for answers, and a Next.js chat UI on top.",
    stack: ["Python", "FastAPI", "Next.js", "Qdrant", "sentence-transformers", "Gemini / Groq", "Docker"],
    metrics: [
      { value: "RAG", label: "Grounded + cited", delta: null },
      { value: "Qdrant", label: "Vector retrieval", delta: null },
      { value: "FastAPI", label: "Typed Python API", delta: null },
    ],
    links: [
      { label: "Live", href: "https://legalbuddy.irflab.tech/" },
      { label: "GitHub", href: "https://github.com/istiaqfuad/legalbuddy-cv" },
    ],
    accent: "var(--color-violet)",
  },
  {
    name: "PetSoft",
    tag: "Full-Stack · Pet Daycare Platform",
    note: "Self-built · Deployed live",
    blurb:
      "A pet daycare management app with login, Stripe billing and a responsive interface. I built it to learn the full SaaS flow, front to back.",
    detail:
      "Full-stack Next.js app with server-rendered pages.",
    stack: ["Next.js", "Prisma", "TailwindCSS", "Stripe", "React Hook Form"],
    metrics: [
      { value: "Stripe", label: "Subscription billing", delta: null },
      { value: "Auth", label: "Secure sessions", delta: null },
      { value: "SSR", label: "Responsive UI", delta: null },
    ],
    links: [
      { label: "Live", href: "https://petcare.irflab.tech/" },
      { label: "GitHub", href: "https://github.com/istiaqfuad/petsoft" },
    ],
    accent: "var(--color-coral)",
  },
  {
    name: "Dwellio",
    tag: "Mobile · Shared Household App",
    note: "Self-built",
    blurb:
      "An app for people living together. Meals, groceries, expenses, chores, polls, bills and announcements live in one shared place, so the house runs on something better than group-chat chaos.",
    detail:
      "React Native app on Expo with Firebase Auth and Firestore. Expense splits settle only when the receiver confirms.",
    stack: ["TypeScript", "React Native", "Expo", "Firebase Auth", "Firestore"],
    metrics: [
      { value: "Shared", label: "Meals, groceries, tasks", delta: null },
      { value: "Split", label: "Confirmed settlements", delta: null },
      { value: "Live", label: "Firestore sync", delta: null },
    ],
    links: [{ label: "GitHub", href: "https://github.com/istiaqfuad/dwellio" }],
    accent: "var(--color-amber)",
  },
];
