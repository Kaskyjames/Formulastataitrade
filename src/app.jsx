// App.jsx
import { Routes, Route } from "react-router-dom";
import FormulaStatAI from "./FormulaStatAI";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FormulaStatAI />} />
      <Route path="/about" element={<AboutUs />} />
      {/* Add future routes here */}
    </Routes>
  );
}