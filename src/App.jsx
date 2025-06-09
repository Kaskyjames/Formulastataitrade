import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Signup from "./pages/Signup"; // 👈 make sure this path is correct

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<Signup />} /> {/* ✅ Signup route */}
    </Routes>
  );
}
