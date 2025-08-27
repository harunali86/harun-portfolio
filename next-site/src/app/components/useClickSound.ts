"use client";
import { useEffect, useMemo } from "react";

export default function useClickSound(url: string = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQgAAAAA") {
  const audio = useMemo(() => (typeof Audio !== "undefined" ? new Audio(url) : null), [url]);
  useEffect(() => {
    if (!audio) return;
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a,button")) {
        try { audio.currentTime = 0; audio.volume = 0.2; void audio.play(); } catch {}
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [audio]);
}

