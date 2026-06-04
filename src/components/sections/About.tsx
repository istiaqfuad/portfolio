import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";
import { profile } from "../../data";

const STATS = [
  { num: "3", lbl: "Disciplines — Software · AI · Research" },
  { num: "2", lbl: "Projects built & deployed live — web + ML" },
  { num: "118M", lbl: "Model params fine-tuned & deployed" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <Eyebrow>01 — About</Eyebrow>
      </Reveal>

      <div className="grid grid-cols-1 gap-9 md:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionTitle>
            I build the product
            <br />
            <em>and</em> the model.
          </SectionTitle>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            {profile.about.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "mb-5 font-display text-[1.15rem] font-light leading-[1.6] text-text"
                    : "mb-5 leading-[1.8] text-muted"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-14 flex flex-wrap gap-12 border-t border-line pt-8">
          {STATS.map((s) => (
            <div key={s.lbl}>
              <div className="font-display text-[2.2rem] leading-none text-teal">{s.num}</div>
              <div className="mt-[0.4rem] max-w-[22ch] font-mono text-[0.72rem] tracking-[0.05em] text-faint">
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
