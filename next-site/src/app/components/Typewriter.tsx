"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ words, speed = 60, pause = 1200 }: { words: string[]; speed?: number; pause?: number }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[index % words.length];
    const step = () => {
      setText((t) => {
        if (!deleting) {
          const next = full.slice(0, t.length + 1);
          if (next === full) {
            setTimeout(() => setDeleting(true), pause);
          }
          return next;
        } else {
          const next = full.slice(0, t.length - 1);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
          return next;
        }
      });
    };
    const timer = setTimeout(step, deleting ? speed / 1.8 : speed);
    return () => clearTimeout(timer);
  }, [deleting, index, words, speed, pause]);

  return (
    <span className="inline-block border-r pr-1 animate-pulse">{text}</span>
  );
}

