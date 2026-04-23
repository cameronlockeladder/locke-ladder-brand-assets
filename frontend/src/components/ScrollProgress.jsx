import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/* Thin warm-gold progress bar at the top of the page.
   No blend-mode — removed mix-blend-difference which was causing GPU-composite lag. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.25 });
  return (
    <motion.div
      aria-hidden="true"
      data-testid="scroll-progress-bar"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-warm-gold origin-left pointer-events-none"
      style={{ scaleX }}
    />
  );
}
