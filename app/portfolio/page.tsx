"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Database, Sparkles } from "lucide-react";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import CTASection from "@/components/CTASection";
import HeroProject from "@/components/portfolio/HeroProject";

const projects = [
  {
    title: "Enterprise E-Commerce Platform",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    description:
      "High-scale e-commerce solution built with microservices architecture and real-time inventory management.",
    tech: ["Next.js", "Spring Boot", "MongoDB", "AWS ECS"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Real-time Collaboration Suite",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    description:
      "Enterprise collaboration platform with real-time document editing and team communication.",
    tech: ["React", "WebSocket", "Spring WebFlux", "Docker"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Cross-platform Mobile App",
    category: "mobile",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    description:
      "Feature-rich mobile application for seamless inventory management and order processing.",
    tech: ["React Native", "Spring Boot", "MySQL", "AWS EKS"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "DevOps Dashboard",
    category: "backend",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
    description:
      "Comprehensive monitoring and deployment management system for microservices architecture.",
    tech: ["Next.js", "Java", "Kubernetes", "AWS"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "AI-Powered Analytics Platform",
    category: "backend",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    description:
      "Advanced analytics platform leveraging machine learning for predictive insights.",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Healthcare Management System",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    description:
      "Comprehensive healthcare platform for patient management and medical records.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    gradient: "from-cyan-500 to-blue-600",
  },
];

const tabs = [
  { id: "all", label: "All Projects", icon: <Globe size={20} /> },
  { id: "web", label: "Web Apps", icon: <Code2 size={20} /> },
  { id: "mobile", label: "Mobile", icon: <Smartphone size={20} /> },
  { id: "backend", label: "Backend", icon: <Database size={20} /> },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-black/50">
      {/* Hero Section */}
      <motion.section
        className="py-36 relative overflow-hidden "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <HeroProject />

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
              <div className="flex gap-1">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-6 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl"
                        layoutId="activeTab"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          duration: 0.3,
                        }}
                      />
                    )}
                    <span className="relative z-10">{tab.icon}</span>
                    <span
                      className={`relative z-10 ${
                        activeTab === tab.id
                          ? "text-gray-900"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <ProjectsGrid projects={projects} activeTab={activeTab} />
        </div>

        {/* Decorative Elements */}
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
        </div>
      </motion.section>
      <CTASection />
    </div>
  );
}
