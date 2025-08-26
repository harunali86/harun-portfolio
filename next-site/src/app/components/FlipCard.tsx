"use client";
import { useState } from "react";
import Image from "next/image";

export default function FlipCard({ title, desc, img, tags }: { title: string; desc: string; img: string; tags: string[] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="[perspective:1200px] group" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
      <div className={`relative h-64 w-full rounded-xl border transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
        <div className="absolute inset-0 overflow-hidden rounded-xl [backface-visibility:hidden]">
          <Image src={img} alt={title} width={800} height={450} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="font-medium">{title}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-xs rounded-full px-2 py-0.5 bg-white/10 border border-white/20 backdrop-blur hover:scale-105 transition">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 rounded-xl bg-white/90 dark:bg-black/80 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <p className="text-sm opacity-80">{desc}</p>
          <div className="mt-3 flex gap-3">
            <a href="#" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">GitHub</a>
            <a href="#" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}

