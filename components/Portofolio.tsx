import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioItems = [
  {
    title: "Enterprise E-Commerce Platform",
    description:
      "High-scale e-commerce solution built with microservices architecture and real-time inventory management.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    category: "fullstack",
    tech: ["Next.js", "Spring Boot", "MongoDB", "AWS ECS"],
    link: "#",
  },
  {
    title: "Real-time Collaboration Suite",
    description:
      "Enterprise collaboration platform with real-time document editing and team communication.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    category: "web",
    tech: ["React", "WebSocket", "Spring WebFlux", "Docker"],
    link: "#",
  },
  {
    title: "Cross-platform Mobile App",
    description:
      "Feature-rich mobile application for seamless inventory management and order processing.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
    category: "mobile",
    tech: ["React Native", "Spring Boot", "MySQL", "AWS EKS"],
    link: "#",
  },
  {
    title: "DevOps Dashboard",
    description:
      "Comprehensive monitoring and deployment management system for microservices architecture.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
    category: "fullstack",
    tech: ["Next.js", "Java", "Kubernetes", "AWS"],
    link: "#",
  }
];

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile" }
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="portfolio"
      className="py-8 md:py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Titlu și descriere */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
                Featured Projects
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Our Technical </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our enterprise-grade solutions built with modern tech stacks,
            focusing on scalability, performance, and user experience
          </motion.p>

          {/* Bara de selecție (tabs) – varianta inițială cu text calibrat */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
              <div className="flex gap-1">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-4 md:px-6 py-2 text-xs md:text-sm rounded-xl transition-all duration-300 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        activeTab === tab.id
                          ? "text-white"
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
        </motion.div>

        {/* Grid-ul de proiecte */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <AnimatePresence>
            {portfolioItems
              .filter(
                (item) => activeTab === "all" || item.category === activeTab
              )
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group relative"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onTapStart={() => setHoveredIndex(index)}
                  onTap={() => setHoveredIndex(null)}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-900/20 backdrop-blur-sm border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover transition-all duration-500"
                      initial={false}
                      animate={
                        hoveredIndex === index
                          ? { scale: 1.05, filter: "brightness(0.5)" }
                          : { scale: 1, filter: "brightness(0.8)" }
                      }
                    />

                    <motion.div
                      className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end"
                      initial={false}
                      animate={
                        hoveredIndex === index
                          ? { y: 0, opacity: 1 }
                          : { y: 20, opacity: 0 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative z-10 space-y-2 sm:space-y-4">
                        <h3 className="text-lg sm:text-2xl font-bold text-white">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-0.5 bg-yellow-500/20 rounded-full text-xs sm:text-sm text-yellow-300 backdrop-blur-sm border border-yellow-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <motion.a
                          href={project.link}
                          className="inline-flex items-center text-xs sm:text-sm text-white font-medium bg-yellow-500/20 px-3 py-1 rounded-xl hover:bg-yellow-500/30 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          View Project 
                          <ExternalLink className="ml-1 w-3 h-3 transition-transform" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
