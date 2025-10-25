"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { PropsWithChildren } from "react";

interface TiltCardProps extends PropsWithChildren {
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmount = 12;

    rotateX.set(((offsetY - centerY) / centerY) * -rotateAmount);
    rotateY.set(((offsetX - centerX) / centerX) * rotateAmount);
    x.set(offsetX - centerX);
    y.set(offsetY - centerY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  };

  const spotlight = useMotionTemplate`
    radial-gradient(
      350px circle at ${x}px ${y}px,
      rgba(14, 165, 161, 0.35),
      transparent 70%
    )
  `;

  return (
    <motion.div
      className={`group relative rounded-3xl border border-white/10 bg-white/[0.06] p-[1px] backdrop-blur-xl transition will-change-transform hover:border-primary/40 ${className}`}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundImage: spotlight }}
        aria-hidden
      />
      <div className="relative z-10 h-full rounded-[calc(theme(borderRadius.3xl)-1px)] bg-[rgba(6,12,24,0.85)] p-6 text-white/80 shadow-[0_20px_45px_-20px_rgba(10,10,20,0.6)]">
        {children}
      </div>
    </motion.div>
  );
}
