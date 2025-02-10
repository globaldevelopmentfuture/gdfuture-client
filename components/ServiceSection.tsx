"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Cloud,
  Shield,
  Smartphone,
  TrendingUp,
  Share2,
  Search,
  Users,
  Zap,
  BarChart3
} from "lucide-react";

const services = [
  {
    category: "IT Solutions",
    items: [
      {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "Scalable cloud solutions with optimal performance",
        gradient: "from-blue-400 to-indigo-600"
      },
      {
        icon: Code2,
        title: "Custom Development",
        description: "Tailored software solutions for your business needs",
        gradient: "from-violet-400 to-purple-600"
      },
      {
        icon: Shield,
        title: "Cybersecurity",
        description: "Advanced protection for your digital assets",
        gradient: "from-emerald-400 to-teal-600"
      },
      {
        icon: Cpu,
        title: "AI Integration",
        description: "Smart solutions powered by artificial intelligence",
        gradient: "from-yellow-400 to-orange-600"
      },
      {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications",
        gradient: "from-pink-400 to-rose-600"
      }
    ]
  },
  {
    category: "Digital Marketing",
    items: [
      {
        icon: TrendingUp,
        title: "TikTok Marketing",
        description: "Viral content strategies for rapid growth",
        gradient: "from-cyan-400 to-blue-600"
      },
      {
        icon: Share2,
        title: "Social Media",
        description: "Engaging Facebook campaigns and community management",
        gradient: "from-indigo-400 to-purple-600"
      },
      {
        icon: Search,
        title: "Google Ads",
        description: "Targeted advertising for maximum ROI",
        gradient: "from-amber-400 to-orange-600"
      },
      {
        icon: BarChart3,
        title: "Analytics",
        description: "Data-driven insights and performance tracking",
        gradient: "from-green-400 to-emerald-600"
      },
      {
        icon: Users,
        title: "Brand Strategy",
        description: "Comprehensive brand development and positioning",
        gradient: "from-red-400 to-rose-600"
      }
    ]
  }
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("IT Solutions");
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <motion.section
      className="py-8 md:py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
    

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
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
            <div className="px-6 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
              <span className="text-yellow-300 font-medium">
                Our Services
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Comprehensive </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Digital Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From cutting-edge IT solutions to innovative digital marketing strategies,
            we deliver excellence across the digital spectrum
          </motion.p>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
              <div className="flex flex-col sm:flex-row gap-2">
                {services.map((category) => (
                  <motion.button
                    key={category.category}
                    onClick={() => setActiveCategory(category.category)}
                    className="relative px-6 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeCategory === category.category && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl"
                        layoutId="activeCategory"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 font-medium ${
                      activeCategory === category.category
                        ? "text-gray-900"
                        : "text-gray-400 hover:text-white"
                    }`}>
                      {category.category}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {services
            .find(category => category.category === activeCategory)
            ?.items.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="relative h-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10`}
                    initial={false}
                    animate={hoveredService === index ? { opacity: 0.15, scale: 1.2 } : { opacity: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:to-yellow-400">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  <motion.div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${service.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

        {/* Innovation Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 text-sm font-medium">
              Innovative Solutions for Modern Businesses
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
