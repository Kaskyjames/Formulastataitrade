import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        className="text-center space-y-6 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Create Your Free Account
        </h1>
        <p className="text-gray-300 text-lg">
          Join Formula Stat AI Trade and unlock powerful trading intelligence for Forex, Crypto, Stocks & more.
        </p>
      </motion.section>

      {/* SIGNUP FORM */}
      <motion.form
        className="bg-slate-800 border border-slate-700 max-w-xl mx-auto p-8 rounded-2xl shadow-xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Full Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email Address</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm text-gray-400 mb-1">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
          />
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-10 text-gray-400 hover:text-white"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl shadow-xl hover:shadow-blue-500/50"
        >
          Create Account
        </motion.button>

        {/* Login Redirect */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Log In
          </a>
        </p>
      </motion.form>
    </div>
  );
}
