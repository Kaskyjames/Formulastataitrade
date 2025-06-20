// src/FormulaStatAI.jsx
import React from "react";
import Navbar from "./components/Navbar"; // ✅ Ensure this file exists
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
import Lottie from "lottie-react";

// Assets
import animationData from "./assets/Animation_1.json";
import heroVideo from "./assets/hero-video.mp4";

// Testimonials avatars
import avatar1 from "./assets/testimonials/avatar1.jpg";
import avatar2 from "./assets/testimonials/avatar2.png";
import avatar3 from "./assets/testimonials/avatar3.webp";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// Services section
import ServicesSection from "./pages/ServicesSection";

const chartData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 1500 },
  { name: "Apr", value: 2000 },
  { name: "May", value: 2500 },
];

const testimonials = [
  {
    name: "James O.",
    text: "I made my first profit passively with Formula Stat AI. It's like having a trading genius working for me 24/7.",
    avatar: avatar1,
  },
  {
    name: "Linda A.",
    text: "At first I doubted AI trading. But the consistent results and full control changed my mind completely.",
    avatar: avatar2,
  },
  {
    name: "Michael T.",
    text: "The dashboard is smooth, the trades are sharp, and the profits are real. Highly recommended.",
    avatar: avatar3,
  },
];

export default function FormulaStatAI() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8 space-y-24">
      <Navbar />

      {/* HERO */}
      <section className="text-center space-y-6 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-blue-400"
        >
          Formula Stat AI Trade
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl mx-auto shadow-2xl"
          />
        </motion.div>

        <div className="mt-6">
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-2xl shadow-md text-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
        >
          Your AI-powered gateway to financial intelligence. We automate trading
          decisions in Forex, Crypto, and Stocks—so you can grow your wealth with
          smart confidence.
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

      {/* AI TRADING */}
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
          Formula Stat AI Trade analyzes global market signals, executes precision
          trades, and adjusts strategies faster than humanly possible—so your money
          works even while you rest.
        </p>
      </section>

      <ServicesSection />

      {/* HOW IT WORKS */}
      <section className="space-y-10 text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Powered by deep learning and adaptive logic, our system backtests thousands
          of strategies and executes the best possible trade logic in real-time.
        </p>
        <div className="bg-slate-800 rounded-2xl p-4 md:p-8">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", color: "#fff" }} />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold">Why Trust Formula Stat AI Trade?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {[
            {
              title: "Transparency & Control",
              text: "Every trade is visible to you. Monitor performance, withdraw profits, or pause trading anytime via your dashboard.",
            },
            {
              title: "Smarter Decisions",
              text: "Our AI processes millions of data points in seconds—spotting opportunities, reacting to news, and adapting in real time.",
            },
            {
              title: "Tailored For You",
              text: "Whether you're risk-averse or aggressive, our system aligns with your strategy and adjusts as your goals evolve.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{ clickable: true }}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-800 p-6 rounded-2xl shadow text-left flex flex-col items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 ring-2 ring-blue-500 shadow-md"
                />
                <p className="text-lg text-gray-300 italic mb-2 text-center">"{t.text}"</p>
                <h4 className="font-semibold text-blue-400">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Join the Future of Intelligent Trading</h2>
        <p className="max-w-xl mx-auto text-lg text-gray-300">
          Let Formula Stat AI Trade handle the heavy lifting — so you can focus on what
          matters most in life.
        </p>
        <a
          href="https://formulastat-ai-dashboard.vercel.app"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition"
        >
          Get Started Now
        </a>
      </section>
    </div>
  );
}
