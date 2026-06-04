export interface Profile {
  name: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  linkedinHandle: string;
  githubHandle: string;
  resume: string;
  status: string;
  tagline: string;
  about: string[];
}

export interface Pillar {
  label: string;
  /** CSS color token, e.g. "var(--color-teal)" */
  accent: string;
  /** one-line descriptor shown in the rotating hero strap */
  blurb: string;
}

export interface Experience {
  org: string;
  role: string;
  mode: string;
  period: string;
  current: boolean;
  points: string[];
}

export interface Metric {
  value: string;
  label: string;
  delta: string | null;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  tag: string;
  /** honest provenance line, e.g. "Self-built · Deployed live" */
  note: string;
  blurb: string;
  detail: string;
  stack: string[];
  metrics: Metric[];
  links: ProjectLink[];
  /** CSS color token used as the card accent */
  accent: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  cgpa: string;
  coursework: string[];
}

export interface Credential {
  name: string;
  issuer?: string;
  event?: string;
  date: string;
  href: string;
}

export type Domain = "nlp" | "web" | "core";

export interface SpaceNode {
  id: string;
  label: string;
  kind?: "project";
  domain: Domain;
  /** normalized 0..1 position on the stage */
  x: number;
  y: number;
  /** node radius in SVG units */
  r: number;
  /** embedding over [nlp, ml, web, systems, research] */
  vec: number[];
}
