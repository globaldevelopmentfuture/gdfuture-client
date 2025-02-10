"use client";

import React from "react";
import { ArrowRight, Code2, Shield, Cpu, Users2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const valueProps = [
  {
    icon: Code2,
    title: "Enterprise Solutions",
    description: "Scalable architectures designed for global enterprises",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Military-grade protection for your digital assets",
  },
  {
    icon: Cpu,
    title: "Cloud Infrastructure",
    description: "High-performance cloud solutions for modern businesses",
  },
  {
    icon: Users2,
    title: "Strategic Partnership",
    description: "Long-term collaboration for sustainable growth",
  }
];

export default function HeroSection() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Fundal video & efecte */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-900/40 to-gray-900/40 mix-blend-multiply"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          {/* Eticheta */}
          <motion.div
            className="inline-block mb-6"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <div className="px-4 py-2 sm:px-6 sm:py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-300 font-medium text-sm">
                Innovate • Create • Deliver
              </span>
            </div>
          </motion.div>

          {/* Titlul */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
          >
            <span className="block mb-2">Transforming Business</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Through Innovation
            </span>
          </motion.h1>

          {/* Paragraful descriptiv */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.6 }}
          >
            We deliver enterprise-grade solutions that empower businesses to lead in the digital era. 
            Our expertise spans across cloud infrastructure, AI integration, and digital transformation.
          </motion.p>

          {/* Butonul de call-to-action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.8 }}
          >
            <Link
              href={"/contact"}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-lg font-medium transition-all hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Grid-ul cu value props */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 transform transition-transform group-hover:scale-105" />
              <div className="relative p-4 sm:p-6 bg-gray-900/60 rounded-2xl border border-yellow-500/20 backdrop-blur-sm">
                <div className="flex flex-col items-start text-left">
                  <div className="p-2 sm:p-3 rounded-lg bg-yellow-500/10 mb-4">
                    <prop.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
