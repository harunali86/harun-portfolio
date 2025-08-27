import Link from "next/link";

export default function HSLogo() {
  return (
    <Link href="#hero" aria-label="Home" className="relative inline-flex items-center gap-2">
      <span className="relative inline-grid place-items-center w-9 h-9 rounded-lg">
        <span className="absolute inset-0 rounded-lg blur-md bg-gradient-to-tr from-cyan-500/70 via-fuchsia-500/70 to-emerald-500/70" />
        <span className="relative inline-grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-fuchsia-500 text-white font-bold">
          HS
        </span>
      </span>
    </Link>
  );
}

