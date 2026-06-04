import { useEffect, useState } from "react";

/** Cycles 0..length-1 every `intervalMs`, pausing if the tab is hidden. */
export function useRotatingIndex(length: number, intervalMs = 2200): number {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);

  return index;
}
