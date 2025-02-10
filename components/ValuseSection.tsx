"use client";

import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ValuesSection() {
  const values = [
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is our priority. We work closely with you to understand and meet your needs.",
      gradient: "from-blue-400 to-indigo-600",
      delay: 0.2
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
      gradient: "from-violet-400 to-purple-600",
      delay: 0.3
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve complex challenges.",
      gradient: "from-yellow-400 to-orange-600",
      delay: 0.4
    },
    {
      icon: Rocket,
      title: "Growth",
      description: "We're committed to continuous learning and improvement in everything we do.",
      gradient: "from-emerald-400 to-teal-600",
      delay: 0.5
    }
  ];

  return (
    <motion.section 
      className="py-8 md:py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-6 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-300 font-medium">What Drives Us</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Our Core </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Values
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value) => (
            <motion.div
              key={value.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: value.delay }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 p-8">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.gradient} bg-opacity-10`}>
                      <div className="p-2 bg-black/30 rounded-lg">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </motion.div>
                  
                  <h3 className={`text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${value.gradient}`}>
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {value.description}
                  </p>

                  <motion.div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${value.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-yellow-400/30"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-2 h-2 rounded-full bg-yellow-400/30"
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
