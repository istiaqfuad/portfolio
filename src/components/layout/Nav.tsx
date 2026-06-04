import { profile } from "../../data";
import { useScrolled } from "../../hooks/useScrolled";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#space", label: "Latent Space" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const scrolled = useScrolled();

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-[1.1rem] transition-all duration-300 sm:px-10 ${
        scrolled ? "border-b border-line bg-ink/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <a
        href="#top"
        className="inline-flex items-center gap-[0.5rem] font-display text-[1.15rem] tracking-[-0.01em]"
        aria-label="Home"
      >
        {/* latent-space node glyph — on-theme, language-neutral */}
        <span className="text-[0.8em] text-teal">◉</span>
        <span>
          Fuad<span className="text-coral">.</span>
        </span>
      </a>

      <div className="flex items-center gap-6 sm:gap-8">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative hidden font-mono text-[0.78rem] tracking-[0.05em] text-muted transition-colors hover:text-text after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-teal after:transition-[width] after:duration-300 hover:after:w-full sm:inline"
          >
            {l.label}
          </a>
        ))}
        <a
          className="rounded-full border border-line-strong px-4 py-2 font-mono text-[0.78rem] text-text transition-colors hover:border-teal hover:text-teal"
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
        >
          Résumé ↗
        </a>
      </div>
    </nav>
  );
}
