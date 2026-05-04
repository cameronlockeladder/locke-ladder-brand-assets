import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChristChurch from "@/pages/ChristChurch";
import HinsdaleIndex from "@/pages/HinsdaleIndex";
import BowlesPage from "@/pages/BowlesPage";
import LindahlPage from "@/pages/LindahlPage";

/**
 * Host-based routing for Vercel custom domains:
 *   bowles.lockeladder.com   → BowlesPage at /
 *   lindahl.lockeladder.com  → LindahlPage at /
 *   anything else            → BrowserRouter (default = Hinsdale index)
 */
function getHostRoute() {
  if (typeof window === "undefined") return null;
  const host = window.location.hostname.toLowerCase();
  if (host.startsWith("bowles.")) return "bowles";
  if (host.startsWith("lindahl.")) return "lindahl";
  return null;
}

export default function App() {
  const hostRoute = getHostRoute();

  if (hostRoute === "bowles") return <BowlesPage />;
  if (hostRoute === "lindahl") return <LindahlPage />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HinsdaleIndex />} />
        <Route path="/bowles" element={<BowlesPage />} />
        <Route path="/lindahl" element={<LindahlPage />} />
        <Route path="/hinsdale-cedar" element={<HinsdaleIndex />} />
        <Route path="/christ-church" element={<ChristChurch />} />
      </Routes>
    </BrowserRouter>
  );
}
