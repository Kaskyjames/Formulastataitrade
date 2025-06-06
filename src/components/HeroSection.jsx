import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aiNetwork from "../assets/ai-network.json"; // Adjust path if needed

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden bg-slate-950 text-white">
      {/* Lottie Background */}
      <Lottie
        animationData={aiNetwork}
        loop
        autoplay
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Foreground Text */}
      <div className="relative z-10 space-y-6 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Formula Stat AI Trade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl max-w-3xl mx-auto text-gray-300"
        >
          Your AI-powered gateway to financial intelligence. We automate trading
          decisions in Forex, Crypto, and Stock markets—so you can grow your
          wealth with smart confidence.
        </motion.p>

        <motion.a
          href="https://formulastat-ai-dashboard.vercel.app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}
