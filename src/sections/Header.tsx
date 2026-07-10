"use client";

import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.div 
 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
    
      className="flex justify-center items-center fixed top-3 w-full z-50"
    >
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-md shadow-lg shadow-black/20">
        
    
        <motion.a 
          href="#home" 
          className="nav-item transition-colors hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </motion.a>
        
        <motion.a 
          href="#projects" 
          className="nav-item transition-colors hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Projects
        </motion.a>
        
        <motion.a 
          href="#about" 
          className="nav-item transition-colors hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.a>
        

        <motion.a 
          href="#contact" 
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </nav>
    </motion.div>
  );
};