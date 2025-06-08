import React from "react";
import { CheckCircle } from "lucide-react";

const benefits = [
  "AI-Powered Trading Algorithms",
  "Real-Time Market Insights",
  "Risk Management & Protection",
  "100% Transparent Reporting",
  "24/7 Automated Execution",
  "Dedicated Client Support",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-20 px-6 rounded-2xl shadow-inner">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us</h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-12">
          Our mission is to help you succeed with the smartest and safest AI-powered trading strategies. Here's why clients trust Formula Stat AI Trade:
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-slate-900 p-5 rounded-xl shadow hover:shadow-blue-500/20 transition-all">
              <CheckCircle className="text-blue-500 w-6 h-6 mt-1" />
              <p className="text-slate-200 text-base">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
