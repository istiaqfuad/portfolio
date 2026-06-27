import { profile } from "../../data";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-16 flex max-w-[1180px] flex-col items-center justify-between gap-2 border-t border-line p-8 text-center font-mono text-[0.72rem] text-faint sm:flex-row sm:gap-4 sm:text-left">
      <span>© 2026 {profile.name}</span>
      <span>
        designed in a <code className="whitespace-nowrap text-teal">latent space</code> · built with React + TypeScript + Tailwind
      </span>
    </footer>
  );
}
