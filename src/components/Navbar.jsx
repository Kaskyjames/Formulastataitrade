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
      <div className="flex flex-col items-start">
  <img
    src={logo}
    alt="Formula Stat AI"
    className="h-10 md:h-12"
  />
  <span className="text-xs text-blue-400 mt-1 tracking-wide">
    Secure. Smart. Automated.
  </span>
</div>
  <img src={logo} alt="Formula Stat AI Logo" className="w-10 h-10 object-contain" />
  <span className="text-xl font-bold text-blue-400">Formula Stat AI</span>
</div>
        <Link to="/" className="flex items-center space-x-3">
          <motion.img
            src="/logo.png"
            alt="Formula Stat AI Trade Logo"
            className="w-14 md:w-16 lg:w-20"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: [0, 1080], // 3 spins
              scale: [1, 1.3, 1, 1.3, 1], // zoom in/out twice
            }}
            transition={{
              rotateY: {
                duration: 9, // 3 spins in 9 seconds (3s per spin)
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
          <span className="text-2xl font-bold text-blue-500 select-none">
            Formula Stat AI Trade
          </span>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-blue-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-lg bg-slate-950">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </motion.nav>
  );
}
