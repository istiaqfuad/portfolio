import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

const MAX_NODES = 90;
const LINK_DIST = 130;
const MOUSE_DIST = 160;

// Living vector field behind the whole page: drifting embedding "points"
// that link when close and lean toward the pointer. Pure canvas, DPR-aware,
// and static under prefers-reduced-motion.
export default function NeuralField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const accents = [
      "rgba(94,234,212,",
      "rgba(255,107,129,",
      "rgba(157,140,255,",
      "rgba(246,178,74,",
    ];
    let w = 0;
    let h = 0;
    let nodes: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(MAX_NODES, Math.max(30, Math.floor((w * h) / 16000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color:
          Math.random() < 0.78
            ? "rgba(150,170,210,"
            : accents[Math.floor(Math.random() * accents.length)],
      }));
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        ctx.fillStyle = `${n.color}0.4)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    const frame = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = mouse.x - n.x;
        const dy = mouse.y - n.y;
        if (dx * dx + dy * dy < 26000) {
          n.x += dx * 0.0009;
          n.y += dy * 0.0009;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(140,160,205,${(1 - dist / LINK_DIST) * 0.16})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const dm = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        let r = 1.4;
        let alpha = 0.5;
        if (dm < MOUSE_DIST) {
          const k = 1 - dm / MOUSE_DIST;
          r = 1.4 + k * 2.2;
          alpha = 0.5 + k * 0.5;
          ctx.strokeStyle = `rgba(94,234,212,${k * 0.5})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = `${n.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    if (reduce) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 h-full w-full" aria-hidden="true" />
  );
}
