"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

const technologies = [
  { name: "Java", gradient: "from-red-400 to-red-600" },
  { name: "Spring", gradient: "from-green-400 to-emerald-600" },
  { name: "React", gradient: "from-blue-400 to-indigo-600" },
  { name: "Node.js", gradient: "from-green-400 to-emerald-600" },
  { name: "MySQL", gradient: "from-blue-400 to-cyan-600" },
  { name: "MongoDB", gradient: "from-green-400 to-teal-600" },
  { name: "Docker", gradient: "from-blue-400 to-cyan-600" },
  { name: "Kubernetes", gradient: "from-blue-400 to-indigo-600" },
  { name: "TailwindCSS", gradient: "from-cyan-400 to-blue-600" },
  { name: "SASS", gradient: "from-pink-400 to-rose-600" },
  { name: "TypeScript", gradient: "from-blue-400 to-indigo-600" },
  { name: "GraphQL", gradient: "from-pink-400 to-purple-600" }
];

export default function TechnologiesSection() {
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <Code2 className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 font-medium">Technology Stack</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Powered by Modern </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Technologies
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 p-6">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <h3 className={`text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r ${tech.gradient}`}>
                    {tech.name}
                  </h3>
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${tech.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
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