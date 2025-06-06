import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-16 space-y-16">
      {/* PAGE TITLE */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Formula Stat AI Trade
      </motion.h1>

      {/* MISSION SECTION */}
      <section className="max-w-4xl mx-auto space-y-6 text-center md:text-left">
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Formula Stat AI Trade is more than just a trading platform — it's a vision turned into a powerful reality. Built for dreamers, risk-takers, and investors who believe in the power of automation and intelligence.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We leverage advanced algorithms and deep learning models to automate trading across Forex, Crypto, and Stocks. That means real-time decision-making, 24/7 monitoring, and data-driven growth — all without lifting a finger.
        </motion.p>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Our goal is simple: put the power of institutional-grade AI trading in the hands of everyday people — with transparency, control, and peace of mind.
        </motion.p>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
        <div className="bg-slate-800 p-6 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-semibold text-blue-400">Mission</h3>
          <p className="text-gray-300">
            Democratize access to intelligent trading through automation and simplicity.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-semibold text-blue-400">Vision</h3>
          <p className="text-gray-300">
            A future where AI-powered wealth creation is accessible to all, not just the elite.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-semibold text-blue-400">Core Values</h3>
          <p className="text-gray-300">
            Trust, transparency, empowerment, and innovation — we don’t just build tools, we build futures.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
