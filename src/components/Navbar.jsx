import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-slate-950 text-white border-b border-slate-800 shadow-sm"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Formula Stat AI Trade
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-lg bg-slate-950">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </motion.nav>
  );
}
