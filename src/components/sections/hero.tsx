"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const slides = profile.hero.visualSlides;

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[index];

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/[0.08] bg-white/[0.03] px-6 py-16 backdrop-blur-xl sm:px-12">
      <div className="absolute -left-48 -top-48 h-[480px] w-[480px] rounded-full bg-primary/30 blur-[160px]" aria-hidden />
      <div className="absolute -right-48 -bottom-48 h-[380px] w-[380px] rounded-full bg-accent/25 blur-[140px]" aria-hidden />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-9 text-balance">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            {profile.owner.role}
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {profile.hero.title}
            </h1>
            <p className="max-w-xl text-base text-white/70 md:text-lg">
              {profile.hero.subtitle}
            </p>
          </div>
          <p className="text-sm text-white/60">
            {profile.hero.localizedIntro}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={profile.hero.primaryCta.anchor}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-primary/50 bg-primary/90 px-6 py-3 text-sm font-semibold text-black transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 transition group-hover:opacity-100" aria-hidden />
              <span className="relative">{profile.hero.primaryCta.label}</span>
            </Link>
            <Link
              href={profile.hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/10"
            >
              {profile.hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative">
          <motion.div
            className="absolute -inset-8 rounded-[40px] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-6 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.8)]">
            <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
              <span>Interactive Preview</span>
              <span>{currentSlide.title}</span>
            </div>
            <div className="relative h-72 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  className="flex h-full flex-col justify-between rounded-xl border border-white/5 bg-black/40 p-5 backdrop-blur-lg"
                >
                  <div className="space-y-3">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary/80">
                      {currentSlide.id}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {currentSlide.title}
                    </h3>
                    <p className="text-sm text-white/60">
                      {currentSlide.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentSlide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex justify-between text-xs text-white/50">
              <div className="flex items-center gap-2">
                {slides.map((slide, slideIndex) => (
                  <button
                    key={slide.id}
                    className={`h-1.5 w-10 overflow-hidden rounded-full bg-white/10 transition ${
                      index === slideIndex ? "bg-gradient-to-r from-primary to-accent" : ""
                    }`}
                    onClick={() => setIndex(slideIndex)}
                    aria-label={`Show ${slide.title}`}
                  />
                ))}
              </div>
              <span>Device mockups cycling every 4s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
