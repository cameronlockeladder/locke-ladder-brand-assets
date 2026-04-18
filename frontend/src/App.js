import React from "react";
import "@/App.css";
import Lenis from "lenis";
import { useEffect } from "react";

import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Diagnosis from "@/components/sections/Diagnosis";
import Polycam from "@/components/sections/Polycam";
import EvidenceWall from "@/components/sections/EvidenceWall";
import CedarBrava from "@/components/sections/CedarBrava";
import LaskeyReveal from "@/components/sections/LaskeyReveal";
import BravaGallery from "@/components/sections/BravaGallery";
import AspenLightStudy from "@/components/sections/AspenLightStudy";
import RoofSystem from "@/components/sections/RoofSystem";
import Craftsmanship from "@/components/sections/Craftsmanship";
import Team from "@/components/sections/Team";
import GiveBack from "@/components/sections/GiveBack";
import Closing from "@/components/sections/Closing";
import Footer from "@/components/Footer";

export default function App() {
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
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
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
    <div className="App paper-grain bg-paper text-ink" data-testid="proposal-root">
      <Nav />
      <main>
        <Hero />
        <Diagnosis />
        <Polycam />
        <EvidenceWall />
        <CedarBrava />
        <LaskeyReveal />
        <BravaGallery />
        <AspenLightStudy />
        <RoofSystem />
        <Craftsmanship />
        <Team />
        <GiveBack />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
