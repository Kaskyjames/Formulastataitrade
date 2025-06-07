import React from "react";
import { motion } from "framer-motion";

// Update these paths with your actual images or gifs stored in public folder
const services = [
  {
    title: "Forex Trading",
    description: "Trade currencies worldwide with AI-powered precision and real-time market insights.",
    image: "/images/forex.gif",
  },
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
    <section className="max-w-7xl mx-auto px-6 py-16 bg-slate-900 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
        Our Services
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, image }, idx) => (
          <motion.div
            key={idx}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-md cursor-pointer"
            whileHover={{ scale: 1.05, opacity: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <figure className="overflow-hidden h-48">
              <img
                src={image}
                alt={`${title} illustration`}
                className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
                loading="lazy"
              />
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
