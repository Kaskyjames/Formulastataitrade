
import { motion } from "framer-motion";

export default function LogoHero() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.img
        src="/logo.png"
        alt="FormulaStat AI Logo"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-lg"
      />
    </div>
  );
}