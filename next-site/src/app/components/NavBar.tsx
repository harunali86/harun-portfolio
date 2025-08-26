"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

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
        <Link href="#hero" className="font-semibold">HS</Link>
        <nav className="hidden sm:flex gap-6 text-sm">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className={`hover:opacity-80 ${active === id ? "text-cyan-600 dark:text-cyan-400" : ""}`}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}