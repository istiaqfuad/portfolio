import { useMemo, useState } from "react";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import SectionTitle from "../ui/SectionTitle";
import { spaceNodes } from "../../data";
import { cosine } from "../../lib/cosine";
import type { Domain } from "../../types";

const W = 1000;
const H = 600;
const TOPK = 3;

const colorFor = (d: Domain): string =>
  d === "nlp" ? "var(--color-teal)" : d === "web" ? "var(--color-coral)" : "var(--color-amber)";

const domainName = (d: Domain): string =>
  d === "nlp" ? "AI / ML" : d === "web" ? "Software" : "Core";

const LEGEND = [
  { color: "var(--color-coral)", label: "Software" },
  { color: "var(--color-teal)", label: "AI / ML" },
  { color: "var(--color-amber)", label: "Core · Python" },
];

export default function SemanticSpace() {
  const [active, setActive] = useState<string | null>(null);

  const activeNode = useMemo(
    () => (active ? spaceNodes.find((n) => n.id === active) ?? null : null),
    [active],
  );

  const neighbors = useMemo(() => {
    if (!activeNode) return [];
    return spaceNodes
      .filter((n) => n.id !== activeNode.id)
      .map((n) => ({ node: n, sim: cosine(activeNode.vec, n.vec) }))
      .sort((a, b) => b.sim - a.sim)
      .slice(0, TOPK);
  }, [activeNode]);

  const neighborIds = useMemo(() => new Set(neighbors.map((n) => n.node.id)), [neighbors]);

  return (
    <section id="space" className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
        <div>
          <Reveal>
            <Eyebrow>02 — Latent Space</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionTitle>
              My skills, as <em>vectors</em>.
            </SectionTitle>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="max-w-[62ch] text-[1.02rem] leading-[1.75] text-muted">
            Every node is an embedding; the glowing links are{" "}
            <b className="text-teal">real cosine similarities</b> computed live. A nod to how I think
            about AI — but the map spans everything I build: software on the left, models on the
            right, the languages and ideas that bridge them in between. Hover any node to surface its
            nearest neighbors.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="space-grid relative overflow-hidden rounded-[18px] border border-line bg-gradient-to-b from-ink-2/50 to-ink-1/50">
          <svg
            className="block h-auto w-full touch-pan-y"
            viewBox={`0 0 ${W} ${H}`}
            role="list"
            aria-label="Skills and projects mapped by semantic similarity. Focus a node to hear its nearest neighbors."
          >
            {activeNode &&
              neighbors.map(({ node, sim }) => {
                const x1 = activeNode.x * W;
                const y1 = activeNode.y * H;
                const x2 = node.x * W;
                const y2 = node.y * H;
                return (
                  <g key={`edge-${node.id}`}>
                    <line className="space-edge on" x1={x1} y1={y1} x2={x2} y2={y2} />
                    <text
                      className="space-edge-label on"
                      x={(x1 + x2) / 2}
                      y={(y1 + y2) / 2 - 5}
                      textAnchor="middle"
                    >
                      {sim.toFixed(2)}
                    </text>
                  </g>
                );
              })}

            {spaceNodes.map((n) => {
              const cx = n.x * W;
              const cy = n.y * H;
              const isActive = n.id === active;
              const dim = !!active && !isActive && !neighborIds.has(n.id);
              const col = colorFor(n.domain);
              return (
                <g
                  key={n.id}
                  className={`node-dot ${isActive ? "active" : ""} ${dim ? "dim" : ""} ${
                    n.kind === "project" ? "project" : ""
                  }`}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${n.label} — ${domainName(n.domain)}${
                    n.kind === "project" ? ", featured project" : ""
                  }`}
                  onMouseEnter={() => setActive(n.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(n.id)}
                  onBlur={() => setActive(null)}
                >
                  <circle className="node-ring" cx={cx} cy={cy} r={n.r + 8} style={{ stroke: col }} />
                  <circle
                    className="node-core"
                    cx={cx}
                    cy={cy}
                    r={n.r}
                    style={{ fill: col, filter: isActive ? `drop-shadow(0 0 12px ${col})` : "none" }}
                  />
                  <text className="node-label" x={cx} y={cy - n.r - 9} textAnchor="middle">
                    {n.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 min-h-[1.4em] font-mono text-[0.8rem] text-faint" aria-live="polite">
          {activeNode ? (
            <>
              nearest to <b className="font-medium text-teal">{activeNode.label}</b> →{" "}
              {neighbors.map((n) => `${n.node.label} (${n.sim.toFixed(2)})`).join("  ·  ")}
            </>
          ) : (
            <>hover a node to compute its nearest neighbors…</>
          )}
        </div>
      </Reveal>

      <div className="mt-4 flex flex-wrap gap-6 font-mono text-[0.74rem] text-muted">
        {LEGEND.map((l) => (
          <span key={l.label} className="inline-flex items-center gap-2">
            <span className="h-[10px] w-[10px] rounded-full" style={{ background: l.color }} />
            {l.label}
          </span>
        ))}
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true">◉</span> larger node = featured project
        </span>
      </div>
    </section>
  );
}
