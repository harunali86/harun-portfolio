"use client";
import { useEffect, useState } from "react";

export default function Counter({ to, suffix = "", duration = 1200, className = "text-3xl font-semibold" }: { to: number; suffix?: string; duration?: number; className?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.round(to * (0.5 - Math.cos(Math.PI * p) / 2)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span className={className}>{val}{suffix}</span>;
}

