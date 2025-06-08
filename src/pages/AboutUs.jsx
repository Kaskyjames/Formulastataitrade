import React from "react"; import Navbar from "../components/Navbar"; import { Sparkles, GaugeCircle, ShieldCheck, Heart, Brain } from "lucide-react"; import { motion } from "framer-motion";

export default function About() { return ( <div className="min-h-screen bg-slate-950 text-white px-6 py-10 space-y-16"> <Navbar />

{/* HERO SECTION */}
  <motion.section
    className="relative text-center space-y-6 overflow-hidden rounded-2xl border border-slate-800 p-8"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="absolute inset-0 animate-bgGlow bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent opacity-30 blur-2xl pointer-events-none"></div>
    <video
      autoPlay
      muted
      loop
      className="w-full max-w-3xl mx-auto rounded-xl shadow-lg border border-slate-700"
    >
      <source src="/ai-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
      About Formula Stat AI Trade
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
      Built with a mission to empower individuals and investors, Formula Stat AI Trade blends advanced artificial intelligence with real-time market logic to automate and optimize trading.
    </p>
  </motion.section>

  {/* VISION + WHY WE EXIST */}
  <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
    <motion.div
      className="bg-slate-800 p-6 rounded-xl shadow space-y-4 transform transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-semibold text-blue-300">Our Vision</h2>
      <p className="text-gray-300">
        We envision a world where anyone—from beginners to seasoned traders—can benefit from intelligent, automated trading systems that operate with transparency, reliability, and speed.
      </p>
    </motion.div>

    <motion.div
      className="bg-slate-800 p-6 rounded-xl shadow space-y-4 transform transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-semibold text-blue-300">Why We Exist</h2>
      <p className="text-gray-300">
        Trading is stressful and time-consuming. Formula Stat AI Trade takes the guesswork out of it, giving users freedom, clarity, and performance backed by data—not emotion.
      </p>
    </motion.div>
  </section>

  {/* WHAT MAKES US DIFFERENT */}
  <section className="max-w-5xl mx-auto text-center space-y-6">
    <h2 className="text-3xl font-bold text-blue-400">What Makes Us Different</h2>
    <ul className="space-y-6 text-left text-gray-300">
      <motion.li
        className="flex items-start gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="text-blue-400 mt-1" size={24} />
        <div>
          <span className="text-white font-semibold">Real AI Integration:</span> Not a buzzword. We use actual deep learning and adaptive algorithms to trade live markets.
        </div>
      </motion.li>

      <motion.li
        className="flex items-start gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <GaugeCircle className="text-green-400 mt-1" size={24} />
        <div>
          <span className="text-white font-semibold">User Dashboard:</span> Full access to your account and trading behavior. No hidden decisions.
        </div>
      </motion.li>

      <motion.li
        className="flex items-start gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ShieldCheck className="text-purple-400 mt-1" size={24} />
        <div>
          <span className="text-white font-semibold">Security Focused:</span> We keep user data and funds safe with best practices and system logic.
        </div>
      </motion.li>

      <motion.li
        className="flex items-start gap-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Heart className="text-pink-400 mt-1" size={24} />
        <div>
          <span className="text-white font-semibold">Human Touch:</span> We may be AI-powered, but this brand is built on vision, empathy, and responsibility.
        </div>
      </motion.li>
    </ul>
  </section>

  {/* MEET THE AI SPOTLIGHT */}
  <section className="text-center max-w-3xl mx-auto space-y-6">
    <motion.div
      className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Brain size={48} className="mx-auto text-blue-400" />
      <h3 className="text-2xl font-bold mt-2">Meet the AI</h3>
      <p className="text-gray-300">
        Adaptive. Logical. Human-inspired. Our AI engine constantly learns and evolves with the market, delivering smarter trades day after day.
      </p>
    </motion.div>
  </section>

  {/* CALL TO ACTION */}
  <section className="text-center space-y-4 mt-16">
    <h2 className="text-2xl font-bold">Ready to Experience the Future of Trading?</h2>
    <motion.a
      href="/signup"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg shadow-xl transition hover:shadow-blue-500/50 hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      Get Started Today
    </motion.a>
  </section>
</div>

); }

