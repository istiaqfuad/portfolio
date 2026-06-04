import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";
import Chip from "../ui/Chip";
import { education, certifications, achievements } from "../../data";
import type { Credential } from "../../types";

function CredentialList({ title, items }: { title: string; items: Credential[] }) {
  return (
    <>
      <div className="mb-[1.2rem] font-mono text-[0.74rem] uppercase tracking-[0.18em] text-faint">
        {title}
      </div>
      <div className="flex flex-col">
        {items.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-baseline justify-between gap-4 border-b border-line py-4 transition-[padding] duration-300 hover:pl-2"
          >
            <div>
              <div className="text-[0.98rem] text-text">
                {c.name}
                <span className="ml-[0.4rem] text-teal opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </div>
              <div className="mt-[0.25rem] font-mono text-[0.76rem] text-faint">
                {c.issuer ?? c.event}
              </div>
            </div>
            <div className="whitespace-nowrap font-mono text-[0.76rem] text-faint">{c.date}</div>
          </a>
        ))}
      </div>
    </>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <Eyebrow>05 — Foundations</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <SectionTitle>
          Study &amp; <em>signals</em>.
        </SectionTitle>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="rounded-2xl border border-line bg-ink-2/40 p-7">
            <h3 className="font-display text-[1.5rem] font-normal">{education.school}</h3>
            <p className="mt-[0.3rem] text-[0.95rem] text-muted">{education.degree}</p>
            <div className="mt-[0.9rem] flex flex-wrap justify-between gap-2 font-mono text-[0.78rem] text-faint">
              <span>{education.period}</span>
              <span className="text-teal">{education.cgpa}</span>
            </div>
            <div className="mt-[1.4rem] flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <CredentialList title="Certifications" items={certifications} />
            <div className="mt-10">
              <CredentialList title="Achievements" items={achievements} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
