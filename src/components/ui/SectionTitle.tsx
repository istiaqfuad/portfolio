import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

// Display-serif heading. Wrap emphasis in <em> for the italic teal accent.
export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`font-display text-[clamp(2rem,5vw,3.4rem)] font-light leading-[1.04] tracking-[-0.02em] [&_em]:italic [&_em]:text-teal ${className}`}
    >
      {children}
    </h2>
  );
}
