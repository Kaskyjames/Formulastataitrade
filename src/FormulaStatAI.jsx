import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 1500 },
  { name: "Apr", value: 2000 },
  { name: "May", value: 2500 },
];

export default function FormulaStatAI() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8 space-y-12">
      <section className="text-center space-y-4">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold">
          Formula Stat AI
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-lg md:text-xl max-w-2xl mx-auto">
          Intelligent, automated trading solutions across Forex, Crypto & Stocks. Built for performance. Powered by AI.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-lg inline-block">Launch Dashboard</a>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {["Forex", "Crypto", "Stocks"].map((service, idx) => (
          <motion.div key={service} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * idx }} className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{service} Trading</h3>
            <p>
              AI-optimized trading strategies for {service.toLowerCase()} markets. Maximize potential with precision.
            </p>
          </motion.div>
        ))}
      </section>

      <section className="space-y-4 text-center">
        <h2 className="text-3xl font-bold">How Formula Stat AI Works</h2>
        <p className="max-w-2xl mx-auto">
          Formula Stat AI uses intelligent algorithms to analyze trends, execute trades, and adapt to market changes in real-time.
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', color: '#fff' }} />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to Trade Smarter?</h2>
        <p>
          Join other smart investors leveraging Formula Stat AI for intelligent, automated trading.
        </p>
        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-lg inline-block">Access Dashboard</a>
      </section>
    </div>
  );
}