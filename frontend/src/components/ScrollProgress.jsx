import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/* Single thin progress bar pinned at the very top of the page.
   Uses mix-blend-difference so it reads on both light and dark sections without theme-specific tuning. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 });
  return (
    <motion.div
      aria-hidden="true"
      data-testid="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-warm-gold origin-left mix-blend-difference pointer-events-none"
      style={{ scaleX }}
    />
  );
}
