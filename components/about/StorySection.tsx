"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Zap } from 'lucide-react';

export default function StorySection() {
  const stats = [
    { 
      icon: Trophy,
      number: "100+",
      label: "Projects Delivered",
      gradient: "from-blue-400 to-indigo-600",
      delay: 0.2
    },
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients",
      gradient: "from-violet-400 to-purple-600",
      delay: 0.3
    },
    {
      icon: Clock,
      number: "15+",
      label: "Years Experience",
      gradient: "from-yellow-400 to-orange-600",
      delay: 0.4
    },
    {
      icon: Zap,
      number: "24/7",
      label: "Support Available",
      gradient: "from-emerald-400 to-teal-600",
      delay: 0.5
    }
  ];

  return (
    <motion.section 
      className="py-8 md:py-16  relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Building Tomorrow's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {" "}Digital Solutions{" "}
              </span>
              Today
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                Founded with a vision to revolutionize digital transformation, GDFUTURE has 
                grown into a leading force in technology innovation. Our journey began with 
                a simple mission: to make cutting-edge technology accessible to businesses 
                of all sizes.
              </p>
              <p className="leading-relaxed">
                Today, we're proud to have helped numerous organizations achieve their digital 
                ambitions, creating solutions that not only meet current needs but are built 
                to evolve with future technologies.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 p-6">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                    animate={{ opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-10`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>

                  <motion.div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${stat.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
