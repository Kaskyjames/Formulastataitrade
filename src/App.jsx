// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import FormulaStatAITrade from "./FormulaStatAI"; // Homepage
import AboutUs from "./pages/AboutUs";            // About Page
import Services from "./pages/Services";          // Services Page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormulaStatAITrade />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
