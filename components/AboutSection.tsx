"use client";

import React from "react";
import { Brain, Cpu, Shield, Gauge, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Strategic Innovation",
    description: "Driving digital transformation through advanced solutions",
    theme: {
      primary: "from-blue-500 to-indigo-600",
      accent: "blue-500",
      hover: "blue-400"
    }
  },
  {
    icon: Cpu,
    title: "Technical Excellence",
    description: "Cutting-edge technology implementation",
    theme: {
      primary: "from-violet-500 to-purple-600",
      accent: "violet-500",
      hover: "violet-400"
    }
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced protection for critical systems",
    theme: {
      primary: "from-emerald-500 to-teal-600",
      accent: "emerald-500",
      hover: "emerald-400"
    }
  },
  {
    icon: Gauge,
    title: "High Performance",
    description: "Optimized solutions for maximum efficiency",
    theme: {
      primary: "from-amber-500 to-orange-600",
      accent: "amber-500",
      hover: "amber-400"
    }
  },
];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-8 md:py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-6 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
                <span className="text-yellow-300 font-medium">
                  Our Vision & Mission
                </span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">Pioneering </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Digital Excellence
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              With over a decade of experience in enterprise solutions, we've established 
              ourselves as leaders in digital transformation. Our commitment to innovation 
              and technical excellence enables us to deliver sophisticated solutions that 
              drive business growth and efficiency.
            </motion.p>

            <motion.div
              className="grid sm:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/5">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.theme.primary} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="p-6">
                      <div className="mb-4 relative">
                        <div className={`absolute inset-0 bg-${feature.theme.accent}/20 blur-xl rounded-full`} />
                        <div className={`relative bg-gradient-to-br ${feature.theme.primary} bg-opacity-10 w-12 h-12 rounded-xl flex items-center justify-center`}>
                          <feature.icon className={`w-6 h-6 text-${feature.theme.hover}`} />
                        </div>
                      </div>
                      <h3 className={`text-${feature.theme.hover} font-semibold text-lg mb-2 transition-colors duration-300`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${feature.theme.primary} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-lg font-medium transition-all hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Discover Our Approach
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          <motion.div
            className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full">
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 via-transparent to-yellow-500/20 mix-blend-overlay z-10" />
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
                  alt="Modern office workspace"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-2 sm:-bottom-6 sm:-left-6 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 sm:p-6 rounded-2xl shadow-xl">
                  <div className="text-gray-900">
                    <div className="text-2xl sm:text-3xl font-bold mb-1">15+</div>
                    <div className="text-[10px] sm:text-xs font-medium">Years of Innovation</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}