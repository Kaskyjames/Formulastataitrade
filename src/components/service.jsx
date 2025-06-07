import React from "react"; import { motion } from "framer-motion"; import { FaBitcoin, FaChartLine, FaExchangeAlt } from "react-icons/fa";

const services = [ { id: 1, title: "Forex Trading", icon: <FaExchangeAlt size={42} className="text-blue-500" />, color: "text-blue-500", offers: [ { level: "Beginner", description: "Get started in Forex with guided tutorials, demo accounts, and risk-managed strategies tailored for newcomers.", }, { level: "Ambitious", description: "Elevate your trading with AI-powered insights, automated signals, and real-time sentiment analysis.", }, { level: "Elite", description: "Access institutional-level tools, personal trading AI assistants, and deep-dive reporting features.", }, ], }, { id: 2, title: "Cryptocurrency", icon: <FaBitcoin size={42} className="text-yellow-400" />, color: "text-yellow-400", offers: [ { level: "Beginner", description: "Learn crypto basics, wallet safety, and how to trade major tokens with AI-led education modules.", }, { level: "Ambitious", description: "Spot market patterns early with predictive AI, customized alerts, and portfolio trackers.", }, { level: "Elite", description: "Gain edge in DeFi, yield farming, and NFT analytics with real-time performance dashboards.", }, ], }, { id: 3, title: "Stock Market", icon: <FaChartLine size={42} className="text-green-400" />, color: "text-green-400", offers: [ { level: "Beginner", description: "Start with stock fundamentals, simulated trading, and AI-generated safe picks.", }, { level: "Ambitious", description: "Leverage trend projections and diversification models crafted by our AI engine.", }, { level: "Elite", description: "Unlock hedge-level algorithms, private beta features, and priority support for dynamic strategies.", }, ], }, ];

export default function ServicesSection() { return ( <section className="relative z-10 py-20 bg-gradient-to-b from-[#0a1b2d] to-[#162a46] text-white overflow-hidden"> <div className="absolute inset-0 -z-10"> <div className="absolute w-full h-full opacity-20"> <canvas id="particles" className="w-full h-full" /> </div> <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" /> </div> <div className="max-w-6xl mx-auto px-6"> <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center text-4xl font-bold mb-6" > Tailored Trading Services </motion.h2> <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="text-center text-lg max-w-2xl mx-auto text-white/80 mb-14" > Whether you’re starting out, scaling up, or already elite — Formula Stat AI Trade gives you intelligent tools designed to meet you exactly where you are. </motion.p>

<div className="grid md:grid-cols-3 gap-10">
      {services.map(({ id, title, icon, offers, color }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: id * 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
        >
          <div className="flex justify-center mb-4">{icon}</div>
          <h3 className={`text-xl font-semibold text-center mb-6 ${color}`}>{title}</h3>
          <ul className="space-y-4">
            {offers.map(({ level, description }, idx) => (
              <li key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h4 className="font-bold mb-1 text-white/90">{level}</h4>
                <p className="text-sm text-white/80 leading-relaxed">{description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>

); }

