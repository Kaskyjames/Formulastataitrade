import { motion } from "framer-motion";

const LogoHero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f8faff]">
      <motion.img
        src="/formulastatlogo.png"
        alt="FormulaStat AI Logo"
        className="w-[180px] md:w-[220px] h-auto cursor-pointer"
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, y: -5 }}
      />
    </div>
  );
};

export default LogoHero;
