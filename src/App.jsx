import { Routes, Route } from "react-router-dom";

// ✅ Adjusted file names to match actual files in your repo
import Home from "./pages/FormulaStatAI";
import About from "./pages/AboutUs";
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
