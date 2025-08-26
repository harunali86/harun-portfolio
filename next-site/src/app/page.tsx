"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_20%_10%,rgba(34,211,238,.15),transparent_50%),radial-gradient(80%_50%_at_80%_20%,rgba(168,85,247,.15),transparent_50%),radial-gradient(80%_60%_at_50%_80%,rgba(34,197,94,.12),transparent_60%)]" />
        <div className="container mx-auto px-6 py-28 sm:py-36">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-cyan-500">Portfolio</p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Harun Shaikh
              <span className="block text-balance text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl mt-3">Full Stack Developer · Data Analyst · Software Engineer</span>
            </h1>
            <div className="mt-8 flex gap-4">
              <a href="#projects" className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm hover:scale-[1.02] transition">
                See my work
              </a>
              <a href="/Harun-Shaikh-Resume.pdf" className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 transition">
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-6 py-20">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={item}>
            <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
              I&apos;m a Computer Science graduate with expertise in full‑stack development, AI‑powered automation,
              and data analysis. I love solving real‑world problems using cutting‑edge technology.
            </p>
          </motion.div>
          <motion.div variants={item} className="justify-self-center">
            <Image src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop" alt="Developer at work" width={560} height={360} className="rounded-xl shadow-lg" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
        <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {["HTML","CSS","JavaScript","React","Next.js","Python","SQL","PostgreSQL","Pandas","NumPy","Power BI","Git"].map((skill)=> (
            <motion.li key={skill} variants={item} className="rounded-lg border px-3 py-2 text-sm text-center hover:shadow-sm transition">
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AI Agents for Finance",
              desc: "Multi-agent system comparing stocks and generating insights.",
              img: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "E-Commerce Website",
              desc: "Responsive platform with inventory and orders.",
              img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Customer Churn Prediction",
              desc: "ML model with Power BI dashboard.",
              img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((p) => (
            <motion.article key={p.title} variants={item} className="group rounded-xl overflow-hidden border hover:shadow-lg transition">
              <div className="aspect-[16/9] overflow-hidden">
                <Image src={p.img} alt={p.title} width={800} height={450} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{p.desc}</p>
                <div className="mt-3 flex gap-3">
                  <a href="https://github.com/harunali86" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">GitHub</a>
                  <a href="#" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">Live Demo</a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="container mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Software Engineer • Company</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">2023 — Present</p>
            <p className="mt-2 text-sm">Built performant web apps, optimized APIs, and delivered data-driven features.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
        <div className="mt-4 space-y-2 text-sm">
          <p>Email: <a className="text-cyan-600 dark:text-cyan-400 hover:underline" href="mailto:Harun.ilahi.shaikh@gmail.com">Harun.ilahi.shaikh@gmail.com</a></p>
          <p>LinkedIn: <a className="text-cyan-600 dark:text-cyan-400 hover:underline" href="https://www.linkedin.com/in/harun-shaikh-0947751ba" target="_blank" rel="noreferrer">linkedin.com/in/harun-shaikh</a></p>
        </div>
      </section>
    </main>
  );
}
