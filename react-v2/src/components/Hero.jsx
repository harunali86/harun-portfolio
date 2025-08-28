import { motion } from "framer-motion";
import Typed from "react-typed";
import SceneOrb from "./SceneOrb.jsx";

export default function Hero() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_20%_10%,rgba(34,211,238,.15),transparent_50%),radial-gradient(80%_50%_at_80%_20%,rgba(168,85,247,.15),transparent_50%),radial-gradient(80%_60%_at_50%_80%,rgba(34,197,94,.12),transparent_60%)]" />
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-sm uppercase tracking-widest text-cyan-500">Portfolio</motion.p>
          <motion.h1 variants={item} className="mt-3 text-4xl sm:text-5xl font-semibold">Hi, I’m Harun Shaikh</motion.h1>
          <motion.p variants={item} className="mt-2 text-zinc-300">
            <Typed strings={["Web Developer", "AI Enthusiast", "Software Engineer"]} typeSpeed={60} backSpeed={30} backDelay={1100} loop />
          </motion.p>
          <motion.div variants={item} className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm hover:scale-[1.02] transition">View Projects</a>
            <a href="/Harun-Shaikh-Resume.pdf" className="inline-flex items-center rounded-md border px-5 py-2.5 text-sm bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20">Download Resume</a>
          </motion.div>
        </motion.div>
        <div><SceneOrb /></div>
      </div>
    </section>
  );
}

