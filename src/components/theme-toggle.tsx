"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (theme ?? resolvedTheme) === "dark" || resolvedTheme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-primary/60 hover:bg-primary/10"
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 rounded-full bg-white/0 blur-sm transition group-hover:bg-primary/20" aria-hidden />
      <span className="relative flex items-center gap-2">
        {mounted ? (
          isDark ? (
            <Moon size={16} className="transition-transform group-hover:-rotate-12" />
          ) : (
            <Sun size={16} className="transition-transform group-hover:rotate-12" />
          )
        ) : (
          <Moon size={16} className="opacity-0" />
        )}
        <span className="hidden sm:inline">{isDark ? "Dim" : "Glow"} mode</span>
      </span>
    </button>
  );
}
