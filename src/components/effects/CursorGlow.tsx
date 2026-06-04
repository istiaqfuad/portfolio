import { useEffect, useRef } from "react";

// Soft blend-mode glow that trails the pointer and swells over
// interactive targets — part of the "latent space" atmosphere.
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const move = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const active = !!target?.closest?.("a, button, .node-dot");
      el.classList.toggle("is-active", active);
      const offset = active ? 28 : 14;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;
      });
    };

    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
