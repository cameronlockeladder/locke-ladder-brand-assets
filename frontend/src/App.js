import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChristChurch from "@/pages/ChristChurch";
import HinsdaleCedar from "@/pages/HinsdaleCedar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HinsdaleCedar />} />
        <Route path="/christ-church" element={<ChristChurch />} />
        <Route path="/hinsdale-cedar" element={<HinsdaleCedar />} />
      </Routes>
    </BrowserRouter>
  );
}
