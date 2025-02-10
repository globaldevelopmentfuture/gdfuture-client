import React from 'react';
import { motion } from 'framer-motion';
import JobCard from './JobCard';

const jobListings = [
  {
    title: "Senior Full Stack Developer",
    location: "New York, NY",
    type: "Full-time",
    department: "Engineering",
    description: "We're looking for an experienced Full Stack Developer to join our growing team.",
    salary: "$120k - $180k",
    requirements: ["5+ years experience", "React & Node.js", "Cloud platforms"],
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    description: "Join our design team to create beautiful and intuitive user experiences.",
    salary: "$90k - $140k",
    requirements: ["3+ years experience", "Figma", "User research"],
    gradient: "from-purple-400 to-pink-600"
  },
  {
    title: "DevOps Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Operations",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
    salary: "$130k - $190k",
    requirements: ["AWS/GCP", "Kubernetes", "CI/CD"],
    gradient: "from-yellow-400 to-orange-600"
  }
];

const JobListings = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <motion.section 
      className="py-16 px-4"
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-block px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20 mb-6">
            <span className="text-yellow-300 font-medium">Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Open Positions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Join our team and help shape the future of technology
          </p>
        </motion.div>

        <div className="grid gap-6">
          {jobListings.map((job, index) => (
            <motion.div key={index} variants={itemVariants}>
              <JobCard job={job} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default JobListings;