import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  BarChart2,
  Bitcoin,
  DollarSign,
  Brain,
  TrendingUp,
  Zap,
  Cpu,
} from "lucide-react";

export default function Services() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white px-4 sm:px-6 py-10 space-y-20">
      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 w-[80vw] h-[60vh] -translate-x-1/2 bg-gradient-to-br from-blue-700/10 via-purple-700/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* HERO */}
      <motion.section
        className="text-center relative z-10 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Our Services
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Formula Stat AI Trade delivers high-performance financial trading
          across Forex, Crypto, Stocks, and AI-powered systems — engineered to
          help you win.
        </p>
      </motion.section>

      {/* SERVICE CARDS */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto z-10 relative">
        {[
          {
            title: "Forex Trading",
            Icon: DollarSign,
            color: "text-green-400",
            desc: "Tap into the largest financial market with AI-precision trades that analyze currency pairs in real-time.",
          },
          {
            title: "Crypto Trading",
            Icon: Bitcoin,
            color: "text-yellow-400",
            desc: "Navigate the crypto world with intelligent bots that trade 24/7 using real-time volatility detection.",
          },
          {
            title: "Stock Trading",
            Icon: BarChart2,
            color: "text-blue-300",
            desc: "Invest in top companies and indices with AI insights tracking price actions, news, and trends.",
          },
          {
            title: "AI Trading Engine",
            Icon: Brain,
            color: "text-purple-400",
            desc: "The heartbeat of our system — self-learning algorithms that adapt and evolve with every market shift.",
          },
        ].map(({ title, Icon, color, desc }, i) => (
          <motion.div
            key={i}
            className={`bg-slate-800 p-6 rounded-2xl shadow-xl text-center space-y-4 border border-slate-700 hover:shadow-lg hover:scale-105 transition-all duration-300 hover:ring-1 hover:ring-blue-500/40`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Icon className={`mx-auto ${color}`} size={36} />
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-gray-300 text-sm">{desc}</p>
          </motion.div>
        ))}
      </section>

      {/* AI ENGINE ANIMATION SECTION */}
      <motion.section
        className="relative bg-slate-900/60 border border-slate-700 rounded-2xl p-8 max-w-5xl mx-auto text-center space-y-6 z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Cpu size={40} className="mx-auto text-blue-500" />
        <h2 className="text-2xl font-bold">Behind the Machine</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our proprietary AI core evaluates thousands of market signals per
          second — from news to technicals — and adjusts trading behavior
          accordingly.
        </p>
        <div className="animate-pulse text-blue-300 text-sm">
          ⚙️ AI Running Simulations... Market State: Adaptive
        </div>
      </motion.section>

      {/* MOCK LIVE SIGNALS FEED */}
      <section className="max-w-5xl mx-auto text-sm text-gray-400 font-mono bg-slate-800/60 p-6 rounded-2xl border border-slate-700 shadow-inner z-10 relative">
        <h3 className="text-blue-400 font-semibold text-lg mb-3">
          Live Market Feed (Mock)
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>BTC/USD</span>
            <span className="text-green-400">Buy Signal ↑</span>
          </div>
          <div className="flex justify-between">
            <span>EUR/GBP</span>
            <span className="text-red-400">Sell Signal ↓</span>
          </div>
          <div className="flex justify-between">
            <span>US30</span>
            <span className="text-yellow-400">Neutral ⚠</span>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <motion.section
        className="text-center space-y-4 mt-10 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-slate-800 border border-slate-700 rounded-2xl p-8 max-w-3xl mx-auto shadow-md"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <Zap size={32} className="mx-auto text-yellow-300 animate-pulse" />
        <h2 className="text-xl font-bold">
          Ready to let AI optimize your trades?
        </h2>
        <a
          href="/signup"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg shadow-xl transition hover:shadow-blue-500/50 hover:scale-105"
        >
          Join Formula Stat AI Today
        </a>
      </motion.section>

      {/* STICKY BUTTON */}
      <a
        href="/signup"
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg z-50 animate-bounce transition-all"
      >
        Start Now
      </a>

      {/* SEO FOOTER (Hidden visually) */}
      <div className="text-xs text-slate-900 mt-10 text-center select-none pointer-events-none opacity-0">
        Formula Stat AI Trade services include automated forex trading, crypto
        bots, stock market strategies, and AI-powered asset management systems.
      </div>
    </div>
  );
}
