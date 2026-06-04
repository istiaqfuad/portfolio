interface EyebrowProps {
  children: React.ReactNode;
  centered?: boolean;
}

// Small mono kicker with a leading rule — section label.
export default function Eyebrow({ children, centered = false }: EyebrowProps) {
  return (
    <span
      className={`mb-6 inline-flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.32em] text-teal before:h-px before:w-7 before:bg-teal/60 before:content-[''] ${
        centered ? "justify-center" : ""
      }`}
    >
      {children}
    </span>
  );
}
