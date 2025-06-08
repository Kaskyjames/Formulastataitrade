import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

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
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Tagline */}
        <Link to="/" className="flex items-center space-x-3">
          <motion.img
            src={logo}
            alt="Formula Stat AI Trade Logo"
            className="w-14 md:w-16 lg:w-20"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: [0, 1080],
              scale: [1, 1.3, 1, 1.3, 1],
            }}
            transition={{
              rotateY: {
                duration: 9,
                ease: "linear",
                repeat: Infinity,
              },
              scale: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                times: [0, 0.25, 0.5, 0.75, 1],
              },
            }}
          />
          <div className="flex flex-col leading-tight">
  <span className="text-xl font-bold text-blue-400">
    Formula Stat AI Trade
  </span>
  <span className="text-xs text-blue-300 mt-1 tracking-widest">
    Secure. Smart. Automated.
  </span>
</div>
        </Link>

        {/* Menu Toggle for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
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
