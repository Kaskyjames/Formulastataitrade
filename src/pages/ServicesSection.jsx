import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-2">Our Cutting-Edge Services</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Smart, AI-powered solutions designed to grow your wealth and simplify your trading journey.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Forex Trading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">Precision Forex Trading</h3>
          <p className="text-gray-300 leading-relaxed">
            Our AI algorithms analyze global currency markets in real-time, executing trades with lightning speed and pinpoint accuracy — maximizing your profits while minimizing risks.
          </p>
        </motion.div>

        {/* Crypto Trading */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">Automated Crypto Strategies</h3>
          <p className="text-gray-300 leading-relaxed">
            Navigate the volatile crypto markets with confidence. Our adaptive AI identifies trends, spots opportunities, and executes trades 24/7, even when you sleep.
          </p>
        </motion.div>

        {/* Stock Market Trading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">AI-Driven Stock Insights</h3>
          <p className="text-gray-300 leading-relaxed">
            Leverage deep learning models that scan thousands of stocks daily, providing you with smart, data-backed trades and portfolio management.
          </p>
        </motion.div>

        {/* AI-Powered Trading System */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">Next-Level AI Trading</h3>
          <p className="text-gray-300 leading-relaxed">
            At the core of everything is our proprietary AI engine — continuously learning, adapting, and evolving to outsmart markets and deliver consistent returns.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <a
          href="https://formulastat-ai-dashboard.vercel.app"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl text-lg transition"
        >
          Explore Our Dashboard
        </a>
      </motion.div>
    </section>
  );
}
