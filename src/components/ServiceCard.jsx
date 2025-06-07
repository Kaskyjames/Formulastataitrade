// src/components/ServiceCard.jsx
import React from "react";
import Lottie from "lottie-react";

export default function ServiceCard({ title, description, lottiePath, imagePath }) {
  return (
    <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition duration-300 p-4 max-w-md mx-auto">
      <div className="flex flex-col gap-4 items-center">
        {lottiePath && (
          <Lottie animationData={require(`../../public/animations/${lottiePath}`)} className="w-40 h-40" loop />
        )}
        {imagePath && (
          <img src={`/images/${imagePath}`} alt={title} className="rounded-xl w-full object-cover max-h-48" />
        )}
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-slate-300 text-center">{description}</p>
      </div>
    </div>
  );
}
