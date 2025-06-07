// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormulaStatAITrade from "./FormulaStatAI"; // Homepage
import AboutUs from "./pages/AboutUs";            // About Page
import Services from "./pages/Services";          // Services Page (new)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<FormulaStatAITrade />} />

        {/* About Route */}
        <Route path="/about" element={<AboutUs />} />

        {/* Services Route */}
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
