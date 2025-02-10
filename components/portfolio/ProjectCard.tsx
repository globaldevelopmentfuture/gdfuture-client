"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
  };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

export default function ProjectCard({ project, index, hoveredIndex, setHoveredIndex }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative"
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10">
        {/* Image Container */}
        <div className="relative h-[250px] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-yellow-400/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={false}
            animate={hoveredIndex === index ? { opacity: 0.4 } : { opacity: 0 }}
          />
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-300"
            initial={false}
            animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <motion.div
              className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-xs font-medium text-yellow-400">Featured Project</span>
            </motion.div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative p-6">
          {/* Title and Description */}
          <div className="space-y-3">
            <motion.h3
              className="text-xl font-semibold tracking-tight text-white group-hover:text-yellow-400 transition-colors duration-300"
              initial={false}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-sm text-gray-400 leading-relaxed"
              initial={false}
            >
              {project.description}
            </motion.p>
          </div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={false}
          >
            {project.tech.map((tech, tIndex) => (
              <span
                key={tIndex}
                className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/5 rounded-md text-yellow-400/90 border border-yellow-400/20"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.div
            className="mt-6 flex items-center justify-between"
            initial={false}
          >
            <motion.a
              href="#"
              className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-300 group/btn"
              whileHover={{ x: 5 }}
            >
              <span>View Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.a>

            <motion.div
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Hover Effect Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-400"
          initial={{ scaleX: 0 }}
          animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}