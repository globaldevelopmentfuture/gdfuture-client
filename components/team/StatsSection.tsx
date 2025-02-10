import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Award } from 'lucide-react';

const stats = [
  { number: "15+", label: "Years Experience", icon: <Briefcase size={24} />, gradient: "from-blue-400 to-indigo-600" },
  { number: "50+", label: "Team Members", icon: <Users size={24} />, gradient: "from-purple-400 to-pink-600" },
  { number: "20+", label: "Industry Awards", icon: <Award size={24} />, gradient: "from-yellow-400 to-orange-600" }
];

const StatsSection = () => {
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
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.gradient} bg-opacity-10 mb-6`}>
                  <div className="p-2 bg-black/30 rounded-lg text-white">
                    {stat.icon}
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;