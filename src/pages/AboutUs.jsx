// src/pages/AboutUs.jsx
import Navbar from "../components/Navbar";
import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Formula Stat AI Trade
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
          At <span className="text-blue-400 font-semibold">Formula Stat AI Trade</span>, we believe financial freedom shouldn't be a luxury for the few.
          Our mission is to make intelligent, AI-powered trading accessible, reliable, and beneficial — for everyone.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-6 text-base leading-relaxed text-gray-200">
        <p>
          Born from a deep understanding of global financial markets and the capabilities of advanced technology,
          <strong className="text-white"> Formula Stat AI Trade</strong> integrates cutting-edge Artificial Intelligence with precision-driven, real-time data analytics.
          We provide fully automated trading across <strong className="text-white">Forex, Crypto, and Stock</strong> markets — from one seamless, intelligent system.
        </p>

        <p>
          What makes us different is not just our innovation, but our intention: to create a platform that empowers ordinary people to succeed in a market
          often dominated by the elite. We decode the noise, break down the barriers, and replace confusion with confidence.
        </p>

        <p>
          Our AI doesn't just react — it learns, adapts, and evolves continuously. Operating 24/7, it eliminates emotional bias and human error,
          delivering results with consistency, speed, and accuracy. It's not magic — it's mastery.
        </p>

        <p>
          <strong className="text-white">Formula Stat AI Trade</strong> is more than just a tool — it’s a trusted companion for your financial journey.
          A movement built on transparency, truth, and transformation. We aim to redefine how people engage with wealth, knowledge, and opportunity.
        </p>

        <p>
          Whether you're just starting out, scaling up, or seeking freedom from manual trading routines, we’re built for you.
          For the visionaries. For the everyday strivers. For those who know that success is better when it's smart, automated, and fair.
        </p>

        <p className="text-blue-400 font-semibold text-lg">
          Welcome to Formula Stat AI Trade. <br /> 
          Where intelligence meets opportunity. <br />
          Where vision becomes value.
        </p>
      </section>
    </div>
    <Navbar />
  );
}
