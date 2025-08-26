import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="#hero" className="font-semibold">HS</Link>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#experience" className="hover:opacity-80">Experience</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}