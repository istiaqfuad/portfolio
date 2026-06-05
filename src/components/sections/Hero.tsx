import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { profile, pillars } from "../../data";
import { useRotatingIndex } from "../../hooks/useRotatingIndex";

export default function Hero() {
  const i = useRotatingIndex(pillars.length);
  const pillar = pillars[i];
  const reduce = useReducedMotion();

  // Staggered fade-up for the hero's one-time entrance.
  // No-op (static render) under prefers-reduced-motion.
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        };

  return (
    <header
      id="top"
      className="relative mx-auto flex min-h-svh max-w-[1180px] flex-col justify-center px-5 pb-28 pt-28 sm:px-8"
    >
      <motion.span
        {...fade(0)}
        className="inline-flex w-fit items-center gap-[0.6rem] rounded-full border border-line bg-ink-2/60 px-[0.9rem] py-[0.4rem] font-mono text-[0.74rem] tracking-[0.05em] text-muted"
      >
        <span className="h-[7px] w-[7px] animate-pulse-ring rounded-full bg-teal" />
        {profile.status}
      </motion.span>

      <motion.h1
        {...fade(0.1)}
        className="mt-6 font-display text-[clamp(2.6rem,8vw,6rem)] font-light leading-[0.98] tracking-[-0.03em]"
      >
        {profile.name}
      </motion.h1>

      <motion.h2
        {...fade(0.3)}
        className="mt-8 max-w-[24ch] font-display text-[clamp(1.5rem,3.6vw,2.6rem)] font-light leading-[1.18] tracking-[-0.015em]"
      >
        <span className="italic text-coral">Software</span>,{" "}
        <span className="italic text-violet">AI systems</span>, and the{" "}
        <span className="italic text-amber">research</span> behind both.
      </motion.h2>

      <motion.div {...fade(0.4)} className="mt-5 flex h-6 items-center gap-3 font-mono text-[0.9rem]">
        <span
          className="h-2 w-2 shrink-0 rounded-full transition-colors"
          style={{ background: pillar.accent }}
        />
        <AnimatePresence mode="wait">
          <motion.span
            key={pillar.label}
            style={{ color: pillar.accent }}
            initial={{ opacity: 0, y: reduce ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {pillar.blurb}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <motion.p {...fade(0.5)} className="mt-7 max-w-[56ch] text-[1.05rem] leading-[1.7] text-muted">
        {profile.tagline}
      </motion.p>

      <motion.div {...fade(0.6)} className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full border border-teal bg-teal px-6 py-[0.85rem] font-mono text-[0.82rem] font-medium tracking-[0.04em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-teal hover:shadow-[0_0_30px_rgba(94,234,212,0.25)]"
        >
          See my work ↓
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-[0.85rem] font-mono text-[0.82rem] tracking-[0.04em] text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.div {...fade(0.7)} className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[0.78rem] text-faint">
        {profile.roles.map((r) => (
          <span key={r} className="text-muted">
            {r}
          </span>
        ))}
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-[0.6rem] font-mono text-[0.65rem] uppercase tracking-[0.3em] text-faint sm:flex"
      >
        <span>scroll</span>
        <span className="h-9 w-px animate-drip bg-gradient-to-b from-faint to-transparent" />
      </div>
    </header>
  );
}
