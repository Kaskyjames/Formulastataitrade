

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormulaStatAITrade from "./FormulaStatAI"; // Home component
import AboutUs from "./pages/AboutUs";            // About page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormulaStatAITrade />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
