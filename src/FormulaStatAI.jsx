import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 1500 },
  { name: "Apr", value: 2000 },
  { name: "May", value: 2500 },
];

export default function FormulaStatAI() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8 space-y-24">
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center space-y-6 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-blue-400"
        >
          Formula Stat AI Trade
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
        >
          Your AI-powered gateway to financial intelligence. We automate trading decisions in Forex, Crypto, and Stocks—so you can grow your wealth with smart confidence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="https://formulastat-ai-dashboard.vercel.app"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
          >
            Access Dashboard
          </a>
          <Link
            to="/about"
            className="border border-blue-400 hover:bg-blue-500 text-blue-400 hover:text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* AI TRADING SECTION */}
      <section className="text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold"
        >
          AI-Powered Trading for the Future
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Formula Stat AI Trade analyzes global market signals, executes precision trades, and adjusts strategies faster than humanly possible—so your money works even while you rest.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-10 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Powered by deep learning and adaptive logic, our system backtests thousands of strategies and executes the best possible trade logic in real-time.
        </p>
        <div className="bg-slate-800 rounded-2xl p-4 md:p-8">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", color: "#fff" }} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold">Why Trust Formula Stat AI Trade?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Transparency & Control</h3>
            <p className="text-gray-300">
              Every trade is visible to you. Monitor performance, withdraw profits, or pause trading anytime via your dashboard.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Smarter Decisions</h3>
            <p className="text-gray-300">
              Our AI processes millions of data points in seconds—spotting opportunities, reacting to news, and adapting in real time.
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Tailored For You</h3>
            <p className="text-gray-300">
              Whether you're risk-averse or aggressive, our system aligns with your strategy and adjusts as your goals evolve.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Join the Future of Intelligent Trading</h2>
        <p className="max-w-xl mx-auto text-lg text-gray-300">
          Let Formula Stat AI Trade handle the heavy lifting — so you can focus on what matters most in life.
        </p>
        <a
          href="https://formulastat-ai-dashboard.vercel.app"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg inline-block transition"
        >
          Launch Dashboard
        </a>
      </section>

      {/* FOOTER NAV */}
      <div className="text-center mt-12">
        <Link
          to="/about"
          className="text-blue-400 underline text-lg hover:text-blue-300 transition"
        >
          Learn more about us →
        </Link>
      </div>
    </div>
  );
}
