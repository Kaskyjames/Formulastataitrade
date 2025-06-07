// components/LogoHero.jsx
import React from 'react';

const LogoHero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <img
        src="/formulastatlogo.png"
        alt="Formula Stat Logo"
        className="w-48 h-48 transition-transform duration-700 ease-in-out transform hover:scale-110 hover:rotate-12"
      />
    </div>
  );
};

export default LogoHero;
