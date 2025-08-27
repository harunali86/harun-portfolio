"use client";
import { useRef } from "react";

export default function MagneticButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };
  const reset = () => { const el = ref.current; if (el) el.style.transform = "translate(0,0)"; };
  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      className={`relative inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm overflow-hidden transition ${className}`}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 rounded-md bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition" />
      {children}
    </button>
  );
}

