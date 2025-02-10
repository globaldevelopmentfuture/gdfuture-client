"use client";

import React from "react";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.section
      className="relative py-8 md:py-16  overflow-hidden"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <motion.div
          className="text-center"
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
            <div className="px-6 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-300 font-medium">
                Start Your Digital Journey
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Transform Your Ideas Into </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Digital Reality
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's collaborate to create innovative solutions that drive your
            business forward. Our team of experts is ready to bring your vision
            to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-medium overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
                <motion.div className="relative flex items-center">
                  <Phone className="mr-2 w-5 h-5" />
                  <span>Schedule Consultation</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-900/20"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </Link>

            <Link href="/portfolio">
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-yellow-500/20 text-white rounded-xl font-medium overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />

                <motion.div className="relative flex items-center">
                  <span>Explore Portfolio</span>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-yellow-500/30"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-yellow-400/30"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-10 w-2 h-2 rounded-full bg-yellow-400/30"
              animate={{
                y: [0, 20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-yellow-400/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
