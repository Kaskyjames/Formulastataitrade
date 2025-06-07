import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      while (true) {
        // Rotate 360 degrees 3 times (3 x 6 seconds = 18 seconds)
        await controls.start({
          rotate: 1080, // 360 * 3
          transition: { duration: 18, ease: "linear" },
        });
        // Reset rotation to 0 instantly for seamless loop
        controls.set({ rotate: 0 });
        // Pulse zoom in/out over 1.5 seconds
        await controls.start({
          scale: [1, 1.2, 1],
          transition: { duration: 1.5, ease: "easeInOut" },
        });
      }
    }
    sequence();
  }, [controls]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-slate-950 text-white border-b border-slate-800 shadow-sm"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Animated Logo */}
        <motion.div animate={controls} style={{ originX: 0.5, originY: 0.5 }}>
          <Link to="/">
            <img
              src="/logo.png"
              alt="Formula Stat AI Trade Logo"
              className="w-[70px] h-[70px] object-contain"
            />
          </Link>
        </motion.div>

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
