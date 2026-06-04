import type { CSSProperties } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";
import Chip from "../ui/Chip";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <Eyebrow>03 — Selected Work</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <SectionTitle>
          Things I've <em>built</em>.
        </SectionTitle>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal
            key={p.name}
            delay={idx * 0.08}
            style={{ "--accent": p.accent } as CSSProperties}
            className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-line bg-gradient-to-br from-ink-3/55 to-ink-1/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
          >
            <span className="absolute inset-x-0 top-0 h-0.5 bg-[var(--accent)] opacity-70" />

            <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-[var(--accent)]">
              {p.tag}
            </span>
            <h3 className="mt-[0.7rem] font-display text-[1.9rem] font-normal">{p.name}</h3>
            <div className="mb-[0.9rem] mt-[0.3rem] inline-flex items-center gap-[0.45rem] font-mono text-[0.72rem] tracking-[0.02em] text-faint">
              <span className="h-[6px] w-[6px] rounded-full bg-teal" />
              {p.note}
            </div>
            <p className="text-[0.97rem] leading-[1.7] text-muted">{p.blurb}</p>
            <p className="mt-[0.8rem] font-mono text-[0.8rem] leading-[1.6] text-faint">{p.detail}</p>

            <div className="my-6 flex flex-wrap gap-6">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <div>
                    <span className="font-display text-[1.7rem] leading-none text-text">{m.value}</span>
                    {m.delta && <span className="ml-[0.35rem] font-mono text-[0.75rem] text-teal">{m.delta}</span>}
                  </div>
                  <div className="mt-[0.35rem] font-mono text-[0.68rem] tracking-[0.02em] text-faint">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 border-b border-line-strong pb-0.5 font-mono text-[0.8rem] text-text transition-colors hover:border-teal hover:text-teal"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
