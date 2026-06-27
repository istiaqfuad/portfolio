import type { SpaceNode } from "../types";

// Semantic-space nodes. Each has a small vector over
// [nlp, ml, web, systems, research]; positions are hand-placed so the
// software cluster (left) and AI/ML cluster (right) read clearly, with
// Python bridging the two. The hover edges use *real* cosine similarity.
export const spaceNodes: SpaceNode[] = [
  // AI / ML cluster (right)
  { id: "tribne", label: "TriBne-e5-small", kind: "project", domain: "nlp", x: 0.74, y: 0.4, r: 13, vec: [0.95, 0.9, 0.1, 0.2, 0.95] },
  { id: "embeddings", label: "Embeddings", domain: "nlp", x: 0.9, y: 0.3, r: 8, vec: [0.9, 0.85, 0.2, 0.1, 0.7] },
  { id: "pytorch", label: "PyTorch", domain: "nlp", x: 0.58, y: 0.28, r: 9, vec: [0.6, 0.95, 0.2, 0.25, 0.5] },
  { id: "nlp", label: "Transformers", domain: "nlp", x: 0.66, y: 0.62, r: 9, vec: [0.85, 0.92, 0.1, 0.1, 0.78] },
  { id: "hf", label: "Hugging Face", domain: "nlp", x: 0.92, y: 0.6, r: 8, vec: [0.8, 0.8, 0.15, 0.2, 0.6] },
  { id: "lora", label: "LoRA", domain: "nlp", x: 0.8, y: 0.82, r: 8, vec: [0.5, 0.95, 0.05, 0.1, 0.85] },
  { id: "qdrant", label: "Qdrant", domain: "nlp", x: 0.86, y: 0.46, r: 8, vec: [0.7, 0.55, 0.35, 0.6, 0.4] },

  // bridge
  { id: "python", label: "Python", domain: "core", x: 0.48, y: 0.48, r: 10, vec: [0.5, 0.6, 0.6, 0.5, 0.3] },
  { id: "legalbuddy", label: "LegalBuddy", kind: "project", domain: "web", x: 0.46, y: 0.72, r: 12, vec: [0.55, 0.4, 0.7, 0.5, 0.35] },

  // Software cluster (left)
  { id: "rest", label: "REST APIs", domain: "web", x: 0.42, y: 0.22, r: 8, vec: [0.05, 0.1, 0.85, 0.6, 0.05] },
  { id: "next", label: "Next.js", domain: "web", x: 0.2, y: 0.26, r: 9, vec: [0.05, 0.05, 0.95, 0.3, 0.05] },
  { id: "ts", label: "TypeScript", domain: "web", x: 0.34, y: 0.4, r: 8, vec: [0.05, 0.1, 0.9, 0.4, 0.05] },
  { id: "petsoft", label: "PetSoft", kind: "project", domain: "web", x: 0.12, y: 0.48, r: 12, vec: [0.05, 0.1, 0.95, 0.4, 0.05] },
  { id: "fastapi", label: "FastAPI", domain: "web", x: 0.3, y: 0.62, r: 8, vec: [0.15, 0.25, 0.82, 0.55, 0.2] },
  { id: "java", label: "Java", domain: "web", x: 0.2, y: 0.74, r: 8, vec: [0.05, 0.15, 0.75, 0.7, 0.1] },
  { id: "postgres", label: "PostgreSQL", domain: "web", x: 0.12, y: 0.86, r: 8, vec: [0.05, 0.1, 0.5, 0.92, 0.05] },
];
