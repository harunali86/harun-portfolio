"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FlipCard from "./components/FlipCard";
import Typewriter from "./components/Typewriter";
import BackToTop from "./components/BackToTop";
import ContactSection from "./components/ContactSection";
import HeroScene from "./components/HeroScene";
import Testimonials from "./components/Testimonials";
import useScrollSound from "./components/useScrollSound";
import Counter from "./components/Counter";
import SkillsRadial from "./components/SkillsRadial";

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
  useScrollSound();
  return (
    <main className="min-h-screen font-sans">
      {/* subtle click sound across site */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_20%_10%,rgba(34,211,238,.15),transparent_50%),radial-gradient(80%_50%_at_80%_20%,rgba(168,85,247,.15),transparent_50%),radial-gradient(80%_60%_at_50%_80%,rgba(34,197,94,.12),transparent_60%)]" />
        <HeroScene />
        <div className="container mx-auto px-6 py-28 sm:py-36">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-cyan-500">Portfolio</p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              <motion.span initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 }}}} className="inline-block">
                {"Harun Shaikh".split("").map((ch, i) => (
                  <motion.span key={i} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 }}}} className="inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </motion.span>
              <span className="block text-balance text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl mt-3">
                <Typewriter words={["Full Stack Developer", "Data Analyst", "Software Engineer"]} />
              </span>
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
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <Counter to={3} suffix="+" />
            <p className="text-xs opacity-70">Years Experience</p>
          </div>
          <div>
            <Counter to={12} suffix="+" />
            <p className="text-xs opacity-70">Projects</p>
          </div>
          <div>
            <Counter to={20} suffix="+" />
            <p className="text-xs opacity-70">Skills</p>
          </div>
        </div>
      </section>

      <SkillsRadial />

      {/* Projects */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
        <div className="mt-6 overflow-x-auto [scroll-snap-type:x_mandatory] hide-scrollbar">
          <div className="flex gap-6 min-w-full pr-6">
            {[
              {
                title: "AI Agents for Finance",
                desc: "Multi-agent system comparing stocks and generating insights.",
                img: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1200&auto=format&fit=crop&fm=avif",
                tags: ["AI","Agents","Finance"],
              },
              {
                title: "E-Commerce Website",
                desc: "Responsive platform with inventory and orders.",
                img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop&fm=avif",
                tags: ["Next.js","Stripe","Postgres"],
              },
              {
                title: "Customer Churn Prediction",
                desc: "ML model with Power BI dashboard.",
                img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop&fm=avif",
                tags: ["Python","Pandas","ML"],
              },
            ].map((p) => (
              <div key={p.title} className="w-80 flex-shrink-0 [scroll-snap-align:start]">
                <FlipCard title={p.title} desc={p.desc} img={p.img} tags={p.tags} />
              </div>
            ))}
          </div>
        </div>
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

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <ContactSection />
      <BackToTop />
    </main>
  );
}
