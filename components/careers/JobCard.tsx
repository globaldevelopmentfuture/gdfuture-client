import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, DollarSign, ArrowRight } from 'lucide-react';

interface JobCardProps {
  job: {
    title: string;
    location: string;
    type: string;
    department: string;
    description: string;
    salary: string;
    requirements: string[];
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -5 }}
    >
      <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {job.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <MapPin size={16} className="mr-2" />
                {job.location}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2" />
                {job.type}
              </span>
              <span className="flex items-center">
                <Briefcase size={16} className="mr-2" />
                {job.department}
              </span>
              <span className="flex items-center">
                <DollarSign size={16} className="mr-2" />
                {job.salary}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-yellow-500/30 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <h4 className="text-sm font-medium text-gray-300 mb-3">Requirements:</h4>
          <div className="flex flex-wrap gap-2">
            {job.requirements.map((req, rIndex) => (
              <span
                key={rIndex}
                className="px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-300 text-sm backdrop-blur-sm border border-yellow-500/20"
              >
                {req}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;