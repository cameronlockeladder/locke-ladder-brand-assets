import React, { useEffect } from "react";
import Lenis from "lenis";

import HinsdaleHero from "@/components/sections/hinsdale/HinsdaleHero";
import TwoHomes from "@/components/sections/hinsdale/TwoHomes";
import DroneSees from "@/components/sections/hinsdale/DroneSees";
import PerSquareMyth from "@/components/sections/hinsdale/PerSquareMyth";
import EricScope from "@/components/sections/hinsdale/EricScope";
import MarkScope from "@/components/sections/hinsdale/MarkScope";
import WhyBrava from "@/components/sections/hinsdale/WhyBrava";
import SnapeProof from "@/components/sections/hinsdale/SnapeProof";
import PolycamWalk from "@/components/sections/hinsdale/PolycamWalk";
import NextSteps from "@/components/sections/hinsdale/NextSteps";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

export default function HinsdaleCedar() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => io.observe(el));
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      io.disconnect();
    };
  }, []);

  return (
    <div className="App paper-grain bg-paper text-ink overflow-x-hidden" data-testid="hinsdale-root">
      <ScrollProgress />
      <main>
        <HinsdaleHero />
        <TwoHomes />
        <DroneSees />
        <PerSquareMyth />
        <EricScope />
        <MarkScope />
        <WhyBrava />
        <SnapeProof />
        <PolycamWalk />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
}
