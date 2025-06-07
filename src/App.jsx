// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormulaStatAITrade from "./FormulaStatAI"; // Homepage
import AboutUs from "./pages/AboutUs";            // About Page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<FormulaStatAITrade />} />

        {/* About Route */}
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
