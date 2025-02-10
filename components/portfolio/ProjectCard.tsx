"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    gradient: string;
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
      transition={{ duration: 0.3 }}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          initial={false}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] object-cover opacity-90 group-hover:opacity-60 transition-opacity duration-500"
          initial={false}
          animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="absolute inset-0 p-8 flex flex-col justify-end"
          initial={false}
          animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative z-10 space-y-4">
            <motion.h3
              className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
              initial={false}
              animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {project.title}
            </motion.h3>

            <motion.p
              className="text-gray-300"
              initial={false}
              animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={false}
              animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {project.tech.map((tech, tIndex) => (
                <span
                  key={tIndex}
                  className={`px-3 py-1 bg-gradient-to-br ${project.gradient} bg-opacity-10 rounded-full text-white text-sm backdrop-blur-sm border border-white/10`}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.a
              href="#"
              className="inline-flex items-center text-white font-medium group/btn"
              initial={false}
              animate={hoveredIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              View Project
              <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${project.gradient}`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}