import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight text-blue-400"
        >
          Formula Stat AI Trade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Unlock the power of AI to automate your Forex, Crypto, and Stock trading with precision and 24/7 intelligence. Designed for real people, built for real success.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex space-x-4"
        >
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-medium transition"
          >
            Learn More
          </Link>
          <a
            href="https://formulastat-ai-dashboard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-400 hover:bg-blue-500 text-blue-400 hover:text-white px-6 py-3 rounded-2xl text-lg font-medium transition"
          >
            Launch Dashboard
          </a>
        </motion.div>
      </div>
    </section>
  );
}