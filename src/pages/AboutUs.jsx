import React from "react"; import { motion } from "framer-motion"; import { Link } from "react-router-dom";

export default function AboutUs() { return ( <div className="min-h-screen bg-slate-950 text-white px-4 py-12 space-y-16"> {/* HERO SECTION */} <section className="text-center space-y-6"> <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-bold text-blue-400" > About Formula Stat AI Trade </motion.h1> <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300" > Revolutionizing wealth creation through intelligent automation. </motion.p> </section>

{/* MISSION SECTION */}
  <section className="text-center space-y-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold">Our Mission</h2>
    <p className="text-gray-300 text-lg">
      We empower individuals and institutions with automated AI trading solutions that offer precision, speed, and adaptability. Our goal is to make smart wealth creation accessible, transparent, and worry-free.
    </p>
  </section>

  {/* OUR STORY / ORIGIN */}
  <section className="space-y-4 max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold">The Evolution of an Idea</h2>
    <p className="text-gray-300 text-lg">
      In recent years, global markets have grown increasingly volatile. Inflation continues to erode value, traditional savings yield little, and manual trading is often error-prone, emotional, and time-consuming. 
    </p>
    <p className="text-gray-300 text-lg">
      Formula Stat AI Trade was developed in response to these realities — a smart, system-driven approach to trading built on deep market analysis, machine learning, and automation. In a world where money is harder to grow, we built a platform to work smarter — not harder.
    </p>
  </section>

  {/* VALUES SECTION */}
  <section className="space-y-8 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold">Our Core Values</h2>
    <div className="grid md:grid-cols-4 gap-6 text-left">
      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">🔍 Transparency</h3>
        <p className="text-gray-300">Real-time insights and total visibility. Users remain in full control of their funds and performance.</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">🤖 Intelligence</h3>
        <p className="text-gray-300">Built with advanced algorithms that constantly learn and improve to stay ahead of the markets.</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">🛠️ Reliability</h3>
        <p className="text-gray-300">Our systems run 24/7, scanning signals and executing trades without fatigue or emotional bias.</p>
      </div>
      <div className="bg-slate-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">🌍 Empowerment</h3>
        <p className="text-gray-300">Designed for both beginners and pros — we provide the tools, you steer your journey.</p>
      </div>
    </div>
  </section>

  {/* WHY FORMULA STAT AI */}
  <section className="text-center space-y-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold">What Sets Us Apart</h2>
    <p className="text-gray-300 text-lg">
      We don’t just provide signals — we provide logic. Formula Stat AI executes in real time, adapts strategies as conditions change, and gives you a live dashboard to monitor every move. Fully automated, yet completely transparent.
    </p>
  </section>

  {/* CALL TO ACTION */}
  <section className="text-center space-y-4">
    <h2 className="text-2xl font-bold">Ready to Trade Smarter?</h2>
    <p className="max-w-xl mx-auto text-lg text-gray-300">
      Let Formula Stat AI Trade do the heavy lifting while you focus on life. The future of trading is now.
    </p>
    <a
      href="https://formulastat-ai-dashboard.vercel.app"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg inline-block transition"
    >
      Launch Dashboard
    </a>
  </section>

  {/* NAV LINK */}
  <div className="text-center mt-12">
    <Link
      to="/"
      className="text-blue-400 underline text-lg hover:text-blue-300 transition"
    >
      ← Back to Homepage
    </Link>
  </div>
</div>

); }

