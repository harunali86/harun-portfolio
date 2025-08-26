"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HSLogo from "./HSLogo";

const sections = ["hero", "about", "skills", "projects", "experience", "testimonials", "contact", "blog"];

export default function NavBar() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <HSLogo />
        <nav className="hidden sm:flex gap-6 text-sm">
          <motion.ul initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }} className="flex gap-6">
            {sections.map((id) => (
              <motion.li key={id} variants={{ hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } }}>
                <a href={`#${id}`} className={`relative hover:opacity-90 ${active === id ? "text-cyan-600 dark:text-cyan-400" : ""}`}>
                  <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                  <span className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ${active === id ? "scale-x-100" : "group-hover:scale-x-100"}`}></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}