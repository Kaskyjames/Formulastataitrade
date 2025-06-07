import React from "react";

const LogoHero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-transparent px-4">
      <div className="text-center">
        <img
          src="/logo.png" // Make sure your logo file is in the `public/` folder and named correctly
          alt="Formula Stat AI Trade Logo"
          className="w-40 h-40 mx-auto animate-[logo-entry] hover:scale-105 transition-transform duration-500"
        />
        <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to Formula Stat AI Trade
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Smarter Decisions. Better Results. Powered by AI.
        </p>
      </div>
    </section>
  );
};

export default LogoHero;
