// src/components/ServiceCard.jsx
import React from "react";
import Lottie from "lottie-react";

export default function ServiceCard({ title, description, lottiePath, imagePath }) {
  let lottieData = null;

  // Dynamically load Lottie JSON only if a path is provided
  if (lottiePath) {
    try {
      lottieData = require(`../assets/animations/${lottiePath}`);
    } catch (err) {
      console.error("Lottie file not found:", lottiePath);
    }
  }

  return (
    <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition duration-300 p-4 max-w-md mx-auto">
      <div className="flex flex-col gap-4 items-center">
        {lottieData && (
          <Lottie animationData={lottieData} className="w-40 h-40" loop autoplay />
        )}

        {!lottieData && imagePath && (
          <img
            src={`/images/${imagePath}`}
            alt={title}
            className="rounded-xl w-full object-cover max-h-48"
          />
        )}

        <h3 className="text-xl font-bold mt-2 text-center">{title}</h3>
        <p className="text-slate-300 text-center">{description}</p>
      </div>
    </div>
  );
}
