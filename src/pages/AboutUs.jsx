import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10 space-y-12">
      <Navbar />

      <section className="relative text-center space-y-4 overflow-hidden rounded-2xl border border-slate-800 p-6">
  {/* Animated background */}
  <div className="absolute inset-0 animate-bgGlow bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent opacity-30 blur-2xl pointer-events-none"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          About Formula Stat AI Trade
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Built with a mission to empower individuals and investors, Formula Stat AI Trade blends advanced artificial intelligence with real-time market logic to automate and optimize trading.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold text-blue-300">Our Vision</h2>
          <p className="text-gray-300">
            We envision a world where anyone—from beginners to seasoned traders—can benefit from intelligent, automated trading systems that operate with transparency, reliability, and speed.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold text-blue-300">Why We Exist</h2>
          <p className="text-gray-300">
            Trading is stressful and time-consuming. Formula Stat AI Trade takes the guesswork out of it, giving users freedom, clarity, and performance backed by data—not emotion.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-blue-400">What Makes Us Different</h2>
        <ul className="space-y-4 text-left text-gray-300 list-disc list-inside">
          <li>
            <span className="text-white font-semibold">Real AI Integration:</span> Not a buzzword. We use actual deep learning and adaptive algorithms to trade live markets.
          </li>
          <li>
            <span className="text-white font-semibold">User Dashboard:</span> Full access to your account and trading behavior. No hidden decisions.
          </li>
          <li>
            <span className="text-white font-semibold">Security Focused:</span> We keep user data and funds safe with best practices and system logic.
          </li>
          <li>
            <span className="text-white font-semibold">Human Touch:</span> We may be AI-powered, but this brand is built on vision, empathy, and responsibility.
          </li>
        </ul>
      </section>

      <section className="text-center space-y-4 mt-10">
        <h2 className="text-2xl font-bold">Ready to Experience the Future of Trading?</h2>
        <a
          href="/signup"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
        >
          Get Started Today
        </a>
      </section>
    </div>
  );
}
