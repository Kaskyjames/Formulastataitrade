// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowRight } from "lucide-react"; // for CTA icon fallback

import forexAnimation from "../../public/animations/forex-lottie.json";
import cryptoAnimation from "../../public/animations/crypto-lottie.json";
import stocksAnimation from "../../public/animations/stocks-lottie.json";
import aiTradingAnimation from "../../public/animations/ai-lottie.json";

const services = [
  {
    title: "Forex Trading",
    description:
      "Trade currencies worldwide with AI-powered precision and real-time market insights.",
    lottie: forexAnimation,
    anchor: "#forex",
  },
  {
    title: "Cryptocurrency",
    description:
      "Navigate volatile crypto markets with adaptive algorithms and secure automation.",
    lottie: cryptoAnimation,
    anchor: "#crypto",
  },
  {
    title: "Stock Market",
    description:
      "Invest in stocks intelligently, backed by deep data analytics and fast execution.",
    lottie: stocksAnimation,
    anchor: "#stocks",
  },
  {
    title: "AI Trading System",
    description:
      "Our AI analyzes millions of data points continuously to maximize your profit potential.",
    lottie: aiTradingAnimation,
    anchor: "#ai",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-900 rounded-2xl shadow-2xl"
      aria-labelledby="services-heading"
    >
      <h2
        id="services-heading"
        className="text-5xl font-extrabold text-center mb-4 text-blue-400 tracking-tight"
      >
        Our Services
      </h2>
      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
        Experience next-generation trading across Forex, Crypto, Stocks, and AI—fully automated, deeply secure, and precision-guided by intelligence.
      </p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map(({ title, description, lottie, anchor }, idx) => (
          <motion.article
            key={idx}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_#3b82f6] hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            aria-label={`Service: ${title}`}
          >
            <figure className="bg-black flex items-center justify-center h-64 p-6">
              <div className="w-full max-w-[180px] h-[180px] transition-transform duration-300 hover:scale-105">
                {lottie ? (
                  <Lottie animationData={lottie} loop />
                ) : (
                  <ArrowRight className="text-white w-full h-full" />
                )}
              </div>
            </figure>
            <div className="px-6 py-5 text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6">{description}</p>
              <a
                href={anchor}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition"
                aria-label={`Learn more about ${title}`}
              >
                Learn More <ArrowRight size={18} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
