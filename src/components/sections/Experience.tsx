import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "../../data";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <Eyebrow>04 — Experience</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <SectionTitle>
          Where I've <em>shipped</em>.
        </SectionTitle>
      </Reveal>

      <div className="mt-6 flex flex-col border-b border-line">
        {experience.map((e) => (
          <Reveal
            key={e.org}
            className="grid grid-cols-1 gap-3 border-t border-line py-9 md:grid-cols-[180px_1fr] md:gap-10"
          >
            <div className="pt-1 font-mono text-[0.78rem] tracking-[0.03em] text-faint">
              {e.period}
              {e.current && (
                <div className="mt-2 inline-flex items-center gap-[0.4rem] text-teal">
                  <span className="h-[6px] w-[6px] animate-pulse-ring rounded-full bg-teal" /> current
                </div>
              )}
            </div>

            <div>
              <h3 className="mb-[0.35rem] font-display text-[1.4rem] font-normal leading-[1.2]">{e.org}</h3>
              <div className="mb-[1.1rem] font-mono text-[0.85rem] text-teal">
                {e.role}
                <span className="ml-[0.6rem] text-faint">· {e.mode}</span>
              </div>
              <ul className="flex list-none flex-col gap-[0.8rem] p-0">
                {e.points.map((p, i) => (
                  <li
                    key={i}
                    className="relative pl-6 text-[0.97rem] leading-[1.7] text-muted before:absolute before:left-0 before:text-teal before:opacity-70 before:content-['→']"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
