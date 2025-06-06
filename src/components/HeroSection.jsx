import React from "react"; import Navbar from "./components/Navbar"; import { motion } from "framer-motion"; import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, } from "recharts"; import { Link } from "react-router-dom"; import Lottie from "lottie-react"; import aiNetwork from "./assets/ai-network.json"; // You need to add a Lottie JSON animation file to this path

const chartData = [ { name: "Jan", value: 400 }, { name: "Feb", value: 800 }, { name: "Mar", value: 1500 }, { name: "Apr", value: 2000 }, { name: "May", value: 2500 }, ];

export default function FormulaStatAI() { return ( <div className="min-h-screen bg-slate-950 text-white px-4 py-8 space-y-16 overflow-hidden"> <Navbar />

{/* HERO SECTION */}
  <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
    <Lottie
      animationData={aiNetwork}
      loop
      autoplay
      className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
    />
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
        className="text-xl max-w-3xl mx-auto"
      >
        Your AI-powered gateway to financial intelligence. We automate trading
        decisions in Forex, Crypto, and Stock markets—so you can grow your
        wealth with smart confidence.
      </motion.p>
      <motion.a
        href="#"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded text-lg"
      >
        Get Started
      </motion.a>
    </div>
  </section>

  {/* AI TRADING SECTION */}
  <section className="space-y-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-bold"
    >
      AI-Powered Trading in Forex, Crypto, and Stocks
    </motion.h2>
    <p className="max-w-2xl mx-auto text-lg">
      With real-time data and intelligent automation, Formula Stat AI Trade
      analyzes global market signals, executes precision trades, and adjusts
      strategies faster than humanly possible.
    </p>
  </section>

  {/* HOW IT WORKS */}
  <section className="space-y-6 text-center">
    <h2 className="text-3xl font-bold">How It Works</h2>
    <p className="max-w-2xl mx-auto text-lg">
      Formula Stat AI is powered by deep-learning algorithms and advanced
      trading logic. It continuously learns from the market, backtests
      thousands of strategies, and picks the best execution path every time.
    </p>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip
          contentStyle={{ backgroundColor: "#1e293b", color: "#fff" }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  </section>

  {/* WHY TRUST US */}
  <section className="space-y-6 text-center">
    <h2 className="text-2xl font-bold">Why Trust Formula Stat AI Trade?</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Transparency & Control</h3>
        <p>
          Every trade is visible to you. Monitor performance, withdraw
          profits, or pause trading anytime via your dashboard.
        </p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Smarter Decisions</h3>
        <p>
          AI processes more data than any trader can. It spots opportunities,
          adapts to news, and protects your capital with precision.
        </p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Tailored For You</h3>
        <p>
          From risk preferences to strategy goals, our AI shapes your trading
          journey to match your financial personality.
        </p>
      </div>
    </div>
  </section>

  {/* CTA SECTION */}
  <section className="text-center space-y-4">
    <h2 className="text-2xl font-bold">
      Join the Future of Intelligent Trading
    </h2>
    <p className="max-w-xl mx-auto text-lg">
      Let Formula Stat AI Trade work while you focus on living. Start with
      confidence, grow with precision.
    </p>
    <a
      href="#"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded text-lg inline-block"
    >
      Access Dashboard
    </a>
  </section>

  {/* ABOUT LINK */}
  <div className="text-center mt-8">
    <Link
      to="/about"
      className="text-blue-400 underline text-lg hover:text-blue-300 transition"
    >
      Learn more about us →
    </Link>
  </div>
</div>

); }

