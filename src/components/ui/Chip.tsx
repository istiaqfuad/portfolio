import type { ReactNode } from "react";

// Small pill used for tech tags and coursework.
export default function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line px-3 py-[0.3rem] font-mono text-[0.72rem] text-muted">
      {children}
    </span>
  );
}
