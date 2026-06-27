import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "TriBne-e5-small",
    tag: "Multilingual Sentence Embeddings",
    note: "Built solo at AMIR Lab · First-author paper under review",
    blurb:
      "A sentence-embedding model for Bangla, English, and Banglish (romanized Bengali) text — matching spelling variants across scripts where standard multilingual encoders fall short.",
    detail:
      "LoRA fine-tuned multilingual-e5-small (118M params) with contrastive loss on 2.4M pairs. Deltas are absolute MRR@10 gains over the base model.",
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
      "A retrieval-augmented chatbot that answers questions over Bangladesh's legal acts with grounded, cited statute sections instead of hallucinations.",
    detail:
      "A FastAPI backend embeds queries, retrieves grounded statute sections from Qdrant, and generates cited answers with Gemini / Groq, served through a Next.js chat UI.",
    stack: ["Python", "FastAPI", "Next.js", "Qdrant", "sentence-transformers", "Gemini / Groq", "Docker"],
    metrics: [
      { value: "RAG", label: "Grounded + cited", delta: null },
      { value: "Qdrant", label: "Vector retrieval", delta: null },
      { value: "FastAPI", label: "Typed Python API", delta: null },
    ],
    links: [
      { label: "Live", href: "https://legalbuddy.irflab.tech/" },
      { label: "GitHub", href: "https://github.com/istiaqfuad/legal-buddy" },
    ],
    accent: "var(--color-violet)",
  },
  {
    name: "PetSoft",
    tag: "Full-Stack · Pet Daycare Platform",
    note: "Self-built · Deployed live",
    blurb:
      "A subscription-style pet daycare management app with secure authentication, Stripe-powered billing, and a responsive interface — built to explore a full SaaS flow end-to-end.",
    detail:
      "Full-stack app with server-rendered pages and a clean, accessible component layer.",
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
];
