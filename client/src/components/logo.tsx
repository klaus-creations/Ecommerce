import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import React from "react"
const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2"
    >
      <Link
        to={"/"}
        className="relative text-2xl lg:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 group"
      >
        {/* Glowing effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></span>

        {/* Logo text with special first letter */}
        <span className="first-letter:text-3xl lg:first-letter:text-4xl first-letter:font-black first-letter:bg-gradient-to-r from-primary to-blue-600 first-letter:text-transparent first-letter:bg-clip-text">
          Gebeya
        </span>
      </Link>

      {/* Animated shopping bag icon */}
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 10, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="text-primary"
      >
        <ShoppingBag className="h-6 w-6 lg:h-7 lg:w-7" />
      </motion.div>
    </motion.div>
  );
}


export default Logo
