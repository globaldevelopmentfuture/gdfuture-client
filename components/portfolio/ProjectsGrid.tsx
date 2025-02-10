"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  gradient: string;
}

interface ProjectsGridProps {
  projects: Project[];
  activeTab: string;
}

export default function ProjectsGrid({ projects, activeTab }: ProjectsGridProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const filteredProjects = projects.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  return (
    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))
        ) : (
          <motion.div 
            className="col-span-full text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}