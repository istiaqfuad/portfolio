import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { profile } from "../../data";

export default function Contact() {
  const telHref = `tel:${profile.phone.replace(/\s/g, "")}`;

  return (
    <section id="contact" className="relative mx-auto max-w-[900px] px-5 pb-20 pt-28 text-center sm:px-8">
      <Reveal>
        <Eyebrow centered>06 — Contact</Eyebrow>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="font-display text-[clamp(2.4rem,7vw,5rem)] font-light leading-[1.02] tracking-[-0.02em] [&_em]:italic [&_em]:text-teal">
          Let's build something
          <br />
          that <em>understands</em>.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block border-b border-line-strong pb-1 font-mono text-[clamp(0.95rem,3vw,1.3rem)] text-text transition-colors hover:border-teal hover:text-teal"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap justify-center gap-6 font-mono text-[0.82rem]">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted transition-colors hover:text-teal"
          >
            GitHub ↗ {profile.githubHandle}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted transition-colors hover:text-teal"
          >
            LinkedIn ↗ {profile.linkedinHandle}
          </a>
          <a href={telHref} className="inline-flex items-center gap-1 text-muted transition-colors hover:text-teal">
            {profile.phone}
          </a>
          <span className="text-faint">
            <span aria-hidden="true">◷ </span>
            {profile.location}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
