import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { BarChart2, Bitcoin, DollarSign, Brain } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10 space-y-16">
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">Our Services</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Formula Stat AI Trade delivers high-performance financial trading across Forex, Crypto, Stocks, and AI-powered systems — engineered to help you win.
        </p>
      </motion.section>

      {/* SERVICE CARDS */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Forex Trading */}
        <motion.div
          className="bg-slate-800 p-6 rounded-2xl shadow-xl text-center space-y-4 border border-slate-700 hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          <DollarSign className="mx-auto text-green-400" size={36} />
          <h2 className="text-xl font-bold text-white">Forex Trading</h2>
          <p className="text-gray-300 text-sm">
            Tap into the largest financial market with AI-precision trades that analyze currency pairs in real-time.
          </p>
        </motion.div>

        {/* Crypto Trading */}
        <motion.div
          className="bg-slate-800 p-6 rounded-2xl shadow-xl text-center space-y-4 border border-slate-700 hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          <Bitcoin className="mx-auto text-yellow-400" size={36} />
          <h2 className="text-xl font-bold text-white">Crypto Trading</h2>
          <p className="text-gray-300 text-sm">
            Navigate the crypto world with intelligent bots that trade 24/7 using real-time volatility detection.
          </p>
        </motion.div>

        {/* Stock Market */}
        <motion.div
          className="bg-slate-800 p-6 rounded-2xl shadow-xl text-center space-y-4 border border-slate-700 hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          <BarChart2 className="mx-auto text-blue-300" size={36} />
          <h2 className="text-xl font-bold text-white">Stock Trading</h2>
          <p className="text-gray-300 text-sm">
            Invest in leading companies and indices with AI insights that track price actions, news, and trend reversals.
          </p>
        </motion.div>

        {/* AI-Powered Strategy */}
        <motion.div
          className="bg-slate-800 p-6 rounded-2xl shadow-xl text-center space-y-4 border border-slate-700 hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          <Brain className="mx-auto text-purple-400" size={36} />
          <h2 className="text-xl font-bold text-white">AI Trading Engine</h2>
          <p className="text-gray-300 text-sm">
            The heartbeat of our system — self-learning algorithms that adapt and evolve as the market changes.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
