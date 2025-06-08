// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import forexAnimation from "../../public/animations/forex-lottie.json";
import cryptoAnimation from "../../public/animations/crypto-lottie.json";
import stocksAnimation from "../../public/animations/stocks-lottie.json";
import aiTradingAnimation from "../../public/animations/ai-lottie.json";

const services = [
  {
    title: "Forex Trading",
    description: "Trade currencies worldwide with AI-powered precision and real-time market insights.",
    lottie: forexAnimation,
  },
  {
    title: "Cryptocurrency",
    description: "Navigate volatile crypto markets with adaptive algorithms and secure automation.",
    lottie: cryptoAnimation,
  },
  {
    title: "Stock Market",
    description: "Invest in stocks intelligently, backed by deep data analytics and fast execution.",
    lottie: stocksAnimation,
  },
  {
    title: "AI Trading System",
    description: "Our AI analyzes millions of data points continuously to maximize your profit potential.",
    lottie: aiTradingAnimation,
  },
];

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-slate-900 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
        Our Services
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, lottie }, idx) => (
          <motion.div
  key={idx}
  className="bg-slate-800 rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-blue-500/30 transition-shadow"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, delay: idx * 0.2 }}
>
            <figure className="bg-black flex items-center justify-center h-64 p-6">
  <div className="w-full max-w-[180px] h-[180px] transition-transform duration-300 hover:scale-105">
  <Lottie animationData={lottie} loop />
</div>
</figure>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
