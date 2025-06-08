// src/pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import forexAnimation from "../../public/animations/forex-lottie.json";

const services = [
  {
    title: "Forex Trading",
    description: "Trade currencies worldwide with AI-powered precision and real-time market insights.",
    lottie: "forex-lottie.json", // Lottie JSON
    image: "/images/forex-chart.png", // PNG image
  },
  // ... other services remain unchanged
  {
    title: "Cryptocurrency",
    description: "Navigate volatile crypto markets with adaptive algorithms and secure automation.",
    image: "/images/crypto.gif",
  },
  {
    title: "Stock Market",
    description: "Invest in stocks intelligently, backed by deep data analytics and fast execution.",
    image: "/images/stocks.gif",
  },
  {
    title: "AI Trading System",
    description: "Our AI analyzes millions of data points continuously to maximize your profit potential.",
    image: "/images/ai-trading.gif",
  },
];

export default function ServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-slate-900 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
        Our Services
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, image, lottie }, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-blue-500/30 transition-shadow"
            whileHover={{ scale: 1.05, opacity: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            aria-label={`${title} service card`}
          >
            <figure className="overflow-hidden h-64 flex flex-col items-center justify-center bg-black p-4">
  {lottie && (
    <div className="w-32 h-32">
      <Lottie animationData={require(`../../public/animations/${lottie}`)} loop />
    </div>
  )}
  {image && (
    <img
      src={image}
      alt={`${title} service image`}
      className="w-20 h-auto mt-4 object-contain"
      loading="lazy"
    />
  )}
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
