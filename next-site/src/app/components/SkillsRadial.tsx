"use client";
import { motion } from "framer-motion";

type Skill = { name: string; level: number };
const skills: Skill[] = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 88 },
  { name: "Tailwind", level: 92 },
  { name: "TypeScript", level: 85 },
  { name: "Python", level: 80 },
  { name: "SQL", level: 78 },
];

export default function SkillsRadial() {
  return (
    <section id="skills" className="container mx-auto px-6 py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {skills.map((s) => (
          <motion.div
            key={s.name}
            whileHover={{ y: -4 }}
            className="rounded-xl border bg-white/60 dark:bg-black/40 backdrop-blur p-4 shadow-sm transition text-center"
          >
            <div
              className="mx-auto grid place-items-center rounded-full"
              style={{
                width: 88,
                height: 88,
                background: `conic-gradient(#06b6d4 ${s.level * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
                boxShadow: "0 0 20px rgba(34,211,238,.15)",
              }}
            >
              <div className="grid place-items-center rounded-full bg-white/90 dark:bg-black/70" style={{ width: 64, height: 64 }}>
                <span className="text-sm font-semibold">{s.level}%</span>
              </div>
            </div>
            <p className="mt-2 text-sm">{s.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

