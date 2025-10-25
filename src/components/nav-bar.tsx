import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Design System", href: "#design-system" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
        <Link href="#top" className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
          {profile.owner.name}
        </Link>
        <nav className="hidden gap-6 rounded-full border border-white/10 bg-black/30 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/60 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
