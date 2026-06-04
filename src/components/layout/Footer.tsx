import { profile } from "../../data";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-16 flex max-w-[1180px] flex-wrap items-center justify-between gap-4 border-t border-line p-8 font-mono text-[0.72rem] text-faint">
      <span>© 2026 {profile.name}</span>
      <span className="inline-flex items-center gap-2">
        designed in a <code className="text-teal">latent space</code> · built with React + TypeScript + Tailwind
      </span>
    </footer>
  );
}
