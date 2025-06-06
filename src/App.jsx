import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import FormulaStatAI from "./FormulaStatAI"; // Home page
import About from "./pages/About";           // About page

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<FormulaStatAI />} />

        {/* About Page Route */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;