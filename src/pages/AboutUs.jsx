import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/Animation_2.json"; // Replace with your preferred animation
import SecuritySnapshot from "@/components/SecuritySnapshot";
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-16 space-y-16">
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          About Formula Stat AI Trade
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
          Harnessing Artificial Intelligence to redefine financial freedom in a volatile world.
        </p>
      </motion.div>
<SecuritySnapshot />
      {/* LOTTIE ANIMATION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl mx-auto"
      >
        <Lottie animationData={animationData} loop={true} />
      </motion.div>

      {/* OUR MISSION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-4 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-blue-400">Our Mission</h2>
        <p className="text-lg text-gray-300">
          To democratize access to advanced trading intelligence by leveraging cutting-edge AI
          technology that analyzes, predicts, and executes trades across Forex, Crypto, and Stock markets.
        </p>
      </motion.section>

      {/* OUR STORY */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-4 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-blue-400">Our Story</h2>
        <p className="text-lg text-gray-300">
          In an era where inflation erodes value and traditional jobs no longer guarantee stability,
          Formula Stat AI was born from a realization: intelligent automation could bridge the growing gap
          between income and living cost. We built a system that mimics the decision-making logic of top
          traders—yet processes more data, faster, without fatigue.
        </p>
      </motion.section>

      {/* CORE VALUES */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-4 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-blue-400">Core Values</h2>
        <ul className="space-y-3 text-left text-gray-300 list-disc list-inside">
          <li>
            <strong className="text-white">Innovation:</strong> We constantly evolve our AI to adapt to market realities.
          </li>
          <li>
            <strong className="text-white">Transparency:</strong> Every user sees how decisions are made and profits are earned.
          </li>
          <li>
            <strong className="text-white">Empowerment:</strong> We give people control over wealth creation using automation.
          </li>
          <li>
            <strong className="text-white">Reliability:</strong> Our systems are stress-tested and monitored for peak performance.
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
