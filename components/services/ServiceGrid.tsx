"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Code2,
  Shield,
  Cpu,
  Smartphone,
  TrendingUp,
  Share2,
  Search,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    category: "IT Solutions",
    description: "Enterprise-grade technology solutions for digital transformation",
    items: [
      {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "Scalable cloud solutions with optimal performance",
        features: ["Auto Scaling", "Load Balancing", "24/7 Monitoring", "Security"],
        gradient: "from-blue-400 to-indigo-600"
      },
      {
        icon: Code2,
        title: "Custom Development",
        description: "Tailored software solutions for your business needs",
        features: ["Web Apps", "APIs", "Microservices", "Integration"],
        gradient: "from-violet-400 to-purple-600"
      },
      {
        icon: Shield,
        title: "Cybersecurity",
        description: "Advanced protection for your digital assets",
        features: ["Threat Detection", "Data Protection", "Compliance", "Auditing"],
        gradient: "from-emerald-400 to-teal-600"
      },
      {
        icon: Cpu,
        title: "AI Integration",
        description: "Smart solutions powered by artificial intelligence",
        features: ["Machine Learning", "Data Analysis", "Automation", "Insights"],
        gradient: "from-yellow-400 to-orange-600"
      },
      {
        icon: Smartphone,
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications",
        features: ["iOS", "Android", "Cross-platform", "PWA"],
        gradient: "from-pink-400 to-rose-600"
      }
    ]
  },
  {
    category: "Digital Marketing",
    description: "Strategic digital marketing solutions for business growth",
    items: [
      {
        icon: TrendingUp,
        title: "TikTok Marketing",
        description: "Viral content strategies for rapid growth",
        features: ["Content Creation", "Trend Analysis", "Engagement", "Analytics"],
        gradient: "from-cyan-400 to-blue-600"
      },
      {
        icon: Share2,
        title: "Social Media",
        description: "Engaging social media campaigns and management",
        features: ["Strategy", "Content", "Community", "Growth"],
        gradient: "from-indigo-400 to-purple-600"
      },
      {
        icon: Search,
        title: "Google Ads",
        description: "Targeted advertising for maximum ROI",
        features: ["PPC", "Display Ads", "Remarketing", "Analytics"],
        gradient: "from-amber-400 to-orange-600"
      },
      {
        icon: BarChart3,
        title: "Analytics",
        description: "Data-driven insights and performance tracking",
        features: ["Reporting", "KPIs", "Optimization", "ROI Tracking"],
        gradient: "from-green-400 to-emerald-600"
      },
      {
        icon: Users,
        title: "Brand Strategy",
        description: "Comprehensive brand development and positioning",
        features: ["Identity", "Messaging", "Guidelines", "Growth"],
        gradient: "from-red-400 to-rose-600"
      }
    ]
  }
];

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("IT Solutions");
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <motion.section 
      className="py-8 md:py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
   

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Category Tabs */}
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10 w-full max-w-lg">
            <div className="grid grid-cols-2 gap-2">
              {services.map((category) => (
                <motion.button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className="relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
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
                  <span className={`relative z-10 ${
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
          
          <motion.p
            className="text-gray-400 mt-6 text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {services.find(c => c.category === activeCategory)?.description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                whileHover={{ y: -5 }}
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 p-8">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
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
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                        <div className="p-2 bg-black/30 rounded-lg">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </motion.div>
                    
                    <h3 className={`text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-gray-400 group-hover:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <CheckCircle className={`w-4 h-4 mr-2 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>


                 
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
}