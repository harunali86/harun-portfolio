export default function Navbar({ scrolled }) {
  return (
    <header className={`sticky top-0 z-50 border-b transition backdrop-blur ${scrolled ? "bg-white/60 dark:bg-black/40 shadow-sm border-white/10" : "supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 border-transparent"}`}>
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" aria-label="Home" className="relative inline-flex items-center">
          <span className="relative grid place-items-center w-10 h-10 rounded-lg">
            <span className="absolute inset-0 rounded-lg blur-md bg-gradient-to-tr from-cyan-500/70 via-fuchsia-500/70 to-emerald-500/70" />
            <span className="relative grid place-items-center w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-fuchsia-500 text-white font-extrabold tracking-wide">HS</span>
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="relative group hover:opacity-90">
            <span>About</span>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="#projects" className="relative group hover:opacity-90">
            <span>Projects</span>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
          </a>
          <a href="#contact" className="relative group hover:opacity-90">
            <span>Contact</span>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </nav>
        <button className="sm:hidden rounded-md border px-3 py-1.5 text-sm">Menu</button>
      </div>
    </header>
  );
}

