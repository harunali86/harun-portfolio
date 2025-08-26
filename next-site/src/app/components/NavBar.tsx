"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HSLogo from "./HSLogo";

const sections = ["hero", "about", "skills", "projects", "experience", "testimonials", "contact", "blog"];

export default function NavBar() {
  const [active, setActive] = useState<string>("hero");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur border-b ${scrolled ? "bg-white/60 dark:bg-black/40 shadow-sm border-black/10 dark:border-white/10" : "supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 border-transparent"}`}>
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <HSLogo />
        <nav className="hidden sm:flex gap-6 text-sm">
          <motion.ul initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }} className="flex gap-6">
            {sections.map((id) => (
              <motion.li key={id} variants={{ hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } }}>
                {id === "blog" ? (
                  <Link href="/blog" className="group relative hover:opacity-90">
                    <span>Blog</span>
                    <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Link>
                ) : (
                  <a href={`#${id}`} className={`group relative hover:opacity-90 ${active === id ? "text-cyan-600 dark:text-cyan-400" : ""}`}>
                    <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                    <span className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ${active === id ? "scale-x-100" : "group-hover:scale-x-100"}`}></span>
                  </a>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="sm:hidden rounded-md border px-3 py-1.5 text-sm" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>Menu</button>
        </div>
      </div>
      {/* Mobile menu */}
      <motion.div initial={false} animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} className="sm:hidden overflow-hidden border-t border-black/10 dark:border-white/10">
        <ul className="px-6 py-3 space-y-2">
          {sections.map((id) => (
            <li key={id}>
              {id === "blog" ? (
                <Link href="/blog" className="block py-1" onClick={() => setMenuOpen(false)}>Blog</Link>
              ) : (
                <a href={`#${id}`} className={`block py-1 ${active === id ? "text-cyan-600 dark:text-cyan-400" : ""}`} onClick={() => setMenuOpen(false)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}