import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div
      className="inline-block mb-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
        <Sparkles className="w-4 h-4 text-yellow-400" />
        <span className="text-yellow-300 font-medium">Our Work</span>
      </div>
    </motion.div>

    <motion.h1
      className="text-4xl lg:text-6xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <span className="text-white">Featured </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
        Projects
      </span>
    </motion.h1>

    <motion.p
      className="text-gray-300 text-lg max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      Explore our latest work and discover how we've helped businesses
      achieve their digital transformation goals
    </motion.p>
  </motion.div>
  );
};

export default HeroSection;