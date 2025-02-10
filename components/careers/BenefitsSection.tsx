import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Heart, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Coffee size={32} />,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
    gradient: "from-blue-400 to-indigo-600"
  },
  {
    icon: <Users size={32} />,
    title: "Great Team",
    description: "Work with talented and passionate individuals",
    gradient: "from-purple-400 to-pink-600"
  },
  {
    icon: <Heart size={32} />,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision coverage",
    gradient: "from-yellow-400 to-orange-600"
  },
  {
    icon: <Zap size={32} />,
    title: "Growth Opportunities",
    description: "Continuous learning and career development",
    gradient: "from-green-400 to-emerald-600"
  }
];

const BenefitsSection = () => {
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
      className="py-16 px-4 bg-white/[0.02] backdrop-blur-sm"
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-block px-6 py-2 bg-yellow-500/10 rounded-full backdrop-blur-sm border border-yellow-500/20 mb-6">
            <span className="text-yellow-300 font-medium">Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Work With Us
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We offer more than just a job - we offer a career with growth opportunities and amazing benefits
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative bg-white/[0.03] backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:border-white/20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} bg-opacity-10 mb-6`}>
                  <div className="p-2 bg-black/30 rounded-lg text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;