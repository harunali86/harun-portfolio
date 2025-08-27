"use client";
import { useEffect, useMemo } from "react";

export default function useScrollSound(url: string = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQgAAAAA") {
  const audio = useMemo(() => (typeof Audio !== "undefined" ? new Audio(url) : null), [url]);
  useEffect(() => {
    if (!audio) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        try { audio.currentTime = 0; audio.volume = 0.05; void audio.play(); } catch {}
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [audio]);
}

