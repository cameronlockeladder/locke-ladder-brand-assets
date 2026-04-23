import React from "react";
import "@/App.css";
import Lenis from "lenis";
import { useEffect } from "react";

import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Relationship from "@/components/sections/Relationship";
import RoofEndOfLife from "@/components/sections/RoofEndOfLife";
import FieldInspection from "@/components/sections/FieldInspection";
import RepairVsReplace from "@/components/sections/RepairVsReplace";
import TodaysCedar from "@/components/sections/TodaysCedar";
import BravaProof from "@/components/sections/BravaProof";
import LightStudy from "@/components/sections/LightStudy";
import RoofSystem from "@/components/sections/RoofSystem";
import AttentionToDetail from "@/components/sections/AttentionToDetail";
import NewApproach from "@/components/sections/NewApproach";
import RoadMap from "@/components/sections/RoadMap";
import FAQ from "@/components/sections/FAQ";
import HumanClose from "@/components/sections/HumanClose";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    const id = requestAnimationFrame(raf);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => io.observe(el));
    return () => { cancelAnimationFrame(id); lenis.destroy(); io.disconnect(); };
  }, []);

  return (
    <div className="App paper-grain bg-paper text-ink" data-testid="proposal-root">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Relationship />
        <RoofEndOfLife />
        <FieldInspection />
        <RepairVsReplace />
        <TodaysCedar />
        <BravaProof />
        <LightStudy />
        <RoofSystem />
        <AttentionToDetail />
        <NewApproach />
        <RoadMap />
        <FAQ />
        <HumanClose />
      </main>
      <Footer />
    </div>
  );
}
