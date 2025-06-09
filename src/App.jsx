import { Routes, Route } from "react-router-dom";

import Home from "./FormulaStatAI";        // Correct: homepage file
import About from "./pages/AboutUs";       // Note: AboutUs.jsx
import Services from "./pages/Services";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
